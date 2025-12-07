

const file = Bun.file("./src/5/input.txt")
const content = await file.text()
const lines = content.split("\n")
const breakpoint = lines.findIndex((e) => e === "")
const rangesstrings = lines.slice(0,breakpoint)
const ingredients = lines.slice(breakpoint + 1)

const ranges = rangesstrings.map((r) => {
    const split = r.split("-");
    const start = Number.parseInt(split[0]!)
    const end = Number.parseInt(split[1]!)
    return [start,end]
})


const sort = ranges.sort((a,b) => (a[0] || 0) - (b[0] || 0) )
// console.log(sort)
const combined: number[][] = []

sort.map((r) => {
    const last = combined.at(-1)
    if(last === undefined) {
        combined.push(r)
        return
    }
    if(last[1]!  >= r[0]!){
        if (last[1]! < r[1]!){
        combined.pop()
        combined.push([last[0]!,r[1]!])
        }
        return
    }
    combined.push(r)

})

const number = combined.map((r) => {
    const start = r[0]!
    const end = r[1]!

    const diff = (end - start) +1
    console.log(r,diff)
    return diff
}).reduce((p,c) => p + c,0)




// console.log(combined)

console.log(number)