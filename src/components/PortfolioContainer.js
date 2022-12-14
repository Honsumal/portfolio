import React, { useState } from 'react';
import NavTabs from './NavTabs';
import LinkButtons from './LinkButtons';
import About from './pages/About';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import Resume from './pages/Resume';

export default function PortfolioContainer() {
  const [currentPage, setCurrentPage] = useState('About');


  const renderPage = () => {
    switch (currentPage) {
      case "Projects" : 
        return <Projects />;
      case "Contact" :
        return <Contact />;
      case "Resume": 
        return <Resume />
      default:
        return <About />
    }
  };

  const handlePageChange = (page) => setCurrentPage(page);

  return (
    <div>
      <NavTabs currentPage={currentPage} handlePageChange={handlePageChange} />
      <div className = 'container'>
        {renderPage()}
      </div>
      <LinkButtons />
    </div>
  );
}
