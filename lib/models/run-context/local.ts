import { RunContext as RunContextEnum } from "@maikr/enums/run-context";
import { RunContext } from "./run-context";

export class LocalRunContext extends RunContext {
    protected label: string = "Local";
    protected slug: RunContextEnum = RunContextEnum.LOCAL;
}