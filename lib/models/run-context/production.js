import { RunContext as RunContextEnum } from "@maikr/enums/run-context";
import { RunContext } from "./run-context";
export class ProductionRunContext extends RunContext {
    constructor() {
        super(...arguments);
        this.label = "Production";
        this.slug = RunContextEnum.PRODUCTION;
    }
}
//# sourceMappingURL=production.js.map