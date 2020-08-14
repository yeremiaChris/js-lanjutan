// spread operator adalah sebuah operator yang memecah iterables menjadi single element 


// const mhs = ['yeremia','angga','alex'];

// kalo destructoring di pecah dengan membuat variabel2 
// dengan spread operator kita hanya membuat ... di sebelahny 


// console.log(...mhs);

// jika kita pecah lagi stringnya dengan spread operator maka masing
// huruf akan di pecah menjadi huruf yang terpisah
// console.log(...mhs[0]);


// menggambungkan a2 array
// const mhs = ['yeremia','angga','alex'];
// const dosen = ['selin','angel','keke'];

// jadi hasil lognya akan menjadi gabungan dari dua array diatas

// const orang = [...mhs, ...dosen];

// console.log(orang);

// ada cara lain dengan method concat
// const orang = mhs.concat(dosen)
// console.log(orang );

// akan tetapi dengan spread operator kita lebih flexible bisa menambahkan isi array lain didalamnya atau di tengah
// const orang = [...mhs,'keren',...dosen];
// console.log(orang);




// meng-copy array

// const mhs = ['yeremia','angga','alex'];

// const mhs1 = mhs;
// console.log(mhs1 );
// dengan cara itu bisa akan tetapi ada masalah nya kita tidak benar2 meng-copy
// karena jika kita mengubah copyannya variabel yang utamanya akan ikut berubah

// oleh karena itu kita menggunakan spread operator


// const mhs1 = [...mhs];
// mhs1[0] = 'ganti';
// console.log(mhs1);
// console.log(mhs);




// const liMhs = document.querySelectorAll('li');

// console.log(liMhs[0].textContent);


// looping biasa
// mengubah isi dari kontent li itu jadi array

// const mhs = [];

// for(let i = 0; i < liMhs.length; i++) {
//     mhs.push(liMhs[i].textContent);
// }

// console.log(mhs);

// karena map itu harus bentuk array makanya kita spread agar menjadi array
// const mhs = [...liMhs].map(m => m.textContent)
 
// console.log(mhs);



const nama = document.querySelector('.nama');

const huruf = [...nama.textContent].map(h => `<span>${h}</span>`).join('');

console.log(huruf);


nama.innerHTML = huruf;









