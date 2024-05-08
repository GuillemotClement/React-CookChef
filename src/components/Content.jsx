import styles from './Content.module.scss';
import Recipe from './Recipe';

function Content(){
    return (
        <div className="fill container p20">
            <h1 className='my30 '>Découvrez nos nouvelles recettes</h1>
            <div className={`${styles.contentCard} card p20`}>
                <div className={ styles.grid }>
                    <Recipe />
                    <Recipe />
                    <Recipe />
                    <Recipe />
                    <Recipe />
                    <Recipe />
                    <Recipe />
                </div>
            </div>
        </div>
    );
}

export default Content;