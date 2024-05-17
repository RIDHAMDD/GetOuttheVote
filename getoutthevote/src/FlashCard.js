import React, { useState } from 'react';
import './Flashcard.css';

const FlashCard = ({ question, options, answer, explanation }) => {
  const [selectedOption, setSelectedOption] = useState(null);
  const [showExplanation, setShowExplanation] = useState(false);

  const handleOptionClick = (option) => {
    setSelectedOption(option);
    setShowExplanation(true);
  };

  const handleCloseExplanation = () => {
    setShowExplanation(false);
    setSelectedOption(null);
  };

  return (
    <div className="flashcard">
      <p className="question">{question}</p>
      <div className="options">
        {options.map((option, index) => (
          <button
            key={index}
            onClick={() => handleOptionClick(option)}
            className={selectedOption === option ? 'selected' : ''}
          >
            {option}
          </button>
        ))}
      </div>
      {showExplanation && (
        <div className="explanation">
          <p>{selectedOption === answer ? 'Correct!' : 'Incorrect'}</p>
          <p>{explanation}</p>
          <button onClick={handleCloseExplanation}>Close</button>
        </div>
      )}
    </div>
  );
};

export default FlashCard;
