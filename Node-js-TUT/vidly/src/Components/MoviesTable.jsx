import React, { Component } from 'react';
import Table from './common/Table';
import { Link } from "react-router-dom";
import Like from './common/Like';


class MoviesTable extends Component {
    columns = [
        {
            path: 'title',
            lable: 'Title',
            content: movie => <Link to={`/movies/${movie._id}`}>{movie.title}</Link>
        },
        { path: 'genre.name', lable: 'Genre' },
        { path: 'numberInStock', lable: 'Stock' },
        { path: 'dailyRentalRate', lable: 'Rate' },
        {
            key: 'Like',
            content: movie => <Like liked={movie.liked} onClick={() => this.props.onLike(movie)}></Like>
        },
        {
            key: 'Delete',
            content: movie => (
                <button
                    onClick={() => this.props.onDelete(movie)}
                    className="btn btn-danger btn-sm ">Delete
                </button>)

        },

    ];


    render() {
        const { movies, onShort, shortColum } = this.props;

        return (
            <Table
                columns={this.columns}
                data={movies || []}
                onShort={onShort}
                shortColum={shortColum}
            >

            </Table>

        );


    }
}
export default MoviesTable;