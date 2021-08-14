import React from 'react'
import Article from './Article/Article'
import { Grid, Typography } from '@material-ui/core'

export default function ArticleList() {
    return (
        <div>
            <Grid item xs={6} style={{ margin: '5px 0' }}>
                <Typography align='left' variant='h4' >Articles</Typography>
            </Grid>
            <Article />
            <Article />
            <Article />
            <Article />
        </div>
    )
}
