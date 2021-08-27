import React from 'react'
import { Grid } from '@material-ui/core'

import Toolbar from '../../components/Toolbar/Toolbar'
import CategoryList from '../../components/CategoryList/CategoryList';
import FoodBuilder from '../../containers/FoodBuilder/FoodBuilder';
import MenuItems from '../../containers/MenuItems/MenuItems';
import ArticleList from '../../components/ArticleList/ArticleList';

export default function Home() {
    return (
        <>
            <Grid item xs={12}>
                <Toolbar />
            </Grid>
            <Grid item xs={8}>
                <CategoryList />
            </Grid>
            <Grid item xs={4}>
                <FoodBuilder />
            </Grid>
            <Grid item xs={8}>
                <MenuItems />
            </Grid>
            <Grid item xs={4}>
                {/* <ArticleList /> */}
            </Grid>
        </>
    )
}
