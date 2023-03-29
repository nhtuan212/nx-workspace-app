import express from 'express';
const app = express();
const port = 2000;

app.get('/api', (req: any, res: any) => {
    res.send('Hello World!');
    res.send('Hello World2!');
    res.send('Hello World3!');
});

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});
