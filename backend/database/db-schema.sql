-- CREATE DATABASE react_reddit;

CREATE TABLE posts
(
    post_id SERIAL PRIMARY KEY,
    title VARCHAR(100),
    body TEXT,
    post_image VARCHAR(100),
    created_by VARCHAR(20),
    created_date TIMESTAMP,
    updated_date TIMESTAMP
);
CREATE TABLE comments(
    comment_id SERIAL PRIMARY KEY,
    post_id INT,
    parent_comment_id INT,
    content TEXT,
    created_by VARCHAR(20),
    created_date TIMESTAMP,
    updated_date TIMESTAMP
);
CREATE TABLE votes(
    post_id INT,
    user_id INT,
    upvote BOOLEAN,
    downvote BOOLEAN,
    FOREIGN KEY (post_id) REFERENCES posts (post_id),
    PRIMARY KEY (post_id, user_id)
);

CREATE TABLE users(
    user_id SERIAL,
    user_name VARCHAR(30),
    user_mail VARCHAR(100)
);