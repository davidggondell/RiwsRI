import {
    Divider,
    Grid
} from '@mui/material';
import React from 'react';
import ProductFilter from './ProductFilter';
import Product from './Product';

const Home = () => {

    const products = [
        {
            url: "https://jaja.com",
            name: 'Producto 1',
            categorias: ['despensa', 'aceites', 'oliva'],
            price: 3.99,
            glutenLess: true,
            kJ: 2000.0,
            kcal: 300.3,
            fats: 100.4,
            satFats: 30.2,
            carbs: 124.1,
            sugar: 10.1,
            protein: 5.9,
            salt: 5.0,
        },
        {
            url: "https://jaja2.com",
            name: 'Producto 222222222222222222222222222222222',
            categorias: ['despensa', 'aceites', 'oliva'],
            price: 3.99,
            glutenLess: true,
            kJ: 2000.0,
            kcal: 300.3,
            fats: 100.4,
            satFats: 30.2,
            carbs: 124.1,
            sugar: 10.1,
            protein: 5.9,
            salt: 5.0,
        },
        {
            url: "https://jaja3.com",
            name: 'Aceite',
            categorias: ['despensa', 'aceites', 'oliva', 'bebidas', 'grasas', 'aceitunas'],
            price: 3.99,
            glutenLess: true,
            kJ: 2000.0,
            kcal: 300.3,
            fats: 100.4,
            satFats: 30.2,
            carbs: 124.1,
            sugar: 10.1,
            protein: 5.9,
            salt: 5.0,
        },
        {
            url: "https://jaja4.com",
            name: 'Coca-cola un produto muy muy muy muy muy muy largo',
            categorias: ['despensa', 'aceites', 'oliva'],
            price: 3.99,
            glutenLess: true,
            kJ: 2000.0,
            kcal: 300.3,
            fats: 100.4,
            satFats: 30.2,
            carbs: 124.1,
            sugar: 10.1,
            protein: 5.9,
            salt: 5.0,
        }
    ]

    return (
        <Grid
            container
            spacing={1}
            justifyContent="center"
        >
            <Grid item xs={3}>
                <ProductFilter />
            </Grid>
            <Grid item >
                <Divider orientation="vertical" />
            </Grid>
            <Grid xs={8} item>
                <Grid
                    spacing={2}
                    justifyContent="center"
                    container
                >
                    {products.map((product) => (
                        <Grid key={product.url} item>
                            <Product product={product} />
                        </Grid>
                    ))}
                </Grid>
            </Grid>
        </Grid>
    );
}

export default Home;
