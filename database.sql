CREATE DATABASE hospital_db;
USE hospital_db;

CREATE TABLE patients (
    id INT PRIMARY KEY,
    name VARCHAR(100),
    age INT,
    gender VARCHAR(10),
    date_added TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);