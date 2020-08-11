// // function init(){
// //     // let nama = 'yeremia';
// //     function tampilNama(nama) {
// //         console.log(nama);
// //     }

// //     // kalo function inner ini dekembalikan dan tidak dijalankan 
// //     // kita harus buat variabel pada function yang diatasnya terus 
// //     // variabelnya dijalankan.

// //     return tampilNama;
// // }
// // let panggilNama = init();
// // panggilNama('chris')


// // kalo seperti diatas bisa lebih ringkas lagi 
// // kita bisa tidak perlu membuat nama functionnya
// // atau anonymous function

// function init() {
//     // let nama = 'yeremia';
//     return function (nama) {
//         console.log(nama);
//     }
// }
// let panggilNama = init();
// panggilNama('yeremia')
// panggilNama('chris')


// alasan kenapa closure itu;
// membuat factories function


// function ucapkanSalam(waktu) {
//     return function(nama){
//         console.log(`Hallo ${nama} selamat ${waktu} semoga harimu menyenangkan `);
//     }
// }

// let selamatPagi = ucapkanSalam('pagi');
// selamatPagi('yeremia')





// let add = function() {
//     let counter = 0;

//     return function() {
//         return ++counter;
//     }
// }

// let a = add()

// console.log(a());
// console.log(a());
// console.log(a());

// karna itu repot harus menjalankan banyak function
// ada cara yang lebih efektif tinggal jalankan satu function saja
// function addnya saja



let add = (function () {
    let counter = 0;

    return function () {
        return ++counter;
    }
})();

console.log(add());
console.log(add());
console.log(add());

// itu adalah salah satu contoh closure







