import React from 'react';
import { Typography, Button, CardActions, CardContent, CardMedia, IconButton, Card } from '@material-ui/core';
import useStyles from './styles'
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import RemoveIcon from '@mui/icons-material/Remove';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';
import RemoveShoppingCartIcon from '@mui/icons-material/RemoveShoppingCart';
import DraftsIcon from '@mui/icons-material/Drafts';
import AddIcon from '@mui/icons-material/Add';
const CartItem = ({ item, handleUpdateCartQty, handleRemoveFromCartQty }) => {
        const classes = useStyles()
        const [selectedIndex, setSelectedIndex] = React.useState(1);
        console.log(item)
        const handleListItemClick = (event, index) => {
                setSelectedIndex(index);
        };
        return (

                <Box sx={{ width: '100%' }} >
                        <List component="nav" aria-label="main mailbox folders">
                                <ListItemButton
                                        selected={selectedIndex === 0}
                                        onClick={(event) => handleListItemClick(event, 0)}
                                >

                                        <CardMedia
                                                component="img"
                                                className={classes.img}
                                                src={item.image.url}
                                                alt="green iguana"
                                        />

                                        <ListItemText className={classes.listItemText} >
                                                <Typography variant="h6">{item.name}</Typography>
                                        </ListItemText>
                                        <ListItemText className={classes.listItemText}  >
                                                <IconButton color="primary" component="span">
                                                        <RemoveIcon onClick={() => handleUpdateCartQty(item.id, { quantity: item.quantity - 1 })} />
                                                </IconButton>
                                                <Typography className={classes.grow} variant="h6">{item.quantity}</Typography>
                                                <IconButton color="primary" component="span">
                                                        <AddIcon onClick={() => handleUpdateCartQty(item.id, { quantity: item.quantity + 1 })} />
                                                </IconButton>

                                                <Button type="Button"
                                                        style={{ margin: '12px 10px' }}
                                                        size="small"
                                                        color="secondary"
                                                        variant="contained"
                                                        onClick={() => handleRemoveFromCartQty(item.id)}><RemoveShoppingCartIcon />
                                                </Button>
                                        </ListItemText>
                                        <ListItemText className={classes.listItemText}  >
                                                <Typography variant="h6">
                                                        {item.line_total.formatted_with_symbol}
                                                </Typography>

                                        </ListItemText>

                                </ListItemButton>
                                <Divider />
                        </List>
                </Box>


        )


};

export default CartItem;
