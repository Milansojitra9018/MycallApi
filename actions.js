export const FETCH_USERS_REQUEST = 'FETCH_USERS_REQUEST';
export const FETCH_USERS_SUCCESS = 'FETCH_USERS_SUCCESS';
export const FETCH_USERS_FAILURE = 'FETCH_USERS_FAILURE';
export const LOAD_MORE_USERS_REQUEST = 'LOAD_MORE_USERS_REQUEST';
export const LOAD_MORE_USERS_SUCCESS = 'LOAD_MORE_USERS_SUCCESS';
export const LOAD_MORE_USERS_FAILURE = 'LOAD_MORE_USERS_FAILURE';
export const UPDATE_USER_DETAILS = 'UPDATE_USER_DETAILS'; 
export const LOAD_UPDATED_DETAILS = 'LOAD_UPDATED_DETAILS';

export const fetchUsersRequest = (currentPage) => ({
  type: FETCH_USERS_REQUEST,
  payload: currentPage,
});

export const fetchUsersSuccess = (users) => ({
  type: FETCH_USERS_SUCCESS,
  payload: users,
});

export const fetchUsersFailure = (error) => ({
  type: FETCH_USERS_FAILURE,
  payload: error,
});

export const loadMoreUsersRequest = (page) => {
  return {
    type: LOAD_MORE_USERS_REQUEST,
    payload: {page},
  };
};

export const loadMoreUsersSuccess = (data) => ({
  type: LOAD_MORE_USERS_SUCCESS,
  payload: data,
});

export const loadMoreUsersFailure = (error) => ({
  type: LOAD_MORE_USERS_FAILURE,
  payload: error,
});


export const updateUserDetails = (data) => {
  console.log('updateUserDetails: ', data);
  return {
    type: LOAD_UPDATED_DETAILS,
    payload: data,
  };
};




// export const getUsers = () => {
//   return (dispatch) => {
//     dispatch(fetchUsers());
//     axios
//       .get('https://randomuser.me/api/?page=1&results=5')
//       .then((res) => {
//         dispatch(fetchUsersSuccess(res.data.results));
//       })
//       .catch((error) => {
//         dispatch(fetchUsersFailure(error.message));
//       });
//   };
// };

// export const fetchMoreUsers = (page) => {
//   return (dispatch) => {
//     dispatch(loadMoreUsers());
//     axios
//       .get(`https://randomuser.me/api/?page=${page}&results=5`)
//       .then((res) => {
//         dispatch(loadMoreUsersSuccess(res.data.results));
//       })
//       .catch((error) => {
//         dispatch(loadMoreUsersFailure(error.message));
//       });
//   };
// };
