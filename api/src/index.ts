import express, { Express, Request, Response } from 'express';

const app: Express = express();
const port =  80;

app.get('/', (req: Request, res: Response) => {
  res.send('Express + TypeScript Server');
});

app.get('/ideas', (req: Request, res: Response) => {
  res.send(JSON.stringify([{line: 'abcdef'}, {line: 'ghijkl'}]));
});

app.listen(port, () => {
  console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
});