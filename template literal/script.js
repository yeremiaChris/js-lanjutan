// template literal hanya bisa di gunakan dengan back tick (``)
// const nama = 'yeremia';
// const umur = 23;
// console.log(`${nama} ${umur}`);


// const mhs = {
//     nama : 'yeremia',
//     umur : 33,
// };

// const el = `<div class="mhs">
//     <h2>${nama}</h2>
//         <span></span>
// </div>`



// latihan
// const mhs = {
//     nama : 'yeremia',
//     umur : 20,
//     nrp : '0813221312',
//     email : 'yeremia@gmail.com'
// };

// const el = `<div class="mhs">
//     <h2>${mhs.nama}</h2>
//     <span class="nrp">${mhs.nrp}</span>
// </div>`

// console.log(el);

// document.body.innerHTML = el;



// looping
// const mhs = [
//     {
//         nama: 'yeremia',
//         email : 'yeremia@gmail.com'
//     },
//     {
//         nama: 'selin',
//         email : 'selin@gmail.com'
//     },
//     {
//         nama: 'pello',
//         email : 'pello@gmail.com'
//     },
// ];

// const el = `<div class="mhs">
//     ${mhs.map(m => `<ul>
//         <li>${m.nama}</li>
//         <li>${m.email}</li>
//     </ul>`).join('')}
// </div>`



// conditionals
// ternary
// const lagu = {
//     judul : 'tetap dalam jiwa',
//     penyanyi :'isyana saraswati'
// }

// const el = `<div class="lagu">
//     <ul>
//         <li>${lagu.penyanyi}</li>


//         <li>${lagu.judul} ${lagu.feat ?  `(feat. ${lagu.feat})` : ''}</li>
//     </ul>
// </div>`


        // jika ada lagu.feat maka tampilkan feat jika tidak tampilkan string kosong




// nested
// html fragment bersarang

const mhs = {
    nama: 'yeremia',
    semester : 5,
    matakuliah : [
        'Rekayasa Web',
        'Analisis dan perancangan sistem informasi',
        'Pemrograman sistem interaktif',
        'Perancangan sistem berorientasi object'
    ]
}


function cetakMataKuliah(matakuliah){
    return `
        <ol>
            ${matakuliah.map(mk => `<li>${mk}</li>`).join('')}
        </ol>
    `;
}


const el = `<div class="mhs">
    <h2>${mhs.nama}</h2>
    <span class="semester">
        Semester : ${mhs.semester}
    </span>
    <h4>Mata kuliah : </h4>
    ${cetakMataKuliah(mhs.matakuliah)}
</div>`



document.body.innerHTML = el