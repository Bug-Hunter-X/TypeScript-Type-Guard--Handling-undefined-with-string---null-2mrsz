function greet(name: string | null | undefined): string {
  if (name === null || name === undefined) {
    return "Hello, world!";
  }
  return `Hello, ${name}!`;
}

console.log(greet(null)); // Expected: Hello, world!
console.log(greet("Alice")); // Expected: Hello, Alice!
console.log(greet(undefined)); // Expected: Hello, world!