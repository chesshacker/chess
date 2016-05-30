require('../setup');
module.exports = describe('square', () => {
  describe('makeSquare', () => {
    it('valid input', () => {
      c.makeSquare(c.FILE_A, c.RANK_1).should.equal(c.A1);
      c.makeSquare(c.FILE_B, c.RANK_1).should.equal(c.B1);
      c.makeSquare(c.FILE_H, c.RANK_1).should.equal(c.H1);
      c.makeSquare(c.FILE_A, c.RANK_2).should.equal(c.A2);
      c.makeSquare(c.FILE_A, c.RANK_8).should.equal(c.A8);
      c.makeSquare(c.FILE_H, c.RANK_8).should.equal(c.H8);
    });
    it('invalid input', () => {
      // does not return a relevant response
      c.makeSquare(c.FILE_H + 1, c.RANK_8).should.equal(c.A8);
      c.makeSquare(c.FILE_A - 1, c.RANK_1).should.equal(-1);
      c.makeSquare(c.FILE_A - 1, c.RANK_2).should.equal(-1);
      c.makeSquare(c.FILE_A, c.RANK_8 + 1).should.equal(64);
      c.makeSquare(c.FILE_A, c.RANK_1 - 1).should.equal(-8);
    });
  });
  describe('squareFile', () => {
    it('valid input', () => {
      c.squareFile(c.A1).should.equal(c.FILE_A);
      c.squareFile(c.B1).should.equal(c.FILE_B);
      c.squareFile(c.H1).should.equal(c.FILE_H);
      c.squareFile(c.A2).should.equal(c.FILE_A);
      c.squareFile(c.A8).should.equal(c.FILE_A);
      c.squareFile(c.H8).should.equal(c.FILE_H);
    });
    it('invalid input', () => {
      // always returns a file, but isn't relevant
      c.squareFile(-1).should.equal(c.FILE_H);
      c.squareFile(c.NUMBER_OF_SQUARES).should.equal(c.FILE_A);
    });
  });
  describe('squareRank', () => {
    it('valid input', () => {
      c.squareRank(c.A1).should.equal(c.RANK_1);
      c.squareRank(c.B1).should.equal(c.RANK_1);
      c.squareRank(c.H1).should.equal(c.RANK_1);
      c.squareRank(c.A2).should.equal(c.RANK_2);
      c.squareRank(c.A8).should.equal(c.RANK_8);
      c.squareRank(c.H8).should.equal(c.RANK_8);
    });
    it('invalid input', () => {
      // does not return a relevant response
      c.squareRank(-1).should.equal(-1);
      c.squareRank(c.NUMBER_OF_SQUARES).should.equal(8);
    });
  });
  describe('charToFile', () => {
    it('valid input', () => {
      c.charToFile('a').should.equal(c.FILE_A);
      c.charToFile('c').should.equal(c.FILE_C);
      c.charToFile('h').should.equal(c.FILE_H);
    });
    it('invalid input', () => {
      // does not return a relevant response
      c.charToFile('A').should.equal(-32);
      c.charToFile('`').should.equal(-1);
      c.charToFile('i').should.equal(8);
    });
  });
  describe('charToRank', () => {
    it('valid input', () => {
      c.charToRank('1').should.equal(c.RANK_1);
      c.charToRank('3').should.equal(c.RANK_3);
      c.charToRank('8').should.equal(c.RANK_8);
    });
    it('invalid input', () => {
      // does not return a relevant response
      c.charToRank('0').should.equal(-1);
      c.charToRank('9').should.equal(8);
    });
  });
  describe('fileToChar', () => {
    it('valid input', () => {
      c.fileToChar(c.FILE_A).should.equal('a');
      c.fileToChar(c.FILE_D).should.equal('d');
      c.fileToChar(c.FILE_H).should.equal('h');
    });
    it('invalid input', () => {
      // does not return a relevant response
      c.fileToChar(-1).should.equal('`');
      c.fileToChar(c.NUMBER_OF_FILES).should.equal('i');
    });
  });
  describe('rankToChar', () => {
    it('valid input', () => {
      c.rankToChar(c.RANK_1).should.equal('1');
      c.rankToChar(c.RANK_4).should.equal('4');
      c.rankToChar(c.RANK_8).should.equal('8');
    });
    it('invalid input', () => {
      // does not return a relevant response
      c.rankToChar(-1).should.equal('0');
      c.rankToChar(c.NUMBER_OF_RANKS).should.equal('9');
    });
  });
});
