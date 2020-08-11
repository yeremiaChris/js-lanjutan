// const tampilNama = function (nama) {
//     return `hallo, ${nama}`;
// }

// console.log(tampilNama('yeremia'));






// satu parameter

// const tampilNama = (nama) => {
//     return `hallo ${nama}`;
// }

// console.log(tampilNama('chris'));



// // dua paramater

// const tampilNama = (nama,waktu) => {
//     return `selamat ${waktu}, ${nama}`;
// }

// console.log(tampilNama('yeremia','siang'));




// ini disebut implisit return
// kalo satu parameter bisa tidak pake kurung,return dan kurung kurawal
// const tampilNama = nama => `hallo ${nama}`;


// console.log(tampilNama('chris'));





// tanpa parameter
// const tampilNama = () => `hello world`;
// console.log(tampilNama());



// function map
let mahasiswa = ['yeremia chris','alex kribo','angga kampret'];

// ingin menghitung jumlah huruf dari masing2 mnahasiswa
// disimpan dalam array 


// map itu berguna untuk memetakan suatu variabel kedalam function
// let jumlahHuruf = mahasiswa.map(function(nama) {
//     return nama.length;
// });

// console.log(jumlahHuruf);


// ini juga kalo mengembalikan menjadi array lagi
// let jumlahHuruf = mahasiswa.map(nama => nama.length);
// console.log(jumlahHuruf);



// kalo mau mengembalikanny menjadi object caranya  :

// kurung kurawalnya harus di bungkus dengan kurung biasa 


let jumlahHuruf = mahasiswa.map(nama => ({
    nama: nama,
    jmlHuruf: nama.length
}));
console.table(jumlahHuruf);