function greet(name: string, message?: string): string {
    if (message) {
        return `${message}, ${name}`
    }
    return `"Hello, ${name}`
}

console.log(greet("Bishwajit"));
console.log(greet("Bishwajit", "Welcome"));