const StartPossition = 50;

const file = Bun.file("./src/1/input.txt");
const content = await file.text();
const lines = content.split("\n");

let position = StartPossition;
let zeros = 0;

for (const line of lines) {
  const minus = line.at(0) === "L" ? -1 : 1;
  const number = Number.parseInt(line.substring(1)) * minus;
  const previouspostion = position;
  position += number % 100;

  let x = Math.floor(Math.abs(number) / 100);
  let extra = 0;

  if (position < 0) {
    if (previouspostion !== 0) extra++;
    position = 100 - Math.abs(position % 100);
  }
  if (position >= 100) {
    if (previouspostion !== 0) extra++;
    position = position % 100;
  }

  // console.log("N",zeros)
  if (position === 0 && extra === 0) {
    x++;
  }
  x += extra;

  // console.log("",previouspostion)
  console.log(
    previouspostion,
    "+",
    number,
    "=",
    position,
    " | ",
    x,
    ",",
    extra,
    "|",
    zeros,
  );
  zeros += x;
}
console.log("postion", position);
console.log("zerors", zeros);
