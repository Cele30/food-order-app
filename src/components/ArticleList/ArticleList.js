import React, { useEffect } from 'react'
import Article from './Article/Article'
import { Grid, Typography } from '@material-ui/core'
import config from '../../api-config/config.json'
import useFetchAll from '../../services/useFetchAll'
import Spinner from '../UI/Spinner/Spinner'

export default function ArticleList() {
    const { data, loading, error } = useFetchAll(config.articleUrls)

    const articlesData = data.map(dataItem =>
        dataItem.searchResults.filter(item => item.name === 'Articles')
            .map(article => article.results).flat(2))

    return (
        <div>
            <Grid item xs={6} style={{ margin: '5px 0' }}>
                <Typography align='left' variant='h4' >Articles</Typography>
            </Grid>
            {loading ? <Spinner /> : articlesData.map(article => (
                <Article key={article.name} {...article} />
            ))}
        </div>
    )
}
