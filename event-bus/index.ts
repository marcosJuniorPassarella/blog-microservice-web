import express from "express";
import cors from 'cors';
import axios from 'axios';
import { Microservices } from "./enums/Microservices";

const app = express();
const port = 4005;
app.use(express.json());
app.use(cors());
app.listen(port, () => console.log(`Server runing on http://localhost:4005 🚀`));

app.post('/events', (req, res) => {
    const event = req.body;

    axios.post(`${Microservices.urlPostsMicroservice}/events`, event).catch((e) => console.log(`Error in send event from ${Microservices.urlPostsMicroservice}`, e))
    axios.post(`${Microservices.urlCommentsMicroservice}/events`, event).catch((e) => console.log(`Error in send event from ${Microservices.urlCommentsMicroservice}`, e))
    axios.post(`${Microservices.urlQueryMicroservice}/events`, event).catch((e) => console.log(`Error in send event from ${Microservices.urlQueryMicroservice}`, e))

    res.send({ status: 'OK' });
})