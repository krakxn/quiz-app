const express = require('express');
const bodyParser = require('body-parser'); // eslint-disable-line no-unused-vars
const CATEGORIES = require('./constants/categories.js');
const QUESTIONS_TYPE = require('./constants/questionsType.js');
const DIFFICULTY = require('./constants/difficulty.js');

const app = express();
const port = 3000; // eslint-disable-line no-unused-vars

// http://localhost:3000/quiz-app

app.get('quiz-app/categories', (req, res) => {
  const categories = CATEGORIES.map((category) => {
    return { id: category.key, name: category.text };
  });
  res.send(categories);
});

app.get('quiz-app/categories/:id', (req, res) => {
  const category = CATEGORIES.find((category) => {
    return category.key === req.params.id;
  });
  if (category) {
    res.send(category);
  } else {
    res.status(404).send('Category not found');
  }
});

app.post('quiz-app/categories', (req, res) => {
    const newCategory = req.body;
    CATEGORIES.push(newCategory);
    res.send('Category added successfully');
  });

app.get('quiz-app/difficulty', (req, res) => {
    const idNameList = DIFFICULTY.map((item) => {
      return { id: item.key, name: item.text };
    });
    res.send(idNameList);
  });

app.get('quiz-app/difficulty/:id', (req, res) => {
    const id = req.params.id;
    const difficulty = DIFFICULTY.find((item) => item.key === id);
    if (difficulty) {
      const details = {
        key: difficulty.key,
        text: difficulty.text,
        value: difficulty.value
      };
      res.send(details);
    } else {
      res.status(404).send('Difficulty not found');
    }
  });

app.post('quiz-app/difficulty', (req, res) => {
    const newDifficulty = req.body;
    DIFFICULTY.push(newDifficulty);
    res.send('Difficulty added successfully');
  });

app.get('quiz-app/questions', (req, res) => {
    const idNameList = QUESTIONS_TYPE.map((item) => {
      return { id: item.key, name: item.text };
    });
    res.send(idNameList);
  });

app.get('quiz-app/questions/:id', (req, res) => {
    const id = req.params.id;
    const questionType = QUESTIONS_TYPE.find((item) => item.key === id);
    if (questionType) {
      const details = {
        key: questionType.key,
        text: questionType.text,
        value: questionType.value
      };
      res.send(details);
    } else {
      res.status(404).send('Question type not found');
    }
  });

app.post('quiz-app/questions', (req, res) => {
    const newQuestion = req.body;
    QUESTIONS_TYPE.push(newQuestion);
    res.send('Question added successfully');
  });

app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Something broke! :(');
  });

app.listen(3000, () => {
  console.log('QuizQuest listening at Port 3000');
});

module.exports = app;
