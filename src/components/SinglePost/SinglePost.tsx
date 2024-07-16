import { FC } from "react";
import './SinglePost.css'
import { IPost } from "../../types/IPost";
import { Link } from "react-router-dom";

const SinglePost : FC<IPost> = ({body, id, title}) => {

    return (
        <section className="single-post">
            <header className="single-post__header">
                <p className="signel-post__id">Post Id: {id}</p>
                <p className="signel-post__title">Title post: {title}</p>
            </header>
            <div className="signle-post__content">
                {body}
            </div>

           <div className="signle-post__buttons">
                <Link to='/'>
                    <button>Назад</button>
                </Link>
           </div>
        </section>
    );
};

export default SinglePost;