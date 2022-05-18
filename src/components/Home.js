import React from 'react';
import Footer from './Footer';
import Links from './Links';
import { Outlet } from 'react-router-dom';
const Home = () => {
    return (
        <>
            <div className="container">
                <main className="content-main">
                    <Links />
                    <Outlet />
                </main>
            </div>
            <Footer className="footer" />
        </>
    )
}

export default Home
