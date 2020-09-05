// pake ajax

// $.ajax({
//     url: 'http://www.omdbapi.com/?apikey=c7854a79&s=avenger',
//     success: movies => {
//         console.log(movies);
//     } 
// })


// const xhr = new XMLHttpRequest();
// xhr.onreadystatechange = function() {
//     if(xhr.status === 200) {
//         if(xhr.readyState === 4){
//             console.log(JSON.parse(xhr.response));
//         }
//     } else {
//         console.log(xhr.responseText);
//     };
// };

// xhr.open('get','http://www.omdbapi.com/?apikey=c7854a79&s=avenger');

// xhr.send();



// fetch('http://www.omdbapi.com/?apikey=c7854a79&s=avenger')
//     .then(response => response.json())
//     .then(response => console.log(response));
        



// promise

// adalah sebuah object yang merepresentasikan keberhasilan atau kegagalan dari sebuah
// even yang asynchronous dimasa yang akan datang
// janji (terpenuhi / ingkar)
// states (fulfilled / rejected / pending)

// untuk menjalankan keadaanya
// callback (resolve / reject / finally)
// aksi (then / catch)


// bentuk dari resolve dan reject itu adalah arrow function

// let ditepati = false;
// const janji1 = new Promise((resolve, reject) => {
//     if(ditepati) {
//         resolve('Janji telah di tepati')
//     } else {
//         reject('ingkarjanji');
//     }

// });

// // console.log(janji1);

// janji1
//     .then(response => console.log('ok : ' + response ))
//     .catch(response => console.log('ok : ' + response));



// contoh 2

// let ditepati = true;
// const janji2 = new Promise((resolve, reject) => {
//     if(ditepati) {
//         setTimeout(() => {
//             // reslove ini hasil kalo di tepati
//             resolve('ditepati setelah beberapa waktu');        
//         }, 2000);
//     } else {
//         setTimeout(() => {
//             // reject di ingkar
//             reject('tidak ditepati setelah beberapa waktu')
//         }, timeout);
//     }
// }); 

// console.log('mulai');
// // console.log(janji2.then(() => console.log(janji2)));
// janji2
//     // jadi apapun isi dari var ditepati finally di jalani dulu
//     .finally(() => console.log('selesai menunggu'))
//     // then itu di tepati
//     .then(response => console.log('ok :' + response))
//     // catch itu di ingkar
//     .catch(response => console.log('ok:' + response));
// console.log('selesai');


// promise.all
// ini untuk menjalankan ketika kita punya banyak promise yang mau dijalankan sekaligus

const film = new Promise(resolve => {
    setTimeout(() => {
        resolve([{
            judul: 'Avengers',
            sturadara: 'Yeremia',
            pemeran : 'angga,alex'
        }])
    }, 1000);
});


const cuaca = new Promise(resolve => {
    setTimeout(() => {
        resolve([{
            kota: 'bandung',
            temperatur: 26,
            kondisi: 'berawan'
        }])
    }, 500);
});


// cara satu2
// film.then(response => console.log(response));
// cuaca.then(response => console.log(response));


Promise.all([film,cuaca])
    // .then(response => console.log(response))
    .then(response => {
        const [film,cuaca] = response;
        console.log(film);
        console.log(cuaca);
    })