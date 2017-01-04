// Author: Jahdasha Flagg (Homework 11)

  var Student = require("./student.js");

  var Bus = function (driverName,color,gas){

    this.studentsOnTheBus = [];
    this.driverName = driverName;
    this.color = color;
    this.gas = gas;
    this.tattleOn = [];


    this.studentEntersBus = function (n, g, gr, GPA, d, s, c) {
      this.studentsOnTheBus.push(new Student(n, g, gr, GPA, d, s, c));
    }

    this.studentPickedUp = function(y){
      console.log("This is your stop: "+y);
      for(i=0;i<this.studentsOnTheBus.length;i++){
        if(this.studentsOnTheBus[i].name == y){
          console.log("This student has been removed: "+this.studentsOnTheBus[i].name);
          this.studentsOnTheBus.splice(i,1);
        }
      }
    }
  }
  module.exports = Bus;

