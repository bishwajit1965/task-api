function printValue(value: unknown): void {
    if (typeof value === "string") {
        console.log("String:", value);
    } else if (typeof value === "number") {
        console.log("Number:", value);
    } else {
        console.log("Value is unknown");
    }
}

printValue("Hello TypeScript");
printValue(200);
printValue(true);