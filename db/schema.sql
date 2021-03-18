DROP DATABASE IF EXISTS artwork_db;

CREATE DATABASE artwork_db;

USE artwork_db;

CREATE TABLE art(
    id INTEGER(11) AUTO_INCREMENT NOT NULL, 
    name VARCHAR(100),
    smImageURl VARCHAR(300),
    lgImageURl VARCHAR(300),
    description VARCHAR(500),
    category VARCHAR(100), 
    year INTEGER(11),
    PRIMARY KEY (id)
);