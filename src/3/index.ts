


const file = Bun.file("./src/3/input.txt")
const content = await file.text()
const lines = content.split("\n")

const out = lines.map((line) => {
    // console.log(line)
    const c = ckeck(line,12)
    console.log(c)
    return c
    // const [pos,value] = getMaxPosition(line.slice(0,line.length -11))
    // const slice = line.slice(pos! + 1)
    // const [pos2,value2] = getMaxPosition(slice)
    // return value! * 10 + value2!
})

function ckeck(line:string,depth:number):number {
    if(depth === 0) return 0
    const [pos,value] = getMaxPosition(line.slice(0,line.length - depth +1))
    const slice = line.slice(pos! +1)
    console.log(slice, " | ", value)
    const ch = ckeck(slice,depth -1)
    
    return ch + value! * Math.pow(10,depth -1)

}
function getMaxPosition(s: string){
    const a = s.split("").map((v) => Number.parseInt(v))

    let maxValue = 0;
    let maxPosition = 0;

    a.map((n,i) => {
        if(n > maxValue){
            maxValue = n
            maxPosition = i
        }
    })
    // console.log(maxPosition)
    // console.log(maxValue)
    return [maxPosition,maxValue]
}



console.log(out.reduce((a,b) => a + b))

