CREATE TABLE user (
    userId SERIAl,
    username VARCHAR(15) NOT NULL unique,
    password VARCHAR(100) NOT NULL,
    email VARCHAR(45) NOT NULL unique,
    created_on TIMESTAMP NOT NULL DEFAULT now()
);

CREATE TABLE card (
    cardId SERIAL,
)