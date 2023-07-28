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

export const heroDeleted = (id) => {
    return {
        type: 'HERO_DELETED',
        payload: id
    }
}

export const newHeroCreated = (newHeroData) => {
    return {
        type: 'NEW_HERO_CREATED',
        payload: newHeroData
    }
}   