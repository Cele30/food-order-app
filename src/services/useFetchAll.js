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
                    if (res.status === 200) return res.data
                    throw res
                })
        )

        Promise.all(promises)
            .then(res => {

                setData(res)
            })
            .catch(e => setError(e))
            .finally(() => setLoading(false))
    }, [urls])

    return { data, loading, error }
}
