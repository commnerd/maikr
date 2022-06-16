import { Express, Request, Response, NextFunction } from 'express';
import mongoose from 'mongoose';

class EndpointClass<T> {
    constructor(
        private app: Express,
        private model: mongoose.Model<T>,
        private endpoint: string
    ) {
        this.app.get(this.endpoint, this.list.bind(this));
        this.app.get(`${this.endpoint}/:id`, this.get.bind(this));
        this.app.post(this.endpoint, this.store.bind(this));
        this.app.put(`${this.endpoint}/:id`, this.update.bind(this));
    }

    list = async (request: Request, response: Response, next: NextFunction) => {
        response.status(200).json(await this.model.find({}));
    }

    get = async (request: Request, response: Response, next: NextFunction) => {
        response.status(200).json(await this.model.findById(request.params['id']));
    }

    store = (request: Request, response: Response, next: NextFunction) => {
        let model = new this.model(request.body);
        model.save().then((prj) => {
            console.log(model);
            response.status(200).json(prj);
        });
    };

    update = async (request: Request, response: Response, next: NextFunction) => {
        let model = await this.model.findById(request.params['id']);
        model.overwrite(request.body).save().then((prj) => {
            response.status(200).json(prj);
        });
    };
}

export function Endpoint<T>(app: Express, model: mongoose.Model<T>, endpoint: string): EndpointClass<T> {
    return new EndpointClass<T>(app, model, endpoint);
}