import React from 'react';

function NewsCard({ article }) {
  return (
    <div className="card h-100">
      {article.image && (
        <img
          src={article.image}
          className="card-img-top"
          alt={article.title}
          style={{ height: '200px', objectFit: 'cover' }}
        />
      )}
      <div className="card-body">
        <h5 className="card-title">{article.title}</h5>
        <p className="card-text">{article.description}</p>
        <p className="card-text">
          <small className="text-muted">
            {new Date(article.publishedAt).toLocaleDateString()}
          </small>
        </p>
        <a
          href={article.url}
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-primary"
        >
          Read More
        </a>
      </div>
    </div>
  );
}

export default NewsCard; 