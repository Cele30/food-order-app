import React from 'react'
import { Card, CardContent, CardMedia, Typography, makeStyles, Link } from '@material-ui/core'

const useStyles = makeStyles(() => ({
    root: {
        display: 'flex',
        alignItems: 'center',
        margin: '10px 0',
        height: 65,
        padding: 10
    },
    media: {
        width: '50px',
        objectFit: 'contain',
        borderRadius: 0,
    },
}));

export default function Article({ 0: { name, image, link } }) {
    const classes = useStyles();

    return (
        <Card className={classes.root}>
            <CardMedia className={classes.media} image={image} component='img' />
            <CardContent>
                <Typography variant="subtitle2" style={{ fontSize: '12px' }}>
                    {name} <Link href={link} target="_blank" rel="noopener">View</Link>
                </Typography>
            </CardContent>
        </Card>
    )
}
