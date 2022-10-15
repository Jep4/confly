SET sql_mode = '';
use test;
DROP TABLE board;
CREATE TABLE board(
idx int(11) NOT NULL AUTO_INCREMENT,
name varchar(50) NOT NULL,
title varchar(5) NOT NULL,
content mediumtext NOT NULL,
regdate DATETIME NOT NULL,
modidate DATETIME NOT NULL,
passwd varchar(50) NOT NULL,
hit int(11) NOT NULL DEFAULT '0',
PRIMARY KEY(idx)
);
