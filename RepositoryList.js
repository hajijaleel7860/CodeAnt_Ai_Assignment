import React from 'react';
import './RepositoryList.css';

const repositories = [
  { name: 'design-system', type: 'Public', size: '7320 KB', updated: '1 day ago' },
  { name: 'codeant-ci-app', type: 'Private', size: '5871 KB', updated: '2 days ago' },
  { name: 'analytics-dashboard', type: 'Private', size: '4521 KB', updated: '5 days ago' },
  { name: 'mobile-app', type: 'Private', size: '3096 KB', updated: '3 days ago' },
  { name: 'e-commerce-platform', type: 'Private', size: '6210 KB', updated: '6 days ago' },
  { name: 'blog-website', type: 'Public', size: '1676 KB', updated: '4 days ago' },
  { name: 'social-network', type: 'Private', size: '5432 KB', updated: '7 days ago' },
];

const RepositoryList = () => {
  return (
    <div className="repository-list">
      <div className="header">
        <h3>Repositories</h3>
        <button>Add Repository</button>
      </div>
      <input type="text" placeholder="Search Repositories" />
      <ul>
        {repositories.map((repo, index) => (
          <li key={index}>
            <div className="repo-details">
              <h4>{repo.name}</h4>
              <p>{repo.type}</p>
            </div>
            <div className="repo-meta">
              <p>{repo.size}</p>
              <p>{repo.updated}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RepositoryList;