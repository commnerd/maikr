import express, { Request, Response, NextFunction } from 'express';

const app = express();
const port = 3000;

const index = (request: Request, response: Response, next: NextFunction) => {
    response.status(200).json({
        "status": "awesome!",
        "body": "Hello World!"
    });
};

app.get('/', index);
app.listen(port, () => {
  console.log(`Running on port ${port}.`);
});