function greet(name: string, message: string = "Hello"): string{
    return `${message}, ${name}`
}

console.log(greet("Bishwajit"));
console.log(greet("Bishwajit", "Welcome"));