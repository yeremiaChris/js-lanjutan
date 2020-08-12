const angka = [-1,8,9,1,4,-5,-4,3,2,9];


// mengurutkan angka yang lebih besar dari 3 dengan for
// const baru = [];


// for (let i = 0; i < angka.length; i++) {
//     if(angka[i] > 3 ) {
//         baru.push(angka[i])
//     }
// }




// filter

// const baru = angka.filter(function(a) {
//     return a >= 3;
// });

// const baru = angka.filter(a => a >= 3);




// map 
// map adalah petakan semua element pada array dengan sebuah fungsi
// yang baru

// kalikan semua angka dengan 2
// bedanya dia membuat yang baru dan tidak merubah yang lama

// const newAngka = angka.map(a => a * 2);


// reduce 
// jumlahkan seluruh elemen pada array.


// reduce memiliki 2 argumen

// 0 + -1 + 8 + 9 + 1 + 4 + -5 + -4 + 3 + 2 + 9]

// jadi dia seperti diatas dan sebenernya ada nilai difaultny 0

// const newAngka = angka.reduce((accumulator, currentValue) => accumulator + currentValue,5);



// method chaining
// cari angka  >  5
// kalikan 3
// jumlahkan

const newAngka = angka.filter(a => a > 5)
    .map(a => a * 3)
    .reduce((acc,curr) => acc +  curr);