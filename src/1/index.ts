
const StartPossition = 50;


const file = Bun.file("./src/1/input.txt");
const content = await file.text();
const lines = content.split("\n");

let position = StartPossition;
let zeros = 0

for (const line of lines) {
    const minus = line.at(0) === "L" ? -1 : 1;
    const number = Number.parseInt(line.substring(1)) * minus
    const previouspostion = position
    position += number
    const previouszeros = zeros

    if(position < 0){
        console.log("x",position)
        let nzeros = Math.floor(Math.abs(position) / 100) + 1
        console.log("nzero",nzeros)
        position = 100 - Math.abs(position % 100)
        nzeros += nzeros === 0 ? 1 : 0
        nzeros += previouspostion === 0 ? -1 : 0 

        
        if(position === 100){
            nzeros += 1
            position = 0;
        }
        zeros += nzeros
        console.log("------1",zeros,nzeros, number);
    
    }
    if(position >= 100){
        console.log("y",position)
        let nzeros = Math.floor(Math.abs(position) / 100)
        position = position % 100
        nzeros += nzeros === 0 ? 1 : 0
        nzeros += previouspostion === 0 ? -1 : 0 
        
        zeros += nzeros
        console.log("------1",zeros,nzeros, number);
   
        
    }

    if(position === 0 && zeros === previouszeros ){ 
            console.log("------3",1);
            zeros++;
    };

    console.log(position)
    
}
console.log("postion",position)
console.log("zerors",zeros)