// destructuring merupakan exprestion atau syntax dari js 
// yang dapat membongkar nilai dari array atau properti 
// dari object kedalam variabel yang terpisah



// destructuring array
// const  coba = ['satu','dua','tiga'];

// const [a,b,c] = coba;
// console.log(a);


// const perkenalan = ['hallo','nama','saya','yeremia chris'];

// const [salam,satu,dua,nama] = perkenalan

// kalo kita cuma butuh beberapa saja
// skip item
// const [salam, , ,nama] = perkenalan;

// console.log(nama);


// swap item
// let a = 1;
// let b = 2;

// console.log(a);
// console.log(b);
// [a,b] = [b,a];
// console.log(a);
// console.log(b);



// return values pada function
// function coba(){
//     return [1,2];
// }

// // const a = coba();
// // bisa langsung kita petakan juga
// const [a,b] = coba()
// console.log(a);





// rest parameter
// const [a, ...args] = [1,2,3,4];
// console.log(a);
// console.log(args);


// destricturing object

// const mhs = {
//     nama : 'yeremia',
//     umur : 20
// }
// // kalo object nama variabelnya harus sama dengan nama
// // properti yang kita buat dalam object mhs
// const {nama,umur} = mhs

// console.log(nama);




// assignment tanpa deklarasi object


// ({ nama, umur } = {
//     nama: 'yeremia',
//     umur: 20
// });

// console.log(umur);



// assign ke variabel baru 


// const mhs = {
//     nama : 'yeremia',
//     umur : 20
// }
// const {nama: n,umur: u} = mhs

// console.log(n);



// memberikan defult value


// const mhs = {
//     nama : 'yeremia',
//     umur : 20,
//     email : 'yeremia@gmail.com'
// }
// const {nama,umur,email = 'defult@gmail.com'} = mhs
// // jika kita menambah variabel baru tanpa default dia akan undefine 

// console.log(email);


// // rest paramater0
// const mhs = {
//     nama : 'yeremia',
//     umur : 20,
//     email : 'yeremia@gmail.com'
// }
// const {nama,...args} = mhs
// // jika kita menambah variabel baru tanpa default dia akan undefine 

// console.log(args);


// Mengambil field pada object setelah dikirim sebagai parameter untuk funciton


const mhs = {
    id : 123,
    nama : 'yeremia',
    umur : 20,
    email : 'yeremia@gmail.com'
}


function getIdMhs({id}) {
    return id;
}

// bisa juga kita mengirim objectnya yang dibawah yaitu mhs
// terus di functionnya itu kita bongkar dulu yang kita ambil
// id nya saja

console.log(getIdMhs(mhs));