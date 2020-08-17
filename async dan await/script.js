// const coba = new Promise(resolve => {
//     setTimeout(() => {
//         resolve('selesai')
//     }, 2000);

// });




// kalo cobanya langsung di console.log maka promisenya akan pending
// karna dia bukan asynchronous tapi synchronous oleh karena itu kita harus 
// pake yang namanya then
// coba.then(() => console.log(coba));






function cobaPromise() {
    return new Promise((resolve,reject) => {

        const waktu = 5000;
        if(waktu < 5000){
            setTimeout(() => {
                resolve('selesai')
            }, waktu);
        } else {
            reject('lama kali');
        }


    });
}





// const coba = cobaPromise();
// // console.log(coba);
// // itu kalo di log maka hasil promisenya masih pending oleh karena itu kita harus
// // buat syntax yang menggunakan then.

// coba.then(() => console.log(coba))
//     .catch(() => console.log(coba));


// async function cobaAsync() {
//     const coba = await cobaPromise();
//     console.log(coba);
// }


// cobaAsync();

async function cobaAsync() {
    try {
        const coba = await cobaPromise();
        console.log(coba);
    } catch(err) {
        console.error(err);
    }
}


cobaAsync();