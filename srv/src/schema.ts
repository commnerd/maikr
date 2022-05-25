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