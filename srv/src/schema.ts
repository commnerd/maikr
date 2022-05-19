import mongoose from 'mongoose';

mongoose.set('debug', true);
mongoose.connect('mongodb://user:pass@mongodb/admin', {}, (err) => {
  console.log(err);
});

export const Project = mongoose.model('Project', new mongoose.Schema({
  name: mongoose.SchemaTypes.String,
  description: mongoose.SchemaTypes.String,
  type: mongoose.SchemaTypes.String,
  phase: mongoose.SchemaTypes.String,
}));