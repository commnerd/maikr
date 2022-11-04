import { RunContext as RunContextEnum } from "../../enums/run_context";
import { RunContext } from "./run_context";

export class DevelopmentRunContext extends RunContext {
    protected label: string = "Development";
    protected slug: RunContextEnum = RunContextEnum.DEV;
}