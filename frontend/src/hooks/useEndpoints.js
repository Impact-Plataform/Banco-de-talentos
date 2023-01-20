import { useEffect, useState } from 'react';
import getAllEndpoint from '../services/getAllEndpoints';

function useEndpoints() {
    const [peoples, setPeoples] = useState([]);
    const [genders, setGenders] = useState([]);
    const [species, setSpecies] = useState([]);
    const [films, setFilms] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

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
        const allGenders = peoples.map((option) => {
            return option.gender;
        });
        setGenders([...new Set(allGenders)]);
    }, [peoples]);

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
        async function getAlltFilms() {
            try {
                const films = await getAllEndpoint('films/');
                setFilms([...new Set(films)]);
            } catch (error) {}
        }
        getAlltFilms();
    }, []);

    return {
        peoples,
        genders,
        species,
        films,
        isLoading,
    };
}

export default useEndpoints;
