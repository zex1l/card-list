import { useEffect, useState} from 'react'
import usePostService from '../../services/PostService'

import { useAppSelector, useAppDispatch } from '../../hooks/hook.redux'
import {postSlice} from '../../store/reducers/PostSlice'

import './ListItems.css'

import Item from '../Item/Item'

const ListItems = () => {
    const [isActiveLikeBtn, setIsActiveLikeBtn] = useState<boolean>(false)
    

    const {isError, isLoading, getAllPost} = usePostService()

    const {posts, limitOffset} = useAppSelector(state => state.postReducer)
    const dispatch = useAppDispatch()

    const {setPosts, setLimitOffset} = postSlice.actions

    

    useEffect(() => {
        getAllPost(limitOffset)
            .then(responce => {

                dispatch(setPosts(responce))
                
            })
            
    }, [])


    const onLoadMorePosts = () => {
        
        dispatch(setLimitOffset(10))
        
        getAllPost(limitOffset + 10)
            .then(responce => {

                dispatch(setPosts(responce))
                
        })
    }

    return (
        <section className='cards'>
            <header className="cards__header">
                <button className="cards__header-btn" onClick={() => setIsActiveLikeBtn(!isActiveLikeBtn)}>
                    {!isActiveLikeBtn ? 'Show liked post' : 'Show all post'}
                </button>
            </header>
            <div className="cards__content">
                <ul className="cards__content-list">
                    {isError && <div>Error</div>}
                    {isLoading && <div>...Loading</div>}
                    {posts && !isActiveLikeBtn ?
                        posts.map(post => {
                            return(
                                    <Item 
                                        key={post.id}
                                        body={post.body}
                                        id={post.id}
                                        isLiked={post.isLiked}
                                        title={post.title}
                                        userId={post.userId}
                                    />
                               
                            )
                        })

                        :

                        posts.map(post => {
                            if(post.isLiked) {
                                return(
                                    <Item 
                                        key={post.id}
                                        body={post.body}
                                        id={post.id}
                                        isLiked={post.isLiked}
                                        title={post.title}
                                        userId={post.userId}
                                    />
                                )
                            }
                        })
                    }
                </ul>
                
                {!isActiveLikeBtn && 
                
                    <button
                        className='cards__content-btn-offset'
                        onClick={onLoadMorePosts}
                    >Load more posts</button>
                }
            </div>
        </section>
    );
};

export default ListItems;