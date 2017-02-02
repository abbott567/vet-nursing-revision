const chai = require('chai');
const {buildQuestion} = require('./functions');

const expect = chai.expect;

function matchAnswers(q) {
  for (let i = 0; i < q.answers.length; i++) {
    if (q.answers[i].answer === q.correct) {
      return 1;
    }
  }
  return 0;
}

module.exports = {
  buildQuestion: () => {
    describe('buildQuestion(body)', () => {
      it('Should return an object with the attribute obj.question', () => {
        const req = {body: {question: 'Test', a: 'a1', b: 'b2', c: 'c3', d: 'd4', correct: 'b'}};
        const q = buildQuestion(req.body);
        expect(typeof q.question).to.eql('string');
        expect(q.question.length).to.be.above(0);
      });

      it('Should return an object with the attribute obj.correct', () => {
        const req = {body: {question: 'Test', a: 'a1', b: 'b2', c: 'c3', d: 'd4', correct: 'b'}};
        const q = buildQuestion(req.body);
        expect(typeof q.correct).to.eql('string');
        expect(q.correct.length).to.be.above(0);
      });

      it('Should return an object with an array obj.answers', () => {
        const req = {body: {question: 'Test', a: 'a1', b: 'b2', c: 'c3', d: 'd4', correct: 'b'}};
        const q = buildQuestion(req.body);
        expect(Array.isArray(q.answers)).to.eql(true);
      });

      it('Should have 4 answers in obj.answers', () => {
        const req = {body: {question: 'Test', a: 'a1', b: 'b2', c: 'c3', d: 'd4', correct: 'b'}};
        const q = buildQuestion(req.body);
        expect(q.answers.length).to.eql(4);
      });

      it('Should return an object where obj.correct is in the array', () => {
        const req = {body: {question: 'Test', a: 'a1', b: 'b2', c: 'c3', d: 'd4', correct: 'b'}};
        const q = buildQuestion(req.body);
        const matched = matchAnswers(q);
        expect(matched).to.eql(1);
      });
    });
  }
};
