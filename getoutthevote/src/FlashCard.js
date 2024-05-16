import React, { useState } from 'react';
import './Flashcard.css';

const FlashCard = ({ question, answer, explanation }) => {
  const [selectedOption, setSelectedOption] = useState(null);
  const [showExplanation, setShowExplanation] = useState(false);

  const handleOptionClick = (option) => {
    setSelectedOption(option);
    setShowExplanation(true);
  };

  const handleCloseExplanation = () => {
    setShowExplanation(false);
  };

  return (
    <div className="flashcard">
      <p className="question">{question}</p>
      <div className="options">
        <button onClick={() => handleOptionClick('true')} className={selectedOption === 'true' ? 'selected' : ''}>True</button>
        <button onClick={() => handleOptionClick('false')} className={selectedOption === 'false' ? 'selected' : ''}>False</button>
        <button onClick={() => handleOptionClick('Not Sure')} className={selectedOption === 'Not Sure' ? 'selected' : ''}>Not Sure</button>
      </div>
      {showExplanation && (
        <div className="explanation">
          <p>{selectedOption === answer ? 'Correct!' : 'Find out what is a correct answer'}</p>
          <p>{explanation}</p>
          <button onClick={handleCloseExplanation}>Close</button>
        </div>
      )}
    </div>
  );
};

export default FlashCard;
