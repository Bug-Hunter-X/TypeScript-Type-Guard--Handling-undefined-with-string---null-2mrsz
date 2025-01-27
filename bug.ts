function greet(name: string | null): string {
  if (name === null) {
    return "Hello, world!";
  }
  return `Hello, ${name}!`;
}

console.log(greet(null)); // Expected: Hello, world! 
console.log(greet("Alice")); // Expected: Hello, Alice!
console.log(greet(undefined)); // Unexpected: Error