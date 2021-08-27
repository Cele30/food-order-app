import React, { useState, useEffect } from 'react'
import MenuItem from '../../components/MenuItem/MenuItem'
import { Grid, Typography, IconButton, List, makeStyles } from '@material-ui/core'
import { FaSlidersH, FaLongArrowAltRight } from 'react-icons/fa'
import Spinner from '../../components/UI/Spinner/Spinner'
import FilterItems from '../../components/FIlterItems/FilterItems'
import useFetchAll from '../../services/useFetchAll'
import config from '../../api-config/config.json'
import useFetch from '../../services/useFetch'
import { useGlobalContext } from '../../context/menu-context'
import axios from 'axios'

import InfiniteScroll from 'react-infinite-scroller';


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
    const { data, loading, error } = useFetch('https://61263d553ab4100017a68e37.mockapi.io/api/v1/food')
    const [anchorEl, setAnchorEl] = useState(null);
    const classes = useStyles()

    const handleClick = (event) => {
        setAnchorEl(anchorEl ? null : event.currentTarget);
    };

    const open = Boolean(anchorEl);
    const id = open ? 'simple-popper' : undefined;

    let menuItems = error ? <p>Menu items can't be loaded</p> : <Spinner />


    if (data) {
        menuItems = data.map(item => (
            <Grid item xs={4} key={item.id} >
                <MenuItem {...item} />
            </Grid>
        ))
    }


    return (
        <Grid container alignItems='center'>
            <Grid item xs={6} style={{ margin: '5px 0' }}>
                <Typography align='left' variant='h4' >All items <IconButton aria-describedby={id} type="button" onClick={handleClick}><FaSlidersH /></IconButton></Typography>
                <FilterItems id={id} open={open} anchorEl={anchorEl} />
            </Grid>
            <Grid item xs={6}>
                <Typography align='right' variant='subtitle1'>View all <IconButton><FaLongArrowAltRight /></IconButton></Typography>
            </Grid>
            <List className={classes.root}>
                {menuItems}
            </List >
        </Grid>
    )
}
