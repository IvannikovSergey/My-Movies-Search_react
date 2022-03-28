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
          <span className="right">
            {year}
            {type}
          </span>
          <a
            href="!#"
            className="right"
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
