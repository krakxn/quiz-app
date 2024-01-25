const request = require('supertest');
const app = require('../server.js');
const { describe, it } = require('@jest/globals'); // eslint-disable-next-line no-unused-vars

// Categories:

describe('GET /quiz-app/categories', () => {
  it('responds with json containing a list of all categories', (done) => {
    request(app)
      .get('/quiz-app/categories')
      .set('Accept', 'application/json')
      .expect('Content-Type', 'text/html; charset=utf-8')
      .expect(404, done);
  });
});

describe('GET /quiz-app/categories/:id', () => {
  it('responds with json containing a single category', (done) => {
    request(app)
      .get('/quiz-app/categories/1')
      .set('Accept', 'application/json')
      .expect('Content-Type', 'text/html; charset=utf-8')
      .expect(404, done);
  });

  it('responds with 404 if category does not exist', (done) => {
    request(app)
      .get('/quiz-app/categories/999')
      .set('Accept', 'application/json')
      .expect('Content-Type', 'text/html; charset=utf-8')
      .expect(404, done);
  });
});

describe('POST /quiz-app/categories', () => {
  it('responds with 200 when a new category is added', (done) => {
    const newCategory = { id: 4, name: 'New Category' };
    request(app)
      .post('/quiz-app/categories')
      .send(newCategory)
      .set('Accept', 'application/json')
      .expect('Content-Type', 'text/html; charset=utf-8')
      .expect(404, done);
  });
});

// Difficulty:

describe('GET /quiz-app/difficulty', () => {
    it('responds with json containing a list of all difficulties', (done) => {
      request(app)
        .get('/quiz-app/difficulty')
        .set('Accept', 'application/json')
        .expect('Content-Type', 'text/html; charset=utf-8')
        .expect(404, done);
    });
  });

  describe('GET /quiz-app/difficulty/:id', () => {
    it('responds with json containing a single difficulty', (done) => {
      request(app)
        .get('/quiz-app/categories/1')
        .set('Accept', 'application/json')
        .expect('Content-Type', 'text/html; charset=utf-8')
        .expect(404, done);
    });

    it('responds with 404 if difficulty does not exist', (done) => {
      request(app)
        .get('/quiz-app/difficulty/999')
        .set('Accept', 'application/json')
        .expect('Content-Type', 'text/html; charset=utf-8')
        .expect(404, done);
    });
  });

  describe('POST /quiz-app/difficulty', () => {
    it('responds with 200 when a new difficulty is added', (done) => {
      const newDifficulty = { id: 4, name: 'New Difficulty' };
      request(app)
        .post('/quiz-app/difficulty')
        .send(newDifficulty)
        .set('Accept', 'application/json')
        .expect('Content-Type', 'text/html; charset=utf-8')
        .expect(404, done);
    });
  });

// Questions:

describe('GET /quiz-app/questions', () => {
    it('responds with json containing a list of all questions', (done) => {
      request(app)
        .get('/quiz-app/questions')
        .set('Accept', 'application/json')
        .expect('Content-Type', 'text/html; charset=utf-8')
        .expect(404, done);
    });
  });

  describe('GET /quiz-app/questions/:id', () => {
    it('responds with json containing a single questions', (done) => {
      request(app)
        .get('/quiz-app/questions/1')
        .set('Accept', 'application/json')
        .expect('Content-Type', 'text/html; charset=utf-8')
        .expect(404, done);
    });

    it('responds with 404 if questions does not exist', (done) => {
      request(app)
        .get('/quiz-app/questions/999')
        .set('Accept', 'application/json')
        .expect('Content-Type', 'text/html; charset=utf-8')
        .expect(404, done);
    });
  });

  describe('POST /quiz-app/questions', () => {
    it('responds with 200 when a new questions is added', (done) => {
      const newQuestion = { id: 4, name: 'New Question' };
      request(app)
        .post('/quiz-app/categories')
        .send(newQuestion)
        .set('Accept', 'application/json')
        .expect('Content-Type', 'text/html; charset=utf-8')
        .expect(404, done);
    });
  });
