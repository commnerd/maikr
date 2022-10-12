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
        this.app.put(`${this.endpoint}/batch_update`, this.updateBatch.bind(this));
        this.app.put(`${this.endpoint}/:id`, this.update.bind(this));
    }

    list = async (request: Request, response: Response, next: NextFunction) => {
        let filter = {};
        if (request.query['filter']) {
            filter = JSON.parse(request.query['filter'] as string);
        }
        response.status(200).json(await this.model.find(filter));
    }

    get = async (request: Request, response: Response, next: NextFunction) => {
        response.status(200).json(await this.model.findById(request.params['id']));
    }

    store = (request: Request, response: Response, next: NextFunction) => {
        let model = new this.model(request.body);
        model.save().then(mdl => response.status(200).json(mdl));
    };

    update = async (request: Request, response: Response, next: NextFunction) => {
        let model = await this.model.findById(request.params['id']);
        model.overwrite(request.body).save().then((mdl) => {
            response.status(200).json(mdl);
        });
    };

    updateBatch = async (request: Request, response: Response, next: NextFunction) => {
        let updatedAry = [];
        let rawArray = request.body as Array<T>;
        rawArray.forEach((rawModel) => {
            if (rawModel != undefined && rawModel['_id'] != undefined) {
                updatedAry.push(this.model.findOneAndUpdate({ _id: rawModel['_id'] }, rawModel, { new: true, upsert: true }));
            } else {
                updatedAry.push((new this.model(rawModel)).save());
            }
        });
        response.status(200).json(updatedAry);
    };
}

export function Endpoint<T>(app: Express, model: mongoose.Model<T>, endpoint: string): EndpointClass<T> {
    return new EndpointClass<T>(app, model, endpoint);
}
