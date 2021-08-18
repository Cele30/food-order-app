import { useState, useEffect } from 'react'
import axios from 'axios'

export default function useFetchAll(urls) {
    const [data, setData] = useState([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)

    useEffect(() => {
        const promises = urls.map(url =>
            axios.get(url)
                .then(res => {
                    if (res.status === 200) return res.data.menuItems
                    throw res
                })
        )

        Promise.all(promises)
            .then(res => {
                res.flat().forEach(item => item.price = Math.floor(Math.random() * (60 - 30 + 1)) + 30)
                setData(res.flat())
            })
            .catch(e => setError(e))
            .finally(() => setLoading(false))
    }, [urls])

    return { data, loading, error }
}