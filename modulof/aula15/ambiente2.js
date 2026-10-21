var num = [4,5,6,7,8]
/*
for (var i = 0; i <= 4; i++){
    console.log(num[i])
}
    */

for (var i in num){
    console.log(num[i])
}

let pos = num.indexOf(6)
console.log(`O valor 6 esta na posição ${pos}`)