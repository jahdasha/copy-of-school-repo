Create a seinfeld_db database
Inside the seinfeld_db create an actors table

The actors table will have an id (PRIMARY KEY AUTO_INCREMENT int), name (varchar), coolness_points (int), attitude (varchar)
Add in four actors with different coolness_points and attitudes

Create a Node App with Express, MySQL, Body Parser and Morgan

Create 3 Express routes:
Create a '/cast' route that will display all the actors and their data ordered by their id
Create a '/coolness-chart' route that will display all the actors and their data ordered by their coolness points
Create a '/attitude-chart/:att' route that will display all the actors for a specific type of attitude
