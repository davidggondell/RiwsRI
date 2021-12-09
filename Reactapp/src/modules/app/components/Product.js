import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import {
    Alert, Avatar, Box, Button,
    Card,
    CardContent, CardHeader,
    Chip, Divider,
    Grid,
    Grow, IconButton, Link,
    ListItem, ListItemAvatar, Table, TableBody, TableCell,
    TableHead, TableRow,
    Typography
} from '@mui/material';
import React from 'react';
import sinSatlBaePng from '../../../icons/bae-de-sal-64.png';
import sinAzucarPng from '../../../icons/sin-azucar-100.png';
import sinGlutenPng from '../../../icons/sin-gluten-52.png';

const Product = ({ url, product }) => {
    const [openTable, setOpenTable] = React.useState(false)
    const noSaltValue = 0.12;
    const noSugarValue = 0.5;

    const MyRow = ({ label, value }) => (
        <TableRow>
            <TableCell />
            <TableCell sx={{ color: 'primary.contrastText' }}>
                {label}
            </TableCell>
            <TableCell
                sx={{ color: 'primary.contrastText' }}
                align="right"
            >
                {value}
            </TableCell>
        </TableRow>
    );

    return (
        <Card sx={{ minWidth: 350, maxWidth: 380, height: "100%", backgroundColor: 'primary.main', color: 'primary.contrastText' }}>
            <CardHeader
                avatar={
                    <Avatar
                        sx={{
                            backgroundColor: 'secondary.main',
                            color: 'primary.contrastText',
                            fontWeight: 600
                        }}
                        aria-label="product"
                    >
                        {product.name.charAt(0)}
                    </Avatar>
                }
                title={
                    <Grid container spacing={1} justifyContent="space-between">
                        <Grid item sx={{ maxWidth: 200 }}>
                            <Typography variant="h6" sx={{ fontWeight: 600, textOverflow: 'ellipsis' }} noWrap>
                                {product.name}
                            </Typography>
                        </Grid>
                        <Grid item>
                            <Chip
                                sx={{ backgroundColor: 'secondary.main', color: 'primary.contrastText' }}
                                label={
                                    <Typography variant="h5" sx={{ fontWeight: 600 }}>
                                        {product.price}€
                                    </Typography>
                                }
                            />
                        </Grid>
                    </Grid>
                }
            />
            <Box sx={{ paddingLeft: 3, paddingBottom: 1, paddingRight: 1 }}>
                <Typography variant="body" >
                    {product.name}
                </Typography>
            </Box>
            <Divider sx={{ backgroundColor: 'primary.contrastText' }} />
            <CardContent>
                <Grid container spacing={1} justifyContent="center">
                    {product.subcategories.map((category, i) =>
                        <Grid item key={i}>
                            <Chip sx={{ backgroundColor: 'primary.light', color: 'primary.contrastText' }} label={category} />
                        </Grid>
                    )}
                </Grid>
            </CardContent>
            <Divider sx={{ backgroundColor: 'primary.contrastText' }} />
            <CardContent>
                <Grid container sx={{ marginBottom: 1 }} >
                    {product.glutenLess &&
                        <Grid item xs={6}>
                            <ListItem>
                                <ListItemAvatar>
                                    <Avatar sx={{ backgroundColor: 'primary.light' }} >
                                        <img src={sinGlutenPng} alt="sin gluten" width="30" height="30" />
                                    </Avatar>
                                </ListItemAvatar>
                                <Typography variant="body">
                                    Sin gluten
                                </Typography>
                            </ListItem>
                        </Grid>
                    }
                    {(parseFloat(product.salt) <= noSaltValue) && (parseFloat(product.salt) !== -1) &&
                        <Grid item xs={6}>
                            <ListItem>
                                <ListItemAvatar>
                                    <Avatar sx={{ backgroundColor: 'primary.light', alignSelf: 'center' }} >
                                        <img src={sinSatlBaePng} alt="sin sal" width="35" height="35" />
                                    </Avatar>
                                </ListItemAvatar >
                                <Typography variant="body">
                                    Sin sal
                                </Typography>
                            </ListItem>
                        </Grid>
                    }
                    {(parseFloat(product.sugar) <= noSugarValue) && (parseFloat(product.sugar) !== -1) &&
                        <Grid item xs={6}>
                            <ListItem>
                                <ListItemAvatar>
                                    <Avatar sx={{ backgroundColor: 'primary.light', alignSelf: 'center' }} >
                                        <img src={sinAzucarPng} alt="sin gluten" width="30" height="30" />
                                    </Avatar>
                                </ListItemAvatar>
                                <Typography variant="body">
                                    Sin azúcar
                                </Typography>
                            </ListItem>
                        </Grid>
                    }
                </Grid>
                {(product.kJ < 0) && (product.kcal < 0) && (product.fats < 0) &&
                    (product.satFats < 0) && (product.carbs < 0) && (product.sugar < 0) &&
                    (product.protein < 0) && (product.salt < 0) ?
                    <React.Fragment>
                        <Alert severity="info" variant="filled">
                            Este producto no tiene info. nutricional
                        </Alert>
                    </React.Fragment>
                    :
                    <Table
                        size="small"
                        aria-label="table"
                        sx={{
                            backgroundColor: 'primary.light',
                            borderTopRightRadius: 10,
                            borderTopLeftRadius: 10
                        }}
                    >
                        <TableHead>
                            <TableRow>
                                <TableCell sx={{ maxWidth: 5 }}>
                                    <IconButton
                                        aria-label="expand row"
                                        size="small"
                                        sx={{ color: 'primary.contrastText', marginLeft: -1 }}
                                        onClick={() => setOpenTable(!openTable)}
                                    >
                                        {openTable ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
                                    </IconButton>
                                </TableCell>
                                <TableCell sx={{ color: 'primary.contrastText', fontWeight: 600 }}>
                                    Info. Nutricional (100g)
                                </TableCell>
                                <TableCell
                                    sx={{ color: 'primary.contrastText', fontWeight: 600 }}
                                    align="right"
                                >
                                    valor
                            </TableCell>
                            </TableRow>
                        </TableHead>
                        {openTable &&
                            <Grow in={true}>
                                <TableBody>
                                    <MyRow label="Valor energético" value={product.kJ.toString() + " KJ"} />
                                    <MyRow label="Valor energético (Kcal)" value={product.kcal.toString() + " kcal"} />
                                    <MyRow label="Grasas" value={product.fats.toString() + " g"} />
                                    <MyRow label="Grasas saturadas" value={product.satFats.toString() + " g"} />
                                    <MyRow label="Hidratos de carbono" value={product.carbs.toString() + " g"} />
                                    <MyRow label="Azúcar" value={product.sugar.toString() + " g"} />
                                    <MyRow label="Proteínas" value={product.protein.toString() + " g"} />
                                    <MyRow label="Sal" value={product.salt.toString() + " g"} />
                                </TableBody>
                            </Grow>
                        }
                    </Table>
                }
                <Grid container justifyContent="center">
                    <Link href={url} target="_blank" style={{ textDecoration: 'none' }}>
                        <Button
                            color="secondary"
                            variant="contained"
                            sx={{ marginTop: 2 }}
                        >
                            Comprar producto
                        </Button>
                    </Link>
                </Grid>
            </CardContent>
        </Card >
    );
}

export default Product