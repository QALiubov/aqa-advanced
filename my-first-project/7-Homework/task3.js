function divide(numerator, denominator) {
  // 1. Перевірка, що обидва аргументи — числа
  if (typeof numerator !== "number" || typeof denominator !== "number") {
    throw new Error("Both arguments must be numbers");
  }

  if (denominator === 0) {
    throw new Error("Cannot divide by zero");
  }


  return numerator / denominator;
}

try {
  const result1 = divide(12, 4);
  console.log("Result 1:", result1);
} catch (error) {
  console.log("Error 1:", error.message);
} finally {
  console.log("Робота завершена (1)");
}

// 2) Ділення на нуль
try {
  const result2 = divide(10, 0);
  console.log("Result 2:", result2);
} catch (error) {
  console.log("Error 2:", error.message);
} finally {
  console.log("Робота завершена (2)");
}

// 3) Перший аргумент не число
try {
  const result3 = divide("12", 3);
  console.log("Result 3:", result3);
} catch (error) {
  console.log("Error 3:", error.message);
} finally {
  console.log("Робота завершена (3)");
}

// 4) Другий аргумент не число
try {
  const result4 = divide(20, "5");
  console.log("Result 4:", result4);
} catch (error) {
  console.log("Error 4:", error.message);
} finally {
  console.log("Робота завершена (4)");
}
