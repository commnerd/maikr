import { CronJob } from 'cron';
import { Task, Word } from './schema';
import { Word as WordInterface } from '@maikr/lib/models/word';
import { Task as TaskInterface } from '@maikr/lib/models/task';


new CronJob(
    '0 0 0 * * 0',
    function() {
        collectWords();
    }
)

async function collectWords(): Promise<void> {
    let tasks = await getNewTasks();
};

async function getNewTasks(): Promise<Array<TaskInterface>> {
    let startDate = await getLastWordDate();
    return await Task.find({updated_at:{$gt:startDate}})
}

async function getLastWordDate(): Promise<Date> {
    let word = await Word.find().sort({"collected_at": -1}).limit(1) as unknown as WordInterface;
    return word.collected_at;
}
