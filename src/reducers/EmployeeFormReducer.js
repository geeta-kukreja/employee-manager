import {
    EMPLOYEE_FORM_NAME_CHANGED,
    EMPLOYEE_FORM_PHONE_CHANGED,
    EMPLOYEE_FORM_SHIFT_CHANGED,
    EMPLOYEE_SAVE_SUCCESS
} from '../actions/types';

const INITIAL_STATE = {
    name: '',
    phone: '',
    shift: ''
}

export default (state = INITIAL_STATE, action) => {
    switch(action.type) {
        case EMPLOYEE_FORM_NAME_CHANGED:
            return { ...state, name: action.payload };

        case EMPLOYEE_FORM_PHONE_CHANGED:
            return { ...state, phone: action.payload };

        case EMPLOYEE_FORM_SHIFT_CHANGED:
            return { ...state, shift: action.payload };
        
        case EMPLOYEE_SAVE_SUCCESS:
            return INITIAL_STATE;

        default:
            return state;
    }
};