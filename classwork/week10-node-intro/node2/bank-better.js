var fs = require('fs');

totals = 0;
action = process.argv[2];
amount = process.argv[3];

switch(action) {
    case 'total': total(); break;
    case 'deposit': deposit(); break;
    case 'withdrawl': withdrawl(); break;
};

function total() {
    fs.readFile('bank.txt', 'utf8', function(error, data) {
        if (!error) {
            var history = data.split(',');

            for (var i = 0; i < history.length; i++) {
                totals += parseFloat(history[i]);
            };
            console.log(totals.toFixed(2));
        } else {
            console.log(error);
        }
    })
};

function deposit() {
    fs.appendFile('bank.txt', ',' + amount, 'utf8', function(error) {
        if (error) {
            console.log(error)
        }
    })
};

function withdrawl() {
    fs.appendFile('bank.txt', ',' + -amount, 'utf8', function(error) {
        if (error) {
            console.log(error)
        }
    })
};