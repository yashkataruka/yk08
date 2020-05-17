import { FIRST_LOCATION } from "../actions/location"

const initialState = {
    location: {
        lat: null,
        lng: null
    }
}

export default (state = initialState, action) => {
    switch(action.type) {
        case FIRST_LOCATION:
            return {
                location : {
                    lat: action.initialLocation.lat,
                    lng: action.initialLocation.lng
                }
            }
        default:
            return state
    }
}