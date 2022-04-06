import CategoryItem from '../categoryItem/categoryItem';
import './directory.styles.scss';

const Directory = ({ categories }) => {
	return (
		<div className='directory-container'>
			{categories.map((category) => (
				<CategoryItem key={category._id} category={category} />
			))}
		</div>
	);
};

export default Directory;
