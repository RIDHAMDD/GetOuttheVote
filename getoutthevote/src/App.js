import React, { useState } from 'react';
import Navbar from './Navbar';
import './App.css'; // Add global styles here
import FlashCard from './FlashCard';

const App = () => {
  const [surveyCompleted, setSurveyCompleted] = useState(false);

  const handleSurveyClick = () => {
    setSurveyCompleted(true);
  };

  return (
    <div>
      <Navbar />
      <section id="about" className="section about-section">
        <div className="about-content">
          <h2>Welcome to VoteAware!</h2>
          <p>
            We value the power of every vote at VoteAware. Our mission is to educate, and motivate everyone to participate in this democratic process.
            In the time of misinformation floating around and anti-voting campaigns on the rise, it is important than everyone stays informed and exercise their right to vote. 
            Together, we can make a difference and ensure that every voice is heard.
          </p>
        </div>
        <div className="about-content">
          <h2>Quote!</h2>
          <p>
            "A politician thinks of the next election. A statesman, of the next generation."
          </p>
          <p>
            - James Freeman Clarke
          </p>
        </div>
      </section>

      <section id="section1" className="section section1-section">
        <h2>Quiz</h2>
        <div className="flashcard-container">
          <FlashCard 
            question="Is it true that only U.S. citizens can vote in federal elections?" 
            answer="true"
            explanation="Yes, only U.S. citizens can vote in federal elections."
          />
          <FlashCard 
            question="Can you vote online in U.S. presidential elections?" 
            answer="false"
            explanation="No, you cannot vote online in U.S. presidential elections."
          />
          <FlashCard 
            question="Is it possible to vote by mail in all states?" 
            answer="mixed"
            explanation="It's mixed because while all states allow some form of mail voting, the rules vary significantly."
          />
          <FlashCard 
            question="Are you automatically registered to vote when you turn 18?" 
            answer="false"
            explanation="No, you need to register to vote when you turn 18, it is not automatic."
          />
        </div>
      </section>

      <section id="section2" className={`section section2-section ${surveyCompleted ? 'alert' : ''}`}>
        <h2>Election Survey</h2>
        <div className="survey-container">
          <p>
            Take our survey to share your views on who will win the upcoming elections. 
            Once you complete the survey, you'll see the real stats on who is winning the elections.
          </p>
          <button onClick={handleSurveyClick} className="survey-button">
            Take the Survey
          </button>
          {surveyCompleted && (
            <div className="survey-info">
              <div className="aware-text">Be Aware</div>
              <div className="aware-text">Be Aware</div>
              <div className="aware-text">Be Aware</div>
              <p>
                Please be aware that some online surveys might be fraudulent 
                and could misuse your information. Voting preferences is a private 
                information and one is not entitled to reveal it under any circumstances.
              </p>
            </div>
          )}
        </div>
      </section>

      <section id="section3" className="section">
        <h2>Section 3</h2>
        <p>Content for Section 3...</p>
      </section>
      <section id="section4" className="section">
        <h2>Section 4</h2>
        <p>Content for Section 4...</p>
      </section>
    </div>
  );
};

export default App;
