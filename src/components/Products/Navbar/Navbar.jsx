import React from 'react';
import {AppBar, Toolbar, IconButton, Badge, MenuItem, Menu, Typography} from '@material-ui/core';
import {ShoppingCart} from '@material-ui/icons' 
import useStyles from './styles'
import logo from '../../../assets/commerce.png'
import {Link, useLocation} from 'react-router-dom'

const Navbar = ({total_items}) => {
    
    const classes = useStyles()
    const localtion = useLocation();
   
  return (
    <AppBar position="fixed" className={classes.appBar} color="inherit">
            <Toolbar>
                <Typography component={Link} to="/" variant="h6" className={classes.title} color="inherit">
                    <img src={logo} alt="Commerce.js" height="25px" className={classes.image} />
                    Shopping 
                </Typography>
                <div className={classes.grow}/>
             
                <div className={classes.button}> 
                    <IconButton  component={Link} to="/cart" color="inherit">
                        {(typeof total_items === 'undefined' || total_items === 0  ) &&
                        <Badge badgeContent="0" color="secondary">
                            <ShoppingCart/>
                        </Badge>
                        }

                        {total_items > 0 &&
                        <Badge badgeContent={total_items} color="secondary">
                            <ShoppingCart/>
                        </Badge>
                        }
                    </IconButton>
                </div>
               
                
              
                
               
            </Toolbar>
    </AppBar>
  )
  
  
};

export default Navbar;
