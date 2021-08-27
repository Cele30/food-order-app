import React, { useState, useContext, useEffect } from 'react'
import axios from 'axios'
import config from '../api-config/config.json'
import useFetch from '../services/useFetch'
import useFetchAll from '../services/useFetchAll'


export const MenuContext = React.createContext()

export const MenuContextProvider = (props) => {
    const [selectedCategory, setSelectedCategory] = useState('all')
    const [categories, setCategories] = useState(null)
    const [loadingCategories, setLoadingCategories] = useState(true)
    const [menuData, setMenuData] = useState([])
    // const { data, loading, error } = useFetch('https://61263d553ab4100017a68e37.mockapi.io/api/v1/food')

    useEffect(() => {
        axios.get('https://food-order-0530-default-rtdb.firebaseio.com/categories.json')
            .then(res => setCategories(res.data))
            .catch(error => setLoadingCategories(false))
            .finally(() => setLoadingCategories(false))
    }, [])

    const categoryClickHandler = (title) => {
        setSelectedCategory(title)
        axios.get(`${config.baseUrl}/food/menuItems/search?query=${title}&number=12&apiKey=${config.apiKey}`)
            .then(res => setMenuData(res.data.menuItems))
    }


    // Cart 
    const [cartItems, setCartItems] = useState([])

    // Update quantity and price
    const quantityHandler = (id, quantity) => {
        // const defaultPriceItem = data.find(item => item.id === id && item.price).price
        const updatedCartItems = cartItems.map(item => {
            if (item.id === id) {
                return {
                    ...item,
                    quantity,
                    // price: defaultPriceItem * quantity
                }
            }
            return item
        })
        setCartItems(updatedCartItems)
    }

    const totalPrice = cartItems.reduce((acc, cur) => acc + (cur.price * cur.quantity), 0)

    const itemIsInCart = (itemId) => {
        return cartItems.some(item => item.id === itemId)
    }

    const addToCart = (item) => {
        setCartItems([...cartItems, item])
    }

    const removeFromCart = (id) => {
        setCartItems(prevState => prevState.filter(item => item.id !== id))
    }

    const context = {
        selectedCategory,
        categoryClickHandler,
        categories,
        loadingCategories,
        menuData,
        itemIsInCart,
        addToCart,
        removeFromCart,
        cartItems,
        quantityHandler,
        // data,
        // loading,
        // error,
        totalPrice
    }

    return <MenuContext.Provider value={context}>
        {props.children}
    </MenuContext.Provider>
}

export const useGlobalContext = () => useContext(MenuContext)
