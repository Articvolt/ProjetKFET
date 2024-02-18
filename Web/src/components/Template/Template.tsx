import {Route, Routes} from "react-router-dom";
import { Home } from '../../pages/Home/Home.page.tsx';
import { Header } from '../Header/Header.tsx';
import { Footer } from '../Footer/Footer.tsx';
import { GeneralTerms } from '../../pages/Footer/GeneralTerms.page';
import { LegalNotice } from '../../pages/Footer/LegalNotice.page';
import { ItemsPage } from '../../pages/Admin/ItemList.page';


export const Template = () => {
    return (
        <div className="flex flex-col h-screen">
            <Header />
            <div className="flex-grow w-3/4 mx-auto my-10">
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/general-terms" element={<GeneralTerms />} />
                    <Route path="/legal-notice" element={<LegalNotice />} />
                    <Route path="/items" element={<ItemsPage />} />
                </Routes>
            </div>
            <Footer />
            
        </div>
    );
};
