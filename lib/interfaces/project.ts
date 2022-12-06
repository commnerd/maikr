import { Phase, Type } from '@maikr/enums'

import { StoredModel } from './stored-model';

export interface Project extends StoredModel {
    getName(): string;

    getPhase(): Phase;

    getType(): Type;
}