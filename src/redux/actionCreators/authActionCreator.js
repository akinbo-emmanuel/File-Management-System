import * as types from "../actionsTypes/authActionTypes";
import fire from '../../config/firebase';

const loginUser = (payload) => {
    return {
        type: types.SIGN_IN,
        payload,
    };
}

const logoutUser = () => {
    return {
        type: types.SIGN_OUT,
    };
}

export const signInUser = (email, password) => (dispatch) => {
    // fire
    // .auth()
    // .signInWithEmailAndPassword(email, password)
    // .then((user) => {
    //     console.log(user);
    // })
    // .catch((error) => {
    //     console.log(error);
    // });

    
        fire.auth().signInWithEmailAndPassword(email, password)
          .then((user) => {
            console.log(user);
        })
          .catch((error) => {
            console.log(error);
        });
}

export const signIn = (email, password) => {
    
  };

export const signUpUser = (name, email, password) => (dispatch) => {
    console.log(name, email, password);
}

export const SignOutUser = () => (dispatch) => {
    dispatch(logoutUser());
}