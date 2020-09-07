
let vasia = { name: "Вася", age: 25 };
let petia = { name: "Петя", age: 30 };
let masha = { name: "Маша", age: 28 };
let egor = { name: "Егор", age: 40 };
let dima = { name: "Дима", age: 35 };
let lena = { name: "Лена", age: 18 };

let users = [ vasia, petia, masha, egor, dima, lena ];

result = [...new Set(users.flatMap(({age}) => age))].sort()

getAverageAge = result.reduce(function(sum,value) {
    return sum + value;
}, 0) / result.length;

console.log(getAverageAge)

