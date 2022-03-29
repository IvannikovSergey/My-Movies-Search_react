import React from 'react';

function Movie(props) {
    const {
        Title: title,
        Year: year,
        imdbId: id,
        Type: type,
        Poster: poster,
    } = props;
    const text = title.replace(/^a-z0-9 /i, '').replace(/\s/, '+');
    return (
        <div id={id} className='card'>
            <div className='card-image waves-effect waves-block'>
                {poster !== 'N/A' ? (
                    <img className='activator' src={poster} alt='' />
                ) : (
                    <img
                        className='activator'
                        src={`https://via.placeholder.com/300x430.png?text=${text}`}
                        alt=''
                    />
                )}
                {/* <img className='activator' src={poster} alt='' /> */}
            </div>
            <div className='card-content'>
                <span className='card-title activator grey-text text-darken-4'>
                    {title}
                </span>
                <p>
                    <span className='right'>
                        {year}  
                          {type}
                    </span>
                    <a
                        href='!#'
                        className='right'
                        onClick={(event) => {
                            event.preventDefault();
                            props.readMoreHandler(id);
                        }}
                    >
                        Read more
                    </a>
                </p>
            </div>
        </div>
    );
}

export { Movie };
