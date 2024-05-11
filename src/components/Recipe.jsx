import styles from './Recipe.module.scss';


function Recipe({ title, picture }){
    return (
        <div className={ styles.recipe }>
            <div className={ styles.imageContainer}>
                <img src={ picture} alt="picture recipe" />
            </div>
            <div className={`flex column justify-center align-center ${styles.recipeTitle}`}>
                <h3 className='mb10'>{ title }</h3>
                <i className={`fa-solid fa-heart ${ liked ? 'text-primary' : ''}`}></i>
            </div>
        </div>
    );
}

export default Recipe;