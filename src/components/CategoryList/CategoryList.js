import React from 'react'
import Category from './Category/Category'

import classes from './CategoryList.module.css'

export default function CategoryList() {
    return (
        <div className={classes.CategoryList}>
            <Category image='https://www.creativefabrica.com/wp-content/uploads/2020/04/23/single-slice-italian-pizza-cartoon-flat-Graphics-3933838-1.jpg' />
            <Category image='https://cdn1.iconfinder.com/data/icons/restaurants-and-food/98/bugrer-512.png' />
            <Category image='https://www.creativefabrica.com/wp-content/uploads/2020/04/23/single-slice-italian-pizza-cartoon-flat-Graphics-3933838-1.jpg' />
            <Category image='https://cdn1.iconfinder.com/data/icons/restaurants-and-food/98/bugrer-512.png' />
            <Category image='https://www.creativefabrica.com/wp-content/uploads/2020/04/23/single-slice-italian-pizza-cartoon-flat-Graphics-3933838-1.jpg' />
            <Category image='https://cdn1.iconfinder.com/data/icons/restaurants-and-food/98/bugrer-512.png' />
        </div>
    )
}
