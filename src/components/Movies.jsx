import React from "react";
import { Movie } from "./Movie";
import ReadMoreMovie from "./ReadMoreMovie";

function Movies(props) {
  const { movies = [] } = props;
  return (
      <div className='movies'>
          {movies.length ? (
              movies.map((movie) => (
                  <>
                      <Movie
                          key={movie.imdbId}
                          readMoreHandler={props.readMoreHandler}
                          {...movie}
                      />
                      {/* <ReadMoreMovie readMoreHandler={props.readMoreHandler} /> */}
                  </>
              ))
          ) : (
              <h3>Nothing found...</h3>
          )}
      </div>
  );
}

export { Movies };
