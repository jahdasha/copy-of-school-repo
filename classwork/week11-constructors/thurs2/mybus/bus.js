var Student = require("./student.js");

var Bus = function (driverName,color,gas){

this.studentsOnTheBus = [];
this.driverName = driverName;
this.color = color;
this.gas = gas;

this.studentEntersBus = function (n, g, gr, GPA, d, s, c){
  this.studentsOnTheBus.push(new Student(n, g, gr, GPA, d, s, c));
}

}


module.exports = Bus;
