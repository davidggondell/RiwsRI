import {
    Box, Button, ButtonGroup,
    Checkbox, Divider, FormControlLabel,
    FormGroup, Grid, Slider,
    TextField
} from '@mui/material';
import React from 'react';
import { FormattedMessage } from 'react-intl';

const Home = () => {
    const [nameSearch, setNameSearch] = React.useState("");
    const [kJ, setKJ] = React.useState([20, 37]);
    const [kcal, setKcal] = React.useState([20, 37]);
    const [fats, setFats] = React.useState([20, 37]);
    const [satFats, setSatfats] = React.useState([20, 37]);
    const [carbs, setCarbs] = React.useState([20, 37]);
    const [sugar, setSugar] = React.useState([20, 37]);
    const [protein, setProtein] = React.useState([20, 37]);

    return (
        <Grid
            container
            spacing={1}
            justifyContent="center"
        >
            <Grid item>
                <Box>
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
                        value={kJ}
                        onChange={(event, newValue) => setKJ(newValue)}
                        valueLabelDisplay="auto"
                    />
                    <Slider
                        getAriaLabel={() => 'Kcal'}
                        value={kcal}
                        onChange={(event, newValue) => setKcal(newValue)}
                        valueLabelDisplay="auto"
                    />
                    <Slider
                        getAriaLabel={() => 'Fats'}
                        value={fats}
                        onChange={(event, newValue) => setFats(newValue)}
                        valueLabelDisplay="auto"
                    />
                    <Slider
                        getAriaLabel={() => 'Sat Fats'}
                        value={satFats}
                        onChange={(event, newValue) => setSatfats(newValue)}
                        valueLabelDisplay="auto"
                    />
                    <Slider
                        getAriaLabel={() => 'Carbohidrates'}
                        value={carbs}
                        onChange={(event, newValue) => setCarbs(newValue)}
                        valueLabelDisplay="auto"
                    />
                    <FormGroup>
                        <FormControlLabel control={<Checkbox />} label="Sin Azúcar" />
                    </FormGroup>
                    <Slider
                        getAriaLabel={() => 'Sugar'}
                        value={sugar}
                        onChange={(event, newValue) => setSugar(newValue)}
                        valueLabelDisplay="auto"
                    />
                    <Slider
                        getAriaLabel={() => 'Protein'}
                        value={protein}
                        onChange={(event, newValue) => setProtein(newValue)}
                        valueLabelDisplay="auto"
                    />
                </Box>
            </Grid>
            <Grid item >
                <Divider orientation="vertical" />
            </Grid>
            <Grid item>
                <FormattedMessage id="project.app.Home.welcome" />
            </Grid>
        </Grid>
    );
}

export default Home;
