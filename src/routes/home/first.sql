SET sql_mode = '';
use test;
DROP TABLE board;
CREATE TABLE users(
id varchar(50) NOT NULL,
pwd varchar(50) NOT NULL,
nickname varchar(50) NOT NULL,
PRIMARY KEY(id)
);
