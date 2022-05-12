import express, { Request, Response, NextFunction } from 'express';

const app = express();
const port = 3000;

const index = (request: Request, response: Response, next: NextFunction) => {
    response.status(200).json({
        "status": "awesome!",
        "body": "Hello World!"
    });
};

const storeProject = (request: Request, response: Response, next: NextFunction) => {
  console.log("FUG");
  response.status(200).json(request.body);
};

app.get('/', index);
app.post('/api/v0.1.0/projects', storeProject);

app.listen(port, () => {
  console.log(`Running on port ${port}.`);
});