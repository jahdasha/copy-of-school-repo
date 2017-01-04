
CREATE DATABASE sandwiches_db;
USE sandwiches_db;

CREATE TABLE sandwiches
(
	id int AUTO_INCREMENT NOT NULL,
	sandwich_name varchar(255) NOT NULL,
	devoured BOOLEAN DEFAULT false,
	date TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
	PRIMARY KEY (id)
);