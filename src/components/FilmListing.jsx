import FilmRow from './FilmRow'
const FilmListing = (props) =>{
    const allFilms = props.films.map(film =>{
        return <FilmRow film={film}/>
    })
    return(
        <>
        {allFilms}
        </>
    )
}

export default FilmListing