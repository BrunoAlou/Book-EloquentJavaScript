//Looping a triangle

//Using While
let times = 0
let string = ''
console.log('While')
while(times < 7){
    times++
    string = string + '#'
    console.log(string)
}

//Using Do While
let times2 = 0
let string2 = ''
console.log('DoWhile')
do{
    times2++
    string2 = string2 + '#'
    console.log(string2)
}while(times2 < 7)

//Using for
let string3 = ''
console.log('For')
for(let times3 = 0; times3 < 7;times3++){
    string3 = string3 + '#'
    console.log(string3)
}
