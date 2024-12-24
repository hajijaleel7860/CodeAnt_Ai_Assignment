App.js

import React from 'react';
import Sidebar from './components/Sidebar';
import RepositoryList from './components/RepositoryList';
import './App.css';

const App = () => {
  return (
    <div className="app">
      <Sidebar />
      <main>
        <RepositoryList />
      </main>
    </div>
  );
};

export default App;