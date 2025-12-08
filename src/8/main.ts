import { addCube, init } from "./render";
import text from "./input.txt" with { type: "text" };

function cubes() {
  const lines = text.split("\n");
  const cords = lines.map((l) => l.split(",").map((n) => Number.parseInt(n)));
  cords.map((c) => {
    addCube(c[0]!, c[1]!, c[2]!);
  });
}
init();
cubes();
