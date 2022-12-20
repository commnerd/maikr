import { RunContext as RunContextInterface } from "@maikr/interfaces/run-context";
import { RunContext as RunContextEnum } from "@maikr/enums/run-context";

export abstract class RunContext implements RunContextInterface {

    abstract label: string;
    abstract slug: RunContextEnum;
}