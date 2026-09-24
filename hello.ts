let message: string = "Hello TypeScript";

console.log(message);

function greet(name?: string) {
    console.log(`Hello ${name}`);
}

greet("Jyoti");
greet();

//arrays

let skills:string[] = ["HTML","CSS","JavaScript"];
skills.push("TypeScript");
console.log(skills);

let fruits:Array<string> = ["SASS","Tailwind"];
console.log(fruits);

let data: (string | number)[] = ["Jyoti", 28, "Developer", 50000];
console.log(data);