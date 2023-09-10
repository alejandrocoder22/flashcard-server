CREATE TABLE users (
    userId SERIAL unique,
    password VARCHAR(100),
    email VARCHAR(45) unique,
    created_on TIMESTAMP DEFAULT now()
);