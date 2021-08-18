import React from 'react'
import { Card, CardContent, CardMedia, Typography } from '@material-ui/core'

import useStyles from './styles'

export default function Category({ image, title, clicked, selectedCategory }) {
    const classes = useStyles()
    return (
        <Card className={selectedCategory === title ? [classes.root, classes.active].join(' ') : classes.root} onClick={() => clicked(title)}>
            <CardMedia className={classes.image} image={image} title='imag' />
            <CardContent>
                <Typography variant="body2" component="p" align='center' style={{ textTransform: 'capitalize' }}>
                    {title}
                </Typography>
            </CardContent >
        </Card >
    )
}
