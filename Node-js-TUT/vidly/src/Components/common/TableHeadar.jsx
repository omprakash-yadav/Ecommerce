import React, { Component } from 'react';


class TableHeadar extends Component {


    raiseSort = (path) => {
        const shortColum = { ...this.props.shortColum }
        if (shortColum.path = path)
            shortColum.order = (shortColum.order === "asc") ? "desc" : "asc";
        else {
            shortColum.path = path;
            shortColum.order = 'asc';
        }
        this.props.onShort(shortColum)

    }
    renderShortIcon = (column) => {
        if (column.path !== this.props.shortColum.path) return null;
        if (this.props.shortColum.order === 'asc') return <i className="fa fa-sort-asc"></i>;
        return <i className="fa fa-sort-desc"></i>;
    }

    render() {
        return (<thead>
            <tr>
                {this.props.columns.map(column => (
                    <th
                        className="clickable"
                        key={column.path || column.key}
                        onClick={() => this.raiseSort(column.path)}
                    >
                        {column.lable} {this.renderShortIcon(column)}
                    </th>
                ))}
            </tr>
        </thead>);
    }
}

export default TableHeadar;