import styles from './Content.module.scss';

function Content(){
    return (
        <div className="fill container p20">
            <h1 className='my30'>Découvrez nos nouvelles recettes</h1>
            <div className={`${styles.contentCard} card p20`}>
                <div className={ styles.grid }>
                    <div className={styles.elem}>Element</div>
                    <div className={styles.elem}>Element</div>
                    <div className={styles.elem}>Element</div>
                    <div className={styles.elem}>Element</div>
                    <div className={styles.elem}>Element</div>
                    <div className={styles.elem}>Element</div>
                </div>
            </div>
        </div>
    );
}

export default Content;