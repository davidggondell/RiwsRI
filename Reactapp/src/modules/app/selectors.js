const getModuleState = state => state.app;

export const getError = state => getModuleState(state).error;

export const getProducts = state =>
    getModuleState(state).productSearch;

export const getMaxPrice = state =>
    getModuleState(state).maxPrice;

export const getMaxKcal = state =>
    getModuleState(state).maxKcal;

export const getMaxFats = state =>
    getModuleState(state).maxFats;

export const getMaxSatFats = state =>
    getModuleState(state).maxSatFats;

export const getMaxCarbs = state =>
    getModuleState(state).maxCarbs;

export const getMaxSugar = state =>
    getModuleState(state).maxSugar;

export const getMaxProtein = state =>
    getModuleState(state).maxProtein;