import React from 'react'
import { Card, CardActionArea, CardActions, CardContent, CardMedia, Typography, makeStyles } from '@material-ui/core'
import AddCircleIcon from '@material-ui/icons/AddCircle';

import burger from '../../../assets/burger14324.jpg'

const useStyles = makeStyles({
    root: {
        maxWidth: 180,
        margin: '40px 0',
        borderRadius: 20,
        overflow: 'visible',
        '&:hover': {
            backgroundColor: '#fff'
        },
    },
    media: {
        height: 120,
        display: 'block',
        marginLeft: 'auto',
        marginRight: 'auto',
        width: '80%',
        marginTop: '-50px',
        mixBlendMode: 'multiply'
    },
    actions: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: 0,
    }
});


export default function MenuItem() {
    const classes = useStyles()
    return (
        <Card className={classes.root} >
            <CardActionArea>
                <CardMedia
                    className={classes.media}
                    image={burger}
                    title="Contemplative Reptile"
                />
                <CardContent>
                    <Typography gutterBottom variant="h6" component='p'>
                        Burger 'Wanted'
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                        Lizards are a widespread group of squamate reptiles
                    </Typography>
                    <CardActions className={classes.actions}>
                        <Typography variant='h6'>
                            $39
                        </Typography>
                        <AddCircleIcon fontSize='large' />
                    </CardActions>
                </CardContent>
            </CardActionArea>
        </Card>
    )
}
