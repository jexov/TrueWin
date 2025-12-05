import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useEffect } from 'react';
import Layout from './components/Layout';
import ScrollToTop from './components/ScrollToTop';
import Home from './pages/Home';
import Winners from './pages/Winners';
import Tokens from './pages/Tokens';
import VIP from './pages/VIP';
import Support from './pages/Support';
import Logs from './pages/Logs';
import About from './pages/About';
import Contact from './pages/Contact';
import Terms from './pages/Terms';
import Privacy from './pages/Privacy';
import Refund from './pages/Refund';
import AntiScam from './pages/AntiScam';
import Account from './pages/Account';
import Admin from './pages/Admin';
import { startAutoSync } from './lib/dataSync';

function App() {
  useEffect(() => {
    const stopSync = startAutoSync(5);
    return () => stopSync();
  }, []);

  return (
    <Router>
      <ScrollToTop />
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/winners" element={<Winners />} />
          <Route path="/tokens" element={<Tokens />} />
          <Route path="/vip" element={<VIP />} />
          <Route path="/support" element={<Support />} />
          <Route path="/logs" element={<Logs />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/refund" element={<Refund />} />
          <Route path="/anti-scam" element={<AntiScam />} />
          <Route path="/account" element={<Account />} />
          <Route path="/admin" element={<Admin />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
