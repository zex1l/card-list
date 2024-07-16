import {useState} from 'react'

const useHttp = () => {
    const [isLoading, setIsLoading] = useState<boolean>(false)
    const [isError, setIsError] = useState<boolean>(false)

    const request  = async (
            url:string, 
            method:string = 'GET',
            body: BodyInit | null
        ) => {
            
        setIsLoading(true)

        try {
            const responce = await fetch(url, {
                method,
                body
            })

            if(!responce.ok) {
                return
            }
            
            setIsLoading(false)
            return responce.json()

        } catch (error) {
            setIsLoading(false)
            setIsError(true)
        }
    }

    return({request, isError, isLoading})
}

export default useHttp