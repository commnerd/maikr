import { RunContext as RunContextEnum } from "@maikr/enums/run-context";
import { RunContext } from "./run-context";

export class DevelopmentRunContext extends RunContext {
    protected label: string = "Development";
    protected slug: RunContextEnum = RunContextEnum.DEV;
}