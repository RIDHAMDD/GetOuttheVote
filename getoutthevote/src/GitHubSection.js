import React from 'react';
import './App.css'; // Add global styles here
import githubLogo from './Images/git.jpg'; // Make sure you have this image in the specified path

const GitHubSection = () => {
  return (
    <div className="github-container">
    <div className="github-section">
      <h2>GitHub Repository</h2>
      <p>The codebase for this website is available on <a href="https://github.com/RIDHAMDD/GetOuttheVote" target="_blank" rel="noopener noreferrer">GitHub</a>. You can find all the source code, issues, and contributions there.</p>
      <a href="https://github.com/RIDHAMDD/GetOuttheVote" target="_blank" rel="noopener noreferrer">
        <img src={githubLogo} alt="GitHub Logo" className="github-logo" />
      </a>
    </div>
    </div>
  );
};

export default GitHubSection;
