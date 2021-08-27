import React from 'react'
import { Card, CardActionArea, CardActions, CardContent, CardMedia, Typography } from '@material-ui/core'
import AddCircleIcon from '@material-ui/icons/AddCircle';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import { useGlobalContext } from '../../context/menu-context';
import useStyles from './styles';

export default function MenuItem({ image, title, price, ingredients, id }) {
    const classes = useStyles()

    const { addToCart, removeFromCart, itemIsInCart } = useGlobalContext()

    const isItemToCart = itemIsInCart(id)

    const toggleFavoriteStatusHandler = () => {
        if (isItemToCart) {
            removeFromCart(id)
        } else {
            addToCart({ id, image, title, price, quantity: 1 })
        }
    }

    return (
        <Card className={classes.root} style={{ background: isItemToCart ? '#F4F6F8' : 'transparent' }}>
            <CardActionArea disableRipple className={classes.cardActions}>
                <div style={{ height: '90px', width: '90px', margin: 'auto' }}>
                    <CardMedia
                        className={classes.media}
                        image={image}
                        title="Contemplative Reptile"
                        component='img'
                    />
                </div>
                <CardContent>
                    <Typography style={{ textOverflow: 'ellipsis', whiteSpace: 'nowrap', overflow: 'hidden' }} gutterBottom variant="h6" component='p'>
                        {title}
                    </Typography>
                    <Typography style={{ height: '80px', overflow: 'hidden' }} variant="body2" color="textSecondary" component="p">
                        {ingredients.join(', ')}
                    </Typography>
                    <CardActions className={classes.actions} >
                        <Typography variant='h6'>
                            ${price}
                        </Typography>
                        {isItemToCart ?
                            <CheckCircleIcon fontSize='large' onClick={toggleFavoriteStatusHandler} />
                            : <AddCircleIcon fontSize='large' onClick={toggleFavoriteStatusHandler} />
                        }
                    </CardActions>
                </CardContent>
            </CardActionArea>
        </Card>
    )
}

