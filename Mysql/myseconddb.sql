DROP DATABASE IF EXISTS myseconddb;
CREATE DATABASE myseconddb;
SHOW DATABASES;
USE myseconddb; 

-- team TABLE
DROP TABLE IF EXISTS team;
CREATE TABLE team(
    tid INTEGER AUTO_INCREMENT,
    tname CHAR(20),
    tlocation CHAR(20),
    PRIMARY KEY (tid)
);
DESCRIBE team;

-- add teams
INSERT INTO team VALUES
    (tid, "analytics", 'Gurugram'),
    (4, "sales", 'Mumbai'),
    (tid, "marketing", 'Gurugram');
SELECT * FROM team;

-- emp TABLE
DROP TABLE IF EXISTS emp;
CREATE TABLE emp(
    id INTEGER,
    name CHAR(20),
    age INTEGER,
    teamid INTEGER DEFAULT 1,
    salary INTEGER DEFAULT 80000,
    primary key (id),
    foreign key (teamid)
        references team(tid));
DESCRIBE emp;

-- add employees
INSERT INTO emp VALUES
    (1, "kaushal", 24, 1, 160000),
    (2, "harsh", 21, teamid, 90000),
    (3, 'harsh', 24, 4, 70000),
    (4, "kaushal", 24, 5, 7000),
    (5, "aashu", 99, 1, salary);

-- failed insert in emp because of repeated PRIMARY KEY
INSERT INTO emp VALUES
    (1, "ashu", 99, teamid, salary);
-- failed insert in emp because of non-existent FORIEGN KEY
INSERT INTO emp VALUES
    (6, "ashu", 99, 6, salary);
SELECT * FROM emp;

-- querying WHERE
SELECT *
FROM emp E, team T
WHERE T.tlocation = "Gurugram" AND E.teamid = T.tid;

-- querying GROUP BY == FROM
SELECT E.age, COUNT(*) AS frequency, SUM(E.salary) AS total_salary
FROM emp E, team T
WHERE T.tlocation = "Gurugram" AND E.teamid = T.tid
GROUP BY E.age;

-- querying HAVING == WHERE
SELECT E.age, COUNT(*) AS frequency, SUM(E.salary) AS total_salary
FROM emp E, team T
WHERE T.tlocation = "Gurugram" AND E.teamid = T.tid AND E.salary > 79999
GROUP BY E.age
HAVING E.age > 22;

-- nested querying
SELECT age, frequency, total_salary
FROM
   (SELECT E.age, COUNT(*) AS frequency, SUM(E.salary) AS total_salary
    FROM emp E, team T
    WHERE T.tlocation = "Gurugram" AND E.teamid = T.tid AND E.salary > 79999
    GROUP BY E.age
    HAVING E.age > 22) AS dt
WHERE dt.total_salary > 100000;
