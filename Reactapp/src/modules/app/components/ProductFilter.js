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
import React from 'react';
import { useTheme } from '@mui/material/styles';
import RestaurantIcon from '@mui/icons-material/Restaurant';
import FitnessCenterIcon from '@mui/icons-material/FitnessCenter';
import SetMealIcon from '@mui/icons-material/SetMeal';



const ProductFilter = () => {
    const theme = useTheme();
    const [nameSearch, setNameSearch] = React.useState("");
    const [priceRange, setPriceRange] = React.useState([20, 37]);
    const [kJRange, setKJRange] = React.useState([20, 37]);
    const [kcalRange, setKcalRange] = React.useState([20, 37]);
    const [fatsRange, setFatsRange] = React.useState([20, 37]);
    const [satFatsRange, setSatfatsRange] = React.useState([20, 37]);
    const [carbsRange, setCarbsRange] = React.useState([20, 37]);
    const [sugarRange, setSugarRange] = React.useState([20, 37]);
    const [proteinRange, setProteinRange] = React.useState([20, 37]);
    const [dietType, setDietType] = React.useState(0);

    const selected = theme.palette.secondary.main;
    const notSelected = theme.palette.secondary.contrastText;

    //color: white;
    //    &.Mui-selected {
    //        color: red;
    //    }

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
                <Typography id="input-slider" variant="body" gutterBottom sx={{ fontWeight: 600 }}>
                    Precio
                    </Typography>
                <Slider
                    getAriaLabel={() => 'KJ'}
                    value={priceRange}
                    sx={{ color: 'secondary.dark' }}
                    onChange={(event, newValue) => setPriceRange(newValue)}
                    valueLabelDisplay="auto"
                />
            </Box>
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
            <Box container>
                <Typography id="input-slider" variant="body" gutterBottom sx={{ fontWeight: 600 }}>
                    Valor energético (KJ)
                </Typography>
                <Slider
                    getAriaLabel={() => 'KJ'}
                    value={kJRange}
                    sx={{ color: 'secondary.dark' }}
                    onChange={(event, newValue) => setKJRange(newValue)}
                    valueLabelDisplay="auto"
                />
                <Typography id="input-slider" variant="body" gutterBottom sx={{ fontWeight: 600 }}>
                    Valor energético (Kcal)
                </Typography>
                <Slider
                    getAriaLabel={() => 'Kcal'}
                    value={kcalRange}
                    sx={{ color: 'secondary.dark' }}
                    onChange={(event, newValue) => setKcalRange(newValue)}
                    valueLabelDisplay="auto"
                />
                <Typography id="input-slider" variant="body" gutterBottom sx={{ fontWeight: 600 }}>
                    Grasas
                </Typography>
                <Slider
                    getAriaLabel={() => 'Fats'}
                    value={fatsRange}
                    sx={{ color: 'secondary.dark' }}
                    onChange={(event, newValue) => setFatsRange(newValue)}
                    valueLabelDisplay="auto"
                />
                <Typography id="input-slider" variant="body" gutterBottom sx={{ fontWeight: 600 }}>
                    Grasas saturadas
                </Typography>
                <Slider
                    getAriaLabel={() => 'Sat Fats'}
                    value={satFatsRange}
                    sx={{ color: 'secondary.dark' }}
                    onChange={(event, newValue) => setSatfatsRange(newValue)}
                    valueLabelDisplay="auto"
                />
                <Typography id="input-slider" variant="body" gutterBottom sx={{ fontWeight: 600 }}>
                    Hidratos de carbono
                </Typography>
                <Slider
                    getAriaLabel={() => 'Carbohidrates'}
                    value={carbsRange}
                    sx={{ color: 'secondary.dark' }}
                    onChange={(event, newValue) => setCarbsRange(newValue)}
                    valueLabelDisplay="auto"
                />
                <Typography id="input-slider" variant="body" gutterBottom sx={{ fontWeight: 600 }}>
                    Azúcares
                </Typography>
                <Slider
                    getAriaLabel={() => 'Sugar'}
                    value={sugarRange}
                    sx={{ color: 'secondary.dark' }}
                    onChange={(event, newValue) => setSugarRange(newValue)}
                    valueLabelDisplay="auto"
                />
                <Typography id="input-slider" variant="body" gutterBottom sx={{ fontWeight: 600 }}>
                    Proteínas
                </Typography>
                <Slider
                    getAriaLabel={() => 'Protein'}
                    value={proteinRange}
                    sx={{ color: 'secondary.dark' }}
                    onChange={(event, newValue) => setProteinRange(newValue)}
                    valueLabelDisplay="auto"
                />
            </Box>
            <Grid container justifyContent="flex-end">
                <Button variant="contained" >
                    Buscar
                        </Button>
            </Grid>
        </Box >
    );
}

export default ProductFilter