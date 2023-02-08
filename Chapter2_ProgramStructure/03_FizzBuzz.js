//FizzBuzz

//Using While
let times = 0
console.log('While')
while(times < 100){
    if((times % 3 == 0) && (times % 5 == 0)){
        console.log('FizzBuzz')
    }else if(times % 3 == 0){
        console.log('Fizz')
    }
    else if(times % 5 == 0){
        console.log('Buzz')
    }else{
        console.log(times)
    }
    times++
}

//Using Do While
let times2 = 0
console.log('DoWhile')
do{
    if((times2 % 3 == 0) && (times2 % 5 == 0)){
        console.log('FizzBuzz')
    }else if(times2 % 3 == 0){
        console.log('Fizz')
    }
    else if(times2 % 5 == 0){
        console.log('Buzz')
    }else{
        console.log(times2)
    }
    times2++
}while(times2 < 100)

//Using For
console.log('For')
for(let times3 = 0; times3 < 100;times3++){
    if((times3 % 3 == 0) && (times3 % 5 == 0)){
        console.log('FizzBuzz')
    }else if(times3 % 3 == 0){
        console.log('Fizz')
    }
    else if(times3 % 5 == 0){
        console.log('Buzz')
    }else{
        console.log(times3)
    }
    times3++
}
