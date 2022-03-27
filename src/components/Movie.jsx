import React from "react";

function Movie(props) {
  const {
    Title: title,
    Year: year,
    imdbId: id,
    Type: type,
    Poster: poster,
  } = props;

  return (
    <div id={id} className="card movie">
      <div className="card-image waves-effect waves-block">
        <img className="activator" src={poster} alt="" />
      </div>
      <div className="card-content">
        <span className="card-title activator">{title}</span>
        <p>
          {year}
          <span className="right">{type}</span>
        </p>
      </div>
    </div>
  );
}

export { Movie };
