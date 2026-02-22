import React, { Suspense } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import './App.css';

const Home = React.lazy(() => import('./pages/Home'));
const About = React.lazy(() => import('./pages/About'));
const Products = React.lazy(() => import('./pages/Products'));
const ProductCategory = React.lazy(() => import('./pages/ProductCategory'));
const ProductDetails = React.lazy(() => import('./pages/ProductDetails'));
const Manufacturing = React.lazy(() => import('./pages/Manufacturing'));
const Quality = React.lazy(() => import('./pages/Quality'));
const Certifications = React.lazy(() => import('./pages/Certifications'));
const RnD = React.lazy(() => import('./pages/RnD'));
const Contact = React.lazy(() => import('./pages/Contact'));
const Feedback = React.lazy(() => import('./pages/Feedback'));
const Inquiry = React.lazy(() => import('./pages/Inquiry'));

function App() {
  return (
    <div className="app-container">
      <Header />
      <main className="main-content">
        <Suspense
          fallback={
            <div className="loading-container">
              <div className="loading-spinner" />
              <p className="loading-text">Loading...</p>
            </div>
          }
        >
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/products" element={<Products />} />
            <Route path="/products/:category" element={<ProductCategory />} />
            <Route path="/products/:category/:id" element={<ProductDetails />} />
            <Route path="/manufacturing" element={<Manufacturing />} />
            <Route path="/quality-assurance" element={<Quality />} />
            <Route path="/certifications" element={<Certifications />} />
            <Route path="/research-development" element={<RnD />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/feedback" element={<Feedback />} />
            <Route path="/inquiry/:productId" element={<Inquiry />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </Suspense>
      </main>
      <Footer />
    </div>
  );
}

export default App;
