import express from "express";
import { randomBytes } from 'crypto';

const app = express();
const port = 4001;
app.use(express.json());

const commentsByPostId = {};

app.get('/posts/:id/comments', (req, res) => {
    //res.send(commentsByPostId)
});

app.post('/posts/:id/comments', (req, res) => {
    //res.send(commentsByPostId)
});

app.listen(port, () => {
    console.log(`🚀 Server runing on http://localhost:${port}`);
});