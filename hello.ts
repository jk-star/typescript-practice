let message: string = "Hello TypeScript";

console.log(message);

function greet(name?: string) {
    console.log(`Hello ${name}`);
}

greet("Jyoti");
greet();