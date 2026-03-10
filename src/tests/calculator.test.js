const { add, subtract, multiply, divide, calculate } = require("../calculator");

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
    expect(() => calculate(1, "%", 2)).toThrow("Unknown operator '%'");
  });
});
