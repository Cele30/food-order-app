import React from 'react'
import { List, ListItem, ListItemIcon, ListItemText, makeStyles, TextField, Button, IconButton, Typography } from '@material-ui/core';
import InboxIcon from '@material-ui/icons/Inbox';
import FolderIcon from '@material-ui/icons/Folder'
import DraftsIcon from '@material-ui/icons/Drafts';
import Fade from '@material-ui/core/Fade';
import DeleteIcon from '@material-ui/icons/Delete';
import { useGlobalContext } from '../../context/menu-context';

const useStyles = makeStyles((theme) => ({
    root: {
        position: 'absolute',
        top: "20%",
        right: "10%",
        zIndex: 2,
        width: '100%',
        maxWidth: 310,
        backgroundColor: '#f4f4f4',
    },
    list: {
        width: '100%',
        position: 'relative',
        overflow: 'auto',
        maxHeight: 400,
        marginBottom: 10
    }
}));

export default function CartList(props) {
    const { cartItems, quantityHandler, totalPrice, removeFromCart } = useGlobalContext()
    const classes = useStyles()
    return (
        <Fade in={props.showCartComponent} >
            <div className={classes.root}>
                {cartItems.length > 0 ?
                    <>
                        <List className={classes.list}>
                            {cartItems.map(cartItem => (
                                <ListItem key={cartItem.id}>
                                    <div style={{ width: '50px', height: '50px', margin: '0 5px' }}>
                                        <img src={cartItem.image} alt={cartItem.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                                    </div>
                                    <ListItemText
                                        primary={cartItem.title}
                                        secondary={`$${cartItem.price * cartItem.quantity}`}
                                    />
                                    <div style={{ display: 'flex', alignItems: 'center' }}>
                                        <TextField type='number' value={cartItem.quantity} onChange={e => quantityHandler(cartItem.id, parseInt(e.target.value))} size='small' InputProps={{ inputProps: { min: 1 } }} variant='outlined' style={{ width: '60px' }} />
                                        <IconButton edge="end" aria-label="delete" style={{ padding: 0 }} onClick={() => removeFromCart(cartItem.id)}>
                                            <DeleteIcon />
                                        </IconButton>
                                    </div>
                                </ListItem>
                            ))}
                        </List>
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: 10 }}>
                            <Typography variant='h6'>Total Price ${totalPrice}</Typography>
                            <Button variant="contained" color='primary'>
                                Checkout
                            </Button>
                        </div>
                    </> : <Typography variant='h6'>Cart it empty</Typography>
                }
            </div>
        </Fade >
    )
}
