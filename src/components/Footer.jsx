import styles from './Footer.module.scss';

function Footer(){
    return  (
        <footer className={`flex row align-center justify-center p20 ${styles.footer}`}>
            <p>Coopyright &copy; 2024 - Clément</p>
        </footer>
    );
}

export default Footer;