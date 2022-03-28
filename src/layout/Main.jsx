import { Movies } from '../components/Movies';
import React from 'react';
import { Preloader } from '../components/Preloader';
import { Search } from '../components/Search';

const API_KEY = process.env.REACT_APP_API_KEY;

const URL = `http://www.omdbapi.com/?apikey=${API_KEY}&s=`;
const QUERY = 'Avengers';

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
        this.setState({ loading: true });
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
                this.setState({
                    movies: data.Search ? data.Search : [],
                    loading: false,
                });
            });
    };

    render() {
        const { movies, loading } = this.state;
        return (
            <main className='container content'>
                <Search searchMovies={this.searchMovies} />
                {loading ? <Preloader /> : <Movies movies={movies} />}
            </main>
        );
    }
}

export { Main };
