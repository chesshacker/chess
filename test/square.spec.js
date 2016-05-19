const chai = require('chai').should();
const { square, type } = require('../index');

describe('square', () => {
  describe('make', () => {
    it('valid input', () => {
      square.make(type.FILE_A, type.RANK_1).should.eql(type.A1);
      square.make(type.FILE_B, type.RANK_1).should.eql(type.B1);
      square.make(type.FILE_H, type.RANK_1).should.eql(type.H1);
      square.make(type.FILE_A, type.RANK_2).should.eql(type.A2);
      square.make(type.FILE_A, type.RANK_8).should.eql(type.A8);
      square.make(type.FILE_H, type.RANK_8).should.eql(type.H8);
    });
    it('invalid input', () => {
      square.make(type.FILE_H + 1, type.RANK_8).should.eql(type.A8);
      square.make(type.FILE_A - 1, type.RANK_1).should.eql(type.SQUARE_NOT_FOUND);
      square.make(type.FILE_A - 1, type.RANK_2).should.eql(type.SQUARE_NOT_FOUND);
      square.make(type.FILE_A, type.RANK_8 + 1).should.eql(type.NUMBER_OF_SQUARES);
      square.make(type.FILE_A, type.RANK_1 - 1).should.eql(-8);
    });
  });
  describe('file', () => {
    it('valid input', () => {
      square.file(type.A1).should.eql(type.FILE_A);
      square.file(type.B1).should.eql(type.FILE_B);
      square.file(type.H1).should.eql(type.FILE_H);
      square.file(type.A2).should.eql(type.FILE_A);
      square.file(type.A8).should.eql(type.FILE_A);
      square.file(type.H8).should.eql(type.FILE_H);
    });
    it('invalid input', () => {
      square.file(type.SQUARE_NOT_FOUND).should.eql(type.FILE_H);
      square.file(type.NUMBER_OF_SQUARES).should.eql(type.FILE_A);
    });
  });
  describe('rank', () => {
    it('valid input', () => {
      square.rank(type.A1).should.eql(type.RANK_1);
      square.rank(type.B1).should.eql(type.RANK_1);
      square.rank(type.H1).should.eql(type.RANK_1);
      square.rank(type.A2).should.eql(type.RANK_2);
      square.rank(type.A8).should.eql(type.RANK_8);
      square.rank(type.H8).should.eql(type.RANK_8);
    });
    it('invalid input', () => {
      square.rank(type.SQUARE_NOT_FOUND).should.eql(type.RANK_NOT_FOUND);
      square.rank(type.NUMBER_OF_SQUARES).should.eql(type.NUMBER_OF_RANKS);
    });
  });
  describe('fileFromChar', () => {
    it('valid input', () => {
      square.fileFromChar('a').should.eql(type.FILE_A);
      square.fileFromChar('c').should.eql(type.FILE_C);
      square.fileFromChar('h').should.eql(type.FILE_H);
    });
    it('invalid input', () => {
      square.fileFromChar('A').should.eql(-32);
      square.fileFromChar('`').should.eql(type.FILE_NOT_FOUND);
      square.fileFromChar('i').should.eql(type.NUMBER_OF_FILES);
    });
  });
  describe('rankFromChar', () => {
    it('valid input', () => {
      square.rankFromChar('1').should.eql(type.RANK_1);
      square.rankFromChar('3').should.eql(type.RANK_3);
      square.rankFromChar('8').should.eql(type.RANK_8);
    });
    it('invalid input', () => {
      square.rankFromChar('0').should.eql(type.RANK_NOT_FOUND);
      square.rankFromChar('9').should.eql(type.NUMBER_OF_RANKS);
    });
  });
  describe('fileToChar', () => {
    it('valid input', () => {
      square.fileToChar(type.FILE_A).should.eql('a');
      square.fileToChar(type.FILE_D).should.eql('d');
      square.fileToChar(type.FILE_H).should.eql('h');
    });
    it('invalid input', () => {
      square.fileToChar(type.FILE_NOT_FOUND).should.eql('`');
      square.fileToChar(type.NUMBER_OF_FILES).should.eql('i');
    });
  });
  describe('rankToChar', () => {
    it('valid input', () => {
      square.rankToChar(type.RANK_1).should.eql('1');
      square.rankToChar(type.RANK_4).should.eql('4');
      square.rankToChar(type.RANK_8).should.eql('8');
    });
    it('invalid input', () => {
      square.rankToChar(type.RANK_NOT_FOUND).should.eql('0');
      square.rankToChar(type.NUMBER_OF_RANKS).should.eql('9');
    });
  });
});
