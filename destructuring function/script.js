// destructuring

// function penjumlahanPerkalian(a,b){
//     return [a+b,a*b];
// }

// // const jumlah = penjumlahanPerkalian(2,3);
// // console.log(jumlah);


// const [jumlah,kali] = penjumlahanPerkalian(2,3);
// console.log(jumlah);


// function kalkulasi(a,b) {
//     return {
//         tambah: a + b,
//         kurang: a - b,
//         kali: a * b,
//         bagi: a / b,
//     };
// };


// const {bagi,kurang,tambah,kali} = kalkulasi(2,5);



// destructuring function argument

// const mhs1 = {
//     nama: 'yeremia',
//     umur: 20,
//     email: 'yeremia@gmail.com'
// }

// function cetakMhs(nama,umur) {
//     return `hallo nama saya ${nama} dan saya berumur ${umur} tahun`
// }

// console.log(cetakMhs(mhs1.nama, mhs1.umur));


// pake destucturing

const mhs1 = {
    nama: 'yeremia',
    umur: 20,
    email: 'yeremia@gmail.com',
    nilai: {
        tugas: 80,
        uts: 85,
        uas:75
    }
}

function cetakMhs({nama,umur,nilai: {tugas,uts,uas}}) {
        return `hallo nama saya ${nama} dan saya berumur ${umur} tahun,dan nilai uas saya adalah ${uas}`
}

console.log(cetakMhs(mhs1));
  

