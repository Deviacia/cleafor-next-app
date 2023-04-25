import styles from './CategoryItem.module.css';

const CategoryItem = ({ category }) => {
    return (
        <button className={styles.item}>
            {category.attributes.name}
        </button>
    )
}

export default CategoryItem