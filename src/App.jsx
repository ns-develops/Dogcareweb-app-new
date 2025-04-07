import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Support from './pages/Support'; 
import Hundar from './pages/Hundar';
import Adminpanel from './pages/Adminpanel';

function App() {
  return (
    <Router basename="/Dogcareweb-app-new">  
      <Navbar />
      <Routes>
        <Route path="/support" element={<Support />} />
        <Route path="/hundar" element={<Hundar />} />
        <Route path="/adminpanel" element={<Adminpanel />} />
      </Routes>
    </Router>
  );
}

export default App;
