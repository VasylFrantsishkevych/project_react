import {Outlet} from "react-router-dom";
import {FC} from "react";

import {Header} from "../Header/Header";
import './LayoutStyle.css';


const Layout:FC = () => {
    return (
        <div className={'wrapper'}>
            <div className={'layout'}>
                <Header/>
                <Outlet/>
            </div>
        </div>
    );
};

export {Layout};