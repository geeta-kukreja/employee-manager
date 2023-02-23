import firebase from 'firebase';
import { Actions } from 'react-native-router-flux';
import {
    EMPLOYEE_FORM_NAME_CHANGED,
    EMPLOYEE_FORM_PHONE_CHANGED,
    EMPLOYEE_FORM_SHIFT_CHANGED,
    EMPLOYEE_SAVE_SUCCESS,
    EMPLOYEE_FETCH_SUCCESS
} from './types';

export const employeeFormNameChanged = text => {
    return {
        type: EMPLOYEE_FORM_NAME_CHANGED,
        payload: text
    };
};

export const employeeFormPhoneChanged = text => {
    return {
        type: EMPLOYEE_FORM_PHONE_CHANGED,
        payload: text
    };
};

export const employeeFormShiftChanged = text => {
    return {
        type: EMPLOYEE_FORM_SHIFT_CHANGED,
        payload: text
    };
};

export const employeeCreate = ({ name, phone, shift }) => {
    const { currentUser } = firebase.auth();
    return (dispatch) => {
        firebase.database().ref(`/users/${currentUser.uid}/employees`)
            .push({ name, phone, shift })
            .then(() => {
                dispatch({ type: EMPLOYEE_SAVE_SUCCESS });
                Actions.pop()
            })
    };
};

export const employeeFetch = () => {
    const { currentUser } = firebase.auth();

    return (dispatch) => {
        firebase.database().ref(`/users/${currentUser.uid}/employees`)
        .on('value', snapshot => {
            dispatch({
                type: EMPLOYEE_FETCH_SUCCESS,
                payload: snapshot.val()
            });
        })
    };
};

export const employeeSave = ({ name, phone, shift, uid }) => {
    const { currentUser } = firebase.auth();

    return (dispatch) => {
        firebase.database().ref(`/users/${currentUser.uid}/employees/${uid}`)
        .set({ name, phone, shift })
        .then(() => {
            dispatch({ type: EMPLOYEE_SAVE_SUCCESS });
            Actions.pop();
        });
    };
};

export const employeeDelete = ({ uid }) => {
    const { currentUser } = firebase.auth();
    return () => {
        firebase.database().ref(`/users/${currentUser.uid}/employees/${uid}`)
        .remove()
        .then(() => Actions.pop());
    }
};
