import express from "express";
import { randomBytes } from 'crypto';

const app = express();
const port = 4001;
app.use(express.json());

const commentsByPostId: any = {};

app.get('/posts/:id/comments', (req, res) => {
    //res.send(commentsByPostId)
});

app.post('/posts/:id/comments', (req, res) => {
    const commentId = randomBytes(4).toString('hex');
    const { content } = req.body;

    const comments = commentsByPostId[req.params.id] || [];
    comments.push({ id: commentId, content });
    commentsByPostId[req.params.id] = comments;
    res.status(201).send(comments);
});

app.listen(port, () => {
    console.log(`🚀 Server runing on http://localhost:${port}`);
});