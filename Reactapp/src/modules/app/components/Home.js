import {
    Alert, Divider,
    Grid,
    Pagination
} from '@mui/material';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import * as actions from "../actions";
import * as selectors from "../selectors";
import Product from './Product';
import ProductFilter from './ProductFilter';

const Home = () => {
    const dispatch = useDispatch();
    const productSearch = useSelector(selectors.getProducts);
    const [page, setPage] = React.useState(1);
    const [query, setQuery] = React.useState({});

    useEffect(() => {
        dispatch(actions.findProducts(0, {}));
    }, [dispatch])

    const handlePageChange = (event, value) => {
        dispatch(actions.findProducts(value - 1, query));
        setPage(value);
        window.scrollTo(0, 0);
    };

    const searchButtonClick = (newQuery) => {
        setQuery(newQuery);
        dispatch(actions.findProducts(0, newQuery));
        setPage(1);
        window.scrollTo(0, 0);
    }

    return (
        <Grid
            container
            spacing={1}
            justifyContent="center"
        >
            <Grid item xs={12} md={5} lg={3}>
                <ProductFilter searchButtonClick={searchButtonClick} />
            </Grid>
            <Grid item >
                <Divider orientation="vertical" />
            </Grid>
            {productSearch === null || productSearch === undefined || productSearch.products.length === 0 ?
                <Grid xs={12} md={6} lg={8} item>
                    <Alert severity="info" variant="filled">
                        No hay productos que cumplan con los criterios de búsqueda seleccionados
                    </Alert>
                </Grid >
                :

                <Grid xs={12} md={6} lg={8} item>
                    <Grid
                        spacing={2}
                        justifyContent="center"
                        container
                    >
                        {productSearch.products.map((product) => (
                            <Grid key={product._id} item>
                                <Product url={product._id} product={product._source} />
                            </Grid>
                        ))}
                    </Grid>
                    <Grid
                        justifyContent="center"
                        container
                    >
                        <Grid item >
                            <Pagination
                                sx={{ marginTop: 2 }}
                                count={productSearch.totalPages}
                                page={page}
                                onChange={handlePageChange}
                                color="secondary"
                                size="large"
                            />
                        </Grid>
                    </Grid>
                </Grid>
            }
        </Grid>
    );
}

export default Home;
