export const initialState = {
    recipes: []
    // playing: false,
    // item: null
}

export const actionTypes = {
    SET_RECIPES: 'SET_RECIPES',
};


const reducer = (state, action) => {
    console.log(action)

    switch(action.type){
        case actionTypes.SET_RECIPES:
            return { ...state, recipes: action.recipes };

        default:
            return { state };
    }
};

export default reducer;