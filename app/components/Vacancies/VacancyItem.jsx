import styles from './VacancyItem.module.css'

const VacancyItem = ({ vacancy }) => {
    return (
        <li key={vacancy.id} className={styles.item}>
            <a href={`vacancies/${vacancy.id}`}>
                <div>
                    <div>
                        <h1>{vacancy.attributes.name}</h1>
                        <p>{vacancy.attributes.location}</p>
                    </div>
                    <div>
                        <p>{vacancy.attributes.salaryFrom}</p>
                        <p>{vacancy.attributes.salaryTo}</p>
                    </div>
                </div>
            </a>
        </li>
    )
}

export default VacancyItem