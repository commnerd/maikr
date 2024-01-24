import { Express } from 'express';
import { Verb, Routes, RoutedFunction } from './routes';

export class Api {
    constructor(
        private _engine: Express,
    ) {
        this.bootstrapRoutes();
    }

    public run(port: number) {
        this._engine.listen(port, () => {
          console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
        });
    }

    private bootstrapRoutes(): void {
        for(let path in Routes) {
            for(let verb in Routes[path]) {
                this.registerRoute(verb as Verb, path);
            }
        }
    }

    private registerRoute(verb: Verb,  path: string): void {
        switch(verb) {
            case Verb.DELETE:
                this._engine.delete(path, Routes[path][verb]);
                break;
            case Verb.POST:
                this._engine.post(path, Routes[path][verb]);
                break;
            case Verb.PUT:
                this._engine.put(path, Routes[path][verb]);
                break;
            default:
                this._engine.get(path, Routes[path][verb]);
                break;
        }

    }
}