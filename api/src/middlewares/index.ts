import { Request, Response } from 'express';
import { CorsMiddleware } from './cors';
import { Middleware } from "./middleware";

let middlewares: Array<Middleware> = [
    new CorsMiddleware()
]

export class Handler {
    handle(req: Request, res: Response): void {
        for(let i = 0; i < middlewares.length; i++) {
            middlewares[i].handle(req, res);
        }
    }
}