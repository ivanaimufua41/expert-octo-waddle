import express from 'express';

const app = express();
const PORT = 8000;

app.get('/', (req, res) => res.send('Express + Typescript Server'));

app.listen(PORT, () => {
    console.log(`[server]: Server running at https://localhost:${PORT}`);
})