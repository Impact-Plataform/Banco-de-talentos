import { useEffect, useState } from 'react';
import getAllEndpoint from '../services/getAllEndpoints';

function useEndpoints() {
    const [peoples, setPeoples] = useState([]);
    const [genders, setGenders] = useState([]);
    const [species, setSpecies] = useState([]);
    const [films, setFilms] = useState([]);
    const [planets, setPlanets] = useState([]);
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
        const allGenders = peoples.map((people) => {
            return people.gender;
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

    useEffect(() => {
        async function getAlltPlanets() {
            try {
                const planets = await getAllEndpoint('planets/');
                setPlanets([...new Set(planets)]);
            } catch (error) {}
        }
        getAlltPlanets();
    }, []);

    return {
        peoples,
        genders,
        species,
        films,
        planets,
        isLoading,
    };
}

export default useEndpoints;
