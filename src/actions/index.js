export const heroesFetching = () => {
    return {
        type: 'HEROES_FETCHING'
    }
}

export const heroesFetched = (heroes) => {
    return {
        type: 'HEROES_FETCHED',
        payload: heroes
    }
}

export const heroesFetchingError = () => {
    return {
        type: 'HEROES_FETCHING_ERROR'
    }
}

export const onInput = (event) => {
    return {
        type: 'ON_INPUT_NEW_HERO',
        payload: {
            [event.target.name]: event.target.value
        }
    }
}

export const cleanerNewHero = () => {
    return {
        type: 'CLEANER_NEW_HERO_INPUTS',
        payload: {
            name: "",
            description: "",
            element: "",
            id: null
        }
    }
}

export const filterButtonsFetching = () => {
    return {
        type: 'FILTER_BUTTONS_FETCHING'
    }
}

export const filterButtonsFetched = (filters) => {
    return {
        type: "FILTER_BUTTONS_FETCHED",
        payload: filters
    }
}

export const filterButtonsFetchingError = () => {
    return {
        type: 'FILTER_BUTTONS_ERROR'
    }
}

export const changeActiveButton = (activeButton) => {
    return {
        type: 'CHANGE_ACTIVE_BUTTON',
        payload: activeButton
    }
}