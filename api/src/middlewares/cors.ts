import { Request, Response } from 'express';
import { Middleware } from "./middleware";

export class CorsMiddleware implements Middleware {
    handle(req: Request, res: Response): void {
        res.set('Access-Control-Allow-Origin', '*');
    }
}