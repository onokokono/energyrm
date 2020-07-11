import React from 'react'
import scss from './Table.module.scss';

const Table = (props) => {

    const tableDataRows = props.data.map((book, index) => {
        return (
            <div key={book.title} data-testid={`tableRows-${book.title}`} className={scss.tableRow} >
                <p>{index + 1}</p>
                <p>{book.title}</p>
                <p>{book.genre}</p>
                <p>{book.pages}</p>
            </div>)
    });

    return (
        <div className={scss.table} >
            <div className={[scss.tableHeader, scss.tableTemplate].join(' ')} >
                <h3>#</h3>
                <h3>Title</h3>
                <h3>Genre</h3>
                <h3>Pages</h3>
            </div>
            <div className={scss.tableContent}>
                {tableDataRows}
            </div>
        </div>
    )
}

export default Table
