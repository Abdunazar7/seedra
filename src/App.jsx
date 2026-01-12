import React, { lazy } from 'react';
import { Route, Routes } from 'react-router-dom';
import MainLayout from './layout/MainLayout';

const Home = lazy(() => import("./pages/Home"));
const About = lazy(() => import("./pages/About"));
const Blog = lazy(() => import("./pages/Blog"));
const Contacts = lazy(() => import("./pages/Contacts"));
const AllProducts = lazy(() => import("./pages/AllProducts"));

function App(props) {
  return (
    <div>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="contacts" element={<Contacts />} />
          <Route path="all-products" element={<AllProducts />} />
          <Route path="blog" element={<Blog />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;