//ChessBoard

//Using While
let times = 0
let size = 8
let count = 8
let end = ""

console.log('While')
while(times < size){
    let teste = count
    if(times % 2 == 0){
        while(teste > 0){
            if(teste % 2 == 0 ){
                end += " "
            }else{
                end += "#"
            }
            teste--
        }
    }else{
        while(teste > 0){
            if(teste % 2 !== 0 ){
                end += " "
            }else{
                end += "#"
            }
            teste--
        }
    }

    times++
    console.log(end)
    end = ""
}
