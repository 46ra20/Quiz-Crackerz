import React from 'react';
import { Outlet } from 'react-router-dom';
import Menubar from '../Menubar/Menubar';
// import Topic from '../Topic/Topic';

const Layout = () => {
    return (
        <div>
            <Menubar></Menubar>
            <Outlet></Outlet>
        </div>
    );
};

export default Layout;