import { RunContext as RunContextEnum } from "../../enums/run_context";
import { RunContext } from "./run_context";

export class LocalRunContext extends RunContext {
    protected label: string = "Local";
    protected slug: RunContextEnum = RunContextEnum.LOCAL;
}