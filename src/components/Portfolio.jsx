import React, { useState } from 'react';
import mvfence from '../assets/images/projects/mvfence.png';
// Mock content for different tabs
const portfolioContent = {
  all: [
    { id: 1, title: "E-commerce Website", category: "Web Development", img:"mvfence" },
    { id: 2, title: "Mobile App UI/UX", category: "Design" },
    { id: 3, title: "Data Visualization Tool", category: "Data Science" },
  ],
  webDevelopment: [
    { id: 1, title: "E-commerce Website", category: "Web Development" },
  ],
  design: [
    { id: 2, title: "Mobile App UI/UX", category: "Design" },
  ],
};

function Portfolio() {
  // State to keep track of the currently active tab
  const [activeTab, setActiveTab] = useState('all');

  // Function to render the content for the selected tab
  const renderContent = () => {
    // Select the appropriate content based on activeTab
    const content = portfolioContent[activeTab];

    if (!content || content.length === 0) {
      return <p>No projects found in this category.</p>;
    }

    return (
      <div className="portfolio-grid">
        {content.map((item) => (
          // You would replace this with your actual Portfolio Card component
          <div key={item.id} className="portfolio-card">
            <h3>{item.title}</h3>
            <p>Category: {item.category}</p>
            <img src={item.img} alt={item.title} />
            {/* Add image, link, and other project details here */}
          </div>
        ))}
      </div>
    );
  };

  // Helper function to apply active class
  const getTabClass = (tabKey) => {
    return `tab-button ${activeTab === tabKey ? 'active' : ''}`;
  };

  return (
    <main className="portfolio" id='portfolio' >
      <section>
        <div className="container">
          {/* <h2 className="section-title">Creative Portfolio Showcase 🎨</h2> */}
          
          {/* Tab Navigation/Buttons */}
          <nav className="tabs-navigation">
            <button 
              className={getTabClass('all')} 
              onClick={() => setActiveTab('all')}
            >
              All Projects
            </button>
            <button 
              className={getTabClass('webDevelopment')} 
              onClick={() => setActiveTab('webDevelopment')}
            >
              Web Development
            </button>
            <button 
              className={getTabClass('design')} 
              onClick={() => setActiveTab('design')}
            >
              UI/UX Design
            </button>
          </nav>

          {/* Tab Content Area */}
          <div className="tab-content-area">
            {renderContent()}
          </div>

        </div>
      </section>
    </main>
  );
}

export default Portfolio;