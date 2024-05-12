import styles from './Header.module.scss';
import logo from '../assets/images/logo.png';
import { useState } from 'react';
import HeaderMenuXs from './HeaderMenuXs';

function Header(){
    const [showMenu, setShowMenu] = useState(false);

    return (
        <header className={`${styles.header} flex row align-center justify-center`}>
            
            <div className='fill'>
                <img src={ logo } alt="logo" />
            </div>
            <ul className={styles.headerList}>
                <button className='mr5 btn btn-secondary'>    
                    <i className="fa-solid fa-heart mr5"></i>
                    <span>Wishlist</span>
                </button>
                <button className='btn btn-primary'>Connexion</button>
            </ul>
            <i onClick={ () => setShowMenu(true) } className={`fa-solid fa-bars ${styles.headerXs}`}></i>
            { showMenu && 
            <>
                <div onClick={ () => setShowMenu(false) } className='calc'></div>
                <HeaderMenuXs/>
            </>
             }
        </header>
    ); 
}

export default Header;


