import React from 'react';
import Footer from './Footer';
import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';

function MainLayout() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="container flex-1 py-5">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

export default MainLayout;