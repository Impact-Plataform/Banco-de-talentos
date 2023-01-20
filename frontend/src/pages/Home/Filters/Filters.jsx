import useEndpoints from '../../../hooks/useEndpoints';
import './style.css';

const Filters = ({ setFilterSelect, filterSelect }) => {
    const { genders, species, films } = useEndpoints();

    function hadleGenders({ target }) {
        setFilterSelect({ ...filterSelect, gender: target.value });
    }

    function hadleSpecies({ target }) {
        setFilterSelect({ ...filterSelect, species: target.value });
    }

    function hadleFilms({ target }) {
        setFilterSelect({ ...filterSelect, films: target.value });
    }

    return (
        <>
            <form className="filters">
                <div className="filters__item">
                    <label>Gêneros</label>
                    <select name="gender" onChange={hadleGenders}>
                        <option value="">Todos</option>
                        {genders.map((option) => (
                            <option key={option} value={option}>
                                {option}
                            </option>
                        ))}
                    </select>
                </div>

                <div className="filters__item">
                    <label>Espécies</label>
                    <select name="species" onChange={hadleSpecies}>
                        <option value="">Todos</option>
                        {species.map((option) => (
                            <option key={option.url} value={option.url}>
                                {option.name}
                            </option>
                        ))}
                    </select>
                </div>

                <div className="filters__item">
                    <label>Filmes</label>
                    <select name="films" onChange={hadleFilms}>
                        <option value="">Todos</option>
                        {films.map((option) => (
                            <option key={option.url} value={option.url}>
                                {option.title}
                            </option>
                        ))}
                    </select>
                </div>

                <button
                    type="reset"
                    className="filters__clear"
                    onClick={() => setFilterSelect({})}
                >
                    Limpar
                </button>
            </form>
        </>
    );
};

export default Filters;
