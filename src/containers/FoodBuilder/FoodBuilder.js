import React from 'react'
import { Typography } from '@material-ui/core'
import classes from './FoodBuilder.module.css'

import burger from '../../assets/burger2.png'

export default function FoodBuilder() {
    return (
        <div className={classes.card}>
            <img className={classes.image}
                src={burger}
                alt="burger" />
            <Typography variant='h4'>Build food</Typography>
            <Typography variant='subtitle1'>with ingredients you like</Typography>
        </div>
    )
}
