import { auth } from 'libs/firebase.js';

export const userState = (state, dispatch) => {
    console.log(state, dispatch)
    auth.onAuthStateChanged(user => {
        console.log(user);
    });
};