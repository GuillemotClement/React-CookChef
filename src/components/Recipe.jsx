import styles from './Recipe.module.scss';
import picture from '../assets/images/recette.jpg';

function Recipe(){
    return (
        <div className={ styles.recipe }>
            <div className={ styles.imageContainer}>
                <img src={ picture} alt="picture recipe" />
            </div>
            <div className={`flex row justify-center align-center ${styles.recipeTitle}`}>
                <h3>Pankake au caca</h3>
            </div>
        </div>
    );
}

export default Recipe;