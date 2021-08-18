import React from 'react'
import MenuItem from '../../components/MenuItem/MenuItem'
import { Grid, Typography, IconButton, List, makeStyles } from '@material-ui/core'
import { FaSlidersH, FaLongArrowAltRight } from 'react-icons/fa'
import Spinner from '../../components/UI/Spinner/Spinner'

import FilterItems from '../../components/FIlterItems/FilterItems'


import useFetchAll from '../../services/useFetchAll'

const urls = ['https://api.spoonacular.com/food/menuItems/search?query=burger&number=2&apiKey=9dbe251a85304324b51ded56c95893e5',
    'https://api.spoonacular.com/food/menuItems/search?query=pizza&number=2&apiKey=9dbe251a85304324b51ded56c95893e5']

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
    const { data, loading, error } = useFetchAll(urls)
    const classes = useStyles()

    const [anchorEl, setAnchorEl] = React.useState(null);

    const handleClick = (event) => {
        setAnchorEl(anchorEl ? null : event.currentTarget);
    };

    const open = Boolean(anchorEl);
    const id = open ? 'simple-popper' : undefined;

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
                {loading ? <Spinner /> : data.map(item => (
                    <Grid item xs={4} key={item.id} >
                        <MenuItem {...item} />
                    </Grid>
                ))
                }
            </List>
        </Grid>
    )
}
