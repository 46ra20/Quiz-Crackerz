import React from 'react';
import { Outlet } from 'react-router-dom';
import Menubar from '../Menubar/Menubar';

const Layout = () => {
    return (
        <div>
            <Menubar></Menubar>
            <Outlet></Outlet>
        </div>
    );
};

export default Layout;