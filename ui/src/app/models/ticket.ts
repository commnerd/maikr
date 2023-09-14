import { Data } from "./data";

export class Ticket extends Data {
    override fields = [
        "short",
    ];
    
    short !: string;
}