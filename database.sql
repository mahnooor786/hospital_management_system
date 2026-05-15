CREATE DATABASE hospital_management;

USE hospital_management;

-- PATIENT TABLE

CREATE TABLE patients (

    patient_id INT PRIMARY KEY AUTO_INCREMENT,

    patient_name VARCHAR(100),

    age INT,

    gender VARCHAR(20),

    disease VARCHAR(100)

);

-- DOCTOR TABLE

CREATE TABLE doctors (

    doctor_id INT PRIMARY KEY AUTO_INCREMENT,

    doctor_name VARCHAR(100),

    specialization VARCHAR(100)

);

-- APPOINTMENT TABLE

CREATE TABLE appointments (

    appointment_id INT PRIMARY KEY AUTO_INCREMENT,

    patient_name VARCHAR(100),

    doctor_name VARCHAR(100),

    appointment_date DATE

);

-- INSERT SAMPLE DOCTORS

INSERT INTO doctors
(doctor_name, specialization)

VALUES

('Dr. Ali', 'Cardiologist'),

('Dr. Sara', 'Dentist'),

('Dr. Ahmed', 'General Physician');