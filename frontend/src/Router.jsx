import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Header from '././components/Header/Header';
import Character from './pages/Character/Character';
import Home from './pages/Home/Home';

const Router = () => {
    return (
        <>
            <BrowserRouter>
                <Header />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/character/:id" element={<Character />}/>
                </Routes>
            </BrowserRouter>
        </>
    );
};

export default Router;
