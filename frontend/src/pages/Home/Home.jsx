import './style.css';
import Card from './Card/Card';

const Home = () => {
    return (
        <>
            <section className="container">
                <div className="cards__list">
                    <Card />
                </div>
            </section>
        </>
    );
};

export default Home;
