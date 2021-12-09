import { combineReducers } from 'redux';

import * as actionTypes from './actionTypes';

const initialState = {
    error: null,
    productSearch: null,
    maxPrice: null,
    maxKcal: null,
    maxFats: null,
    maxSatFats: null,
    maxCarbs: null,
    maxSugar: null,
    maxProtein: null

};

const error = (state = initialState.error, action) => {
    switch (action.type) {

        case actionTypes.ERROR:
            return action.error;

        default:
            return state;
    }
}
const productSearch = (state = initialState.productSearch, action) => {
    switch (action.type) {

        case actionTypes.FIND_PRODUCTS_COMPLETED:
            return action.productSearch;

        default:
            return state;
    }
}

const maxPrice = (state = initialState.maxPrice, action) => {
    switch (action.type) {

        case actionTypes.FIND_MAX_PRICE_COMPLETED:
            return action.maxPrice;

        default:
            return state;
    }
}

const maxKcal = (state = initialState.maxKcal, action) => {
    switch (action.type) {

        case actionTypes.FIND_MAX_KCAL_COMPLETED:
            return action.maxKcal;

        default:
            return state;
    }
}

const maxFats = (state = initialState.maxFats, action) => {
    switch (action.type) {

        case actionTypes.FIND_MAX_FATS_COMPLETED:
            return action.maxFats;

        default:
            return state;
    }
}

const maxSatFats = (state = initialState.maxSatFats, action) => {
    switch (action.type) {

        case actionTypes.FIND_MAX_SATFATS_COMPLETED:
            return action.maxSatFats;

        default:
            return state;
    }
}

const maxCarbs = (state = initialState.maxCarbs, action) => {
    switch (action.type) {

        case actionTypes.FIND_MAX_CARBS_COMPLETED:
            return action.maxCarbs;

        default:
            return state;
    }
}

const maxSugar = (state = initialState.maxSugar, action) => {
    switch (action.type) {

        case actionTypes.FIND_MAX_SUGAR_COMPLETED:
            return action.maxSugar;

        default:
            return state;
    }
}

const maxProtein = (state = initialState.maxProtein, action) => {
    switch (action.type) {

        case actionTypes.FIND_MAX_PROTEIN_COMPLETED:
            return action.maxProtein;

        default:
            return state;
    }
}

const reducer = combineReducers({
    error,
    productSearch,
    maxPrice,
    maxKcal,
    maxFats,
    maxSatFats,
    maxCarbs,
    maxSugar,
    maxProtein
});

export default reducer;