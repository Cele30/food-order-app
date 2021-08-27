import React, { useState } from 'react'
import { Button, Typography } from '@material-ui/core'
import { FaSearch, FaShoppingCart } from 'react-icons/fa'
import Search from '../UI/Search/Search'
import CartList from '../Cart/CartList'
import Collapse from '@material-ui/core/Collapse';


import classes from './Toolbar.module.css'

export default function Toolbar() {
    const [showCartComponent, setShowCartComponent] = useState(false)
    return (
        <div className={classes.Toolbar}>
            <Typography variant='h3'>Welcome to <span>Eatland</span></Typography>
            <Search />
            <Button className={classes.btn} variant='contained' onClick={() => setShowCartComponent(!showCartComponent)}><FaShoppingCart /></Button>
            {showCartComponent ?
                <CartList showCartComponent={showCartComponent} /> :
                null
            }
        </div>
    )
}
