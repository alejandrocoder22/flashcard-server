CREATE TABLE user (
    userd_id INT AUTO_INCREMENT,
    username VARCHAR(15) NOT NULL unique,
    password VARCHAR(100) NOT NULL,
    email VARCHAR(45) NOT NULL unique,
    created_on TIMESTAMP NOT NULL DEFAULT now()
    PRIMARY KEY(user_id)
);

CREATE TABLE card (
    card_id INT AUTO_INCREMENT,
    user_id INT,
    FOREIGN KEY(user_id) REFERENCES user(user_id),
    PRIMARY KEY(card_id)
);