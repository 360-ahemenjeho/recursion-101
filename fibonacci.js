function fibonacci(n) {
  if (n <= 1) return n;
  return fibonacci(n - 1) + fibonacci(n - 2);
}
console.log(fibonacci(3));
// FORMULA: (1, 1, 2, 3, 5, 8);
// VISUALIZATION:
// fin(2) + fin(1) + fin(0)
// now from right to left
// fin(0) = 1
// fin(1) = 1
// fin(2) = fin(1) + fin(0) = 1 + 1 = 2
// i'm learning that recursion and some sequences like "sumTo", "factorial", and "power", and "fibonacci" evaluate from right to left.
