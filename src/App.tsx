
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import PricingPage from './pages/PricingPage';
import Dashboard from './pages/Dashboard';
import Orders from './pages/Orders';
import ProductsInventory from './pages/ProductsInventory';
import Customer from './pages/customer';
import Analytics from './pages/Analytics';
import Accounting from './pages/Accounting';
import Cost from './pages/cost';
import StoreBuilder from './pages/StoreBuilder';
import WebsiteBuilder from './pages/WebsiteBuilder';
import ManufacturingHub from './pages/ManufacturingHub';
import Integrations from './pages/Integrations';
import SupportServices from './pages/SupportServices';
import DeveloperPortal from './pages/DeveloperPortal';
import Automation from './pages/Automation';

function App() {
  return (
    <div className="min-h-screen bg-slate-50">
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/pricing" element={<PricingPage />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/orders" element={<Orders />} />
        <Route path="/products" element={<ProductsInventory />} />
        <Route path="/customers" element={<Customer />} />
        <Route path="/analytics" element={<Analytics />} />
        <Route path="/accounting" element={<Accounting />} />
        <Route path="/costs" element={<Cost />} />
        <Route path="/store-builder" element={<StoreBuilder />} />
        <Route path="/website-builder" element={<WebsiteBuilder />} />
        <Route path="/manufacturing" element={<ManufacturingHub />} />
        <Route path="/integrations" element={<Integrations />} />
        <Route path="/support" element={<SupportServices />} />
        <Route path="/developer" element={<DeveloperPortal />} />
        <Route path="/automation" element={<Automation />} />
      </Routes>
    </div>
  );
}

export default App;