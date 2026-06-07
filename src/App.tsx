import React from 'react';
import { BrowserRouter as Router, Routes, Route, useParams, Navigate } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { Layout } from './components/Layout';
import { ScrollToTop } from './components/ScrollToTop';
import { Home } from './pages/Home';
import { ServicePage } from './pages/ServicePage';
import { AreaPage } from './pages/AreaPage';
import { About, Contact } from './pages/AboutContact';
import { Gallery } from './pages/Gallery';
import { Terms } from './pages/Terms';
import { PrivacyPolicy } from './pages/PrivacyPolicy';
import { siteData } from './data/siteData';

const DynamicRoute = () => {
  const { slug } = useParams<{ slug: string }>();
  const isService = siteData.services.some(s => s.slug === slug);
  const isLocation = siteData.locations.some(l => l.slug === slug);

  if (isService) return <ServicePage />;
  if (isLocation) return <AreaPage />;
  return <Navigate to="/" replace />;
};

export default function App() {
  return (
    <HelmetProvider>
      <Router>
        <ScrollToTop />
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/terms" element={<Terms />} />
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
            <Route path="/:slug" element={<DynamicRoute />} />
          </Routes>
        </Layout>
      </Router>
    </HelmetProvider>
  );
}
