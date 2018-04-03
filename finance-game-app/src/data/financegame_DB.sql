


DROP DATABASE IF EXISTS financegame-db;
#for testing ^^
CREATE DATABASE financegame-db;
#----------------------------------------
DROP TABLE IF EXISTS questions;
#for testing ^^
CREATE TABLE questions (
	level INTEGER,
	question text,
	answers TEXT[],
	correct TEXT,
	id SERIAL,
	PRIMARY KEY(id)
	);
#----------------------------------------

DROP TABLE IF EXISTS users;
#for testing ^^
CREATE TABLE users (
	email TEXT NOT NULL UNIQUE,
	last_login DATE,
	);
#----------------------------------------
DROP TABLE IF EXISTS xp;
#for testing ^^
CREATE TABLE xp (
	xp INTEGER,
	t_stamp DATE,
	email TEXT NOT NULL UNIQUE,
	FOREIGN KEY(email) references users(email),
	PRIMARY KEY(email, t_stamp)
);
#----------------------------------------
DROP TABLE IF EXISTS inventory;
CREATE TABLE inventory (
	item_name TEXT,
	quantity INTEGER,
);
	




