function ReadMoreMovie(props) {
    const {
        Title: title,
        Year: year,
        Runtime: runtime,
        Genre: genre,
        Actors: actors,
        Plot: plot,
        Poster: poster,
    } = props;
const text = title.replace(/^a-z0-9 /i, '').replace(/\s/, '+');
    return (
        <div className='row'>
            <div className='col s12'>
                <h1 style={{ marginTop: 0 }}>{title}</h1>
            </div>
            <div className='col s5'>
                {poster !== 'N/A' ? (
                    <img className='responsive-img' src={poster} alt='' />
                ) : (
                    <img
                        className='responsive-img'
                        src={`https://via.placeholder.com/300x430.png?text=${text}`}
                        alt=''
                    />
                )}
            </div>
            <div className='col s7'>
                <ul style={{ marginTop: 0 }}>
                    <li>Year: {year}</li>
                    <li>Runtime: {runtime}</li>
                    <li>Genre: {genre}</li>
                    <li>Actors: {actors}</li>
                </ul>
                <p>{plot}</p>
            </div>
        </div>
    );
}

export default ReadMoreMovie;
