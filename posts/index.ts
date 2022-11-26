import express from "express";
import { randomBytes } from 'crypto';
import cors from 'cors';

const app = express();
const port = 4000;

app.use(express.json());
app.use(cors());

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