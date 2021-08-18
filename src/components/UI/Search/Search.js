import React, { useState } from 'react'
import { Button, TextField } from '@material-ui/core'
import { FaSearch } from 'react-icons/fa'

import classes from './Search.module.css'

export default function Search() {
    const [openSearch, setOpenSearch] = useState(false)

    const openSearchHandler = () => {
        setOpenSearch(!openSearch);
    }

    return (
        <div className={classes.searchBox}>
            <TextField className={`${classes.searchInput} ${openSearch && classes.open}`} id="standard-basic" placeholder='Search food' />
            {/* <input className={`${classes.searchInput} ${openSearch && classes.open}`} type="text" name="" placeholder="Search" /> */}
            <Button variant='contained' onClick={openSearchHandler}><FaSearch /></Button>
        </div >
    )
}

