export default function fibonacci(n) {
  if (n < 0) {
    throw new Error("Input must be a non-negative integer.");
  }
  if (n === 0) return 0;
  if (n === 1) return 1;

  let a = 0,
    b = 1,
    temp;
  for (let i = 2; i <= n; i++) {
    temp = a + b;
    a = b;
    b = temp;
  }
  return b;
}
// Example usage:
// console.log(fibonacci(5)); // Output: 5
