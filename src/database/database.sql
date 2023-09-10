CREATE TABLE user (
    userd_id SERIAl,
    username VARCHAR(15) NOT NULL unique,
    password VARCHAR(100) NOT NULL,
    email VARCHAR(45) NOT NULL unique,
    created_on TIMESTAMP NOT NULL DEFAULT now()
    PRIMARY KEY(user_id)
);

CREATE TABLE card (
    cardId SERIAL,
)