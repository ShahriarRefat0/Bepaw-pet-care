import React, { useEffect, useState } from 'react';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';
import { Outlet } from 'react-router';
import SpinnerLoading from '../Pages/SpinnerLoading';

const MainLayout = () => {

    const [loading, setLoading] = useState(true);
  
    useEffect(() => {
      const timer = setTimeout(() => {
        setLoading(false);
      }, 3000);
      return () => clearTimeout(timer);
    }, []);
  
  
  return (
    <div>
      <header>
        <Navbar></Navbar>
      </header>
      <main className="min-h-screen ">
        {loading ? <SpinnerLoading></SpinnerLoading> : <Outlet></Outlet>}
      </main>
      <footer>
        <Footer></Footer>
      </footer>
    </div>
  );
};

export default MainLayout;