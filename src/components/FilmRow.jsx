const FilmRow = (props) =>{
    const poster = "https://image.tmdb.org/t/p/w780" + props.film.poster_path
    const year = props.film.release_date.substring(0, 4)

    return(
        <div className="film-row">
            <img src={poster} alt="movie poster"></img>
            <div className="film-summary">
            <h1>{props.film.title}</h1>
            <p>{year}</p>
            </div>
        </div>
    )
}

export default FilmRow