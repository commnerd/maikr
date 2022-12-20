import { Phase, Type } from '@maikr/enums'

import { StoredModel } from './stored-model';

export interface Project extends StoredModel {
    name: string;
    phase: Phase;
    type: Type;
}