import { Request, Response } from 'express';
import { Mongo } from './mongo';

export enum Verb {
    DELETE = "delete",
    GET = "get",
    POST = "post",
    PUT = "put",
}

export type RoutedFunction = (req: Request, res: Response) => void;

export const Routes: {[path: string]: {[verb: string]: RoutedFunction}} = {
    "/": {
        "get": (req: Request, res: Response) => {
            res.send('Express + TypeScript Server');
        }
    },
    "/ideas": {
        "get":  async (req: Request, res: Response) => {
            const mongodb = new Mongo();
            const collection = mongodb.getCollection('ideas');
            const ideas = await collection.find().toArray();
            res.send(JSON.stringify(ideas));
        },
        "post": (req: Request, res: Response) => {
            res.send(JSON.stringify(req.body));
        }
    }
}