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
    user_id INT,
    FOREIGN KEY(user_id) 
	  REFERENCES users(user_id)
);