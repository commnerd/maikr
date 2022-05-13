import express, { Request, Response, NextFunction } from 'express';
import mongodb from 'mongodb';

const app = express();
const port = 3000;

const index = (request: Request, response: Response, next: NextFunction) => {
    response.status(200).json();
};

const getProjectList = (request: Request, response: Response, next: NextFunction) => {
  response.status(200).json([{"name": "Yippee", "description": "Hurray!"}]);
}
const storeProject = (request: Request, response: Response, next: NextFunction) => {
  console.log(request.get('content-type'), request.body)
  response.status(200).json(request.body);
};

app.use(express.json());
app.use(function(req, res, next) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type, Authorization');
  next();
});
app.get('/', index);
app.get('/api/v0.1.0/projects', getProjectList);
app.post('/api/v0.1.0/projects', storeProject);
app.listen(port, () => {
  console.log(`Running on port ${port}.`);
});