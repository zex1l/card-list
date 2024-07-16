import useHttp from "../hooks/useHttp";


const usePostService = () => {

    const {isError, isLoading, request} = useHttp()

    const _baseUrl = 'https://jsonplaceholder.typicode.com/posts'
    

    const getAllPost = async (limitOffset:number) => {
        const responce = await request(`${_baseUrl}?_limit=${limitOffset}`, 'GET', null)
        return responce
    }

    const getPostById = async (id : string | undefined) => {
        const responce = await request(`${_baseUrl}/${id}`, 'GET', null)
        return responce
    }


    return {isError, isLoading , getAllPost, getPostById}
}

export default usePostService