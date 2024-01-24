import express from 'express';
import bodyParser from 'body-parser'; // eslint-disable-line no-unused-vars
import CATEGORIES from '.constants/categories.js';

const app = express();
const port = 3000;

app.get('/categories', (req, res) => {
  const categories = CATEGORIES.map((category) => {
    return { id: category.key, name: category.text };
  });
  res.send(categories);
});

app.get('/categories/:id', (req, res) => {
  const category = CATEGORIES.find((category) => {
    return category.key === req.params.id;
  });
  if (category) {
    res.send(category);
  } else {
    res.status(404).send('Category not found');
  }
});

app.post('/categories', (req, res) => {
    const newCategory = req.body;
    CATEGORIES.push(newCategory);
    res.send('Category added successfully');
  });

app.get('/list', (req, res) => {
    const idNameList = DIFFICULTY.map((item) => {
      return { id: item.key, name: item.text };
    });
    res.send(idNameList);
  });

app.get('/:id', (req, res) => {
    const id = req.params.id;
    const difficulty = DIFFICULTY.find((item) => item.key === id);
    if (difficulty) {
      const details = {
        key: difficulty.key,
        text: difficulty.text,
        value: difficulty.value,
      };
      res.send(details);
    } else {
      res.status(404).send('Difficulty not found');
    }
  });

app.get('/list', (req, res) => {
    const idNameList = QUESTIONS_TYPE.map((item) => {
      return { id: item.key, name: item.text };
    });
    res.send(idNameList);
  });
  
app.get('/:id', (req, res) => {
    const id = req.params.id;
    const questionType = QUESTIONS_TYPE.find((item) => item.key === id);
    if (questionType) {
      const details = {
        key: questionType.key,
        text: questionType.text,
        value: questionType.value,
        relatedEntities: [
          // Add related entities here
        ],
      };
      res.send(details);
    } else {
      res.status(404).send('Question type not found');
    }
  });


app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Something broke! :(');
  });

app.listen(3000, () => {
  console.log(`QuizQuest listening at Port 3000`);
});


