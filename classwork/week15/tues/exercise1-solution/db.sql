CREATE DATABASE  `rcb_authentication_db`;
USE `rcb_authentication_db`;

CREATE TABLE `users` (
	`id` Int( 11 ) AUTO_INCREMENT NOT NULL,
	`email` VARCHAR( 255 ) NOT NULL,
	`password` VARCHAR( 255 ) NOT NULL,
	PRIMARY KEY ( `id` ) );
