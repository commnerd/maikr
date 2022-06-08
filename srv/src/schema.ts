import mongoose from 'mongoose';

let user = process.env.MONGO_USER;
let pass = process.env.MONGO_PASS;
let url = process.env.MONGO_URL;
let table = process.env.MONGO_TABLE;

mongoose.set('debug', true);
mongoose.connect(`mongodb://${user}:${pass}@${url}/${table}`, {}, (err) => {
  console.log(err);
});

export const Project = mongoose.model('Project', new mongoose.Schema({
  name: mongoose.SchemaTypes.String,
  description: mongoose.SchemaTypes.String,
  type: mongoose.SchemaTypes.String,
  phase: mongoose.SchemaTypes.String,
}));

export const Task = mongoose.model('Task', new mongoose.Schema({
  parent_project: mongoose.SchemaTypes.ObjectId,
  parent_task: mongoose.SchemaTypes.ObjectId,
  short: mongoose.SchemaTypes.String,
  long: mongoose.SchemaTypes.String,
}));

export const List = mongoose.model('List', new mongoose.Schema({
  name: mongoose.SchemaTypes.String,
}));

export const ListListItem = mongoose.model('ListListItem', new mongoose.Schema({
  list: mongoose.SchemaTypes.ObjectId,
  list_item: mongoose.SchemaTypes.ObjectId,
}));

export const Log = mongoose.model('Log', new mongoose.Schema({
  name: mongoose.SchemaTypes.String,
}));

export const LogListItem = mongoose.model('LogListItem', new mongoose.Schema({
  log: mongoose.SchemaTypes.ObjectId,
  list_item: mongoose.SchemaTypes.ObjectId,
}));

export const ListItem = mongoose.model('ListItem', new mongoose.Schema({
  entry: mongoose.SchemaTypes.String,
}));