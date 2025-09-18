// src/App.tsx
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import PricingPage from './pages/PricingPage';
import Dashboard from './pages/Dashboard';
import WebsiteBuilder from './pages/WebsiteBuilder';
import ManufacturingHub from './pages/ManufacturingHub';
import Automation from './pages/Automation';
import Analytics from './pages/Analytics';
import Integrations from './pages/Integrations';
import Accounting from './pages/Accounting';
import SupportServices from './pages/SupportServices';
import ProductsInventory from './pages/ProductsInventory';
import Orders from './pages/Orders';
import Customer from './pages/customer'; // ✅ Add this import

function App() {
  return (
    <div className="min-h-screen bg-slate-50">
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/pricing" element={<PricingPage />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/website-builder" element={<WebsiteBuilder />} />
        <Route path="/manufacturing" element={<ManufacturingHub />} />
        <Route path="/automation" element={<Automation />} />
        <Route path="/analytics" element={<Analytics />} />
        <Route path="/integrations" element={<Integrations />} />
        <Route path="/accounting" element={<Accounting />} />
        <Route path="/support" element={<SupportServices />} />
        <Route path="/products" element={<ProductsInventory />} />
        <Route path="/orders" element={<Orders />} />
        <Route path="/customers" element={<Customer />} /> {/* ✅ Add this route */}
      </Routes>
    </div>
  );
}

export default App;