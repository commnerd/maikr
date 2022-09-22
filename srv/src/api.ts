import express, { Request, Response, NextFunction } from 'express';
import { Project as ProjectInterface } from '@maikr/lib/models/project';
import { Task as TaskInterface } from '@maikr/lib/models/task';
import { ListItem as ListItemInterface } from '@maikr/lib/models/list-item';
import { ListItem, Project, Task } from './schema';
import { Endpoint } from './endpoint';
import mongoose from 'mongoose';

const app = express();

const db_user = process.env.MONGO_USER || 'user';
const db_pass = process.env.MONGO_PASS || 'pass';
const db_url = process.env.MONGO_URL || 'localhost';
const db_port = process.env.MONGO_PORT || '27017';
const db_table = process.env.MONGO_TABLE || 'admin';

const api_url = process.env.API_URL || 'localhost';
const api_port = process.env.API_PORT || 3000;

app.use(express.json());
app.use(function (req, res, next) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With, Content-Type, Authorization');
  next();
});

Endpoint<ListItemInterface>(app, ListItem as mongoose.Model<ListItemInterface>, '/list-items');
Endpoint<ProjectInterface>(app, Project as mongoose.Model<ProjectInterface>, '/projects');
Endpoint<TaskInterface>(app, Task as mongoose.Model<TaskInterface>, '/tasks');

app.get('/health-check', async (request: Request, response: Response, next: NextFunction) => {
  response.status(200).json({ 'status': 'healthy' });
});

mongoose.connect(`mongodb://${db_user}:${db_pass}@${db_url}:${db_port}/${db_table};`)

app.listen(api_port, () => {
  console.log(`Running at http://${api_url}:${api_port}.`);
});
