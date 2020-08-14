// callback
// synchronous callback
// function hallo(nama) {
//     alert(`hallo ${nama}`);
// }


// // callback itu adalah function
// function tampilkanPesan(callback) {
//     const nama = prompt('Masukkan nama : ');
//     callback(nama);
// }


// tampilkanPesan(hallo); 




// const mhs = [
//     {
//         "nama": "yeremia",
//         "nrp": "043040023",
//         "email": "yeremia@gmail.com",
//         "jurusan": "sistem informasi",
//         "idDosenWali": 1
//     },
//     {
//         "nama": "angga",
//         "nrp": "043040023",
//         "email": "angga@gmail.com",
//         "jurusan": "sistem informasi",
//         "idDosenWali": 1
//     },
//     {
//         "nama": "alex",
//         "nrp": "043040023",
//         "email": "alex@gmail.com",
//         "jurusan": "sistem informasi",
//         "idDosenWali": 1
//     },
// ];

// console.log('mulai');
// mhs.forEach(m => {
//     for (let i = 0; i < 100000; i++) {
//         let date = new Date();
//     }
//     console.log(m.nama)
// }); 


// Asynchrounous callback
function getDataMahasiswa(url, success, error) {
    let xhr = new XMLHttpRequest();

    xhr.onreadystatechange = function() {
        // 4 itu adalah state terakhir
        if(xhr.readyState === 4) {

            // 200 itu artinya ok
            if(xhr.status === 200) {
                success(xhr.response);
            } else if( xhr.status === 404 ) {
                error();
            }
        }
    }

    // open itu ada 2 parameter satunya methodnya yang satunya alamat urlnya 

    xhr.open('get',url);
    xhr.send();
}





getDataMahasiswa('mahasiswa.json',results => {
    console.log(results);
},() => {

});
