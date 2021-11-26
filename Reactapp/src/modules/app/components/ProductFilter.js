import {
    Box, Button, ButtonGroup,
    Checkbox, FormControlLabel,
    FormGroup, Grid,
    Slider,
    TextField
} from '@mui/material';
import React from 'react';

const ProductFilter = () => {
    const [nameSearch, setNameSearch] = React.useState("");
    const [priceRange, setPriceRange] = React.useState([20, 37]);
    const [kJRange, setKJRange] = React.useState([20, 37]);
    const [kcalRange, setKcalRange] = React.useState([20, 37]);
    const [fatsRange, setFatsRange] = React.useState([20, 37]);
    const [satFatsRange, setSatfatsRange] = React.useState([20, 37]);
    const [carbsRange, setCarbsRange] = React.useState([20, 37]);
    const [sugarRange, setSugarRange] = React.useState([20, 37]);
    const [proteinRange, setProteinRange] = React.useState([20, 37]);

    return (
        <Box sx={{ paddingRight: 1 }}>
            <ButtonGroup size="large" variant="contained" fullWidth>
                <Button>One</Button>
                <Button>Two</Button>
                <Button>Three</Button>
            </ButtonGroup>
            <TextField
                label="¿Qué estas buscando?"
                value={nameSearch}
                onChange={e => setNameSearch(e.target.value)}
                fullWidth
            />
            <Slider
                getAriaLabel={() => 'KJ'}
                value={priceRange}
                sx={{ color: 'secondary.dark' }}
                onChange={(event, newValue) => setPriceRange(newValue)}
                valueLabelDisplay="auto"
            />
            <Grid container spacing={1}>
                <Grid item>
                    <FormGroup>
                        <FormControlLabel control={<Checkbox color="secondary" />} label="Sin Gluten" />
                    </FormGroup>
                </Grid>
                <Grid item>
                    <FormGroup>
                        <FormControlLabel control={<Checkbox color="secondary" />} label="Sin Azúcar" />
                    </FormGroup>
                </Grid>
                <Grid item>
                    <FormGroup>
                        <FormControlLabel control={<Checkbox color="secondary" />} label="Sin Sal" />
                    </FormGroup>
                </Grid>
            </Grid>
            <Slider
                getAriaLabel={() => 'KJ'}
                value={kJRange}
                sx={{ color: 'secondary.dark' }}
                onChange={(event, newValue) => setKJRange(newValue)}
                valueLabelDisplay="auto"
            />
            <Slider
                getAriaLabel={() => 'Kcal'}
                value={kcalRange}
                sx={{ color: 'secondary.dark' }}
                onChange={(event, newValue) => setKcalRange(newValue)}
                valueLabelDisplay="auto"
            />
            <Slider
                getAriaLabel={() => 'Fats'}
                value={fatsRange}
                sx={{ color: 'secondary.dark' }}
                onChange={(event, newValue) => setFatsRange(newValue)}
                valueLabelDisplay="auto"
            />
            <Slider
                getAriaLabel={() => 'Sat Fats'}
                value={satFatsRange}
                sx={{ color: 'secondary.dark' }}
                onChange={(event, newValue) => setSatfatsRange(newValue)}
                valueLabelDisplay="auto"
            />
            <Slider
                getAriaLabel={() => 'Carbohidrates'}
                value={carbsRange}
                sx={{ color: 'secondary.dark' }}
                onChange={(event, newValue) => setCarbsRange(newValue)}
                valueLabelDisplay="auto"
            />
            <Slider
                getAriaLabel={() => 'Sugar'}
                value={sugarRange}
                sx={{ color: 'secondary.dark' }}
                onChange={(event, newValue) => setSugarRange(newValue)}
                valueLabelDisplay="auto"
            />
            <Slider
                getAriaLabel={() => 'Protein'}
                value={proteinRange}
                sx={{ color: 'secondary.dark' }}
                onChange={(event, newValue) => setProteinRange(newValue)}
                valueLabelDisplay="auto"
            />
            <Grid container justifyContent="flex-end">
                <Button variant="contained" >
                    Buscar
                        </Button>
            </Grid>
        </Box >
    );
}

export default ProductFilter