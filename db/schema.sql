DROP DATABASE IF EXISTS emp_trackerDB;
CREATE database emp_trackerDB;

USE emp_trackerDB;

CREATE TABLE department (
    id INT NOT NULL Auto_Increment,
    name VARCHAR(30) not null,
    Primary Key (id)
);

CREATE TABLE role (
    id INT NOT NULL Auto_Increment,
    title VARCHAR(30) not null,
    salary Decimal(8,2) not null,
    department_id INT,
    Primary KEY (id),
    Foreign KEy (department_id) references department(id)
);

CREATE TABLE employee (
    id INT NOT NULL Auto_Increment,
    first_name VARCHAR(30) not null,
    last_name VARCHAR(30) not null,
    role_id int,
    manager_id int,
    PRIMARY KEY (id),
    FOREIGN KEY (role_id) REFERENCES role(id),
    FOREIGN KEY (manager_id) REFERENCE employee(id)
);