import { RunContext as RunContextEnum } from "@maikr/enums/run-context";
import { RunContext } from "./run-context";
export class DevelopmentRunContext extends RunContext {
    constructor() {
        super(...arguments);
        this.label = "Development";
        this.slug = RunContextEnum.DEV;
    }
}
//# sourceMappingURL=dev.js.map