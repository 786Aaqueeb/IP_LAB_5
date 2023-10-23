function calculate() {
    const num1 = parseFloat(document.getElementById("num1").value);
    const num2 = parseFloat(document.getElementById("num2").value);
    const operator = document.getElementById("operator").value;

    const calculatePromise = new Promise((resolve, reject) => {
      if (isNaN(num1) || isNaN(num2)) {
        reject("Please enter valid numbers.");
      } else {
        switch (operator) {
          case "add":
            resolve(num1 + num2);
            break;
          case "subtract":
            resolve(num1 - num2);
            break;
          case "multiply":
            resolve(num1 * num2);
            break;
          case "divide":
            if (num2 === 0) {
              reject("Division by zero is not allowed!");
            } else {
              resolve(num1 / num2);
            }
            break;
          default:
            reject("Invalid operator.");
        }
      }
    });

    calculatePromise
      .then((result) => {
        document.getElementById("result").textContent = `Result: ${result}`;
      })
      .catch((error) => {
        document.getElementById("result").textContent = `Error: ${error}`;
      });
  }

  function generateSquares() {
    const input = document.getElementById("numbers").value;
    const numbers = input.split(",").map((num) => parseFloat(num.trim()));

    const squareIterator = function* (arr) {
      for (let num of arr) {
        yield num * num;
      }
    };

    const iterator = squareIterator(numbers);

    const outputElement = document.getElementById("output-2");
    outputElement.textContent = "Squares: ";

    for (let result of iterator) {
      outputElement.textContent += result + " ";
    }
  }

  function isPrime(num) {
    if (num <= 1) return false;
    if (num <= 3) return true;
    if (num % 2 === 0 || num % 3 === 0) return false;

    let i = 5;
    while (i * i <= num) {
      if (num % i === 0 || num % (i + 2) === 0) return false;
      i += 6;
    }

    return true;
  }

  function* generatePrimes(limit) {
    for (let num = 2; num <= limit; num++) {
      if (isPrime(num)) {
        yield num;
      }
    }
  }

  function displayPrimes() {
    const limit = parseInt(document.getElementById("limit").value);

    if (isNaN(limit) || limit < 2) {
      alert("Please enter a valid limit (>= 2).");
      return;
    }

    const primeGenerator = generatePrimes(limit);
    const primes = Array.from(primeGenerator);

    const outputElement = document.getElementById("output-3");
    if (primes.length === 0) {
      outputElement.textContent = "No prime numbers found.";
    } else {
      outputElement.textContent = `Prime numbers up to the limit: ${primes.join(
        ", "
      )}`;
    }
  }