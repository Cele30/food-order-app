import React from 'react'
import { Button, Typography } from '@material-ui/core'
import { FaSearch, FaShoppingCart } from 'react-icons/fa'
import Search from '../UI/Search/Search'

import classes from './Toolbar.module.css'

export default function Toolbar() {
    return (
        <div className={classes.Toolbar}>
            <Typography variant='h3'>Welcome to <span>Eatland</span></Typography>
            <Search />
            <Button variant='contained'><FaShoppingCart /></Button>
        </div>
    )
}
