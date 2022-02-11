import React from 'react';
import {Grid} from '@material-ui/core';
import Product from './Product/Product'
import useStyles from './styles'
import {memo} from 'react'



const Products = ({products,onAddToCart}) => {
    
  
  
    const classes = useStyles();
    return (    
        <main className={classes.content}>
            <div className="toolbar">
            <Grid container justifyContent="center" spacing={4}>
                    {products.map(product => (
                       <Grid item key={product.id} xs={6} sm={4} md={6} lg={3}>
                           <Product product={product}  onAddToCart={onAddToCart} />
                       </Grid>
                    )

                    )}
            </Grid>
            </div>
         
        </main>
    )
  
}
export default memo(Products);