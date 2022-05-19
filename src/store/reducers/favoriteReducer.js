import { ADD_PERSON_TO_FAVORITE, REMOVE_PERSON_FROM_FAVORITE } from "../constants/actionTypes";

const initialState = {
    
}

const favoriteReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_PERSON_TO_FAVORITE:
            return {
                ...state,
                ...action.payload
            }
        case REMOVE_PERSON_FROM_FAVORITE:
            return {
                ...state,
                state
            }
        default:
            return state;
    }
}

export default favoriteReducer