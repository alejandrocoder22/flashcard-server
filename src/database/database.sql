DROP TABLE IF EXISTS cards;
DROP TABLE IF EXISTS users;

CREATE TABLE users (
    user_id SERIAL PRIMARY KEY,
    username VARCHAR(15) NOT NULL unique,
    password VARCHAR(100) NOT NULL,
    email VARCHAR(45) NOT NULL unique,
    created_on TIMESTAMP NOT NULL DEFAULT now()
);

CREATE TABLE cards (
    card_id SERIAL PRIMARY KEY,
    topic VARCHAR(50) NOT NULL,
    question VARCHAR(250) NOT NULL,
    answer VARCHAR(500) NOT NULL,
    user_id INT,
    is_public BOOLEAN DEFAULT false,
    created_at TIMESTAMP NOT NULL DEFAULT now(),
    FOREIGN KEY(user_id) REFERENCES users(user_id)
);