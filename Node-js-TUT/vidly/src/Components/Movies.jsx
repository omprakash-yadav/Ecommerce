import React, { Component } from 'react';
import MoviesTable from './MoviesTable'
import Pasination from './common/Pasination';
import ListGroup from './common/listGroup';
import SearchBox from './common/SearchBox';
import { pasinate } from '../utils/psginate';
import { getMovies } from "../Service/fakeMovieService";
import { getGenres } from '../Service/fakeGenreService';
import { Link } from 'react-router-dom';
import _ from 'lodash';


class Movies extends Component {
    state = {
        movies: [],
        genre: [],
        currentpage: 1,
        pageSize: 4,
        searchQuery: "",
        selectedGenre: null,
        shortColum: { path: "title", order: "asc" },

    };
    componentDidMount() {
        const genre = [{ _id: "", name: "All Genres" }, ...getGenres()]
        this.setState({ movies: getMovies(), genre: genre, })
        // Called immediately after a component is mounted.   
        // Setting state here will trigger re-rendering.
    };


    handleDelete = movie => {
        const movies = this.state.movies.filter(m => m._id !== movie._id);
        this.setState({ movies: movies })

    };
    handleLike = (movie) => {
        const movies = [...this.state.movies];
        const index = movies.indexOf(movie);
        movies[index] = { ...movies[index] };
        movies[index].liked = !movies[index].liked;
        this.setState({ movies });
    };
    handlePageChange = (page) => {
        this.setState({ currentpage: page });

    };
    handleGenraSelect = (genre) => {
        this.setState({ selectedGenre: genre, searchQuery: "", currentpage: 1 })

    };
    handleSearch = (query) => {
        this.setState({ searchQuery: query, selectedGenre: null, currentpage: 1 })

    }
    handleShort = (shortColum) => {

        this.setState({ shortColum })

    }
    getPageData = () => {
        const {
            pageSize,
            currentpage,
            shortColum,
            selectedGenre,
            searchQuery,
            movies: allMovies

        } = this.state;
        // if (this.state.movies.length === 0)
        //     return <p>There are no Movies in the detabase.</p>

        // const filtaring = selectedGenre && selectedGenre._id
        //     ? allMovies.filter(m => m.genre._id === selectedGenre._id)
        //     : allMovies

        let filtered = allMovies;
        if (searchQuery)
            filtered = allMovies.filter(m => m.title.toLowerCase().startsWith(searchQuery.toLowerCase()));
        else if (selectedGenre && selectedGenre._id)
            filtered = allMovies.filter(m => m.genre._id === selectedGenre._id)

        const sorted = _.orderBy(filtered, [shortColum.path], [shortColum.order]);

        const movies = pasinate(sorted, currentpage, pageSize);

        return { totalCount: filtered.length, data: movies }

    };




    render() {
        const {
            pageSize,
            currentpage,
            shortColum,
            searchQuery

        } = this.state;

        const { totalCount, data: movies } = this.getPageData();



        return (
            <div className="row">
                <div className="col-3">
                    <ListGroup
                        items={this.state.genre}
                        selectedItem={this.state.selectedGenre}
                        onItemSelect={this.handleGenraSelect}
                    >

                    </ListGroup>
                </div>
                <div className="col">
                    <Link
                        to="/movies/new"
                        className="btn btn-primary"
                        style={{ marginBottom: 20 }}
                    >
                        New Movie
                    </Link>
                    <p>Showing {totalCount} movies in the detabase</p>
                    <SearchBox
                        value={searchQuery}
                        onChange={this.handleSearch}
                    ></SearchBox>
                    <MoviesTable
                        movies={movies}
                        shortColum={shortColum}
                        onLike={this.handleLike}
                        onDelete={this.handleDelete}
                        onShort={this.handleShort}
                    >
                    </MoviesTable>

                    <Pasination
                        itemsCount={totalCount}
                        pageSize={pageSize}
                        currentpage={currentpage}
                        onPageChange={this.handlePageChange}
                    >

                    </Pasination>
                </div>

            </div>);


    }
}

export default Movies;
