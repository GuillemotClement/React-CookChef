import styles from './Content.module.scss';
import Recipe from './Recipe';
import { data } from '../data/recipes';
import { useState } from 'react';

function Content(){

		const recipes = data;

		const [filter, setFilter] = useState('');

		function handleInput(e){
			const filter = e.target.value;
			setFilter(filter.trim().toLowerCase());
		}

		return (
				<div className="fill container p20">
						<h1 className='my30 '>Découvrez nos nouvelles recettes</h1>
						<div className={`${styles.contentCard} card p20 flex column `}>
							<div className={`flex row justify-center align-center my30 ${styles.searchbar}`}>
								<i className="fa-solid fa-magnifying-glass mr15"></i>
								<input onInput={handleInput} className='fill' type="text" placeholder='Rechercher'/>
							</div>
							<div className={ styles.grid }>
									{recipes.filter(r => r.title.toLowerCase().startsWith(filter)).map( r => (
											<Recipe key={r._id} title={r.title} picture={r.picture}/>
									))}
							</div>
						</div>
				</div>
		);
}

export default Content;