import React from 'react'
import NavigationItem from './NavigationItem/NavigationItem'
import HomeIcon from '@material-ui/icons/Home'
import MenuBookIcon from '@material-ui/icons/MenuBook';
import AssignmentIcon from '@material-ui/icons/Assignment';
import SettingsIcon from '@material-ui/icons/Settings';

import classes from './NavigationItems.module.css'

export default function NavigationItems() {
    return (
        <ul className={classes.NavigationItems}>
            <NavigationItem link='/' exact><HomeIcon /> Home</NavigationItem>
            <NavigationItem link='/menu'><MenuBookIcon /> Menu</NavigationItem>
            <NavigationItem link='/article'><AssignmentIcon /> Article</NavigationItem>
            <NavigationItem link='/setting'><SettingsIcon /> Setting</NavigationItem>
        </ul>
    )
}
