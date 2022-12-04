import express from "express";
import { randomBytes } from 'crypto';
import cors from 'cors';
import axios from 'axios';

const app = express();
const port = 4000;

app.use(express.json());
app.use(cors());

const posts: any = {};

app.get('/posts', (req, res) => {
    res.send(posts)
});

app.post('/posts', async (req, res) => {
    const id = randomBytes(4).toString('hex');
    const { title } = req.body;

    posts[id] = {
        id, title
    };

    await axios.post('http://localhost:4005/events', {
        type: 'PostCreated',
        data: {
            id, title
        }
    })

    res.status(201).send(posts[id]);
});

app.listen(port, () => {
    console.log(`🚀 Server runing on http://localhost:${port}`);
});