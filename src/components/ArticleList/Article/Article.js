import React from 'react'
import { Card, CardContent, CardMedia, Typography, makeStyles } from '@material-ui/core'

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        alignItems: 'center',
        margin: '10px 0',
        height: 65
    },
    details: {
        display: 'flex',
        flexDirection: 'column',
    },
    content: {
        flex: '1 0 auto',
    },
}));

export default function Article() {

    const classes = useStyles();

    return (
        <Card className={classes.root}>
            <CardMedia style={{ width: 76, height: 40 }}
                component='img'
                image='https://www.craftbrewingbusiness.com/wp-content/uploads/2020/06/mask-smiley-face.jpg' />
            {/* <img style={{ width: '76px', height: '40px', background: 'blue' }}
                src="https://www.craftbrewingbusiness.com/wp-content/uploads/2020/06/mask-smiley-face.jpg"
                alt="Live from space album cover"
            /> */}
            <div className={classes.details}>
                <CardContent className={classes.content}>
                    <Typography variant="subtitle2">
                        Coronavirus Update (Live):
                    </Typography>
                    <Typography variant="subtitle2" color="textSecondary">
                        60,050,060 Cases
                    </Typography>
                </CardContent>
                {/* <div className={classes.controls}>
                    <IconButton aria-label="previous">
                        {theme.direction === 'rtl' ? <SkipNextIcon /> : <SkipPreviousIcon />}
                    </IconButton>
                    <IconButton aria-label="play/pause">
                        <PlayArrowIcon className={classes.playIcon} />
                    </IconButton>
                    <IconButton aria-label="next">
                        {theme.direction === 'rtl' ? <SkipPreviousIcon /> : <SkipNextIcon />}
                    </IconButton>
                </div> */}
            </div>
        </Card>
    )
}
