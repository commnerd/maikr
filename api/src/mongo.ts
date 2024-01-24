import { MongoClient } from "mongodb";

export class Mongo {
    private _client!: MongoClient;

    constructor() {
        let uri = "mongodb+srv://root:example@mongo:27017/maikr?retryWrites=true&w=majority";
        this._client = new MongoClient(uri);
    }

    async run(): Promise<void> {
        try {
            const database = this._client.db('maikr');
            const ideas = database.collection('ideas');

            const query = { line: 'test' };
            const idea = await ideas.findOne(query);
          } finally {
            // Ensures that the client will close when you finish/error
            await this._client.close();
          }
    }
}