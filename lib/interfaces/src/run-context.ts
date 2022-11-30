import { RunContext as RunContextEnum } from "@maikr/enums/run-context"
import { Sluggable } from "./sluggable";

export interface RunContext extends Sluggable<RunContextEnum> {
}