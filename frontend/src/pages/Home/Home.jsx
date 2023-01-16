import './style.css';

import { useState, useEffect } from 'react';

import api from '../../services/api';
import getUrlId from '../../utils/getUrlId';

import Card from './Card/Card';
import SearchInput from './SearchInput/SearchInput';
import Pagination from './Pagination/Pagination';

const Home = () => {
    const [characters, setCharacters] = useState([]);
    const [inputSearch, setInputSearch] = useState('');
    const [page, setPage] = useState(0);

    useEffect(() => {
        async function allPeoples() {
            const result = [];
            try {
                for (let i = 1; i <= 83; i++) {
                    if (i === 17) i++;
                    const response = await api.get(`people/${+i}`);
                    const data = await response.data;
                    result.push(data);
                    setCharacters(result);
                }
            } catch (error) {}
        }
        allPeoples();
    }, []);

    const filter = characters.filter((item) => {
        return item.name.toLowerCase().indexOf(inputSearch.toLowerCase()) !== -1
            ? item
            : '';
    });

    const usersPerPage = 10;
    const pagesVisited = page * usersPerPage;

    return (
        <>
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
        </>
    );
};

export default Home;
