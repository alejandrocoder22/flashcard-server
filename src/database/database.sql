CREATE TABLE users (
    userId SERIAL,
    password VARCHAR(100),
    email VARCHAR(45),
    created_on TIMESTAMP DEFAULT now()
);