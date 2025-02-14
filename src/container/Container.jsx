import React, { useState } from 'react'
import scss from './container.module.scss';
//Data
import bestSellerData from '../data/bestSellers.json';
//Charts
import BarChart from '../components/BarChart/ChartBar';
//Components
import UserInput from '../components/UserInput/UserInput';
import Table from '../components/Table/Table';

const Container = () => {

    const [bestSellers, setBestSellers] = useState(bestSellerData);
    const [error, setError] = useState('');

    const bookCountByGenre = (bookData) => {
        const data = [];
        const genres = {};

        bookData.forEach(book => {
            if (genres[book.genre]) genres[book.genre] += 1;
            else genres[book.genre] = 1;
        });

        for (let key in genres) {
            data.push({ name: key, 'Book Count By Genre': genres[key] });
        }

        return data;
    }

    const averagePageByGenre = (dataBook) => {
        const data = [];
        const genres = {};

        dataBook.forEach(book => {
            if (!genres[book.genre]) {
                genres[book.genre] = { bookCount: 1, totalPages: +book.pages };
            } else {
                genres[book.genre].bookCount += 1;
                genres[book.genre].totalPages += +book.pages;
            };
        })

        for (let key in genres) {
            const avgPages = genres[key].totalPages / genres[key].bookCount;
            data.push({ name: key, 'Average Pages by Genre': avgPages })
        }


        return data;
    }

    const addNewBook = (book) => {

        const isBookValid = bookValidator(book.title);

        if (isBookValid) {
            const curState = [...bestSellers];
            curState.unshift(book);
            setBestSellers(curState);
        } else {
            setError(`Can't add same book twice!`);
        }
    }

    const bookValidator = (title) => {
        let isValid = true;

        bestSellers.forEach(book => {
            if (book.title.toLowerCase() === title.toLowerCase())
                isValid = false;
        });

        return isValid;
    }

    return (
        <div className={scss.container} >
            <div className={scss.graphs}>
                <BarChart data={bookCountByGenre(bestSellers)} dataKeys={[{ key: 'Book Count By Genre', color: '#a18cd1' }]} />
                <BarChart data={averagePageByGenre(bestSellers)} dataKeys={[{ key: 'Average Pages by Genre', color: '#8884d8' }]} />
            </div>
            <div className={scss.textData}>
                <Table data={bestSellers} />
                <div className={scss.userForm}>

                    <UserInput error={error} onSubmit={addNewBook} />

                </div>
            </div>
        </div>
    )
}

export default Container
