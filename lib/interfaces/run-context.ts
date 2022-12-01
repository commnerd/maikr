import { RunContext as RunContextEnum } from "@maikr/enums"
import { Sluggable } from "./sluggable";

export interface RunContext extends Sluggable<RunContextEnum> {
}