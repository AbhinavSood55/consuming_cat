const breedsReducer = (state=[], action) => {
    switch (action.type) {
        case 'SET_BREEDS':
            state.push(...action.payload)
            return state
        case 'GET_BREEDS':
            return state
        case 'FREE_BREEDS':
            state=[]
            return state
        default:
            return state
    }
}

export default breedsReducer;