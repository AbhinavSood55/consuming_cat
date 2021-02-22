export const setBreeds = (breeds) => {
    return{
        type: 'SET_BREEDS',
        payload: [...breeds]
    }
}

export const getBreeds = () => {
    return{
        type: 'GET_BREEDS'
    }
}

export const setCategories = (categories) => {
    return{
        type: 'SET_CATEGORIES',
        payload: [...categories],
    }
}

export const getCategories = () => {
    return{
        type: 'GET_CATEGORIES',
    }
}