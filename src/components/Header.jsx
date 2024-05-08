import styles from './Header.module.scss';
import logo from '../assets/images/logo.png';

function Header(){
    return (
        <header className={`${styles.header} flex row align-center justify-center`}>
            <i className="fa-solid fa-bars mr15"></i>
            <div className='fill'>
                <img src={ logo } alt="logo" />
            </div>
            <ul>
                <button className='mr5 btn btn-secondary'>    
                    <i className="fa-solid fa-basket-shopping mr5"></i>
                    <span>Panier</span>
                </button>
                <button className='btn btn-primary'>Connexion</button>
            </ul>
        </header>
    ); 
}

export default Header;


