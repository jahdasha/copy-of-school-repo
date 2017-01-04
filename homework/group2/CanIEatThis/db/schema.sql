CREATE DATABASE eat_this_db;
USE eat_this_db;

CREATE TABLE users
(
	id int NOT NULL AUTO_INCREMENT,
	username varchar(255) NOT NULL,
	email varchar(255) NOT NULL,
	password_hash varchar(255) NOT NULL,
	PRIMARY KEY (id)
);

CREATE TABLE searches
(
user_search varchar(255),
userID int(11),
upcCode int(11),
FOREIGN KEY fk_userID(userID)
REFERENCES users(id)
);



