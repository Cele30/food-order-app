import React from 'react'
import MenuItem from './MenuItem/MenuItem'
import { Grid, Typography, IconButton, List, makeStyles } from '@material-ui/core'
import { FaSlidersH, FaLongArrowAltRight } from 'react-icons/fa'

const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
        position: 'relative',
        overflow: 'auto',
        maxHeight: 300,
        display: 'flex',
        flexWrap: 'wrap',
        marginBottom: 10
    }
}));


export default function MenuItems() {
    const classes = useStyles()
    return (
        <Grid container alignItems='center' >
            <Grid item xs={6} style={{ margin: '5px 0' }}>
                <Typography align='left' variant='h4' >All items <IconButton><FaSlidersH /></IconButton></Typography>
            </Grid>
            <Grid item xs={6}>
                <Typography align='right' variant='subtitle1'>View all <IconButton><FaLongArrowAltRight /></IconButton></Typography>
            </Grid>
            <List className={classes.root}>
                <Grid item xs={4}>
                    <MenuItem />
                </Grid>
                <Grid item xs={4}>
                    <MenuItem />
                </Grid>
                <Grid item xs={4}>
                    <MenuItem />
                </Grid>
                <Grid item xs={4}>
                    <MenuItem />
                </Grid>
            </List>
        </Grid>
    )
}
