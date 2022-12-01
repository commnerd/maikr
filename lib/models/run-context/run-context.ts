import { RunContext as RunContextInterface } from "@maikr/interfaces/run-context";
import { RunContext as RunContextEnum } from "@maikr/enums/run-context";

export abstract class RunContext implements RunContextInterface {

    protected abstract label: string;
    protected abstract slug: RunContextEnum;

    getSlug(): RunContextEnum {
        return this.slug;
    }

    getLabel(): string {
        return this.label;
    }
}