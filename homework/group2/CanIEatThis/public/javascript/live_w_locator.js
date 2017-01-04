function runQuagga() {

        var resultCollector = Quagga.ResultCollector.create({
            capture: true,
            capacity: 20,
            blacklist: [{ code: "2167361334", format: "i2of5" }],
            filter: function (codeResult) {
                // only store results which match this constraint
                // e.g.: codeResult
                return true;
            }
        });
        var App = {
            init: function () {
                var self = this;

                Quagga.init(this.state, function (err) {
                    if (err) {
                        return self.handleError(err);
                    }
                    Quagga.registerResultCollector(resultCollector);
                    Quagga.start();
                });
            },
            handleError: function (err) {
                console.log(err);
            },
            _accessByPath: function (obj, path, val) {
                var parts = path.split('.'),
                    depth = parts.length,
                    setter = (typeof val !== "undefined") ? true : false;

                return parts.reduce(function (o, key, i) {
                    if (setter && (i + 1) === depth) {
                        o[key] = val;
                    }
                    return key in o ? o[key] : {};
                }, obj);
            },
            _convertNameToState: function (name) {
                return name.replace("_", ".").split("-").reduce(function (result, value) {
                    return result + value.charAt(0).toUpperCase() + value.substring(1);
                });
            },
            setState: function (path, value) {
                var self = this;

                if (typeof self._accessByPath(self.inputMapper, path) === "function") {
                    value = self._accessByPath(self.inputMapper, path)(value);
                }

                self._accessByPath(self.state, path, value);

                console.log(JSON.stringify(self.state));
                Quagga.stop();
                App.init();
            },
            inputMapper: {
                inputStream: {
                    constraints: function (value) {
                        var values = value.split('x');
                        return {
                            width: parseInt(values[0]),
                            height: parseInt(values[1])
                        }
                    }
                },
                numOfWorkers: function (value) {
                    return parseInt(value);
                },
                decoder: {
                    readers: function (value) {
                        if (value === 'ean_extended') {
                            return [{
                                format: "ean_reader",
                                config: {
                                    supplements: [
                                        'ean_5_reader', 'ean_2_reader'
                                    ]
                                }
                            }];
                        }
                        return [{
                            format: value + "_reader",
                            config: {}
                        }];
                    }
                }
            },
            state: {
                inputStream: {
                    type: "LiveStream",
                    constraints: {
                        width: 640,
                        height: 480,
                        facingMode: "environment"
                    }
                },
                locator: {
                    patchSize: "large",
                    halfSample: false
                },
                numOfWorkers: 0,
                decoder: {
                    readers: [{
                        format: "upc_reader",
                        config: {}
                    }]
                },
                locate: true
            },
            lastResult: null
        };

        App.init();

        Quagga.onProcessed(function (result) {
            var drawingCtx = Quagga.canvas.ctx.overlay,
                drawingCanvas = Quagga.canvas.dom.overlay;

            if (result) {
                if (result.boxes) {
                    drawingCtx.clearRect(0, 0, parseInt(drawingCanvas.getAttribute("width")), parseInt(drawingCanvas.getAttribute("height")));
                    result.boxes.filter(function (box) {
                        return box !== result.box;
                    }).forEach(function (box) {
                        Quagga.ImageDebug.drawPath(box, { x: 0, y: 1 }, drawingCtx, { color: "green", lineWidth: 2 });
                    });
                }

                if (result.box) {
                    Quagga.ImageDebug.drawPath(result.box, { x: 0, y: 1 }, drawingCtx, { color: "#00F", lineWidth: 2 });
                }

                if (result.codeResult && result.codeResult.code) {
                    Quagga.ImageDebug.drawPath(result.line, { x: 'x', y: 'y' }, drawingCtx, { color: 'red', lineWidth: 3 });
                }
            }
        });

        Quagga.onDetected(function (result) {
            var code = result.codeResult.code;

            if (App.lastResult !== code) {
                App.lastResult = code;

                $('#searchTextbox').val('');
                $('#searchTextbox').val(code);
                Quagga.stop();
            }
        });
}
