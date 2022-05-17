import express, { Request, Response, NextFunction } from 'express';
import { Project } from './schema';
const app = express();
const port = 3000;

const index = (request: Request, response: Response, next: NextFunction) => {
    response.status(200).json();
};

const getProjectList = async (request: Request, response: Response, next: NextFunction) => {
  response.status(200).json(await Project.find({}));
}

const getProject = async (request: Request, response: Response, next: NextFunction) => {
  response.status(200).json(await Project.findById(request.params['id']));
}

const storeProject = (request: Request, response: Response, next: NextFunction) => {
  let project = new Project(request.body);
  project.save((err, prj) => {
    response.status(200).json(prj);
  });
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
app.get('/api/v0.1.0/projects/:id', getProject);
app.post('/api/v0.1.0/projects', storeProject);
app.listen(port, () => {
  console.log(`Running on port ${port}.`);
});