import { Movies } from "../components/Movies";
import React from "react";
import { Preloader } from "../components/Preloader";
import { Search } from "../components/Search";

const URL = "http://www.omdbapi.com/?apikey=20fbfe28&";
const QUERY = "s=Avengers";

class Main extends React.Component {
  state = {
    movies: [],
  };

  componentDidMount() {
    fetch(`${URL}${QUERY}`)
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        this.setState({ movies: data.Search });
      });
  }

  render() {
    const { movies } = this.state;
    return (
      <main className="container content">
        <Search />
        {movies.length ? <Movies movies={movies} /> : <Preloader />}
      </main>
    );
  }
}

export { Main };
