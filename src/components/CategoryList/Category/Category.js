import React from 'react'
import { Card, CardContent, CardMedia, Typography } from '@material-ui/core'

import useStyles from './styles'

export default function Category({ image }) {
    const classes = useStyles()
    return (
        <Card className={classes.root}>
            <CardMedia className={classes.image} image={image} title='imag' />
            <CardContent>
                <Typography variant="body2" component="p" align='center'>
                    Burgers
                </Typography>
            </CardContent >
        </Card >
    )
}
