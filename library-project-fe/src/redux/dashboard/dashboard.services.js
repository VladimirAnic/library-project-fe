import axios from 'axios';
import actions from './dashboard.actions'

const getBooks = () => {
    return function (dispatch) {
        dispatch(actions.getBooks());
        axios.get("http://localhost:8080/books/getAllBooks")
            .then(function (response) {
                const books = response.data;
                const loadMore = true;
                dispatch(actions.setBooks(books, loadMore))
        })
            .catch(function (error) {
            });
    };
};
export default {
    getBooks
}