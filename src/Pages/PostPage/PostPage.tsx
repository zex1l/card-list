import './PostPage.css'
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import usePostService from '../../services/PostService';
import { IPost } from '../../types/IPost';
import SinglePost from '../../components/SinglePost/SinglePost';

const PostPage = () => {
    const [postData, setPostData] = useState<IPost>()
    const {isError, isLoading, getPostById} = usePostService()
    const {id} = useParams()

    useEffect(() => {
        getPostById(id)
        .then(responce => setPostData(responce))
    }, [])

    return (
        <main className='post-page'>
            {isError && <div>Error</div>}
            {isLoading && <div>Loading...</div>}

            {
                postData && <SinglePost 
                                body={postData.body}
                                id={postData.id}
                                title={postData.title}
                                isLiked={postData.isLiked}
                                userId={postData.userId}
                            />
            }
        </main>
    );
};

export default PostPage;