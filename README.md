# TypeScript Type Guard: Handling undefined with string | null

This repository demonstrates a common error in TypeScript type guards when dealing with optional parameters or values that might be null or undefined.  The issue arises when a function expects a parameter to be either a string or null, but the actual value passed is undefined.  TypeScript's type guard for null doesn't implicitly handle undefined, resulting in a runtime error instead of the expected behavior.

The `bug.ts` file shows the problematic code, and `bugSolution.ts` provides a solution by explicitly checking for undefined.