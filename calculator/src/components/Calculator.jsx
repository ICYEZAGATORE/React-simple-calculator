import React, { useState, useEffect } from "react";

const Calculator = () => {
  const [num1, setNum1] = useState("");
  const [num2, setNum2] = useState("");
  const [operation, setOperation] = useState("add");
  const [result, setResult] = useState(null);
  const [error, setError] = useState("");

  useEffect(() => {
    if (result !== null) {
      console.log("The result is:", result);
    }
  }, [result]);

  const handleCalculate = (e) => {
    e.preventDefault();

    setError("");
    setResult(null);

    if (num1 === "" || num2 === "") {
      setError("Please enter both numbers");
      return;
    }

    const firstNum = parseFloat(num1);
    const secondNum = parseFloat(num2);

    if (isNaN(firstNum) || isNaN(secondNum)) {
      setError("Please enter valid numbers");
      return;
    }

    let calculationResult;

    if (operation === "add") {
      calculationResult = firstNum + secondNum;
    } else if (operation === "subtract") {
      calculationResult = firstNum - secondNum;
    } else if (operation === "multiply") {
      calculationResult = firstNum * secondNum;
    } else if (operation === "divide") {
      if (secondNum === 0) {
        setError("Cannot divide by zero");
        return;
      }
      calculationResult = firstNum / secondNum;
    }

    setResult(Math.round(calculationResult * 100) / 100);
  };

  return (
    <div className="w-full max-w-md mx-auto p-4 md:p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-xl md:text-2xl font-bold mb-4 text-center text-gray-800">
        Simple Calculator
      </h2>

      <form onSubmit={handleCalculate} className="space-y-3">
        <div>
          <label
            htmlFor="num1"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            First Number
          </label>
          <input
            type="number"
            id="num1"
            value={num1}
            onChange={(e) => setNum1(e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter first number"
          />
        </div>

        <div>
          <label
            htmlFor="operation"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Operation
          </label>
          <select
            id="operation"
            value={operation}
            onChange={(e) => setOperation(e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="add">Add (+)</option>
            <option value="subtract">Subtract (−)</option>
            <option value="multiply">Multiply (×)</option>
            <option value="divide">Divide (÷)</option>
          </select>
        </div>

        <div>
          <label
            htmlFor="num2"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Second Number
          </label>
          <input
            type="number"
            id="num2"
            value={num2}
            onChange={(e) => setNum2(e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter second number"
          />
        </div>

        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors"
        >
          Calculate
        </button>
      </form>

      {error && (
        <div className="mt-4 p-3 bg-red-100 border border-red-400 text-red-700 rounded">
          {error}
        </div>
      )}

      {result !== null && !error && (
        <div className="mt-4">
          <h3 className="text-lg font-medium text-gray-700">Result:</h3>
          <div className="mt-2 p-3 bg-gray-100 rounded-md text-xl font-bold text-center">
            {result}
          </div>
        </div>
      )}
    </div>
  );
};

export default Calculator;
