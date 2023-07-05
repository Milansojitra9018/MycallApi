import {
    FETCH_USERS_REQUEST,
    FETCH_USERS_SUCCESS,
    FETCH_USERS_FAILURE,
    LOAD_MORE_USERS_REQUEST,
    LOAD_MORE_USERS_SUCCESS,
    LOAD_MORE_USERS_FAILURE,
    LOAD_UPDATED_DETAILS,
} from './actions';

const initialState = {
    users: [],
    isLoading: false,
    error: null,
    totalPages: 0,
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_USERS_REQUEST:
            return {
                ...state,
                isLoading: true,
            };
        case LOAD_MORE_USERS_REQUEST:
            console.log("hello1");
            return {
                ...state,
                isLoading: true,
            };
        case FETCH_USERS_SUCCESS:
            // console.log("hello2");
            return {
                ...state,
                users: action.payload.data,
                isLoading: false,
                page: action.payload.page,
                totalPages: action.payload,
            };
        case FETCH_USERS_FAILURE:
            return {
                ...state,
                isLoading: false,
            };
        case LOAD_MORE_USERS_FAILURE:
            // console.log("hello3");
            return {
                ...state,
                isLoading: false,
            };
        case LOAD_MORE_USERS_SUCCESS:
            console.log("hello4");
            return {
                ...state,
                users: [...state.users, ...action.payload.data],
                isLoading: false,
                page: action.payload.page,
                totalPages: action.payload
            };
        case LOAD_UPDATED_DETAILS:
            console.log('action.payload: ', action.payload);
            return {
                ...state,
                users: [...action.payload],
            };
        default:
            return state;
    }
};

export default reducer;



























// import { combineReducers } from 'redux';
// import {
//   FETCH_USERS,
//   FETCH_USERS_SUCCESS,
//   FETCH_USERS_FAILURE,
//   LOAD_MORE_USERS,
//   LOAD_MORE_USERS_SUCCESS,
//   LOAD_MORE_USERS_FAILURE,
// } from './actions';

// const usersReducer = (state = [], action) => {
//   switch (action.type) {
//     case FETCH_USERS_SUCCESS:
//       return action.payload;
//     case LOAD_MORE_USERS_SUCCESS:
//       return [...state, ...action.payload];
//     default:
//       return state;
//   }
// };

// const isLoadingReducer = (state = false, action) => {
//   switch (action.type) {
//     case FETCH_USERS:
//     case LOAD_MORE_USERS:
//       return true;
//     case FETCH_USERS_SUCCESS:
//     case FETCH_USERS_FAILURE:
//     case LOAD_MORE_USERS_SUCCESS:
//     case LOAD_MORE_USERS_FAILURE:
//       return false;
//     default:
//       return state;
//   }
// };

// const errorReducer = (state = null, action) => {
//   switch (action.type) {
//     case FETCH_USERS_FAILURE:
//     case LOAD_MORE_USERS_FAILURE:
//       return action.payload;
//     case FETCH_USERS:
//     case FETCH_USERS_SUCCESS:
//     case LOAD_MORE_USERS:
//     case LOAD_MORE_USERS_SUCCESS:
//       return null;
//     default:
//       return state;
//   }
// };

// const rootReducer = combineReducers({
//   users: usersReducer,
//   isLoading: isLoadingReducer,
//   error: errorReducer,
// });

// export default rootReducer;
