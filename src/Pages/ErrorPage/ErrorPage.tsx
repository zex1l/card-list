import './ErrorPage.css'
import { Link } from 'react-router-dom';

const ErrorPage = () => {
    return (
        <section className='error__page'>
            <h2 className='error__page-title'>Oooops this page does not exist</h2>
            <button
                className='error__page-btn'
            >
                <Link to='/'>
                    Go to home
                </Link>
            </button>
        </section>
    );
};

export default ErrorPage;