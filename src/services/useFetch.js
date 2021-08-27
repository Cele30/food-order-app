import { useState, useEffect, useRef } from 'react'

function useFetch(url) {
    const isMounted = useRef(false)

    const [data, setData] = useState(null)
    const [error, setError] = useState(null)
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        isMounted.current = true
        async function init() {
            try {
                const response = await fetch(url)

                if (!response.statusText) throw response

                const json = await response.json()
                if (isMounted) setData(json)
            } catch (error) {
                if (isMounted) setError(error)
            } finally {
                if (isMounted) setLoading(false)
            }
        }
        init()

        return () => isMounted.current = false

    }, [url])

    return { data, error, loading }

}

export default useFetch;