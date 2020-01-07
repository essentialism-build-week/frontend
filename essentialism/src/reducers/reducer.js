// import {
//     LOGIN_START,
//     LOGIN_SUCCESS,
//     LOGIN_FAILURE
// } from '../actions/action';


// const initialStateLogin = {
//     credentials: '',
//     isFetching: false,
//     error: ''
// };

// const reducer = (state = initialStateLogin, action) => {
//     switch (action.type) {
//         case LOGIN_START:
//         return {
//             ...state,
//             isFetching: true
//         };
//         case LOGIN_SUCCESS:
//             return {
//                 ...state,
//                 credentials: action.payload,
//                 isFetching: false,
//                 error: '',
//             };
//             case LOGIN_FAILURE:
//                 return {
//                     ...state,
//                     isFetching: false,
//                     error: action.payload
//                 };
//                 default: 
//                 return state;
//     }
// }

// export default reducer;

// const initialListValues = {
//     values: []
// };

// const reducer = (state = initialListValues, action) => {
//     switch (action.type) {
//         case GET_VALUES: 
//         return {
//             ...state,
//             values: action.payload
//         };
//         default:
//             return state;
//     }
}