import React, { useState } from 'react';
import NewsCard from './NewsCard';

const allNews = [
  {
    title: "Scientists Make Breakthrough in Quantum Computing",
    description: "Researchers have achieved a major milestone in quantum computing, developing a new type of qubit that remains stable at room temperature.",
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=500",
    publishedAt: "2024-03-15T09:00:00Z",
    url: "#"
  },
  {
    title: "New Renewable Energy Project Launches",
    description: "A massive solar farm project has been inaugurated, capable of powering over 100,000 homes with clean energy.",
    image: "https://images.unsplash.com/photo-1509391366360-2e959784a276?w=500",
    publishedAt: "2024-03-14T15:30:00Z",
    url: "#"
  },
  {
    title: "Artificial Intelligence Helps in Medical Discovery",
    description: "AI system successfully identifies new potential drug candidates for treating rare diseases in record time.",
    image: "https://images.unsplash.com/photo-1507146426996-ef05306b995a?w=500",
    publishedAt: "2024-03-13T12:00:00Z",
    url: "#"
  },
  {
    title: "Space Exploration Milestone Achieved",
    description: "New telescope captures unprecedented images of distant galaxies, revealing new insights about the early universe.",
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=500",
    publishedAt: "2024-03-12T18:45:00Z",
    url: "#"
  },
  {
    title: "Environmental Conservation Success Story",
    description: "Local community's efforts lead to successful restoration of endangered species habitat.",
    image: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=500",
    publishedAt: "2024-03-11T14:20:00Z",
    url: "#"
  },
  {
    title: "Tech Innovation in Education",
    description: "New educational platform combines virtual reality with traditional learning methods, showing promising results.",
    image: "https://images.unsplash.com/photo-1509062522246-3755977927d7?w=500",
    publishedAt: "2024-03-10T11:15:00Z",
    url: "#"
  },
  // Additional news articles for more variety
  {
    title: "Breakthrough in Renewable Battery Technology",
    description: "Scientists develop new battery technology that could revolutionize energy storage capabilities.",
    image: "https://images.unsplash.com/photo-1497435334941-8c899ee9e8e9?w=500",
    publishedAt: "2024-03-09T10:00:00Z",
    url: "#"
  },
  {
    title: "Ocean Cleanup Project Shows Promise",
    description: "Innovative ocean cleanup system successfully removes tons of plastic waste from the Pacific Ocean.",
    image: "https://images.unsplash.com/photo-1484291470158-b8f8d608850d?w=500",
    publishedAt: "2024-03-08T16:20:00Z",
    url: "#"
  }
];

function RandomNews() {
  const [randomArticles, setRandomArticles] = useState([]);

  const getRandomArticles = () => {
    const shuffled = [...allNews].sort(() => 0.5 - Math.random());
    setRandomArticles(shuffled.slice(0, 6));
  };

  // Get initial random articles
  React.useEffect(() => {
    getRandomArticles();
  }, []);

  return (
    <div className="container">
      <header className="text-center my-5">
        <h1 className="display-4">Random News</h1>
        <p className="lead">Discover something new and interesting</p>
        <button className="btn btn-primary mt-3" onClick={getRandomArticles}>
          Shuffle News
        </button>
      </header>

      <div className="row">
        {randomArticles.map((article, index) => (
          <div key={index} className="col-md-6 col-lg-4 mb-4">
            <NewsCard article={article} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default RandomNews; 