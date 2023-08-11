CREATE DATABASE IF NOT EXISTS myfirstdb;
USE myfirstdb;
CREATE TABLE IF NOT EXISTS user_table(
    id int NOT NULL AUTO_INCREMENT PRIMARY KEY,
    username varchar(255) NOT NULL,
    password varchar(255) NOT NULL
);
CREATE USER IF NOT EXISTS 'myspringboot'@'spring-app' IDENTIFIED BY '3219';
GRANT ALL PRIVILEGES ON myfirstdb.* TO 'myspringboot'@'%';
FLUSH PRIVILEGES;