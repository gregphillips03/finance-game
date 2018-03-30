DROP database if EXISTS gregtest; 
DROP ROLE if EXISTS masterkey; 
CREATE database gregtest; 
CREATE ROLE masterkey WITH LOGIN PASSWORD 'chickendog123';

\c gregtest;

CREATE TABLE faction_data_test
(
	id SERIAL,
	factionname VARCHAR(20), 
	alltime integer, 
	recent integer, 
	level integer,
	PRIMARY KEY(id)
);

INSERT INTO faction_data_test (factionname, alltime, recent, level) VALUES
	('Jedi Order', 20000, 2000, 1), 
	('Rebel Alliance', 30000, 3000, 2), 
	('Galactic Empire', 40000, 4000, 3), 
	('Rogue', 50000, 5000, 4); 

GRANT SELECT, DELETE, UPDATE, INSERT ON faction_data_test TO masterkey;
GRANT USAGE, SELECT ON ALL SEQUENCES IN SCHEMA public TO masterkey;