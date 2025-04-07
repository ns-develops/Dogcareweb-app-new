import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hundar from './pages/Hundar'; 
import Allahundar from './pages/Allahundar'; 
import Support from './pages/Support';
import Adminpanel from './pages/Adminpanel';

function App() {
  return (
    <Router basename="/Dogcareweb-app-new">
      <Navbar />
      <Routes>
        <Route path="/support" element={<Support />} />
        <Route path="/hundar" element={<Hundar />} /> 
        <Route path="/hundar/allahundarna" element={<Allahundar />} />
        <Route path="/adminpanel" element={<Adminpanel />} />
      </Routes>
    </Router>
  );
}

export default App;
