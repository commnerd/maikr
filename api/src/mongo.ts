import {Collection, Db, MongoClient} from "mongodb";

export class Mongo {
    private _client!: MongoClient;
    private _database!: Db;

    constructor() {
        let uri = "mongodb://root:example@mongo:27017/?retryWrites=true&w=majority";
        this._client = new MongoClient(uri);
        this._database = this._client.db('maikr');
    }

    getCollection(name: string): Collection<Document>
    {
        return this._database.collection(name);
    }

    async closeClient(): Promise<void>
    {
        await this._client.close();
    }
}