import { MongoModel } from "./mongo-model";
import { DateTracked } from "@maikr/interfaces";

import { Phase, Type } from '@maikr/enums'

export interface Project extends MongoModel, DateTracked {
    name: string;
    description: string;
    type?: Type;
    phase?: Phase;
}