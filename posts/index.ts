import express from "express";
import { randomBytes } from 'crypto';

const app = express();
app.use(express.json());
const port = 4000;

const posts: any = {};

app.get('/posts', (req, res) => {
    res.send(posts)
});

app.post('/posts', (req, res) => {
    const id = randomBytes(4).toString('hex');
    const { title } = req.body;

    posts[id] = {
        id, title
    };

    res.status(201).send(posts[id]);
});

app.listen(port, () => {
    console.log(`🚀 Server runing on http://localhost:${port}`);
});