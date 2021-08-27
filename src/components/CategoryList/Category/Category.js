import React from 'react'
import { Card, CardContent, CardMedia, Typography } from '@material-ui/core'
import { useGlobalContext } from '../../../context/menu-context'

import useStyles from './styles'

export default function Category({ image, title }) {
    const classes = useStyles()
    const { selectedCategory, categoryClickHandler } = useGlobalContext()

    return (
        <Card className={selectedCategory === title ? [classes.root, classes.active].join(' ') : classes.root} onClick={() => categoryClickHandler(title)}>
            <CardMedia className={classes.image} image={image} title='imag' />
            <CardContent>
                <Typography variant="body2" component="p" align='center' style={{ textTransform: 'capitalize' }}>
                    {title}
                </Typography>
            </CardContent >
        </Card >
    )
}
