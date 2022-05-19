import express, { Request, Response, NextFunction } from 'express';
import { Project as ProjectInterface } from '@maikr/lib/models/project';
import { Endpoint } from './endpoint';
import { Project } from './schema';
const app = express();
const port = 3000;

app.use(express.json());
app.use(function(req, res, next) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With, Content-Type, Authorization');
  next();
});


Endpoint<ProjectInterface>(app, Project, '/api/v0.1.0/projects');

app.listen(port, () => {
  console.log(`Running on port ${port}.`);
});