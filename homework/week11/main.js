// Author: Jahdasha Flagg (Homework 11)

    var prompt = require("prompt");
    var Bus = require("./bus.js")
    var Student = require("./student.js");

    var main = new Bus("Sam The Bus Driver", "Candypaint Red", .75);
    var schema = {
        properties: {
            name: {
            message: "Please enter your first name",
            type: "string",
            required: true
            },
            gender: {
            message: "Please enter your gender. Either male, female, or na",
            pattern: /(male|female|na)/,
            required: true
            },
            grade: {
            message: "What grade are you in? Ex: k-12",
            pattern: /(^[1][0-2]$|^[1-9]$|^(k)$)/,
            required: true
            },
            GPA: {
            message: "Please enter GPA like this: 3.55",
            pattern: /^[0-4]\.\d\d$/,
            required: true
            },
            detentions: {
            message: "How many detentions have you had? Ex: 0-99",
            pattern: /^[0-9][0-9]$|^[0-9]$/,
            required: true
            },
            sleepingInClass: {
            message: "How many days have you slept through a class? Ex: 0-99",
            pattern: /^[0-9][0-9]$|^[0-9]$/,
            required: true
            },
            catchPhrase: {
            message: "What's your favorite saying? (Your catch phrase)",
            type: "string",
            required: true
            },
            pickup: {
            description: "If this is your stop, type your name and you will be removed from the bus as you ars exiting. If this is't your stop simply press enter",
            type: "string",
            required: false
            }
        }
    };

    var getNewStudent = function(){
        prompt.start();
        if(main.studentsOnTheBus.length == 0){
            console.log("Hello, you are the first student!");
        }

        if(main.studentsOnTheBus.length>0){
            console.log("Students currently on the bus are:");
            for(j=0;j<main.studentsOnTheBus.length;j++){
                var k = 1;
                console.log(k+". "+main.studentsOnTheBus[j].name);
                k++;
            }
        }
        prompt.get(schema, function (err, result) {
            if (err){
                console.log(err)
            }
            // console.log(schema);
            main.studentEntersBus(result.name, result.gender, result.grade, result.GPA, result.detentions, result.sleepingInClass, result.catchPhrase);
            console.log("You have: "+main.studentsOnTheBus.length+" students on the bus. The bus is full after 25 students.");
            console.log("Catch these catch phrases from the students:");
            for (i=0;i<main.studentsOnTheBus.length;i++){
                var z = 1;
                console.log(z+". "+main.studentsOnTheBus[i].name+"'s catch phrase is: "+main.studentsOnTheBus[i].catchPhrase);
                z++;
            }
            if(main.studentsOnTheBus.length>1){
                if (result.pickup){
                    console.log("Students before pickup: ");
                    for(j=0;j<main.studentsOnTheBus.length;j++){
                        console.log(main.studentsOnTheBus[j].name);
                    }
                    main.studentPickedUp(result.pickup)
                }
            }
            if(main.studentsOnTheBus.length == 25){
                console.log("Bus full! Wait for the next bus.");
            }
            while(main.studentsOnTheBus.length<25){
                getNewStudent();
                break;
            }
        });
    }

    getNewStudent();
