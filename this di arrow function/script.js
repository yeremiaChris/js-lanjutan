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
// let mahasiswa = ['yeremia chris', 'alex kribo', 'angga kampret'];

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


// let jumlahHuruf = mahasiswa.map(nama => ({
//     nama: nama,
//     jmlHuruf: nama.length
// }));
// console.table(jumlahHuruf);



// konsep this pada arrow function


// constructor function


// const Mahasiswa = function() {
//     this.nama = 'yeremia';
//     this.umur = 20;
    
//     this.sayHello = function() {
//         console.log(`hallo nama saya ${this.nama} umur saya ${this.umur}`);
//     };

//     // this ini isinya adalah isi dari mahasiswa
//     // console.log(this);
// }

// const yeremia = new Mahasiswa();


// mengubah function menjadi arrow function


// const Mahasiswa = function() {
//     this.nama = 'yeremia';
//     this.umur = 20;

//     this.sayHello = () => {
//         console.log(`hallo nama saya ${this.nama} umur saya ${this.umur}`);
//     };

//     // this ini isinya adalah isi dari mahasiswa
//     // console.log(this);
// }

// const yeremia = new Mahasiswa();




// const Mahasiswa = function() {
//     this.nama = 'yeremia';
//     this.umur = 20;

//     this.sayHello = function() {
//         console.log(`hallo nama saya ${this.nama} umur saya ${this.umur}`);
//     };

    // jika set interval itu kita buat function biasa
    // bukan arrow function. maka dia akan error karna 
    // functionnya terkena hoisting oleh karena itu kita pake
    // arrow function karna arrow function tidak ada konsep this.
    // arrow function mencari leksikal scopenya keluar

    // setInterval(() => {
    //     console.log(this.umur++);
    // }, 500);

    // this ini isinya adalah isi dari mahasiswa
    // console.log(this);
// }

// const yeremia = new Mahasiswa();



const box  = document.querySelector('.box');

box.addEventListener('click',function() {
    let satu = 'size';
    let dua = 'caption';
    if (this.classList.contains(satu)) {
        [satu,dua] = [dua,satu];
    }
    this.classList.toggle(satu);
    setTimeout(() => {
        this.classList.toggle(dua)
    }, 600);
})