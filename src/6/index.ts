

const file = Bun.file("./src/6/input.txt")
const conent = await file.text()
const lines = conent.split("\n")
const numbersarray = lines.slice(0,-1).map((r) => r.split(" ").filter(word => word.length > 0))
const opperators = lines.at(-1)?.split(" ").filter(word => word.length > 0)!
console.log(numbersarray,opperators) 

const out = numbersarray[0]?.map((_,i) => {
    const numbers = numbersarray.map((numbers) => Number.parseInt(numbers[i] || ""))
    const opperator = opperators[i]!
    if(opperator === "+"){
        return numbers.reduce((p,c) => p + c)
    }else if (opperator === "*"){
        return numbers.reduce((p,c) => p * c)
    }
    throw new Error("wtf")
}).reduce((p,c) => p + c)

console.log(out)