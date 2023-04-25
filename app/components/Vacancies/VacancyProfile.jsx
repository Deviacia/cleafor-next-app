const VacancyProfile = ({ data }) => {
    return (
        <div>
            <p>Vacancy ID: {data?.id}</p>
            <h1>{data?.attributes.name}</h1>
            <p>{data?.attributes.description}</p>
        </div>
    )
}

export default VacancyProfile