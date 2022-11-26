import express from "express";

const app = express();
const port = 4000;

const posts = {};

app.get('/posts', (req, res) => {

});

app.post('/posts', (req, res) => {

});

app.listen(port, () => {
    console.log(`🚀 Server runing on http://localhost:${port}`);
});