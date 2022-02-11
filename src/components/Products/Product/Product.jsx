import React from 'react';
import { Card, CardMedia, CardContent, CardActions, Typography, IconButton } from '@material-ui/core';
import { mergeClasses } from '@material-ui/styles';
import useStyles from './styles'
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { AddShoppingCart } from '@material-ui/icons';
const Product = ({ product, onAddToCart }) => {
    const classes = useStyles();
   
    
   
    return (
        <Card className={classes.root}>

<Link to={`/zoom/${product.id}`}>  <CardMedia className={classes.media}  image={product.image.url} /></Link>
            <CardContent>
                <div className={classes.cardContent}>
                    <Typography variant="h6" gutterBottom>
                        {product.name}
                    </Typography>

                    <Typography variant="h6" gutterBottom>
                        {product.price.formatted_with_symbol}
                    </Typography>
                </div>
                <Typography className={classes.cardDescription} dangerouslySetInnerHTML={{ __html: product.description }} variant="body2" color="textSecondary"></Typography>

            </CardContent>
            <CardActions disableSpacing className={classes.cardActions}>
                <IconButton aria-label="Add to Cart" onClick={() => onAddToCart(product.id, 1)}>
                    <AddShoppingCart />
                </IconButton>
            </CardActions>
        </Card>
    )
};

export default Product;
