import { MongoModel } from "./mongo-model";
import { DateTracked } from "../interfaces/date-tracked";

export enum Phase {
    Idea = "Idea",
    ProofOfConcept = "Proof of Concept",
    Development = "Development",
    Maintanence = "Maintanence",
    EndOfLife = "End of Life",
}

export enum Type {
    Home = "Home",
    Software = "Software",
    Work = "Work",
}

export interface Project extends MongoModel, DateTracked {
    name: string;
    description: string;
    type?: Type;
    phase?: Phase;
}