$('.search-button').on('click', function() {
    $.ajax({
        // .val itu jadi maksudnya adalah
        // jquery mencarikan kita kelas input keyword dan mengambil apapun value atau nilai inputannya
        url: 'http://www.omdbapi.com/?apikey=c7854a79&s=' + $('.input-keyword').val(),
        success: result => {
            const movie = result.Search;
            // looping membuat movie nya kedalam card
            let cards = '';
            movie.forEach(m => {
                cards +=    showCards(m);
            });
    
            $('.movie-container').html(cards);
    
            // ketika di klik kita mengirim ajax sambil ngirim data imdb id
    
            $('.modal-detail-button').on('click', function() {
                console.log($(this).data('imdbid'));
    
    
                $.ajax({
                    url: 'http://www.omdbapi.com/?apikey=c7854a79&i=' + $(this).data('imdbid'),
                    success: m => {
                        const movieDetail = showDetail(m);
    
                            $('.modal-body').html(movieDetail)
                    },
                    error: (e) => {
                        console.log(e.responseText);
                    }
                })
            });
        },
        error: (e) => {
            console.log(e.responseText);
        }
    });
})






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