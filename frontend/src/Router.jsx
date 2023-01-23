import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Header from '././components/Header/Header';
import Home from './pages/Home/Home';
import Character from './pages/Character/Character';
import Contact from './pages/Contact/Contact';

const Router = () => {
    return (
        <>
            <BrowserRouter>
                <Header />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/character/:id" element={<Character />}/>
                    <Route path="/contact" element={<Contact />}/>
                </Routes>
            </BrowserRouter>
        </>
    );
};

export default Router;
