const anyValue: any = "Hello TypeScript";

console.log(anyValue.toUpperCase());

const unknownValue: unknown = "Hello TypeScript";

if (typeof unknownValue === "string") {
  console.log(unknownValue.toUpperCase());
}