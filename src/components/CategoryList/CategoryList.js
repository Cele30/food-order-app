import React, { useEffect, useState } from 'react'
import Category from './Category/Category'
import axios from 'axios'
import Spinner from '../UI/Spinner/Spinner'

import classes from './CategoryList.module.css'

export default function CategoryList() {
    const [categories, setCategories] = useState(null)
    const [loading, setLoading] = useState(true)
    const [selectedCategory, setSelectedCategory] = useState('all')

    useEffect(() => {
        axios.get('https://food-order-0530-default-rtdb.firebaseio.com/categories.json')
            .then(res => setCategories(res.data))
            .finally(() => setLoading(false))
    }, [])

    const clickHandler = (title) => {
        setSelectedCategory(title)
    }

    return (
        <div className={classes.CategoryList}>
            {loading ? <Spinner /> : Object.keys(categories).map(category => (
                <Category key={category} image={categories[category]} title={category} clicked={clickHandler} selectedCategory={selectedCategory} />
            ))}
        </div>
    )
}
