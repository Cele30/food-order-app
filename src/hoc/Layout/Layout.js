import React from 'react'
import Sidebar from '../../components/Sidebar/Sidebar'
import { Container, Grid } from '@material-ui/core'

import useStyles from '../../styles'

export default function Layout(props) {
    const classes = useStyles()
    return (
        <Container className={classes.layout}>
            <Grid container>
                <Grid item xs={3}>
                    <Sidebar />
                </Grid>
                <Grid item xs={9} className={classes.main}>
                    <Container>
                        {props.children}
                    </Container>
                </Grid>
            </Grid>
        </Container>
    )
}
