import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Navbar from './components/Navbar';
import NewsCard from './components/NewsCard';
import RandomNews from './components/RandomNews';

function App() {
  const techNews = [
    {
      title: "AI Breakthrough in Software Development",
      description: "New AI system can write complex code with unprecedented accuracy and speed.",
      image: "https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?w=500",
      publishedAt: "2024-03-15T09:00:00Z",
      url: "#"
    },
    {
      title: "Revolutionary Quantum Computer Unveiled",
      description: "Tech giant announces new quantum computing breakthrough with practical applications.",
      image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=500",
      publishedAt: "2024-03-14T15:30:00Z",
      url: "#"
    }
  ];

  const scienceNews = [
    {
      title: "New Discovery in Particle Physics",
      description: "Scientists at CERN have identified a previously unknown subatomic particle.",
      image: "https://images.unsplash.com/photo-1507668077129-56e32842fceb?w=500",
      publishedAt: "2024-03-15T09:00:00Z",
      url: "#"
    },
    {
      title: "Breakthrough in Cancer Research",
      description: "New treatment method shows promising results in early clinical trials.",
      image: "https://images.unsplash.com/photo-1576086213369-97a306d36557?w=500",
      publishedAt: "2024-03-14T15:30:00Z",
      url: "#"
    }
  ];

  const environmentNews = [
    {
      title: "Major Progress in Clean Energy",
      description: "New solar technology achieves record-breaking efficiency levels.",
      image: "https://images.unsplash.com/photo-1509390836867-55c524a0803d?w=500",
      publishedAt: "2024-03-15T09:00:00Z",
      url: "#"
    },
    {
      title: "Reforestation Project Success",
      description: "Global initiative reaches milestone in forest restoration efforts.",
      image: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=500",
      publishedAt: "2024-03-14T15:30:00Z",
      url: "#"
    }
  ];

  const HomeNews = () => (
    <div className="container">
      <header className="text-center my-5">
        <h1 className="display-4">Latest Headlines</h1>
        <p className="lead">Your daily dose of top headlines</p>
      </header>
      <div className="row">
        {[...techNews, ...scienceNews, ...environmentNews].map((article, index) => (
          <div key={index} className="col-md-6 col-lg-4 mb-4">
            <NewsCard article={article} />
          </div>
        ))}
      </div>
    </div>
  );

  const CategoryNews = ({ articles, title }) => (
    <div className="container">
      <header className="text-center my-5">
        <h1 className="display-4">{title}</h1>
        <p className="lead">Latest updates in {title.toLowerCase()}</p>
      </header>
      <div className="row">
        {articles.map((article, index) => (
          <div key={index} className="col-md-6 col-lg-4 mb-4">
            <NewsCard article={article} />
          </div>
        ))}
      </div>
    </div>
  );

  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<HomeNews />} />
          <Route path="/technology" element={<CategoryNews articles={techNews} title="Technology" />} />
          <Route path="/science" element={<CategoryNews articles={scienceNews} title="Science" />} />
          <Route path="/environment" element={<CategoryNews articles={environmentNews} title="Environment" />} />
          <Route path="/random" element={<RandomNews />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
