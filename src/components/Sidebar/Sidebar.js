import React from 'react'
import { Typography, Avatar, Grid, Card, CardContent, IconButton, CardMedia } from '@material-ui/core'
import NavigationItems from '../Navigaton/NavigationItems'
import { FaLongArrowAltRight } from 'react-icons/fa'

import useStyles from './styles'
import './Sidebar.module.css'


export default function Sidebar() {
    const classes = useStyles()
    return (
        <Grid container direction='column' spacing={2}>
            <Grid item xs={12} className={classes.profilePicture}>
                <Avatar className={classes.avatar} src='https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/1200px-Image_created_with_a_mobile_phone.png' />
                <Typography variant='body1'>Jack Gibbs</Typography>
            </Grid>

            <Grid item xs={12}>
                <NavigationItems />
            </Grid>

            <Grid item xs={12}>
                <Card className={classes.delivery}>
                    <CardMedia className={classes.media} image='https://warehouseos.com/wp-content/uploads/2018/03/fast-delivery.png' />
                    <CardContent >
                        <Typography variant='h4' gutterBottom>Faster delivery</Typography>
                        <Typography variant='subtitle2'>Learn More <IconButton style={{ padding: '0 10px' }}><FaLongArrowAltRight /></IconButton></Typography>
                    </CardContent>
                </Card>
            </Grid>
        </Grid>
    )
}
