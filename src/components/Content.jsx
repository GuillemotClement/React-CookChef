import styles from './Content.module.scss';
import Recipe from './Recipe';
import { data } from '../data/recipes';

function Content(){

		const recipes = data;

		return (
				<div className="fill container p20">
						<h1 className='my30 '>Découvrez nos nouvelles recettes</h1>
						<div className={`${styles.contentCard} card p20`}>
								<div className={ styles.grid }>
										{recipes.map( r => (
												<Recipe title={r.title} picture={r.picture}/>
										))}
								</div>
						</div>
				</div>
		);
}

export default Content;