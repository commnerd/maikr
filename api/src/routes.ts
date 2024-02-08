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
        "get":  (req: Request, res: Response) => {
            const mongodb = new Mongo();
            mongodb.run();
            res.send(JSON.stringify([{idea: 'abcdef'}, {idea: 'ghijkl'}]));
        },
        "post": (req: Request, res: Response) => {
            res.send(JSON.stringify(req.body));
        }
    }
}