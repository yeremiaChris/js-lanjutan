// for .. of
// const mhs = ['yeremia','angga','alex'];

// for (let i = 0; i < mhs.length; i++) {
//     console.log(mhs[i]);
    
// }


// foreach
// foreach khusus array
// mhs.forEach(m => console.log(m));


// foroff
// for(const m of mhs) {
//     console.log(m);
// }

// string looping

// const nama = 'yeremia';
// for(const n of nama ) {
//     console.log(n);
// }


// const mhs = ['yeremia', 'angga', 'alex'];

// mhs.forEach((m,i) => {
//     console.log(i);
//     console.log(`${m} adalah mahasiswa ke-${i+1}`)
// });


// for(const [i,m] of mhs.entries()){
//     console.log(`${m} adalah mahasiswa ke-${i + 1}`)
// }




// nodelist
// const liNama = document.querySelectorAll('.nama');

// // console.log(liNama);

// // liNama.forEach(n => console.log(n.textContent));


// for(n of liNama) {
//     console.log(n.innerHTML);
// }



// arguments 
// function jumlahkanAngka() {

//     // tidak bisa karna reduce digunakan untuk array
//     // return arguments.reduce((a,i) => a + i);
//     let jumlah = 0;
//     // arguments.forEach(a => jumlah += a);

//     for(a of arguments) {
//         jumlah += a;
//     }

//     return jumlah;

// }

// // jika kita tidak memberikan argumen pada function secara otomatis dia akan memberikan argument yang namanya arguments

// console.log(jumlahkanAngka(1, 2, 3, 4, 5));







// for in

// looping properti dari object

// const mhs = {
//     nama: 'yeremia',
//     umur: 23,
//     email: 'yeremia@gmail.com'
// }

// for(m in mhs){
//     console.log(m);
//     // value:
//     console.log(mhs[m]);
// }

// kalo mau ambil valuenya kita ambil pake index




