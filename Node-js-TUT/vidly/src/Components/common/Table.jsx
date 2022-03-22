import React from 'react';
import TableHeadar from './TableHeadar';
import TableBody from './TableBody'
const Table = (props) => {
    const { columns, onShort, shortColum, data } = props
    return (
        <table className="table">
            <TableHeadar
                columns={columns}
                onShort={onShort}
                shortColum={shortColum}
            >
            </TableHeadar>

            <TableBody
                columns={columns}
                data={data}
            >

            </TableBody>

        </table>
    );
}

export default Table;