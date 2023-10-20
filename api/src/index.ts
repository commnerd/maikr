import express from 'express';
import { Api } from './api';

const port =  80;

let api: Api = new Api(express());

api.run(port);