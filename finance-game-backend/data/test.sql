DROP database if EXISTS gregtest; 
DROP ROLE if EXISTS testkey; 
CREATE database gregtest; 
CREATE ROLE testkey WITH LOGIN PASSWORD '33Niuh7$32gh78';

\c gregtest;

CREATE TABLE faction_types
(
	id SERIAL, 
	factionname VARCHAR(20),
	PRIMARY KEY (factionname)
); 

CREATE TABLE world_types
(
	id SERIAL, 
	worldname VARCHAR(20),
	worldsequence integer, 
	PRIMARY KEY (worldsequence)
); 

CREATE TABLE faction_data_test
(
	id SERIAL,
	factionname VARCHAR(20), 
	alltime integer, 
	recent integer, 
	level integer,
	PRIMARY KEY(id),
	FOREIGN KEY (factionname) REFERENCES faction_types(factionname)
);

CREATE TABLE user_data_test
(
	id SERIAL,
	username VARCHAR(50),
	alltime integer, 
	recent integer, 
	level integer, 
	lastupdate timestamptz NOT NULL DEFAULT now(),
	PRIMARY KEY(username)
);

CREATE TABLE worlds_unlocked
(
	id SERIAL, 
	username VARCHAR(50), 
	worldsequence integer, 
	FOREIGN KEY (username) REFERENCES user_data_test(username),
	FOREIGN KEY (worldsequence) REFERENCES world_types(worldsequence),
	PRIMARY KEY (username, worldsequence)
);

CREATE TABLE user_progress_test
(
	id SERIAL,
	username VARCHAR(50) NOT NULL,
	total integer, 
	more integer, 
	red integer, 
	green integer, 
	PRIMARY KEY (username),
	FOREIGN KEY (username) REFERENCES user_data_test(username)
);

CREATE TABLE faction_plays
(
	id SERIAL,
	factionname VARCHAR(20), 
	numplays integer, 
	PRIMARY KEY (factionname),
	FOREIGN KEY (factionname) REFERENCES faction_types(factionname)
);

SET TIME ZONE 'America/New_York'; 

INSERT INTO faction_types (factionname) VALUES
	('Jedi Order'), 
	('Rebel Alliance'), 
	('Galactic Empire'), 
	('Rogue');

INSERT INTO world_types (worldname, worldsequence) VALUES
	('Endor', 0), 
	('Voss', 1), 
	('Hoth', 2); 

INSERT INTO faction_data_test (factionname, alltime, recent, level) VALUES
	('Jedi Order', 20000, 2000, 1), 
	('Rebel Alliance', 30000, 3000, 2), 
	('Galactic Empire', 40000, 4000, 3), 
	('Rogue', 50000, 5000, 4);

INSERT INTO faction_plays (factionname, numplays) VALUES
	('Jedi Order', 202), 
	('Rebel Alliance', 404), 
	('Galactic Empire', 101), 
	('Rogue', 303); 

INSERT INTO user_data_test (username, alltime, recent, level, lastupdate) VALUES
	('wphilli2@mail.umw.edu', 98765, 12345, 10, '2018-03-30 12:09:30-04'), 
	('was.belle@mail.umw.edu', 252525, 5252, 11, '2018-03-29 12:10:25-04'), 
	('wash.reagan@mail.umw.edu', 12345, 54321, 12, '2018-02-10 15:15:30-04'), 
	('bat.man@mail.umw.edu', 383838, 22222, 13, '2018-03-10 09:09:09-04'), 
	('spider.kid@mail.umw.edu', 45454, 1899, 2, '2018-03-05 10:10:30-04'), 
	('kool.aid.man@mail.umw.edu', 7800, 6000, 3, '2018-03-07 11:09:30-04'), 
	('jackson.five@mail.umw.edu', 7851, 6001, 3, '2018-01-01 16:00:01-04'), 
	('dale.earnhardt@mail.umw.edu', 5500, 12, 1, '2018-01-30 05:30:02-04'), 
	('tyrone.biggoms@mail.umw.edu', 23000, 11000, 10, '2018-03-30 12:09:31-04'), 
	('jay.culter@mail.umw.edu', 23001, 11001, 10, '2018-03-30 12:10:31-04'), 
	('generic.user@mail.umw.edu', 10000, 10000, 5, '2018-03-01 12:00:00-04'),
	('kris.branch@mail.umw.edu', 9999, 9998, 5, '2018-03-02 12:02:00-04'),
	('joe.camel@mail.umw.edu', 9998, 9997, 5, '2018-03-11 12:45:30-04'), 
	('poison.ivy@mail.umw.edu', 9997, 9996, 5, '2018-03-16 12:46:31-04'), 
	('dirk.diggler@mail.umw.edu', 9996, 9995, 5, '2018-03-20 13:01:00-04'), 
	('jim.jones@mail.umw.edu', 9995, 9994, 5, '2018-03-19 13:01:00-04'), 
	('corn.holio@mail.umw.edu', 9994, 9993, 4, '2018-01-15 23:00:19-04'), 
	('boring.user@mail.umw.edu', 12899, 928, 8, '2018-03-29 23:10:29-04'), 
	('sheldon.cooper@mail.umw.edu', 7865, 6578, 8, '2018-03-28 22:49:30-04'), 
	('samwise.gamgee@mail.umw.edu', 567, 72, 2, '2018-01-02 21:27:00-04'), 
	('optimus.prime@mail.umw.edu', 5600, 523, 6, '2018-02-10 20:00:00-04'), 
	('carrie.fisher@mail.umw.edu', 8745, 0, 4, '2017-10-01 01:00:00-04'), 
	('cosmo.kramer@mail.umw.edu', 23, 5, 1, '2018-02-15 13:01:01-04'), 
	('dwight.schrute@mail.umw.edu', 22908, 2987, 12, '2018-03-30 14:15:16-04'), 
	('hamburgler.mcburgler@mail.umw.edu', 2786, 502, 3, '2018-03-28 15:00:01-04'), 
	('snoop.doggity.dog@mail.umw.edu', 45670, 1278, 10, '2018-02-28 17:23:34-04'),
	('bon.jovi@mail.umw.edu', 3009, 309, 2, '2018-03-30 17:21:00-04'), 
	('charlie.sheen@mail.umw.edu', 3010, 310, 2, '2018-03-30 16:22:00-04'), 
	('your.mom@mail.umw.edu', 1, 1, 1, '2018-03-30 10:10:00-04'),
	('admin@example.com', 1, 2, 3, '2018-03-30 10:10:00-04'),
	('harley.quinn@mail.umw.edu', 10001, 10001, 5, '2018-03-02 12:01:30-04'),
	('kmorgan6@mail.umw.edu', 5678, 7890, 3, '2018-04-03 12:01:30-04'); 

INSERT INTO user_progress_test (username, total, more, red, green) VALUES
	('wphilli2@mail.umw.edu', 88, 50, 25, 90),
	('admin@example.com', 63, 34, 10, 87),
	('kmorgan6@mail.umw.edu', 50, 95, 20, 45);

INSERT INTO worlds_unlocked (username, worldsequence) VALUES
	('wphilli2@mail.umw.edu', 0), 
	('admin@example.com', 0), 
	('kmorgan6@mail.umw.edu', 0),
	('kmorgan6@mail.umw.edu', 1);

GRANT SELECT, DELETE, UPDATE, INSERT ON faction_data_test TO masterkey, testkey;
GRANT SELECT, DELETE, UPDATE, INSERT ON user_data_test TO masterkey, testkey;
GRANT SELECT, DELETE, UPDATE, INSERT ON user_progress_test TO masterkey, testkey;
GRANT SELECT, DELETE, UPDATE, INSERT ON worlds_unlocked TO masterkey, testkey; 
GRANT SELECT ON faction_types, world_types TO masterkey, testkey; 
GRANT SELECT, UPDATE ON faction_plays TO masterkey, testkey; 
GRANT USAGE, SELECT ON ALL SEQUENCES IN SCHEMA public TO masterkey, testkey;