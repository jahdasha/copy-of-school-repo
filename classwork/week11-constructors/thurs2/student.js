var Student = function(name, gender, grade, GPA, detentions, sleepingInClass, catchPhrase){
    this.name = name;
    this.gender = gender;
    this.grade = grade;
    this.GPA = GPA;
    this.detentions = detentions;
    this.sleepingInClass = sleepingInClass;
    this.catchPhrase = catchPhrase;
    this.canStudentHaveFun = function(){
        if (this.detentions < 10 && this.GPA > 2){
            console.log("The student can have fun. Go live it up!");
        }else{
            console.log("Go study, NOW !!!");
        }
    }
}

module.exports = Student;