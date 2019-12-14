import types from './dashboard.types';

const initialState = {
    book: null,
    loadMore: false,
    error: null,
    loading: false
};

const books = (state = initialState, action) => {
    switch (action.type) {
        case types.GET_BOOKS:
            return {
            ...state,
            book: null,
            loading: true,
            error: null,
            loadMore: false
        };
        case types.GET_BOOKS_SUCCESS:
            return {
                ...state,
                loading: false,
                error: null,
                loadMore: action.loadMore,
                book: action.payload
            };
        case types.GET_BOOKS_FAILURE:
            return {
                ...state,
                error: action.error,
                loading: false
            };
        default:
            return state;
    }
};
export default books;