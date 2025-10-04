function postfixCalculator(input) {
  const stack = [];

  for (let token of input) {
    if (typeof token === "number") {
      stack.push(token);
    } else {
      if (stack.length < 2) {
        console.log("Error: not enough operands!");
        return;
      }

      const b = stack.pop();
      const a = stack.pop();

      let result;
      switch (token) {
        case "+":
          result = a + b;
          break;
        case "-":
          result = a - b;
          break;
        case "*":
          result = a * b;
          break;
        case "/":
          result = a / b;
          break;
        default:
          console.log(`Error: invalid operator ${token}`);
          return;
      }

      stack.push(result);
    }
  }

  if (stack.length === 1) {
    console.log(stack[0]);
  } else if (stack.length > 1) {
    console.log("Error: too many operands!");
  } else {
    console.log("Error: not enough operands!");
  }
}
