// ambil semua elemen vidio
// const elementVidio = document.querySelectorAll('[data-duration]');
// isi di atas adalah nodelist
// ubah menjadi array
const elementVidio = Array.from(document.querySelectorAll('[data-duration]'));



// pilih hanya yang javascript
let javascript = elementVidio.filter(vidio => vidio.textContent.includes('JAVASCRIPT LANJUTAN'))



// ambil durasi masing2 vidio
    .map(item => item.dataset.duration)

// ubah durasi menjadi int, ubah menit ke detik
    .map(waktu => {
        // mensplit waktu
        const parts = waktu.split(':').map(part => parseFloat(part));
        return (parts[0] * 60) + parts[1];  
    })



// jumlahkan semua detik
    .reduce((total,detik) => total + detik);


// ubah format jam menit detik
const jam = Math.floor(javascript / 3600);

javascript = javascript - jam * 3600;


const menit = Math.floor(javascript / 60);
const detik = javascript - menit * 60



// simpan di dom

const pDurasi = document.querySelector('.total-durasi');
pDurasi.textContent  = `${jam} jam. ${menit} menit, ${detik}`;


const jumlahvidio = elementVidio.filter(vidio => vidio.textContent.includes('JAVASCRIPT LANJUTAN')).length;

const total = document.querySelector('.jumlah-video');

total.textContent = `${jumlahvidio} vidio`