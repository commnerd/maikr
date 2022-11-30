import { RunContext as RunContextEnum } from "@maikr/enums/run_context"
import { Sluggable } from "./sluggable";

export interface RunContext extends Sluggable<RunContextEnum> {
}