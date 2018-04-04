


DROP DATABASE IF EXISTS financegame-db;

CREATE DATABASE financegame-db;
#----------------------------------------


CREATE TABLE questions (
	level INTEGER,
	question text,
	answers TEXT[],
	correct TEXT,
	id SERIAL,
	PRIMARY KEY(id)
	);
#----------------------------------------



CREATE TABLE users (
	email TEXT NOT NULL UNIQUE,
	last_login DATE,
	);
#----------------------------------------


CREATE TABLE xp (
	xp INTEGER,
	t_stamp DATE,
	email TEXT NOT NULL UNIQUE,
	FOREIGN KEY(email) references users(email),
	PRIMARY KEY(email, t_stamp)
);
#----------------------------------------

CREATE TABLE inventory (
	item_name TEXT,
	quantity INTEGER,
);
	




