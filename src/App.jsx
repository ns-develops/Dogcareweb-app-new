import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hundar from './pages/Hundar'; 
import Allahundar from './pages/Allahundar'; 
import Support from './pages/Support';
import Adminpanel from './pages/Adminpanel';
import InhouseHundar from './pages/InhouseHundar';
import HundarCheckedOut from './pages/HundarCheckedOut'; 
import AdderaHund from './pages/AdderaHund';
import HundDetaljer from './pages/HundDetaljer';
import LoggaIn from './pages/LoggaIn';

function App() {
  return (
    <Router basename="/Dogcareweb-app-new">
      <Navbar />
      <Routes>
      <Route path="/" element={<Hundar />} />
        <Route path="/support" element={<Support />} />
        <Route path="/hundar" element={<Hundar />} /> 
        <Route path="/hundar/allahundarna" element={<Allahundar />} />
        <Route path="/hundar/inhouse" element={<InhouseHundar />} />
        <Route path="/hundar/checkedout" element={<HundarCheckedOut />} /> 
        <Route path="/adminpanel" element={<Adminpanel />} />
        <Route path="/hundar/addera" element={<AdderaHund />} /> 
        <Route path="/dog/:chipNumber" element={<HundDetaljer />} />
        <Route path="/loggain" element={<LoggaIn />} /> 
      </Routes>
    </Router>
  );
}

export default App;
