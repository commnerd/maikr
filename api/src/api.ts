import express, { Request, Response, NextFunction } from 'express';
import { Project as ProjectInterface } from '@maikr/lib/models/project';
import { Task as TaskInterface } from '@maikr/lib/models/task';
import { ListItem as ListItemInterface } from '@maikr/lib/models/list-item';
import { ListItem, Project, Task } from './schema';
import { Endpoint } from './endpoint';
const app = express();
const port = 3000;

app.use(express.json());
app.use(function(req, res, next) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With, Content-Type, Authorization');
  next();
});

Endpoint<ListItemInterface>(app, ListItem, '/list-items');
Endpoint<ProjectInterface>(app, Project, '/projects');
Endpoint<TaskInterface>(app, Task, '/tasks');

app.get('/health-check', async (request: Request, response: Response, next: NextFunction) => {
  response.status(200).json({'status': 'healthy'});
});

app.listen(port, () => {
  console.log(`Running on port ${port}.`);
});
