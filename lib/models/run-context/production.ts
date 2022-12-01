import { RunContext as RunContextEnum } from "@maikr/enums/run-context";
import { RunContext } from "./run-context";

export class ProductionRunContext extends RunContext {
    protected label: string = "Production";
    protected slug: RunContextEnum = RunContextEnum.PRODUCTION;
}