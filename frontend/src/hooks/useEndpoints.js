import { useEffect, useState } from 'react';
import getAllEndpoint from '../services/getAllEndpoints';

function useEndpoints() {
    const [peoples, setPeoples] = useState([]);
    const [species, setSpecies] = useState([]);
    const [films, setFilms] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        async function getAllPeoples() {
            try {
                const people = await getAllEndpoint('people/');
                setPeoples([...new Set(people)]);
            } catch (error) {
            } finally {
                setIsLoading(false);
            }
        }
        getAllPeoples();
    }, []);

    useEffect(() => {
        async function getAllSpecies() {
            try {
                const species = await getAllEndpoint('species/');
                setSpecies([...new Set(species)]);
            } catch (error) {}
        }
        getAllSpecies();
    }, []);

    useEffect(() => {
        async function listFilms() {
            try {
                const films = await getAllEndpoint('films/');
                setFilms([...new Set(films)]);
            } catch (error) {}
        }
        listFilms();
    }, []);

    return {
        peoples,
        species,
        films,
        isLoading,
    };
}

export default useEndpoints;
