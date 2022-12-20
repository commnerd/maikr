import { RunContext as RunContextEnum } from "@maikr/enums/run-context";
import { RunContext } from "./run-context";

export class ProductionRunContext extends RunContext {
    label: string = "Production";
    slug: RunContextEnum = RunContextEnum.PRODUCTION;
}