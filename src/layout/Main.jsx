import { Movies } from '../components/Movies';
import React from 'react';
import { Preloader } from '../components/Preloader';
import { Search } from '../components/Search';

const URL = 'http://www.omdbapi.com/?apikey=20fbfe28&s=';
const QUERY = 'Avengers';
const TYPE = '';

class Main extends React.Component {
    state = {
        movies: [],
        loading: true,
    };

    componentDidMount() {
        fetch(`${URL}${QUERY}`)
            .then((res) => {
                return res.json();
            })
            .then((data) => {
                this.setState({
                    movies: data.Search ? data.Search : [],
                    loading: false,
                });
            });
    }

    searchMovies = (search, type = 'all') => {
        let url = `${URL}${search}`;
        if (type !== 'all') {
            url = `${url}&type=${type}`;
            console.log(url);
        }
        if (search.trim() === '') return;
        // search = encodeURIComponent(search);
        fetch(url)
            .then((res) => {
                return res.json();
            })
            .then((data) => {
                this.setState({ movies: data.Search });
            });
    };

    render() {
        const { movies } = this.state;
        return (
            <main className='container content'>
                <Search searchMovies={this.searchMovies} />
                {movies.length ? <Movies movies={movies} /> : <Preloader />}
            </main>
        );
    }
}

export { Main };
