

const file = Bun.file("./src/5/input-example.txt")
const content = await file.text()
const lines = content.split("\n")
const breakpoint = lines.findIndex((e) => e === "")
const ranges = lines.slice(0,breakpoint)
const ingredients = lines.slice(breakpoint + 1)
console.log(ranges)
console.log(ingredients)

// const number = ingredients.filter((ingredientString) => {
//     const ingredient = Number.parseInt(ingredientString)
//     const r = ranges.filter((range) => {
//         const split = range.split("-")
//         const start =  Number.parseInt(split[0]!)
//         const end = Number.parseInt(split[1]!)
//         if (start <= ingredient && ingredient <= end)return true
//         return false
//     } )
//     return r.length >= 1
// })









const number = ranges.map((r) => {
    const split = r.split("-");
    const start = Number.parseInt(split[0]!)
    const end = Number.parseInt(split[1]!)





    const diff =  (end - start)
    console.log(diff)
    return diff
}).reduce((p,c) => p + c,0)

console.log(number)