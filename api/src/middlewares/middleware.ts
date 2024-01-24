import { Request, Response } from 'express';

export interface Middleware {
    handle(req: Request, res: Response): void
}