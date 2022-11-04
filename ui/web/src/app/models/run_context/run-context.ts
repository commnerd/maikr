import { RunContext as RunContextInterface } from "../../interfaces/run_context";
import { RunContext as RunContextEnum } from "../../enums/run_context";

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