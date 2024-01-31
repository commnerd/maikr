import { Express, Request, Response } from 'express';
import { Verb, Routes } from './routes';
import { Handler } from "./middlewares";
import bodyPaser from 'body-parser';

export class Api {
    constructor(
        private _engine: Express,
    ) {
        this._engine.use(bodyPaser.json());
        this.bootstrapRoutes();
    }

    public run(port: number) {
        this._engine.listen(port, () => {
          console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
        });
    }

    private bootstrapRoutes(): void {
        for(let path in Routes) {
            this._engine.use(path, this.handle);
        }
    }

    private handle(req: Request, res: Response) {
        let middleware = new Handler();
        middleware.handle(req, res);
        console.log(req.method, req.path);
        if(req.method.toLowerCase() === 'options') {
            res.set('Allow', Object.keys(Routes[req.path]).map(key => key.toUpperCase()).join(','));
            res.send('');
            return;
        }
        Routes[req.path][req.method.toLowerCase()](req, res);
    }
}