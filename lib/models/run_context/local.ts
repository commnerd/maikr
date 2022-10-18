import { RunContext as RunContextEnum } from "../../enums/run_context";
import { RunContext as RunContextInterface } from "../../interfaces/run_context";

export class LocalRunContext implements RunContextInterface {

    private label: "Local";

    getSlug(): RunContextEnum {
        return RunContextEnum.LOCAL;
    }

    getLabel(): string {
        return this.label;
    }
}