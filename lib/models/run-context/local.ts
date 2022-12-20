import { RunContext as RunContextEnum } from "@maikr/enums/run-context";
import { RunContext } from "./run-context";

export class LocalRunContext extends RunContext {
    label: string = "Local";
    slug: RunContextEnum = RunContextEnum.LOCAL;
}