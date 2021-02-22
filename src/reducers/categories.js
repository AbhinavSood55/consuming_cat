const categoriesReducer = (state=[], action) => {
    switch (action.type) {
        case 'SET_CATEGORIES':
            state.push(...action.payload)
            return state
        case 'GET_CATEGORIES':
            return state
        default:
            return state
    }
}

export default categoriesReducer