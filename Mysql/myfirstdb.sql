DROP DATABASE IF EXISTS myfirstdb;
CREATE DATABASE myfirstdb;
SHOW DATABASES;
USE myfirstdb; 

DROP TABLE IF EXISTS emp;
CREATE TABLE emp(
    id INTEGER,
    name CHAR(20),
    age INTEGER,
    primary key (id));
DESCRIBE emp;

INSERT INTO emp VALUES
    (1, "kaushal", 24),
    (2, "harsh", 21);
SELECT * FROM emp;

-- failed insert
INSERT INTO emp VALUES
    (1, "ashu", 99);
SELECT * FROM emp;

