import { RunContext as RunContextEnum } from "@maikr/enums/run-context";
import { RunContext } from "./run-context";

export class DevelopmentRunContext extends RunContext {
    label: string = "Development";
    slug: RunContextEnum = RunContextEnum.DEV;
}