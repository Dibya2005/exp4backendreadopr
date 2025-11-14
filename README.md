Experiment 4 – Display Dynamic Content

This experiment displays data stored in a MySQL database using Node.js and EJS.

Requirements

Node.js + Express

MySQL database

EJS template engine

Steps
1. Create Database & Table
CREATE DATABASE exp4db;
USE exp4db;

CREATE TABLE users(
  id INT AUTO_INCREMENT PRIMARY KEY,
  username VARCHAR(100)
);

CREATE TABLE posts(
  id INT AUTO_INCREMENT PRIMARY KEY,
  title VARCHAR(255),
  content TEXT,
  author_id INT,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY (author_id) REFERENCES users(id)
);

2. Insert Sample Data
INSERT INTO users(username) VALUES ('Admin'), ('John');

INSERT INTO posts(title, content, author_id)
VALUES ('First Post', 'This is a test post', 1);

3. Install Packages
npm install express mysql2 ejs

4. Run the Server
node server.js


Then open in browser:

http://localhost:3000/posts

What the App Does

Connects to MySQL

Fetches all posts

Joins user table to show author name

Displays everything using EJS
