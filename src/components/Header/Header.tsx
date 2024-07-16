import './Header.css'
import { Link } from 'react-router-dom';
import Layout from '../Layout/Layout';

const Header = () => {
    return (
        <header className='header'>
            <Layout>
                <div className="header__inner">
                    <Link to='/card-list/' className="header__inner-logo">Cards List</Link>
                </div>
            </Layout>
        </header>
    );
};

export default Header;