// $('.search-button').on('click', function() {
//     $.ajax({
//         // .val itu jadi maksudnya adalah
//         // jquery mencarikan kita kelas input keyword dan mengambil apapun value atau nilai inputannya
//         url: 'http://www.omdbapi.com/?apikey=c7854a79&s=' + $('.input-keyword').val(),
//         success: result => {
//             const movie = result.Search;
//             // looping membuat movie nya kedalam card
//             let cards = '';
//             movie.forEach(m => {
//                 cards +=    showCards(m);
//             });
    
//             $('.movie-container').html(cards);
    
//             // ketika di klik kita mengirim ajax sambil ngirim data imdb id
    
//             $('.modal-detail-button').on('click', function() {
//                 console.log($(this).data('imdbid'));
    
    
//                 $.ajax({
//                     url: 'http://www.omdbapi.com/?apikey=c7854a79&i=' + $(this).data('imdbid'),
//                     success: m => {
//                         const movieDetail = showDetail(m);
    
//                             $('.modal-body').html(movieDetail)
//                     },
//                     error: (e) => {
//                         console.log(e.responseText);
//                     }
//                 })
//             });
//         },
//         error: (e) => {
//             console.log(e.responseText);
//         }
//     });
// })



// menggunakan fetch

const searchButton = document.querySelector('.search-button');
searchButton.addEventListener('click', function() {

    const inputKeyword = document.querySelector('.input-keyword');
    fetch('http://www.omdbapi.com/?apikey=c7854a79&s=' + inputKeyword.value)
    // kita belum bisa liat jika kita hanya menulis seperti dibawah
        // .then(response => console.log(response));
        // makanya dibikin json agar bentuknya json
        // .then(response => console.log(response.json()));
        // tapi karna hasil itu adalah promise dan kita mau menjalankannya secara asynchrounous 
        // makan response.jsonnya harus kita jalankan lagi thennya.
        .then(response => response.json())
        .then(response => {
            const movies = response.Search;
            let cards = '';
            movies.forEach(m => cards += showCards(m));

            const movieContainer = document.querySelector('.movie-container');
            movieContainer.innerHTML = cards;


            const modalDetailButton = document.querySelectorAll('.modal-detail-button');
            // karena modaldetailbutton itu banyak makanya pake selectorall 
            // dan bentuknya adalah array atau nodelist
            // makanya sebelum dikasi eventlisetener harus di looping terlebih dahulu
            // pake foreach
            modalDetailButton.forEach(btn => {
                btn.addEventListener('click', function () {
                    // cari dataset yang nama datasetnya imdbid
                    const imdbid = this.dataset.imdbid;
                    fetch('http://www.omdbapi.com/?apikey=c7854a79&i=' +imdbid)
                        .then(response => response.json())
                        .then(m => {
                            const movieDetail = showDetail(m);
                            const movieContainer = document.querySelector('.modal-body')
                            movieContainer.innerHTML = movieDetail;
                        });
                })
            });
        });

    
        
});








function showCards(m){
    return `<div class="col-md-4 my-5">
                <div class="card">
                    <img src="${m.Poster}" class="card-img-top">
                    <div class="card-body">
                        <h5 class="card-title">${m.Title}</h5>
                        <h6 class="card-subtitle mb-2 text-muted">${m.Year}</h6>
                        <a href="#" class="btn btn-primary modal-detail-button" data-toggle="modal" data-target="#movieDetail" data-imdbid="${m.imdbID}">Show detail</a>
                    </div>
                </div>
            </div>`
};


function showDetail(m) {
    return `<div class="container-fluid">
                <div class="row">
                    <div class="col-md-3">
                        <img src="${m.Poster}" class="img-fluid" alt="">
                    </div>

                    <div class="col-md">
                        <ul class="list-group">
                            <li class="list-group-item"><h1>${m.Title} (${m.Year})</h1>     </li>
                            <li class="list-group-item"><strong>Director : </strong>${m.Director}</li>
                            <li class="list-group-item"><strong>Actors : </strong> ${m.Actors}</li>
                            <li class="list-group-item"><strong>Writer : </strong>${m.Writer}</li>
                            <li class="list-group-item"><strong>Plot : </strong> <br> ${m.Plot}</li>
                        </ul>
                    </div>
                </div>
            </div>`
}