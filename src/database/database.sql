DROP TABLE IF EXISTS users;
DROP TABLE IF EXISTS cards;
DROP TABLE IF EXISTS decks;

CREATE TABLE users (
    user_id SERIAL PRIMARY KEY,
    username VARCHAR(50) NOT NULL unique,
    password VARCHAR(250) NOT NULL,
    email VARCHAR(125) NOT NULL unique,
    created_on TIMESTAMP NOT NULL DEFAULT now()
);

CREATE TABLE decks (
    deck_id SERIAL PRIMARY KEY,
    topic VARCHAR(50) NOT NULL,
    deck_name VARCHAR(125),
    is_public BOOLEAN DEFAULT false,
    user_id INT,
    created_on TIMESTAMP NOT NULL DEFAULT now(),
    FOREIGN KEY(user_id) REFERENCES USERS(user_id)
);

CREATE TABLE cards (
    card_id SERIAL PRIMARY KEY,
    question VARCHAR(250) NOT NULL,
    answer VARCHAR(500) NOT NULL,
    deck_id INT,
    created_at TIMESTAMP NOT NULL DEFAULT now(),
    user_id INT,
    FOREIGN KEY(user_id) REFERENCES USERS(user_id),
    FOREIGN KEY(deck_id) REFERENCES decks(deck_id) ON DELETE CASCADE
);