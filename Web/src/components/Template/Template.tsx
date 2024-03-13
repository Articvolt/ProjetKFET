import {Route, Routes} from "react-router-dom";
import { Home } from '../../pages/Home/Home.page.tsx';
import { Header } from '../Header/Header.tsx';
import { Footer } from '../Footer/Footer.tsx';
import { GeneralTerms } from '../../pages/Footer/GeneralTerms.page';
import { LegalNotice } from '../../pages/Footer/LegalNotice.page';
import { ItemsPage } from '../../pages/Admin/ItemList.page';
import {MenuWeek} from "../../pages/Home/MenuWeek.page.tsx";
import {Login} from "../../pages/Auth/Login.page.tsx";
import {Register} from "../../pages/Auth/Register.page.tsx";
import {Profile} from "../../pages/Profile/ProfileSetting.page.tsx";
import {Invoice} from "../../pages/Profile/Invoice.page.tsx";
import {Checkout} from "../../pages/Checkout/Checkout.page.tsx";
import {Success} from "../../pages/Checkout/Success.page.tsx";


export const Template = () => {
    return (
        <div className="flex flex-col h-screen relative">
            <Header/>
            <div className="flex-grow w-full mx-auto py-10 relative background-image">
                <div className="w-3/4 bg-white m-auto p-8 rounded">
                    <Routes>
                        <Route path="/" element={<Home/>}/>
                        <Route path="/menu-of-the-week" element={<MenuWeek/>}/>
                        <Route path="/login" element={<Login/>}/>
                        <Route path="/register" element={<Register/>}/>
                        <Route path="/general-terms" element={<GeneralTerms/>}/>
                        <Route path="/legal-notice" element={<LegalNotice/>}/>
                        <Route path="/items" element={<ItemsPage/>}/>
                        <Route path="/profile" element={<Profile/>}/>
                        <Route path="/invoices" element={<Invoice/>}/>
                        <Route path="/checkout" element={<Checkout/>}/>
                        <Route path="/success" element={<Success/>}/>
                    </Routes>
                </div>
            </div>
            <Footer/>

        </div>
    );
};
