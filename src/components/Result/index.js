import React, { useState } from 'react'; // eslint-disable-line no-unused-vars
import PropTypes from 'prop-types'; // eslint-disable-line no-unused-vars
import { Container, Menu } from 'semantic-ui-react'; // eslint-disable-line no-unused-vars

import Stats from './Stats'; // eslint-disable-line no-unused-vars
import QNA from './QNA'; // eslint-disable-line no-unused-vars

const Result = ({
  totalQuestions,
  correctAnswers,
  timeTaken,
  questionsAndAnswers,
  replayQuiz,
  resetQuiz
}) => {
  const [activeTab, setActiveTab] = useState('Statistics');

  const handleTabClick = (e, { name }) => {
    setActiveTab(name);
  };

  return (
    <Container>
      <Menu fluid widths={2}>
        <Menu.Item
          name="Statistics"
          active={activeTab === 'Statistics'}
          onClick={handleTabClick}
        />
        <Menu.Item
          name="Questions and Answers"
          active={activeTab === 'Questions and Answers'}
          onClick={handleTabClick}
        />
      </Menu>
      {activeTab === 'Statistics' && (
        <Stats
          totalQuestions={totalQuestions}
          correctAnswers={correctAnswers}
          timeTaken={timeTaken}
          replayQuiz={replayQuiz}
          resetQuiz={resetQuiz}
        />
      )}
      {activeTab === 'Questions and Answers' && <QNA questionsAndAnswers={questionsAndAnswers} />}
      <br />
    </Container>
  );
};

Result.propTypes = {
  totalQuestions: PropTypes.number.isRequired,
  correctAnswers: PropTypes.number.isRequired,
  timeTaken: PropTypes.number.isRequired,
  questionsAndAnswers: PropTypes.array.isRequired,
  replayQuiz: PropTypes.func.isRequired,
  resetQuiz: PropTypes.func.isRequired
};

export default Result;
