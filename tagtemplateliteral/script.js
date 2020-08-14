// tagged template
const nama = 'yeremia';
const umur = 20;
const email = 'yeremia@gmail.com'

// untuk mengambil variabel yang ada di string literal
// kita bisa pake fitur js ...args jadi kita tidak  perlu nulis semuanya
// function coba(strings, ...args) {
//     // let result = ``;

//     // // kalo values ada isinya maka di tampilkan jika tidak 
//     // // tampilkan string kosong itu dari fungsi or tadi atau ||

//     // strings.forEach((str,i) => {
//     //     result += `${str}${args[i] || ''}`;
//     // });

//     // return result;


//     // pake reduce

//     return strings.reduce((result, str, i) => `${result}${str}${args[i] || ''}`,'');
// }


// const str =  coba`hallo nama saya ${nama}, saya ${umur} tahun`;

// console.log(str);




// highlight
function highlight(strings, ...args) {
    return strings.reduce((result, str, i) => `${result}${str}<span class="hl">${args[i] || ''}</span>`, '');
}   


const str = highlight`hallo nama saya ${nama}, saya ${umur} tahun dan email saya adalah : ${email}`;

document.body.innerHTML = str

console.log(str);