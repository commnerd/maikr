export enum Phase {
    Idea,
    ProofOfConcept,
    Development,
    Maintanence,
    EndOfLife,
}

export enum Type {
    Software,
}
export interface Project {
    name: string;
    description: string;
    type?: Type;
    phase?: Phase;
}