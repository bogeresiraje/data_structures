import C from './constants';


export const credentials = (state = {}, action) => {
    switch(action.type){
        case C.ADD_USER:
            return action;

        case C.REMOVE_USER:
            return {};

        default:
            return state;
    }
}