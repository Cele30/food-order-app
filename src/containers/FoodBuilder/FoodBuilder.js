import React from 'react'
import { withRouter } from 'react-router'
import { Typography } from '@material-ui/core'
import burger from '../../assets/burger2.png'

import classes from './FoodBuilder.module.css'

function FoodBuilder(props) {
    return (
        <div className={classes.card} onClick={() => props.history.push('food-order')}>
            <img className={classes.image}
                src={burger}
                alt="burger" />
            <Typography variant='h4'>Build food</Typography>
            <Typography variant='subtitle1'>with ingredients you like</Typography>
        </div>
    )
}

export default withRouter(FoodBuilder)