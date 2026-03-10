const { add, subtract, multiply, divide, modulo, power, squareRoot, calculate } = require("../calculator");

// --- Addition tests ---
describe("add", () => {
  test("adds two positive numbers (2 + 3 = 5)", () => {
    expect(add(2, 3)).toBe(5);
  });

  test("adds negative numbers", () => {
    expect(add(-2, -3)).toBe(-5);
  });

  test("adds a positive and a negative number", () => {
    expect(add(10, -4)).toBe(6);
  });

  test("adds zero to a number", () => {
    expect(add(7, 0)).toBe(7);
  });

  test("adds decimal numbers", () => {
    expect(add(1.5, 2.3)).toBeCloseTo(3.8);
  });
});

// --- Subtraction tests ---
describe("subtract", () => {
  test("subtracts two positive numbers (10 - 4 = 6)", () => {
    expect(subtract(10, 4)).toBe(6);
  });

  test("subtracts resulting in a negative number", () => {
    expect(subtract(4, 10)).toBe(-6);
  });

  test("subtracts negative numbers", () => {
    expect(subtract(-5, -3)).toBe(-2);
  });

  test("subtracts zero", () => {
    expect(subtract(8, 0)).toBe(8);
  });

  test("subtracts decimal numbers", () => {
    expect(subtract(5.5, 2.2)).toBeCloseTo(3.3);
  });
});

// --- Multiplication tests ---
describe("multiply", () => {
  test("multiplies two positive numbers (45 * 2 = 90)", () => {
    expect(multiply(45, 2)).toBe(90);
  });

  test("multiplies by zero", () => {
    expect(multiply(100, 0)).toBe(0);
  });

  test("multiplies negative numbers", () => {
    expect(multiply(-3, -4)).toBe(12);
  });

  test("multiplies a positive and a negative number", () => {
    expect(multiply(6, -7)).toBe(-42);
  });

  test("multiplies decimal numbers", () => {
    expect(multiply(2.5, 4)).toBeCloseTo(10);
  });
});

// --- Division tests ---
describe("divide", () => {
  test("divides two positive numbers (20 / 5 = 4)", () => {
    expect(divide(20, 5)).toBe(4);
  });

  test("divides resulting in a decimal", () => {
    expect(divide(10, 3)).toBeCloseTo(3.3333, 4);
  });

  test("divides negative numbers", () => {
    expect(divide(-12, -4)).toBe(3);
  });

  test("divides a negative by a positive", () => {
    expect(divide(-20, 5)).toBe(-4);
  });

  test("divides zero by a number", () => {
    expect(divide(0, 5)).toBe(0);
  });

  test("throws error on division by zero", () => {
    expect(() => divide(10, 0)).toThrow("Division by zero is not allowed.");
  });
});

// --- calculate() integration tests ---
describe("calculate", () => {
  test("addition via calculate", () => {
    expect(calculate(2, "+", 3)).toBe(5);
  });

  test("subtraction via calculate", () => {
    expect(calculate(10, "-", 4)).toBe(6);
  });

  test("multiplication via calculate with *", () => {
    expect(calculate(45, "*", 2)).toBe(90);
  });

  test("multiplication via calculate with x", () => {
    expect(calculate(45, "x", 2)).toBe(90);
  });

  test("division via calculate", () => {
    expect(calculate(20, "/", 5)).toBe(4);
  });

  test("throws on division by zero via calculate", () => {
    expect(() => calculate(10, "/", 0)).toThrow("Division by zero is not allowed.");
  });

  test("throws on unknown operator", () => {
    expect(() => calculate(1, "??", 2)).toThrow("Unknown operator '??'");
  });
});

// --- Modulo tests ---
describe("modulo", () => {
  test("5 % 2 = 1", () => {
    expect(modulo(5, 2)).toBe(1);
  });

  test("returns remainder of positive numbers (10 % 3 = 1)", () => {
    expect(modulo(10, 3)).toBe(1);
  });

  test("returns 0 when evenly divisible", () => {
    expect(modulo(9, 3)).toBe(0);
  });

  test("works with negative dividend", () => {
    expect(modulo(-10, 3)).toBe(-1);
  });

  test("works with negative divisor", () => {
    expect(modulo(10, -3)).toBe(1);
  });

  test("works with decimal numbers", () => {
    expect(modulo(10.5, 3)).toBeCloseTo(1.5);
  });

  test("throws error on modulo by zero", () => {
    expect(() => modulo(10, 0)).toThrow("Modulo by zero is not allowed.");
  });
});

// --- Power tests ---
describe("power", () => {
  test("2 ^ 3 = 8", () => {
    expect(power(2, 3)).toBe(8);
  });

  test("raises base to positive exponent (2 ** 8 = 256)", () => {
    expect(power(2, 8)).toBe(256);
  });

  test("raises to the power of 0 returns 1", () => {
    expect(power(5, 0)).toBe(1);
  });

  test("raises to the power of 1 returns base", () => {
    expect(power(7, 1)).toBe(7);
  });

  test("handles negative exponent", () => {
    expect(power(2, -2)).toBeCloseTo(0.25);
  });

  test("handles decimal exponent", () => {
    expect(power(4, 0.5)).toBeCloseTo(2);
  });

  test("handles fractional base", () => {
    expect(power(0.5, 2)).toBeCloseTo(0.25);
  });

  test("handles negative base with odd exponent", () => {
    expect(power(-2, 3)).toBe(-8);
  });
});

// --- Square Root tests ---
describe("squareRoot", () => {
  test("√16 = 4", () => {
    expect(squareRoot(16)).toBe(4);
  });

  test("returns square root of a perfect square (sqrt(25) = 5)", () => {
    expect(squareRoot(25)).toBe(5);
  });

  test("returns square root of 0", () => {
    expect(squareRoot(0)).toBe(0);
  });

  test("returns square root of 1", () => {
    expect(squareRoot(1)).toBe(1);
  });

  test("returns square root of a non-perfect square", () => {
    expect(squareRoot(2)).toBeCloseTo(1.4142, 4);
  });

  test("returns square root of a large number", () => {
    expect(squareRoot(10000)).toBe(100);
  });

  test("throws error for negative numbers", () => {
    expect(() => squareRoot(-1)).toThrow("Square root of a negative number is not allowed.");
  });

  test("throws error for large negative numbers", () => {
    expect(() => squareRoot(-100)).toThrow("Square root of a negative number is not allowed.");
  });
});

// --- calculate() extended integration tests ---
describe("calculate (extended)", () => {
  test("modulo via calculate (5 % 2 = 1)", () => {
    expect(calculate(5, "%", 2)).toBe(1);
  });

  test("modulo via calculate (10 % 3 = 1)", () => {
    expect(calculate(10, "%", 3)).toBe(1);
  });

  test("exponentiation via calculate with ** (2 ** 8 = 256)", () => {
    expect(calculate(2, "**", 8)).toBe(256);
  });

  test("exponentiation via calculate with ^ (2 ^ 3 = 8)", () => {
    expect(calculate(2, "^", 3)).toBe(8);
  });

  test("throws on modulo by zero via calculate", () => {
    expect(() => calculate(10, "%", 0)).toThrow("Modulo by zero is not allowed.");
  });
});
