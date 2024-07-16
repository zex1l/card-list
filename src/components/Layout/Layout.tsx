import {FC, PropsWithChildren} from 'react';
import './Layout.css'


const Layout : FC<PropsWithChildren> = ({children}) => {
    return (
        <div className='container'>
            {children}
        </div>
    );
};

export default Layout;