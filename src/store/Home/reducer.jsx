const defaultState = {
    photos: []
}

export function home(state = defaultState, action){
    switch(action.type) {
        case "HOME_FETCH_DATA_SUCCESS":
            return {
                ...state,
                photos: action.payload
            }
        default:
            return state;
    }
}