Make a student constructor function.

1. In a new folder
2. auto create a package.json file with ```npm init```
3. use ```npm install prompt --save``` to install prompt
4. make a new node file called main.js
5. require prompt in it
6. make a new node file called student.js
7. Inside student.js, make a constructor function called Student that creates a student object with properties of name, gender, grade, GPA, detentions, sleepingInClass, catchPhrase, and a function called canStudentHaveFun that checks if they have less than 10 detentions and above a 2 GPA. If they do then console.log out to the terminal that the student can have fun.
8. Prompt the user for a student's information, make a new Student Object with it, then invoke the canStudentHaveFun function.
9. export the student constructor at the bottom of the file
10. make a new node file called bus.js 
11. inside the bus.js file, make a bus constructor function, that has the following properties:

studentsOnTheBus (array)

driverName (string)

color (string)

gas (integer)

studentEntersBus (function that adds a student to the studentsOnTheBus property)

busChatter (function that outputs the students' catch phrases if they can have fun one by one)

12. at the bottom of bus.js, export the constructor function

13. require the appropriate file(s) in the appropriate file(s).

14. in main.js make the bus object with the constructor function, and then add 20 students to it. Then successfully all the busChatter property of the bus object.

BONUS:

make a property inside of the bus constructor function to remove a particular student by their name.