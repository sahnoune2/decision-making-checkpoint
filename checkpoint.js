function fib(n) {
  if (n == 0) {
    return 0;
  }
  if (n == 1) {
    return 1;
  }
  return fib(n - 1) + fib(n - 2);
}

function power(n, y) {
  if (y === 0) {
    return 1;
  }
  if (y == 1) {
    return n;
  }
  if (y < 0) {
    return 1 / power(n, -y);
  }
  return n * power(n, y - 1);
}
