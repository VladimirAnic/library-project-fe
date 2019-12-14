import types from './dashboard.types';

const getBooks = () => ({
   type: types.GET_BOOKS,
   payload: null,
});
const errorGettingBooks = (error) => ({
    type: types.GET_BOOKS_FAILURE,
    error
});
const setBooks = (books, loadMore) => ({
   type: types.GET_BOOKS_SUCCESS,
   payload: books,
   loadMore: loadMore
});

export default {
    errorGettingBooks,
    getBooks,
    setBooks
}