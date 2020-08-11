

// function Mahasiswa(nama,energi) {
//     // dibalik layar :
//     // let this = Object.create(Mahasiswa.prototype)
//     this.nama = nama;
//     this.energi = energi;
// }

// Mahasiswa.prototype.makan = function(porsi) {
//     this.energi += porsi;
//     console.log(`hello ${this.nama} selamat makan`);
// }

// Mahasiswa.prototype.main = function(jam) {
//     this.energi -= jam * 2;
//     console.log(`hello ${this.nama} selamat bermain`);
// }

// Mahasiswa.prototype.tidur = function(jam) {
//     this.energi += jam * 2;
//     return `hello ${this.nama} selamat tidur`
// }


// let yeremia = new Mahasiswa('yeremia',10);



// mengubah semua itu kedalam konsep kelas
class Mahasiswa {
    // kalo kita mau buat properti di dalam kelas pake construktor
    constructor(nama, energi) {
        this.nama = nama;
        this.energi = energi;
    }
    main(jam){
         this.energi -= jam * 2;
         return `hello ${this.nama} selamat main`;
    }

    makan(porsi){
        this.energi += porsi;
        return `hello ${this.nama} selamat makan`;
    }

    tidur(jam) {
        this.energi += jam * 2;
        return `hello ${this.nama} selamat tidur`;
    }
}


let yeremia =  new Mahasiswa('yeremia',10);