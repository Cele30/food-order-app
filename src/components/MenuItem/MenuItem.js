import React from 'react'
import { Card, CardActionArea, CardActions, CardContent, CardMedia, Typography, makeStyles, Button } from '@material-ui/core'
import AddCircleIcon from '@material-ui/icons/AddCircle';

import burger from '../../assets/burger14324.jpg'

const useStyles = makeStyles({
    root: {
        maxWidth: 170,
        margin: '40px 0',
        borderRadius: 20,
        overflow: 'visible',
        '&:hover': {
            background: '#fff',
            borderRadius: 20
        }
    },
    media: {
        mixBlendMode: 'multiply',
        marginTop: '-40px',
        width: '100%',
        height: '100%',
        borderRadius: '50%',
        border: '1px solid #999'
    },
    actions: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: 0,
    }
});


export default function MenuItem({ title, image, price }) {
    const classes = useStyles()
    return (
        <Card className={classes.root} >
            <CardActionArea disableRipple>
                <div style={{ height: '100px', width: '100px', margin: 'auto' }}>
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
                    <Typography variant="body2" color="textSecondary" component="p">
                        Lizards are a widespread group of squamate reptiles
                    </Typography>
                    <CardActions className={classes.actions}>
                        <Typography variant='h6'>
                            ${price}
                        </Typography>
                        <AddCircleIcon fontSize='large' />
                    </CardActions>
                </CardContent>
            </CardActionArea>
        </Card>
    )
}

