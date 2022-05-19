import { MongoModel } from "./mongo-model";

export enum Phase {
    Idea = "Idea",
    ProofOfConcept = "Proof of Concept",
    Development = "Development",
    Maintanence = "Maintanence",
    EndOfLife = "End of Life",
}

export enum Type {
    Software = "Software",
}
export interface Project extends MongoModel {
    _id: string;
    name: string;
    description: string;
    type?: Type;
    phase?: Phase;
    __v: number;
}