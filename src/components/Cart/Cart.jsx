import React from 'react';
import {Container, Typography, Button, Grid, getContrastRatio} from '@material-ui/core';
import useStyles from './styles'
import CartItem from './CartItem/CartItem'
import {Link} from 'react-router-dom'
import ShoppingCartCheckoutIcon from '@mui/icons-material/ShoppingCartCheckout';
import HourglassDisabledIcon from '@mui/icons-material/HourglassDisabled';
import Box from '@mui/material/Box';
import cartImg from '../../assets/cart.png'
import Footer from '../Footer/Footer'




const Cart = ({cart, handleEmptyFromCartQty, handleRemoveFromCartQty, handleUpdateCartQty}) => {
 
    const classes=useStyles()
   
    const EmptyCart = () => (
        <Typography variant="subtitle1">
            You have no items in your shipping cart, start adding some! <br/>
            <Button variant="contained" style={{ 'margin-bottom': '10px' }}><Link to="/" className={classes.link}> Start adding some</Link></Button>
            
        </Typography>
    );

    const FilledCart= () => (
        <>
            <Grid container spacing={3}  >
                {cart.line_items.map((item)=> (
                    <Grid item xs={12} sm={12} md={12} lg={12} key={item.id}>
                       <CartItem item={item}
                                 handleUpdateCartQty={handleUpdateCartQty}
                                 handleRemoveFromCartQty= { handleRemoveFromCartQty}
                       />
                    </Grid>
                )
                     
                )}
            </Grid>

            <div className={classes.cardDetails}>
                    <Typography className={classes.subTotal} variant="h5">
                           <span> Subtotal: </span> { cart.subtotal.formatted_with_symbol}
                    <div className={classes.bt_bottom} >
                        <Button className={classes.emptyButton} onClick={()=>handleEmptyFromCartQty()} size="large" type="button" variant="contained" color="secondary"><HourglassDisabledIcon/>Empty Cart</Button>
                        <Button component={Link} to="/checkout" className={classes.checkout} size="large" type="button" variant="contained" color="primary"><ShoppingCartCheckoutIcon/>Checkout</Button>

                    </div>
                    </Typography>

            </div>

        </>
    )
    if (!cart.line_items) {
        console.log("Loading......")
        return  "Loading......"
    }
    return (
        <>
             <Container className={classes.bg} >
            <div className={classes.toolbar}/>
            <Grid item xs={12} sm={12} >
        <Box
          sx={{
            bgcolor: 'secondary.main',
            color: 'secondary.contrastText',
            p: 2,
          }}
        >
           <Typography variant="h4" align="center">   <img src={cartImg} alt="Commerce.js" height="35px" className={classes.image} /> Your Shopping Cart</Typography>  
        </Box>
        </Grid>
            {!cart.line_items.length ? <EmptyCart/> : <FilledCart/>}
       
        </Container>
      
        </>
       
    )
}
export default Cart