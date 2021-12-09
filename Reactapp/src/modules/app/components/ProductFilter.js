import {
    Box, Button,
    Checkbox, FormControlLabel,
    FormGroup, Grid,
    Slider,
    TextField,
    Typography,
    BottomNavigation,
    BottomNavigationAction
} from '@mui/material';
import React, { useEffect } from 'react';
import { useTheme } from '@mui/material/styles';
import RestaurantIcon from '@mui/icons-material/Restaurant';
import FitnessCenterIcon from '@mui/icons-material/FitnessCenter';
import SetMealIcon from '@mui/icons-material/SetMeal';
import { useSelector, useDispatch } from 'react-redux';
import * as actions from "../actions";
import * as selectors from "../selectors";

const ProductFilter = ({ searchButtonClick }) => {
    const theme = useTheme();
    const dispatch = useDispatch();
    const maxPrice = useSelector(selectors.getMaxPrice);
    const maxKcal = useSelector(selectors.getMaxKcal);
    const maxFats = useSelector(selectors.getMaxFats);
    const maxSatFats = useSelector(selectors.getMaxSatFats);
    const maxCarbs = useSelector(selectors.getMaxCarbs);
    const maxSugar = useSelector(selectors.getMaxSugar);
    const maxProtein = useSelector(selectors.getMaxProtein);
    const [nameSearch, setNameSearch] = React.useState("");
    const [priceRange, setPriceRange] = React.useState([0, 9999]);
    const [noSugarCheck, setNoSugarCheck] = React.useState(false);
    const [noGlutenCheck, setNoGlutenCheck] = React.useState(false);
    const [noSaltCheck, setNoSaltCheck] = React.useState(false);
    const [kJRange, setKJRange] = React.useState([0, 99999]);
    const [kcalRange, setKcalRange] = React.useState([0, 9999]);
    const [fatsRange, setFatsRange] = React.useState([0, 999]);
    const [satFatsRange, setSatFatsRange] = React.useState([0, 999]);
    const [carbsRange, setCarbsRange] = React.useState([0, 999]);
    const [sugarRange, setSugarRange] = React.useState([0, 999]);
    const [proteinRange, setProteinRange] = React.useState([0, 999]);
    const [admitNoNutriValueCheck, setAdmitNoNutriValueCheck] = React.useState(true);
    const [dietType, setDietType] = React.useState(0);

    const noSaltValue = 0.12;
    const noSugarValue = 0.5;
    const kcalToKJRatio = 4.184;
    const maxSaltValue = 9999;

    const selected = theme.palette.secondary.main;
    const notSelected = theme.palette.secondary.contrastText;

    useEffect(() => {
        dispatch(actions.findMaxPrice())
        dispatch(actions.findMaxKcal())
        dispatch(actions.findMaxFats())
        dispatch(actions.findMaxSatFats())
        dispatch(actions.findMaxCarbs())
        dispatch(actions.findMaxSugar())
        dispatch(actions.findMaxProtein())
    }, [dispatch])

    const changeKcalRange = (kcalRange) => {
        setKcalRange(kcalRange);
        setKJRange([Math.ceil(kcalRange[0] * kcalToKJRatio), Math.ceil(kcalRange[1] * kcalToKJRatio)]);
    }

    const changeKJRange = (kJRange) => {
        setKJRange(kJRange);
        setKcalRange([Math.ceil(kJRange[0] / kcalToKJRatio), Math.ceil(kJRange[1] / kcalToKJRatio)]);
    }

    const priceLabel = (value) => {
        return `${value} €`
    }

    const nutriLabel = (value) => {
        return `${value} g`
    }

    const searchButtonClicked = () => {
        const newQuery =
        {
            query: {
                bool: {
                    should: [
                        {
                            match: {
                                name: {
                                    query: nameSearch,
                                    fuzziness: "AUTO",
                                    zero_terms_query: "all"
                                }
                            }
                        },
                        {
                            match_bool_prefix: {
                                name: {
                                    query: nameSearch
                                }
                            }
                        },
                        {
                            match: {
                                subcategories: {
                                    query: nameSearch,
                                    fuzziness: "AUTO",
                                    zero_terms_query: "all"
                                }
                            }
                        },
                        {
                            match_bool_prefix: {
                                subcategories: {
                                    query: nameSearch
                                }
                            }
                        },
                    ],
                    filter: [
                        {
                            range: {
                                glutenLess: {
                                    gte: noGlutenCheck ? true : false,
                                    lte: true
                                }
                            }
                        },
                        {
                            range: {
                                price: {
                                    gte: (priceRange[0] === 0 && admitNoNutriValueCheck) ? -1 : priceRange[0],
                                    lte: priceRange[1]
                                }
                            }
                        },
                        {
                            range: {
                                kJ: {
                                    gte: (kJRange[0] === 0 && admitNoNutriValueCheck) ? -1 : kJRange[0],
                                    lte: kJRange[1]
                                }
                            }
                        },
                        {
                            range: {
                                kcal: {
                                    gte: (kcalRange[0] === 0 && admitNoNutriValueCheck) ? -1 : kcalRange[0],
                                    lte: kcalRange[1]
                                }
                            }
                        },
                        {
                            range: {
                                fats: {
                                    gte: (fatsRange[0] === 0 && admitNoNutriValueCheck) ? -1 : fatsRange[0],
                                    lte: fatsRange[1]
                                }
                            }
                        },
                        {
                            range: {
                                satFats: {
                                    gte: (satFatsRange[0] === 0 && admitNoNutriValueCheck) ? -1 : satFatsRange[0],
                                    lte: satFatsRange[1]
                                }
                            }
                        },
                        {
                            range: {
                                carbs: {
                                    gte: (carbsRange[0] === 0 && admitNoNutriValueCheck) ? -1 : carbsRange[0],
                                    lte: carbsRange[1]
                                }
                            }
                        },
                        {
                            range: {
                                sugar: {
                                    gte: noSugarCheck ? 0 :
                                        (sugarRange[0] === 0 && admitNoNutriValueCheck) ? -1 : sugarRange[0],
                                    lte: noSugarCheck ? noSugarValue : sugarRange[1]
                                }
                            }
                        },
                        {
                            range: {
                                protein: {
                                    gte: (proteinRange[0] === 0 && admitNoNutriValueCheck) ? -1 : proteinRange[0],
                                    lte: proteinRange[1]
                                }
                            }
                        },
                        {
                            range: {
                                salt: {
                                    gte: noSaltCheck ? 0 : -1,
                                    lte: noSaltCheck ? noSaltValue : maxSaltValue
                                }
                            }
                        }
                    ],
                    minimum_should_match: 1,
                }
            }
        }
        searchButtonClick(newQuery)
    }

    return (
        <Box sx={{ paddingRight: 1 }}>
            <Box fullWidth>
                <BottomNavigation
                    showLabels
                    value={dietType}
                    onChange={(event, newValue) => setDietType(newValue)}
                    sx={{ padding: 1, backgroundColor: 'primary.main', borderRadius: 1 }}
                >
                    <BottomNavigationAction
                        label="Normal"
                        icon={<RestaurantIcon sx={dietType === 0 ? { color: selected } : { color: notSelected }} />}
                        sx={{
                            color: notSelected,
                            '&& .Mui-selected': {
                                color: selected
                            }
                        }}
                    />
                    <BottomNavigationAction
                        label="Dieta"
                        icon={<SetMealIcon sx={dietType === 1 ? { color: selected } : { color: notSelected }} />}
                        sx={{
                            color: notSelected,
                            '&& .Mui-selected': {
                                color: selected
                            }
                        }}
                    />
                    <BottomNavigationAction
                        label="Musculación"
                        icon={<FitnessCenterIcon sx={dietType === 2 ? { color: selected } : { color: notSelected }} />}
                        sx={{
                            color: notSelected,
                            '&& .Mui-selected': {
                                color: selected
                            }
                        }}
                    />
                </BottomNavigation>
            </Box>
            <Grid container>
                <Grid item xs={12}>
                    <TextField
                        label="¿Qué estas buscando?"
                        value={nameSearch}
                        onChange={e => setNameSearch(e.target.value)}
                        fullWidth
                        sx={{ marginY: 2 }}
                    />
                </Grid>
            </Grid>
            <Box fullWidth>
                {maxPrice !== null &&
                    <React.Fragment>
                        <Typography id="input-slider" variant="body" gutterBottom sx={{ fontWeight: 600 }}>
                            Precio
                        </Typography>
                        <Slider
                            min={0}
                            max={maxPrice}
                            step={0.25}
                            getAriaLabel={() => 'Price'}
                            value={priceRange}
                            sx={{ color: 'secondary.dark' }}
                            onChange={(event, newValue) => setPriceRange(newValue)}
                            valueLabelFormat={priceLabel}
                            valueLabelDisplay="auto"
                        />
                    </React.Fragment>
                }
            </Box>
            <Grid container spacing={1}>
                <Grid item>
                    <FormGroup>
                        <FormControlLabel
                            control={
                                <Checkbox
                                    checked={noGlutenCheck}
                                    onChange={event => setNoGlutenCheck(event.target.checked)}
                                    color="secondary"
                                />
                            }
                            label="Sin Gluten"
                        />
                    </FormGroup>
                </Grid>
                <Grid item>
                    <FormGroup>
                        <FormControlLabel
                            control={
                                <Checkbox
                                    checked={noSugarCheck}
                                    onChange={event => setNoSugarCheck(event.target.checked)}
                                    color="secondary"
                                />
                            }
                            label="Sin Azúcar"
                        />
                    </FormGroup>
                </Grid>
                <Grid item>
                    <FormGroup>
                        <FormControlLabel
                            control={
                                <Checkbox
                                    checked={noSaltCheck}
                                    onChange={event => setNoSaltCheck(event.target.checked)}
                                    color="secondary"
                                />
                            }
                            label="Sin Sal"
                        />
                    </FormGroup>
                </Grid>
            </Grid>
            <Box container>
                {maxKcal !== null &&
                    <React.Fragment>
                        <Typography id="input-slider" variant="body" gutterBottom sx={{ fontWeight: 600 }}>
                            Valor energético (KJ)
                        </Typography>
                        <Slider
                            min={0}
                            max={Math.ceil(Math.ceil(maxKcal) * kcalToKJRatio)}
                            getAriaLabel={() => 'KJ'}
                            value={kJRange}
                            sx={{ color: 'secondary.dark' }}
                            onChange={(event, newValue) => changeKJRange(newValue)}
                            valueLabelDisplay="auto"
                        />
                    </React.Fragment>
                }
                {maxKcal !== null &&
                    <React.Fragment>
                        <Typography id="input-slider" variant="body" gutterBottom sx={{ fontWeight: 600 }}>
                            Valor energético (Kcal)
                        </Typography>
                        <Slider
                            min={0}
                            max={Math.ceil(maxKcal)}
                            getAriaLabel={() => 'Kcal'}
                            value={kcalRange}
                            sx={{ color: 'secondary.dark' }}
                            onChange={(event, newValue) => changeKcalRange(newValue)}
                            valueLabelDisplay="auto"
                        />
                    </React.Fragment>
                }
                {maxFats !== null &&
                    <React.Fragment>
                        <Typography id="input-slider" variant="body" gutterBottom sx={{ fontWeight: 600 }}>
                            Grasas
                        </Typography>
                        <Slider
                            min={0}
                            max={maxFats}
                            getAriaLabel={() => 'Fats'}
                            value={fatsRange}
                            sx={{ color: 'secondary.dark' }}
                            onChange={(event, newValue) => setFatsRange(newValue)}
                            valueLabelFormat={nutriLabel}
                            valueLabelDisplay="auto"
                        />
                    </React.Fragment>
                }
                {maxSatFats !== null &&
                    <React.Fragment>
                        <Typography id="input-slider" variant="body" gutterBottom sx={{ fontWeight: 600 }}>
                            Grasas saturadas
                        </Typography>
                        <Slider
                            min={0}
                            max={maxSatFats}
                            getAriaLabel={() => 'Sat Fats'}
                            value={satFatsRange}
                            sx={{ color: 'secondary.dark' }}
                            onChange={(event, newValue) => setSatFatsRange(newValue)}
                            valueLabelFormat={nutriLabel}
                            valueLabelDisplay="auto"
                        />
                    </React.Fragment>
                }
                {maxCarbs !== null &&
                    <React.Fragment>
                        <Typography id="input-slider" variant="body" gutterBottom sx={{ fontWeight: 600 }}>
                            Hidratos de carbono
                        </Typography>
                        <Slider
                            min={0}
                            max={maxCarbs}
                            getAriaLabel={() => 'Carbohidrates'}
                            value={carbsRange}
                            sx={{ color: 'secondary.dark' }}
                            onChange={(event, newValue) => setCarbsRange(newValue)}
                            valueLabelFormat={nutriLabel}
                            valueLabelDisplay="auto"
                        />
                    </React.Fragment>
                }
                {(maxSugar !== null && !noSugarCheck) &&
                    <React.Fragment>
                        <Typography id="input-slider" variant="body" gutterBottom sx={{ fontWeight: 600 }}>
                            Azúcares
                        </Typography>
                        <Slider
                            min={0}
                            max={maxSugar}
                            getAriaLabel={() => 'Sugar'}
                            value={sugarRange}
                            sx={{ color: 'secondary.dark' }}
                            onChange={(event, newValue) => setSugarRange(newValue)}
                            valueLabelFormat={nutriLabel}
                            valueLabelDisplay="auto"
                        />
                    </React.Fragment>
                }
                {maxProtein !== null &&
                    <React.Fragment>
                        <Typography id="input-slider" variant="body" gutterBottom sx={{ fontWeight: 600 }}>
                            Proteínas
                        </Typography>
                        <Slider
                            min={0}
                            max={maxProtein}
                            getAriaLabel={() => 'Protein'}
                            value={proteinRange}
                            sx={{ color: 'secondary.dark' }}
                            onChange={(event, newValue) => setProteinRange(newValue)}
                            valueLabelFormat={nutriLabel}
                            valueLabelDisplay="auto"
                        />
                    </React.Fragment>
                }
                <FormGroup>
                    <FormControlLabel
                        control={
                            <Checkbox
                                checked={admitNoNutriValueCheck}
                                onChange={event => setAdmitNoNutriValueCheck(event.target.checked)}
                                color="secondary"
                            />
                        }
                        label="Admitir productos sin info. nutricional?"
                    />
                </FormGroup>
            </Box>
            <Grid container justifyContent="flex-end">
                <Button variant="contained" onClick={() => searchButtonClicked()} >
                    Buscar
                </Button>
            </Grid>
        </Box >
    );
}

export default ProductFilter