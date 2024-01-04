CREATE DATABASE awi;

\c awi;

CREATE TABLE app_user
(
    id       SERIAL PRIMARY KEY,
    email    VARCHAR(100),
    password VARCHAR(100)
);

INSERT INTO app_user (email, password)
VALUES ('admin', 'admin'),
       ('utilisateur2@example.com', 'mot_de_passe2'),
       ('utilisateur3@example.com', 'mot_de_passe3');
