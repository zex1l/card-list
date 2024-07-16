import { FC } from 'react';
import { Link } from 'react-router-dom';
import './Item.css'

import { IPost } from '../../types/IPost'
import { useAppDispatch } from '../../hooks/hook.redux';
import { postSlice } from '../../store/reducers/PostSlice';

import { transformText } from '../../utils/transformText';

const Item :FC<IPost> = ({id, body, isLiked, title}) => {

    const dispatch = useAppDispatch()
    const {likeCurrentPost, deleteCurrentPost} = postSlice.actions


    return (
        <li className='list__content-item'>
            
            <Link to={`/post/${id}`}>
                <h3 className="content__item-header">{title}</h3>
                <div className="content__item-body">
                    <p className='content__item-text'>{transformText(body)}</p>
                </div>
            </Link>
            <div className="content__item-buttons">
                <button className="content__button-delete"
                    onClick={() => dispatch(deleteCurrentPost(id))}
                >
                    <img className='trash__button' src="../../../img/trash.svg" alt="trash button" />
                </button>
                
                <button 
                    className="content__button-like"
                    onClick={() => dispatch(likeCurrentPost(id))}
                    
                >
                    {isLiked ? 
                        <svg  id='svg-heart'  xmlns="http://www.w3.org/2000/svg" height="24" width="24" version="1.1"  >
                        <g transform="translate(0 -1028.4)">
                        <path d="m7 1031.4c-1.5355 0-3.0784 0.5-4.25 1.7-2.3431 2.4-2.2788 6.1 0 8.5l9.25 9.8 9.25-9.8c2.279-2.4 2.343-6.1 0-8.5-2.343-2.3-6.157-2.3-8.5 0l-0.75 0.8-0.75-0.8c-1.172-1.2-2.7145-1.7-4.25-1.7z" fill="#e74c3c"></path>
                        <animate xlinkHref="#svg-heart" attributeName='fill' from="#e74c3c" to="#4DAF4C" begin="svg-heart.click" dur="3s" fill='freeze' repeatCount="indefinite"/>
                        </g>
                        </svg>
                        : 
                        <svg  xmlns="http://www.w3.org/2000/svg" height="24" width="24" version="1.1"  >
                        <g transform="translate(0 -1028.4)">
                        <path d="m7 1031.4c-1.5355 0-3.0784 0.5-4.25 1.7-2.3431 2.4-2.2788 6.1 0 8.5l9.25 9.8 9.25-9.8c2.279-2.4 2.343-6.1 0-8.5-2.343-2.3-6.157-2.3-8.5 0l-0.75 0.8-0.75-0.8c-1.172-1.2-2.7145-1.7-4.25-1.7z" fill="#000"></path>
                        <animate attributeName='fill' from="#e74c3c" to="#4DAF4C" begin="svg-heart.click" dur="3s" fill='freeze' repeatCount="indefinite"/>
                        </g>
                        </svg>
                        
                    }
                </button>
            </div>
        </li>
    );
};

export default Item;