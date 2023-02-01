CREATE DATABASE react_reddit;

CREATE TABLE react_reddit.posts
(
    ID SERIAL PRIMARY KEY,
    title VARCHAR(100),
    body TEXT,
    created_by VARCHAR(20),
    created_date TIMESTAMP,
    updated_date TIMESTAMP
)