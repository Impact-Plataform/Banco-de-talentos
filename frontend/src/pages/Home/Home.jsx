import { useState } from 'react';

import useEndpoints from '../../hooks/useEndpoints';
import getUrlId from '../../utils/getUrlId';

import Card from './Card/Card';
import SearchInput from './SearchInput/SearchInput';
import Pagination from './Pagination/Pagination';
import Loader from './Loader/Loader';

import './style.css';

const Home = () => {
    const { peoples, isLoading } = useEndpoints();
    const [inputSearch, setInputSearch] = useState('');
    const [page, setPage] = useState(0);

    const filter = peoples.filter((item) => {
        return item.name.toLowerCase().indexOf(inputSearch.toLowerCase()) !== -1
            ? item
            : '';
    });

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
                    <Pagination
                        displayUsersPage={filter}
                        usersPerPage={usersPerPage}
                        setPage={setPage}
                    />
                    <div className="cards__list">
                        {filter
                            .slice(pagesVisited, pagesVisited + usersPerPage)
                            .map((character) => (
                                <Card
                                    key={character.name}
                                    name={character.name}
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
