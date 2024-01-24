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

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});

app.post('/categories', (req, res) => {
    const newCategory = req.body;
    CATEGORIES.push(newCategory);
    res.send('Category added successfully');
  });
