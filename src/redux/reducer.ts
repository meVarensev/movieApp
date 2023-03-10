import { combineReducers, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { dataMovies } from '../utils/constants/data-movies.constants';
import {
    AFTER, AUTHORIZATION,
    BEFORE, FAVORITES,
    POPULARITY_DOWN,
    POPULARITY_UP,
    SORT_GENRES,
    SORT_YEAR,
    VOTE_AVERAGE_DOWN,
    VOTE_AVERAGE_UP, WATCH_LATER,
} from './action';


interface IReducer {
    type: string;
    payload: number[] | string | string[];
}


const defaultValue = {
    initList: dataMovies,
    currentList: dataMovies,
    genresList: [],
};
const reducer = ({ type, payload }: IReducer, state = dataMovies) => {
    switch (type) {
        case POPULARITY_DOWN:
            return [...state].sort((a, b) => a.popularity - b.popularity);
        case POPULARITY_UP:
            return [...state].sort((a, b) => b.popularity - a.popularity);
        case VOTE_AVERAGE_DOWN:
            return [...state].sort((a, b) => b.vote_average - a.vote_average);
        case VOTE_AVERAGE_UP:
            return [...state].sort((a, b) => a.vote_average - b.vote_average);
        case SORT_YEAR:
            // TODO: in progress
            return defaultValue.currentList.filter(({ release_date }) => release_date.slice(0, 4) === payload);
        case SORT_GENRES:
            // TODO: in progress
            return defaultValue.currentList.filter(({ genre_ids }) => genre_ids.includes(payload));
        case FAVORITES:
            // TODO: in progress
            return defaultValue.currentList.filter((item) => payload.includes(item.id));
        case WATCH_LATER:
            // TODO: in progress
            return defaultValue.currentList.filter((item) => payload.includes(item.id));
        default:
            return state;
    }
};


const reducerCounter = ({ type }: IReducer, state = { value: 1 }) => {
    switch (type) {
        case BEFORE:
            return { state, value: state.value + 1 };
        case AFTER:
            return { state, value: state.value - 1 };
        default:
            return state;
    }
};


const defaultToken = {
    auth: localStorage.getItem('token'),
};

interface IReducerAuth {
    type: string,
    payload: string | number
}

const reducerAuth = ({ type, payload }: IReducerAuth, state = defaultToken) => {
    switch (type) {
        case AUTHORIZATION:
            return { state, auth: payload };
        default:
            return state;
    }
};

const rootReducer = combineReducers({
    dataMovies: reducer,
    reducerCounter,
    reducerAuth,
});


// const reducerSortYear = (state = [], {type, payload}: IReducer) => {
//     switch (type) {
//         case SORT_YEAR:
//             console.log(state.length)
//             return state.filter(({release_date}) => release_date.slice(0, 4) === payload)
//         default:
//             return state
//     }
// }


export const store = createStore(rootReducer, composeWithDevTools());




