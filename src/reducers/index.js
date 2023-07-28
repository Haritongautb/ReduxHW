const initialState = {
    heroes: [],
    heroesLoadingStatus: 'idle',
    filterButtonsLoadingStatus: 'idle',
    filterButtonsData: [],
    activeFilterButton: 'all',
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
        case 'NEW_HERO_CREATED':
            return {
                ...state,
                heroes: [...state.heroes, action.payload]
            }
        case 'CHANGE_ACTIVE_BUTTON':
            return {
                ...state,
                activeFilterButton: action.payload
            }
        case 'HERO_DELETED':
            return {
                ...state,
                heroes: state.heroes.filter(item => item.id !== action.payload)
            }
        default: return state
    }
}

export default reducer;