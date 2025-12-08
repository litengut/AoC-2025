const file = Bun.file("./src/6/input.txt");
const conent = await file.text();
const lines = conent.split("\n");
const numbers = lines
  .slice(0, -1)
  .map((r) => r.split("").map((number) => Number.parseInt(number)));
const opperators = lines.at(-1)?.split("")!;
console.log(numbers, opperators);

let currentOperator = "";
let number = 0;
let sum = 0;
for (const [i, opperator] of opperators.entries()) {
  if (opperator !== " ") {
    currentOperator = opperator;
    console.log(number);
    sum += number;
    number = 0;
  }
  const xy = Number.parseInt(
    numbers
      .map((row) => {
        if (Number.isNaN(row[i])) return;
        return row[i]!;
      })
      .filter((x) => x !== undefined)
      .join(""),
  );
  if (Number.isNaN(xy)) continue;
  // console.log(xy);
  if (xy !== 0) {
    if (currentOperator === "+") {
      number += xy;
    } else if (currentOperator === "*") {
      if (number === 0) number = 1;
      number *= xy;
    }
  }
}
sum += number;
console.log("sum", sum);
