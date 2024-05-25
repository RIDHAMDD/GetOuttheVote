import React, { useState } from 'react';
import Navbar from './Navbar';
import './App.css'; // Add global styles here
import FlashCard from './FlashCard';
import VoterRegistrationInfo from './VoterRegistrationInfo'; // Import the new component
import GitHubSection from './GitHubSection';

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
            At VoteAware, we value the power of every vote. Our mission is to educate and motivate everyone to participate in the democratic process.
            In times of misinformation and rising anti-voting campaigns, it is more important than ever to stay informed and exercise your right to vote. 
            Together, we can make a difference and ensure that every voice is heard.
          </p>
        </div>
        <div className="about-content">
          <h2>Quote</h2>
          <p>
            "A politician thinks of the next election. A statesman, of the next generation."
          </p>
          <p>- James Freeman Clarke</p>
        </div>
      </section>

      <section id="section1" className="section section1-section">
        <div className="quiz">
          <h1>Quiz</h1>
          <div className="flashcard-container">
            <FlashCard 
              question="What is one common tactic used in anti-voting content to discourage people from voting?" 
              options={['Providing accurate information', 'Spreading misinformation', 'Encouraging research']}
              answer="Spreading misinformation"
              explanation="Spreading misinformation about voter ID requirements is a common tactic used to discourage people from voting."
            />
            <FlashCard 
              question="Which of the following is a good strategy to identify misleading content online?" 
              options={['Trusting unverified sources', 'Fact-checking with reputable sources', 'Sharing without verifying']}
              answer="Fact-checking with reputable sources"
              explanation="Fact-checking information with reputable sources is a good strategy to identify misleading content online."
            />
            <FlashCard 
              question="Which of the following would be considered a credible source for voting information?" 
              options={['A random blog post', 'Your state\'s official voting website', 'A social media post']}
              answer="Your state's official voting website"
              explanation="Your state's official voting website would be considered a credible source for voting information."
            />
            <FlashCard 
              question="How can understanding local issues motivate you to vote?" 
              options={['By making you feel disconnected', 'By showing impact on daily life', 'By making the process confusing']}
              answer="By showing impact on daily life"
              explanation="Understanding local issues can motivate you to vote by showing how voting directly impacts your daily life."
            />
          </div>
        </div>
      </section>

      <section id="section5" className="section section5-section">
        <div className="great-hack-connection">
          <h2>The Connection Between Quiz Questions and "The Great Hack"</h2>
          <p>
            The quiz you just took was designed to highlight the key tactics and issues explored in "The Great Hack," a documentary that dives into the misuse of public's data and its impact on democratic processes.
            </p>
            <p>
            The quiz questions focused on:
          </p>
          <ul>
            <li><strong>Anti-Voting Tactics:</strong> In "The Great Hack," misinformation is a powerful tool used to influence and suppress voter turnout.</li>
            <li><strong>Identifying Misleading Content:</strong> The documentary also emphasized the importance of fact-checking and using credible sources.</li>
            <li><strong>Credible Voting Information:</strong> Ensuring voters have access to a reliable source of information is very important, like the documentary touched the requirment for transparency and accountability for data usage by the companies collecting them.</li>
            <li><strong>Understanding Local Issues:</strong> By showing how important the impact of local issues are we can motivate voters to participate in a fair election.</li>
          </ul>
          <p>
            By using these points, we wish users to recognize and combat misinformation, protect their personal data, and actively participate in the democratic process.
          </p>
        </div>
      </section>

      <section id="section2" className={`section section2-section ${surveyCompleted ? 'alert' : ''}`}>
        <h2>Election Survey</h2>
        <div className="survey-container">
          <p>
            Take our exciting survey to share your views on who will win the upcoming 
            elections! Once you complete the survey, you'll see the real stats on who is leading in the polls.
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
                Please note: Be cautious of random online surveys as they can steal 
                your personal information and voting preferences. This was a clickbait 
                tactic to illustrate how easily one can be tricked. Protect your privacy 
                and be aware of fraudulent surveys.
              </p>
            </div>
          )}
        </div>
      </section>

      <section id="section3" className="section">
        <VoterRegistrationInfo /> {/* Include the new component here */}
      </section>

      <section id="section4" className="section">
        <GitHubSection />
      </section>
    </div>
  );
};

export default App;
