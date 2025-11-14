const express = require("express");
const path = require("path");
const db = require("./db");

const app = express();
const PORT = 3000;

// Set EJS as template engine
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

// Serve static files
app.use(express.static(path.join(__dirname, "public")));

// Route to display posts
app.get("/posts", (req, res) => {
    const sql = `
        SELECT posts.*, users.username 
        FROM posts 
        JOIN users ON posts.author_id = users.id
        ORDER BY posts.created_at DESC
    `;

    db.query(sql, (err, results) => {
        if (err) {
            console.log(err);
            return res.send("Error fetching posts");
        }

        res.render("posts", { posts: results });
    });
});

// Start server
app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});
