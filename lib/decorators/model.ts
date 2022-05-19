export function Model<T>(target) {
    return class T {
        constructor() {
            console.log("HELLO WORLD!");
        }
    }
}