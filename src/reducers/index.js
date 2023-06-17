const initialState = {
    heroes: [],
    heroesLoadingStatus: 'idle',
    filterButtonsLoadingStatus: 'idle',
    filterButtonsData: [],
    activeFilterButton: 'all',
    newHero: {
        name: "",
        description: "",
        element: "",
        id: null
    }
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'HEROES_FETCHING':
            return {
                ...state,
                heroesLoadingStatus: 'loading'
            }
        case 'HEROES_FETCHED':
            return {
                ...state,
                heroes: action.payload,
                heroesLoadingStatus: 'idle'
            }
        case 'HEROES_FETCHING_ERROR':
            return {
                ...state,
                heroesLoadingStatus: 'error'
            }
        case 'FILTER_BUTTONS_FETCHING':
            return {
                ...state,
                filterButtonsStatus: 'loading'
            }
        case 'FILTER_BUTTONS_FETCHED':
            return {
                ...state,
                filterButtonsData: action.payload,
                filterButtonsStatus: 'idle'
            }
        case 'FILTER_BUTTONS_FETCHING_ERROR':
            return {
                ...state,
                filterButtonsStatus: 'error'
            }
        case 'ON_INPUT_NEW_HERO':
            return {
                ...state,
                newHero: {
                    ...state.newHero,
                    ...action.payload
                }
            }
        case 'CLEANER_NEW_HERO_INPUTS':
            return {
                ...state,
                newHero: {
                    ...state.newHero,
                    ...action.payload
                }
            }
        case 'CHANGE_ACTIVE_BUTTON':
            return {
                ...state,
                activeFilterButton: action.payload
            }
        default: return state
    }
}

export default reducer;