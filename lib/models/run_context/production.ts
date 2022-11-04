import { RunContext as RunContextEnum } from "../../enums/run_context";
import { RunContext } from "./run_context";

export class ProductionRunContext extends RunContext {
    protected label: string = "Production";
    protected slug: RunContextEnum = RunContextEnum.PRODUCTION;
}