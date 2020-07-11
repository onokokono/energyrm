import React, { useState } from 'react'
import scss from './container.module.scss';
//Data
import bestSellerData from '../data/bestSellers.json';
//Charts
import BarChart from '../components/BarChart/ChartBar';
//Components
import UserInput from '../components/UserInput/UserInput';

const Container = () => {

    const [bestSellers, setBestSellers] = useState(bestSellerData);

    const bookCountByGenre = (bookData) => {
        const data = [];
        const genres = {};

        bookData.forEach(book => {
            if (genres[book.genre]) genres[book.genre] += 1;
            else genres[book.genre] = 1;
        });

        for (let key in genres) {
            data.push({ name: key, BookCount: genres[key] });
        }

        return data;
    }

    const tableDataRows = bestSellers.map((book, index) => {
        return (
            <div className={scss.tableRow} >
                <p>{index + 1}</p>
                <p>{book.title}</p>
                <p>{book.genre}</p>
                <p>{book.pages}</p>
            </div>)
    });

    const addNewBook = (book) => {
        const curState = [...bestSellers];
        curState.unshift(book);
        setBestSellers(curState);
    }

    return (
        <div className={scss.container} >
            <div className={scss.graphs}>
                <BarChart data={bookCountByGenre(bestSellers)} dataKeys={[{ key: 'BookCount', color: '#a18cd1' }]} />
                <BarChart data={bookCountByGenre(bestSellers)} dataKeys={[{ key: 'BookCount', color: '#8884d8' }]} />
            </div>
            <div className={scss.textData}>
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
                <div className={scss.userForm}>

                    <UserInput onSubmit={addNewBook} />

                </div>
            </div>
        </div>
    )
}

export default Container
