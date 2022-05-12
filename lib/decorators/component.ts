import {
    Component as ComponentInterface,
    MainNavComponent as MainNavComponentInterface
} from '../interfaces/component';

function Component<T>(target: T): typeof ComponentInterface {
    return class T implements ComponentInterface {};
}

function MainNavComponent<T>(target: T): typeof MainNavComponentInterface {
    return class T implements MainNavComponentInterface {
        private _label: string = "";
        private _path: string | Array<string> = [];

        getLabel(): string {
            return this._label;
        }
        setLabel(label: string) {
            this._label = label;
        }

        getPath(): string | Array<string> {
            return this._path;
        }
        setPath(path: string | Array<string>) {
            this._path = path;
        }

    };
}