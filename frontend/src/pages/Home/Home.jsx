import { useState } from 'react';

import useEndpoints from '../../hooks/useEndpoints';
import getUrlId from '../../utils/getUrlId';

import Card from './Card/Card';
import SearchInput from './SearchInput/SearchInput';
import Pagination from './Pagination/Pagination';
import Filters from './Filters/Filters';
import Loader from '../../components/Loader/Loader';

import './style.css';

const Home = () => {
    const { peoples, isLoading } = useEndpoints();
    const [inputSearch, setInputSearch] = useState('');
    const [page, setPage] = useState(0);
    const [filterSelect, setFilterSelect] = useState({
        gender: '',
        species: '',
        films: '',
    });

    const filter = peoples
        .filter((item) =>
            filterSelect.gender
                ? item.gender.toLowerCase() ===
                  filterSelect.gender.toLowerCase()
                : item,
        )
        .filter((item) =>
            filterSelect.species
                ? item.species.includes(filterSelect.species)
                : item,
        )
        .filter((item) =>
            filterSelect.films ? item.films.includes(filterSelect.films) : item,
        )
        .filter((item) =>
            inputSearch.name
                ? filterSelect.gender ||
                  filterSelect.species ||
                  filterSelect.films
                : item.name.toLowerCase().includes(inputSearch.toLowerCase()),
        );

    const usersPerPage = 10;
    const pagesVisited = page * usersPerPage;

    return (
        <>
            {isLoading ? (
                <Loader />
            ) : (
                <section className="container">
                    <SearchInput
                        value={inputSearch}
                        onChange={(search) => setInputSearch(search)}
                    />

                    <div className="cards__controls">
                        <Filters
                            filterSelect={filterSelect}
                            setFilterSelect={setFilterSelect}
                        />

                        <Pagination
                            displayUsersPage={filter}
                            usersPerPage={usersPerPage}
                            setPage={setPage}
                        />
                    </div>

                    <div className="cards__list">
                        {filter
                            .slice(pagesVisited, pagesVisited + usersPerPage)
                            .map((character) => (
                                <Card
                                    key={character.name}
                                    infos={character}
                                    id={getUrlId(character.url)}
                                    imageUrl={`https://starwars-visualguide.com/assets/img/characters/${getUrlId(
                                        character.url,
                                    )}.jpg`}
                                />
                            ))}
                    </div>
                </section>
            )}
        </>
    );
};

export default Home;
