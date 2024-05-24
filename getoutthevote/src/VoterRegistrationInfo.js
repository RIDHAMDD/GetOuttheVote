import React from 'react';
import './App.css'; // Add global styles here

function VoterRegistrationInfo() {
  const handleClick = () => {
    window.open('https://ova.elections.il.gov/Step0.aspx', '_blank');
  };

  return (
    <div className="registration-info-container">
      <div className="registration-info">
        <h2>Info about Illinois Online Voter Registration Application Website</h2>
        <h3>To vote in Illinois:</h3>
        <ul>
          <li>You must be a United States Citizen.</li>
          <li>You must be at least 17 years old on or before the date of the Primary Election and turn 18 on or before the date of the General or Consolidated Election (16 year olds may preregister to vote).</li>
          <li>You must live in your election precinct at least 30 days prior to Election Day.</li>
          <li>You must not be serving a sentence of confinement in any penal institution as a result of a conviction.</li>
          <li>You may not claim the right to vote anywhere else.</li>
        </ul>
        <h3>Before you begin...</h3>
        <p>
          If you think that you may already be registered to vote, you can check by using the State Board of Election's <a href="https://ova.elections.il.gov/RegistrationLookup.aspx" target="_blank" rel="noopener noreferrer">Voter Registration Lookup</a>.
        </p>
        <button className="register-button" onClick={handleClick}>
          Register to Vote or Update an Existing Registration
        </button>
      </div>
    </div>
  );
}

export default VoterRegistrationInfo;
