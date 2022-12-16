import React, { useState } from 'react';
import NavTabs from './NavTabs';
import LinkButtons from './LinkButtons';
import About from './pages/About';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import Home from './pages/Home'

export default function PortfolioContainer() {
  const [currentPage, setCurrentPage] = useState('Home');


  const renderPage = () => {
    switch (currentPage) {
      case "Projects" : 
        return <Projects />;
      case "Contact" :
        return <Contact />;
      case "About": 
        return <About />
      default:
        return <Home />
    }
  };

  const handlePageChange = (page) => setCurrentPage(page);

  return (
    <div>
      <NavTabs currentPage={currentPage} handlePageChange={handlePageChange} />
      <div>
        {renderPage()}
      </div>
      <LinkButtons/>
    </div>
  );
}
