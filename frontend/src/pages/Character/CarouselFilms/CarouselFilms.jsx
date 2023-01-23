import { motion } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';
import getUrlId from '../../../utils/getUrlId';
import './style.css';

const CarouselFilms = ({ filmsList, characterFilms }) => {
    const [width, setWidth] = useState(0);
    const carousel = useRef();

    useEffect(() => {
        setWidth(carousel.current?.scrollWidth - carousel.current?.offsetWidth);
    }, []);

    return (
        <>
            <motion.div
                ref={carousel}
                className="carousel__films"
                whileTap={{ cursor: 'grabbing' }}
            >
                <motion.div
                    drag="x"
                    dragConstraints={{ right: 0, left: -width }}
                    className="carousel__films___inner"
                >
                    {filmsList.map(
                        (film) =>
                            characterFilms.films.includes(film.url) && (
                                <motion.div
                                    key={film.url}
                                    className="carousel__films__card"
                                >
                                    <img
                                        src={`https://starwars-visualguide.com/assets/img/films/${getUrlId(
                                            film.url,
                                        )}.jpg`}
                                        alt={`Imagem go filme${film.title}`}
                                    />
                                </motion.div>
                            ),
                    )}
                </motion.div>
            </motion.div>
        </>
    );
};

export default CarouselFilms;
