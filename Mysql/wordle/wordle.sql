DROP DATABASE IF EXISTS wordledb;
CREATE DATABASE wordledb;
SHOW DATABASES;
USE wordledb;

-- wordle TABLE
DROP TABLE IF EXISTS wordle;
CREATE TABLE wordle(
    word CHAR(5),
    c1 CHAR,
    c2 CHAR,
    c3 CHAR,
    c4 CHAR,
    c5 CHAR,
    ca INTEGER,
    cb INTEGER,
    cc INTEGER,
    cd INTEGER,
    ce INTEGER,
    cf INTEGER,
    cg INTEGER,
    ch INTEGER,
    ci INTEGER,
    cj INTEGER,
    ck INTEGER,
    cl INTEGER,
    cm INTEGER,
    cn INTEGER,
    co INTEGER,
    cp INTEGER,
    cq INTEGER,
    cr INTEGER,
    cs INTEGER,
    ct INTEGER,
    cu INTEGER,
    cv INTEGER,
    cw INTEGER,
    cx INTEGER,
    cy INTEGER,
    cz INTEGER,
    PRIMARY KEY (word)
);

set global local_infile = 1;
LOAD DATA LOCAL INFILE '/Users/harshgarg/Desktop/VS\ Code/test/mysql/data/wordledb.txt' INTO TABLE wordle;

DROP TABLE IF EXISTS mywords;
CREATE TABLE mywords
SELECT *
FROM wordle
WHERE
    ca = 0 AND
    cr = 0 AND
    co > 0 AND
    cs = 0 AND
    ce = 0 AND
    c3 <> 'o'
    ;

DROP TABLE IF EXISTS freq;
CREATE TABLE freq(
    ch CHAR,
    total INTEGER,
    PRIMARY KEY (ch)
);
INSERT INTO freq SELECT 'a', SUM(ca) FROM mywords;
INSERT INTO freq SELECT 'b', SUM(cb) FROM mywords;
INSERT INTO freq SELECT 'c', SUM(cc) FROM mywords;
INSERT INTO freq SELECT 'd', SUM(cd) FROM mywords;
INSERT INTO freq SELECT 'e', SUM(ce) FROM mywords;
INSERT INTO freq SELECT 'f', SUM(cf) FROM mywords;
INSERT INTO freq SELECT 'g', SUM(cg) FROM mywords;
INSERT INTO freq SELECT 'h', SUM(ch) FROM mywords;
INSERT INTO freq SELECT 'i', SUM(ci) FROM mywords;
INSERT INTO freq SELECT 'j', SUM(cj) FROM mywords;
INSERT INTO freq SELECT 'k', SUM(ck) FROM mywords;
INSERT INTO freq SELECT 'l', SUM(cl) FROM mywords;
INSERT INTO freq SELECT 'm', SUM(cm) FROM mywords;
INSERT INTO freq SELECT 'n', SUM(cn) FROM mywords;
INSERT INTO freq SELECT 'o', SUM(co) FROM mywords;
INSERT INTO freq SELECT 'p', SUM(cp) FROM mywords;
INSERT INTO freq SELECT 'q', SUM(cq) FROM mywords;
INSERT INTO freq SELECT 'r', SUM(cr) FROM mywords;
INSERT INTO freq SELECT 's', SUM(cs) FROM mywords;
INSERT INTO freq SELECT 't', SUM(ct) FROM mywords;
INSERT INTO freq SELECT 'u', SUM(cu) FROM mywords;
INSERT INTO freq SELECT 'v', SUM(cv) FROM mywords;
INSERT INTO freq SELECT 'w', SUM(cw) FROM mywords;
INSERT INTO freq SELECT 'x', SUM(cx) FROM mywords;
INSERT INTO freq SELECT 'y', SUM(cy) FROM mywords;
INSERT INTO freq SELECT 'z', SUM(cz) FROM mywords;

SELECT * FROM freq ORDER BY total DESC;

SELECT w.word, SUM(f.total) AS `weight`
FROM mywords w, freq f
WHERE w.c1 = f.ch OR w.c2 = f.ch OR w.c3 = f.ch OR w.c4 = f.ch OR w.c5 = f.ch
GROUP BY w.word
ORDER BY SUM(f.total) DESC
LIMIT 5;
