import {Route, Routes} from "react-router-dom";
import { Home } from '../../pages/Home/Home.page.tsx';
import { Header } from '../Header/Header.tsx';
import { Footer } from '../Footer/Footer.tsx';

export const Template = () => {
    return (
        <div>
            <Header />
            <div>
                <Routes>
                    <Route path="/" element={<Home />} />
                </Routes>
            </div>
            <Footer />
            
        </div>
    );
};
