import { RunContext as RunContextEnum } from "@maikr/enums/run-context";
import { RunContext } from "./run-context";
export class LocalRunContext extends RunContext {
    constructor() {
        super(...arguments);
        this.label = "Local";
        this.slug = RunContextEnum.LOCAL;
    }
}
//# sourceMappingURL=local.js.map