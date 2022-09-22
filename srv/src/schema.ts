import mongoose from 'mongoose';

const db_user = process.env.MONGO_USER || 'user';
const db_pass = process.env.MONGO_PASS || 'pass';
const db_url = process.env.MONGO_URL || 'localhost';
const db_table = process.env.MONGO_TABLE || 'admin';

mongoose.set('debug', true);
mongoose.connect(`mongodb://${db_user}:${db_pass}@${db_url}/${db_table}`, {}, (err) => {
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
  created_at: mongoose.SchemaTypes.Date,
  updated_at: mongoose.SchemaTypes.Date,
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

export const Word = mongoose.model('Word', new mongoose.Schema({
  word: mongoose.SchemaTypes.String,
  collected_at: mongoose.SchemaTypes.Date,
}));