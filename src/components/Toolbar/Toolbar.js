import React from 'react'
import { Button, Typography } from '@material-ui/core'
import { FaSearch, FaShoppingCart } from 'react-icons/fa'

import classes from './Toolbar.module.css'

export default function Toolbar() {
    return (
        <div className={classes.Toolbar}>
            <Typography variant='h3'>Welcome to <span>Eatland</span></Typography>
            <Button variant='contained'><FaSearch /></Button>
            <Button variant='contained'><FaShoppingCart /></Button>
        </div>
    )
}
