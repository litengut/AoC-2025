

const file = Bun.file("./src/2/input.txt")
const content = await file.text()
const ranges = content.split(",").map((s) => s.split("-"))
let sum = 0
ranges.map((range) =>{
    const start = Number.parseInt(range[0]!)
    const end = Number.parseInt(range[1]!)

    for (let i = start; i <= end; i++) {
        const s = i.toString().split("");
        const repeating = isreapeting(s)
        if(repeating){
            console.log(i)
            sum += i
        }
    }

})


// console.log(isreapeting("121212".split("")))
// [
//   '8', '2', '4',
//   '8', '2', '4',
//   '8', '2', '4'
// ]

function isreapeting(s: string[]){
    const current: string[] = []

    function check(s:string[]){
        if(s.length === 0) return true;
        const starts = startsWithArray(s,current)
        if(starts) {
            const slice = s.slice(current.length)
            return check(slice)
        }
        return false        
    }

    for(const c of s.slice(0,s.length / 2 )){
        current.push(c)
        const x = check(s)
        if (x === true) return true
    }
    return false
}


function startsWithArray<T>(arr: T[], prefix:T[]) {
  if (prefix.length > arr.length) return false;
  return prefix.every((val, i) => arr[i] === val);
}

console.log(sum)
