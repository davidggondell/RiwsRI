import * as actionTypes from './actionTypes';
import { Client } from 'elasticsearch';

const client = new Client({ node: 'http://localhost:9200' });
const size = 8;

export const error = error => ({
    type: actionTypes.ERROR,
    error
});

const findProductsCompleted = (productSearch) => ({
    type: actionTypes.FIND_PRODUCTS_COMPLETED,
    productSearch,
});

export const findProducts = (page, query) => (dispatch) => {
    client.search({
        index: 'products',
        from: (page * size),
        size: size,
        body: query
    }).then(resp => {
        //console.log(resp)
        //console.log(resp.hits.hits)
        dispatch(findProductsCompleted({ totalPages: Math.ceil(resp.hits.total.value / size), products: resp.hits.hits }));
    });
}

export const previousFindProductsPage = (page, query) => findProducts(page - 1, query);

export const nextFindProductsPage = (page, query) => findProducts(page + 1, query);

const findMaxPriceCompleted = (maxPrice) => ({
    type: actionTypes.FIND_MAX_PRICE_COMPLETED,
    maxPrice
})

export const findMaxPrice = () => (dispatch) => {
    client.search({
        index: 'products',
        body: {
            sort: [{ price: { "order": "desc" } }],
            size: 1

        }
    }).then(resp => {
        dispatch(findMaxPriceCompleted(resp.hits.hits[0]._source.price));
    });
}

const findMaxKcalCompleted = (maxKcal) => ({
    type: actionTypes.FIND_MAX_KCAL_COMPLETED,
    maxKcal
})

export const findMaxKcal = () => (dispatch) => {
    client.search({
        index: 'products',
        body: {
            sort: [{ kcal: { "order": "desc" } }],
            size: 1

        }
    }).then(resp => {
        dispatch(findMaxKcalCompleted(resp.hits.hits[0]._source.kcal));
    });
}

const findMaxFatsCompleted = (maxFats) => ({
    type: actionTypes.FIND_MAX_FATS_COMPLETED,
    maxFats
})

export const findMaxFats = () => (dispatch) => {
    client.search({
        index: 'products',
        body: {
            sort: [{ fats: { "order": "desc" } }],
            size: 1

        }
    }).then(resp => {
        dispatch(findMaxFatsCompleted(resp.hits.hits[0]._source.fats));
    });
}

const findMaxSatFatsCompleted = (maxSatFats) => ({
    type: actionTypes.FIND_MAX_SATFATS_COMPLETED,
    maxSatFats
})

export const findMaxSatFats = () => (dispatch) => {
    client.search({
        index: 'products',
        body: {
            sort: [{ satFats: { "order": "desc" } }],
            size: 1

        }
    }).then(resp => {
        dispatch(findMaxSatFatsCompleted(resp.hits.hits[0]._source.satFats));
    });
}

const findMaxCarbsCompleted = (maxCarbs) => ({
    type: actionTypes.FIND_MAX_CARBS_COMPLETED,
    maxCarbs
})

export const findMaxCarbs = () => (dispatch) => {
    client.search({
        index: 'products',
        body: {
            sort: [{ carbs: { "order": "desc" } }],
            size: 1

        }
    }).then(resp => {
        dispatch(findMaxCarbsCompleted(resp.hits.hits[0]._source.carbs));
    });
}

const findMaxSugarCompleted = (maxSugar) => ({
    type: actionTypes.FIND_MAX_SUGAR_COMPLETED,
    maxSugar
})

export const findMaxSugar = () => (dispatch) => {
    client.search({
        index: 'products',
        body: {
            sort: [{ sugar: { "order": "desc" } }],
            size: 1

        }
    }).then(resp => {
        dispatch(findMaxSugarCompleted(resp.hits.hits[0]._source.sugar));
    });
}

const findMaxProteinCompleted = (maxProtein) => ({
    type: actionTypes.FIND_MAX_PROTEIN_COMPLETED,
    maxProtein
})

export const findMaxProtein = () => (dispatch) => {
    client.search({
        index: 'products',
        body: {
            sort: [{ protein: { "order": "desc" } }],
            size: 1

        }
    }).then(resp => {
        dispatch(findMaxProteinCompleted(resp.hits.hits[0]._source.protein));
    });
}

