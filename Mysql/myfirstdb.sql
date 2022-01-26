DROP DATABASE IF EXISTS myfirstdb;
CREATE DATABASE myfirstdb;
SHOW DATABASES;
USE myfirstdb; 

-- emp TABLE
DROP TABLE IF EXISTS emp;
CREATE TABLE emp(
    id INTEGER,
    name CHAR(20),
    age INTEGER,
    primary key (id));
DESCRIBE emp;

-- add employees
INSERT INTO emp VALUES
    (1, "kaushal", 24),
    (2, "harsh", 21);

-- failed insert in emp because of repeated PRIMARY_KEY
INSERT INTO emp VALUES
    (1, "ashu", 99);
SELECT * FROM emp E;

-- team TABLE
DROP TABLE IF EXISTS team;
CREATE TABLE team(
    tid INTEGER AUTO_INCREMENT,
    tname CHAR(20),
    tsize INTEGER DEFAULT 1,
    PRIMARY KEY (tid)
);

-- add teams
INSERT INTO team VALUES
    (tid, "analytics", 5),
    (4, "sales", tsize),
    (tid, "marketing", 0);
SELECT * FROM emp;

DROP DATABASE myfirstdb;