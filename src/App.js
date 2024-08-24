// Import React Router components
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

// Import icons and Bootstrap
import 'bootstrap-icons/font/bootstrap-icons.css';
import 'remixicon/fonts/remixicon.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';

// Import your components and CSS
import './App.css';
import Header from './components/Header';
import SideBar from './components/SideBar';
import Main from './components/Main';
import Counselling from './components/Counselling';  // Import the Counselling component
import Resources from './components/Resources';  // Import the Counselling component

function App() {
  return (
    <Router>
      <>
        <Header />
        <SideBar />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/counselling" element={<Counselling />} />
          <Route path="/resources" element={<Resources />} />
          {/* Add other routes here as needed */}
        </Routes>
      </>
    </Router>
  );
}

export default App;
