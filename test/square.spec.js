const chai = require('chai').should();
const c = require('../index');

describe('square', () => {
  describe('make', () => {
    it('valid input', () => {
      c.makeSquare(c.FILE_A, c.RANK_1).should.eql(c.A1);
      c.makeSquare(c.FILE_B, c.RANK_1).should.eql(c.B1);
      c.makeSquare(c.FILE_H, c.RANK_1).should.eql(c.H1);
      c.makeSquare(c.FILE_A, c.RANK_2).should.eql(c.A2);
      c.makeSquare(c.FILE_A, c.RANK_8).should.eql(c.A8);
      c.makeSquare(c.FILE_H, c.RANK_8).should.eql(c.H8);
    });
    it('invalid input', () => {
      c.makeSquare(c.FILE_H + 1, c.RANK_8).should.eql(c.A8);
      c.makeSquare(c.FILE_A - 1, c.RANK_1).should.eql(-1);
      c.makeSquare(c.FILE_A - 1, c.RANK_2).should.eql(-1);
      c.makeSquare(c.FILE_A, c.RANK_8 + 1).should.eql(64);
      c.makeSquare(c.FILE_A, c.RANK_1 - 1).should.eql(-8);
    });
  });
  describe('file', () => {
    it('valid input', () => {
      c.squareFile(c.A1).should.eql(c.FILE_A);
      c.squareFile(c.B1).should.eql(c.FILE_B);
      c.squareFile(c.H1).should.eql(c.FILE_H);
      c.squareFile(c.A2).should.eql(c.FILE_A);
      c.squareFile(c.A8).should.eql(c.FILE_A);
      c.squareFile(c.H8).should.eql(c.FILE_H);
    });
    it('invalid input', () => {
      c.squareFile(-1).should.eql(c.FILE_H);
      c.squareFile(c.NUMBER_OF_SQUARES).should.eql(c.FILE_A);
    });
  });
  describe('rank', () => {
    it('valid input', () => {
      c.squareRank(c.A1).should.eql(c.RANK_1);
      c.squareRank(c.B1).should.eql(c.RANK_1);
      c.squareRank(c.H1).should.eql(c.RANK_1);
      c.squareRank(c.A2).should.eql(c.RANK_2);
      c.squareRank(c.A8).should.eql(c.RANK_8);
      c.squareRank(c.H8).should.eql(c.RANK_8);
    });
    it('invalid input', () => {
      c.squareRank(-1).should.eql(-1);
      c.squareRank(c.NUMBER_OF_SQUARES).should.eql(8);
    });
  });
  describe('charToFile', () => {
    it('valid input', () => {
      c.charToFile('a').should.eql(c.FILE_A);
      c.charToFile('c').should.eql(c.FILE_C);
      c.charToFile('h').should.eql(c.FILE_H);
    });
    it('invalid input', () => {
      c.charToFile('A').should.eql(-32);
      c.charToFile('`').should.eql(-1);
      c.charToFile('i').should.eql(8);
    });
  });
  describe('charToRank', () => {
    it('valid input', () => {
      c.charToRank('1').should.eql(c.RANK_1);
      c.charToRank('3').should.eql(c.RANK_3);
      c.charToRank('8').should.eql(c.RANK_8);
    });
    it('invalid input', () => {
      c.charToRank('0').should.eql(-1);
      c.charToRank('9').should.eql(8);
    });
  });
  describe('fileToChar', () => {
    it('valid input', () => {
      c.fileToChar(c.FILE_A).should.eql('a');
      c.fileToChar(c.FILE_D).should.eql('d');
      c.fileToChar(c.FILE_H).should.eql('h');
    });
    it('invalid input', () => {
      c.fileToChar(-1).should.eql('`');
      c.fileToChar(c.NUMBER_OF_FILES).should.eql('i');
    });
  });
  describe('rankToChar', () => {
    it('valid input', () => {
      c.rankToChar(c.RANK_1).should.eql('1');
      c.rankToChar(c.RANK_4).should.eql('4');
      c.rankToChar(c.RANK_8).should.eql('8');
    });
    it('invalid input', () => {
      c.rankToChar(-1).should.eql('0');
      c.rankToChar(c.NUMBER_OF_RANKS).should.eql('9');
    });
  });
});
