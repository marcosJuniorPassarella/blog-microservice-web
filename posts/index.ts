import express from "express";
import { randomBytes } from 'crypto';

const app = express();
const port = 4000;

const posts = {};

app.get('/posts', (req, res) => {
    res.send(posts)
});

app.post('/posts', (req, res) => {
    const id = randomBytes(4).toString('hex');
});

app.listen(port, () => {
    console.log(`🚀 Server runing on http://localhost:${port}`);
});