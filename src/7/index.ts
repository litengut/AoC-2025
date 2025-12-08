const file = Bun.file("src/7/input.txt");
const content = await file.text();
const lines = content.split("\n");
type block = "." | "|" | "^" | "S" | number;
const blocks = lines.map((l) => l.split("").map((s) => s as block));

type Pos = {
  x: number;
  y: number;
};
function getBlock(pos: Pos) {
  return blocks[pos.y]?.[pos.x];
}
function setblock(pos: Pos, block: block) {
  blocks[pos.y]![pos.x] = block;
}

const startX = blocks[0]?.findIndex((b) => b === "S")!;
const start: Pos = { x: startX, y: 0 };

function printblocks(blocks: block[][]) {
  console.log(blocks.map((l) => l.join("")).join("\n") + "\n");
}

// setInterval(() => {
//   console.clear();
//   console.log(blocks.map((l) => l.join("")).join("\n"));
// }, 1);

let split = 0;
function beam(pos: Pos, deepth: number): number {
  printblocks(blocks);
  const block = getBlock(pos);
  if (block === undefined) {
    // const oldpos: Pos = { x: pos.x, y: pos.y - 1 };
    // const block = getBlock(oldpos);
    // setblock(oldpos, typeof block === "number" ? deepth + block : deepth);
    // split += deepth;
    return 1;
  }
  switch (block) {
    // case "|":
    //   // setblock(pos, typeof block === "number" ? deepth + block : deepth);
    //   return 1;
    case "^":
      // split += 1;
      const l = beam({ x: pos.x + 1, y: pos.y }, deepth + 1);
      setblock({ x: pos.x + 1, y: pos.y }, l);
      const r = beam({ x: pos.x - 1, y: pos.y }, deepth + 1);
      setblock({ x: pos.x - 1, y: pos.y }, r);
      return l + r;
    case ".":
    case "|":
    case "S":
      setblock(pos, "|");
      return beam({ x: pos.x, y: pos.y + 1 }, deepth);
    default:
      if (typeof block === "number") {
        return block;
      }
  }
  console.log("hi");
  return 1;
}

console.log(beam(start, 0));

async function sleep(ms: number): Promise<void> {
  return new Promise((resolve) => setTimeout(resolve, ms));
}
