import mongoose from 'mongoose';

export const Project = mongoose.model('projects', new mongoose.Schema({
  name: String,
  description: String,
}));