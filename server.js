const express = require("express");
const app = express();
const posts = [
    {
        name: "Ashe",
        age:22
    },
    {
        name: "Samri",
        age:22
    }
]
app.get('/post1', (req, res) => {
    res.json(posts);
})

const PORT = 3000;
app.listen(PORT, (req, res) => {
    console.log(`server is running on port ${PORT}`)
})