import React from 'react'
import Category from './Category/Category'
import Spinner from '../UI/Spinner/Spinner'

import { useGlobalContext } from '../../context/menu-context'

import classes from './CategoryList.module.css'

export default function CategoryList() {
    const { categories, loadingCategories } = useGlobalContext()

    return (
        <div className={classes.CategoryList}>
            {loadingCategories ? <Spinner /> : Object.keys(categories).map(category => (
                <Category key={category} image={categories[category]} title={category} />
            ))}
        </div>
    )
}
