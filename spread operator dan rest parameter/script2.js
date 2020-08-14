
// rest parameter

// function myFunc() {
//     // return a;
//     // args itu yang di kembalikan array
//     // ada cara lain
//     // return arguments;
//     // tapi bentuk diatas bukan argument kita harus ubah ke array dulu
//     // return Array.from(arguments);

//     // pake spread operator
//     return [...arguments];
// }

// console.log(myFunc(1,2,3,4,5));


// function jumlahkan(...args)  {
//     // let total = 0;
//     // for(const n of args) {
//     //     total += n;
//     // }
//     // return total;

//     return args.reduce((a,b) => a + b);
// }

// console.log(jumlahkan(1,2,3,4,5));



// array destructuring

// const kelompok1 = ['yeremia','selin','pello','netanya'];


// // setiap nama yang muncul pertama adalah ketua yang kedua adalah wakil dan sisanya anggota
// const [ketua, wakil,...anggota] = kelompok1;
// console.log(anggota);


// object destructuring

// const team = {
//     pm: 'yeremia',
//     frontEnd1: 'selin',
//     frontEnd2: 'alwan',
//     backEnd: 'angga',
//     ux: 'wida',
//     devOps: 'gaby',
// }

// const {pm, ...myTeam} = team;
// console.log(pm);



// filtering
function filterBy(type,...values) {
    return values.filter(v => typeof v === type)
}

console.log(filterBy('string',1,2,'yeremia',false,10,true,'selin'));





