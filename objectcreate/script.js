// // object literal
// problemnya : tidak efektif untuk problem yang banyak
// let mahasiswa = {
//     nama : 'yeremia',
//     energi: 10,
//     makan : function(porsi){
//         this.energi = this.energi + porsi; 
//         console.log(`hello ${this.nama}, selamat makan`); 
//     }   
// }


// let mahasiswa2 = {
//     nama: 'dody',
//     energi: 10,
//     makan: function (porsi) {
//         this.energi = this.energi + porsi;
//         console.log(`hello ${this.nama}, selamat makan`);
//     }
// }


// function declaration
// kita membuat templatenya dulu jadi lebih efektif dari literal

// huruf M nya besar menandai object

// buat method kayak object literal
const methodMahasiswa = {
    makan: function (porsi) {
        this.energi += porsi;
        console.log(`hello ${this.nama}, selamat makan`);
    },

    main: function (jam) {
        this.energi -= jam;
        console.log(`hallo ${nama} selamat bermain`);
    },

    tidur : function(jam){
        this.energi += jam * 2;
        console.log(`hello ${this.nama} selamat tidur`);
    }
}





function Mahasiswa(nama,energi) {
    // menggunakan object.create agar kita tidak perlu
    // mendaftarkan setiap method2 yang kita buat di sini
    let mahasiswa = Object.create(methodMahasiswa);
    mahasiswa.nama = nama;
    mahasiswa.energi = energi;

    
    // karna pake declaration harus di return
    return mahasiswa;
}

let yeremia = Mahasiswa('yeremia',10);
// kalo pake function declaration harus pake return




// construktor function
// tidak perlu pake return dan deklarasi variabel





// function Mahasiswa(nama, energi) {
//     this.nama = nama;
//     this.energi = energi;
//     this.makan = function (porsi) {
//         this.energi += porsi;
//         console.log(`hello ${this.nama}, selamat makan`);
//     }

//     this.main = function (jam) {
//         this.energi -= jam;
//         console.log(`hallo ${nama} selamat bermain`);
//     }
// }


// // harus pake new kalo pake construtor kalo tidak berarti kalian
// // pake function declaration terus dia akan mencari return
// // jadi harus pake new kalo mau pake construktor 

// let yeremia = new Mahasiswa('yeremia',10)

