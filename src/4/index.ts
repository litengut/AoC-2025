

const file = Bun.file("./src/4/input.txt")
const content = await file.text()
const lines = content.split("\n")

const neibours = [
    [-1,-1],[0,-1],[1,-1],
    [-1,0],        [1,0],
    [-1,1], [0,1], [1,1]
] as const 

const world = lines.map((l) => {
    return l.split("")
})


function find(world: string[][]):number {
    function numberOfNeibours(x: number,y: number){
        const positions = neibours.map((n) => [n[1] + x ,n[0] + y])
        const a =  positions.map((p) => {
            const x = p[1]!
            const y = p[0]!
            const value = world[x]?.[y]
            if(value === "@") return {v:true,x,y}
            return {v:false,x,y}
        })
        // console.log(x,y,a.map((x) => `${x.v},${x.x},${x.y}`))
        return a.map((x) => x.v).filter(Boolean).length
    }



    let count = 0
    const out = world.map((l,y) => {
        return l.map((r,x) => {
            if(r === "." || r === "x") return r
            const neibours = numberOfNeibours(x, y)
            if(neibours < 4) {
                count++
                return "x"
            }
            return r
        })
    })
    console.log(out.map((l) => l.join("")).join("\n"))
    console.log(count)
    if (count === 0) return 0
    return count + find(out)
}


console.log(find(world))

// console.log(out.map((l) => l.join("")).join("\n"))

// console.log(count)
