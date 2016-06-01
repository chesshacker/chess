require('../setup');
module.exports = describe('piece', () => {
  describe('pieceColor', () => {
    it('valid input', () => {
      c.pieceColor(c.BLACK_BISHOP).should.equal(c.BLACK_PIECE);
      c.pieceColor(c.BLACK_KING).should.equal(c.BLACK_PIECE);
      c.pieceColor(c.BLACK_KNIGHT).should.equal(c.BLACK_PIECE);
      c.pieceColor(c.BLACK_PAWN).should.equal(c.BLACK_PIECE);
      c.pieceColor(c.BLACK_QUEEN).should.equal(c.BLACK_PIECE);
      c.pieceColor(c.BLACK_ROOK).should.equal(c.BLACK_PIECE);
      c.pieceColor(c.WHITE_BISHOP).should.equal(c.WHITE_PIECE);
      c.pieceColor(c.WHITE_KING).should.equal(c.WHITE_PIECE);
      c.pieceColor(c.WHITE_KNIGHT).should.equal(c.WHITE_PIECE);
      c.pieceColor(c.WHITE_PAWN).should.equal(c.WHITE_PIECE);
      c.pieceColor(c.WHITE_QUEEN).should.equal(c.WHITE_PIECE);
      c.pieceColor(c.WHITE_ROOK).should.equal(c.WHITE_PIECE);
    });
    it('invalid input', () => {
      // always returns WHITE_PIECE or BLACK_PIECE but isn't relevant
      c.pieceColor(-1).should.equal(c.BLACK_PIECE);
      c.pieceColor(c.EMPTY).should.equal(c.WHITE_PIECE);
    });
  });
  describe('charToPiece', () => {
    it('valid input', () => {
      c.charToPiece('B').should.equal(c.WHITE_BISHOP);
      c.charToPiece('K').should.equal(c.WHITE_KING);
      c.charToPiece('N').should.equal(c.WHITE_KNIGHT);
      c.charToPiece('P').should.equal(c.WHITE_PAWN);
      c.charToPiece('Q').should.equal(c.WHITE_QUEEN);
      c.charToPiece('R').should.equal(c.WHITE_ROOK);
      c.charToPiece('b').should.equal(c.BLACK_BISHOP);
      c.charToPiece('k').should.equal(c.BLACK_KING);
      c.charToPiece('n').should.equal(c.BLACK_KNIGHT);
      c.charToPiece('p').should.equal(c.BLACK_PAWN);
      c.charToPiece('q').should.equal(c.BLACK_QUEEN);
      c.charToPiece('r').should.equal(c.BLACK_ROOK);
    });
    it('invalid input', () => {
      // always returns undefined
      should.equal(c.charToPiece('-'), undefined);
      should.equal(c.charToPiece('?'), undefined);
      should.equal(c.charToPiece('Z'), undefined);
    });
  });
  describe('pieceToChar', () => {
    it('valid input', () => {
      c.pieceToChar(c.BLACK_BISHOP).should.equal('b');
      c.pieceToChar(c.BLACK_KING).should.equal('k');
      c.pieceToChar(c.BLACK_KNIGHT).should.equal('n');
      c.pieceToChar(c.BLACK_PAWN).should.equal('p');
      c.pieceToChar(c.BLACK_QUEEN).should.equal('q');
      c.pieceToChar(c.BLACK_ROOK).should.equal('r');
      c.pieceToChar(c.WHITE_BISHOP).should.equal('B');
      c.pieceToChar(c.WHITE_KING).should.equal('K');
      c.pieceToChar(c.WHITE_KNIGHT).should.equal('N');
      c.pieceToChar(c.WHITE_PAWN).should.equal('P');
      c.pieceToChar(c.WHITE_QUEEN).should.equal('Q');
      c.pieceToChar(c.WHITE_ROOK).should.equal('R');
    });
    it('invalid input', () => {
      // always returns undefined
      should.equal(c.pieceToChar(c.EMPTY), undefined);
      should.equal(c.pieceToChar(-1), undefined);
      should.equal(c.pieceToChar(16), undefined);
      should.equal(c.pieceToChar(116), undefined);
      // even the reserved piece values 7, 8 and 15 should be undefined
      should.equal(c.pieceToChar(7), undefined);
      should.equal(c.pieceToChar(8), undefined);
      should.equal(c.pieceToChar(15), undefined);
    });
  });
  describe('pieceToWhite', () => {
    it('valid input', () => {
      c.pieceToWhite(c.BLACK_BISHOP).should.equal(c.WHITE_BISHOP);
      c.pieceToWhite(c.BLACK_KING).should.equal(c.WHITE_KING);
      c.pieceToWhite(c.BLACK_KNIGHT).should.equal(c.WHITE_KNIGHT);
      c.pieceToWhite(c.BLACK_PAWN).should.equal(c.WHITE_PAWN);
      c.pieceToWhite(c.BLACK_QUEEN).should.equal(c.WHITE_QUEEN);
      c.pieceToWhite(c.BLACK_ROOK).should.equal(c.WHITE_ROOK);
      c.pieceToWhite(c.WHITE_BISHOP).should.equal(c.WHITE_BISHOP);
      c.pieceToWhite(c.WHITE_KING).should.equal(c.WHITE_KING);
      c.pieceToWhite(c.WHITE_KNIGHT).should.equal(c.WHITE_KNIGHT);
      c.pieceToWhite(c.WHITE_PAWN).should.equal(c.WHITE_PAWN);
      c.pieceToWhite(c.WHITE_QUEEN).should.equal(c.WHITE_QUEEN);
      c.pieceToWhite(c.WHITE_ROOK).should.equal(c.WHITE_ROOK);
    });
    it('invalid input', () => {
      // does not return a relevant response
      c.pieceToWhite(-1).should.equal(-9);
      c.pieceToWhite(c.EMPTY).should.equal(0);
    });
  });
  describe('pieceToBlack', () => {
    it('valid input', () => {
      c.pieceToBlack(c.BLACK_BISHOP).should.equal(c.BLACK_BISHOP);
      c.pieceToBlack(c.BLACK_KING).should.equal(c.BLACK_KING);
      c.pieceToBlack(c.BLACK_KNIGHT).should.equal(c.BLACK_KNIGHT);
      c.pieceToBlack(c.BLACK_PAWN).should.equal(c.BLACK_PAWN);
      c.pieceToBlack(c.BLACK_QUEEN).should.equal(c.BLACK_QUEEN);
      c.pieceToBlack(c.BLACK_ROOK).should.equal(c.BLACK_ROOK);
      c.pieceToBlack(c.WHITE_BISHOP).should.equal(c.BLACK_BISHOP);
      c.pieceToBlack(c.WHITE_KING).should.equal(c.BLACK_KING);
      c.pieceToBlack(c.WHITE_KNIGHT).should.equal(c.BLACK_KNIGHT);
      c.pieceToBlack(c.WHITE_PAWN).should.equal(c.BLACK_PAWN);
      c.pieceToBlack(c.WHITE_QUEEN).should.equal(c.BLACK_QUEEN);
      c.pieceToBlack(c.WHITE_ROOK).should.equal(c.BLACK_ROOK);
    });
    it('invalid input', () => {
      // does not return a relevant response
      c.pieceToBlack(-1).should.equal(-1);
      c.pieceToBlack(c.EMPTY).should.equal(0);
      c.pieceToBlack(16).should.equal(24);
    });
  });
  describe('pieceIsPawn', () => {
    it('valid input', () => {
      c.pieceIsPawn(c.BLACK_BISHOP).should.be.false;
      c.pieceIsPawn(c.BLACK_KING).should.be.false;
      c.pieceIsPawn(c.BLACK_KNIGHT).should.be.false;
      c.pieceIsPawn(c.BLACK_PAWN).should.be.true;
      c.pieceIsPawn(c.BLACK_QUEEN).should.be.false;
      c.pieceIsPawn(c.BLACK_ROOK).should.be.false;
      c.pieceIsPawn(c.WHITE_BISHOP).should.be.false;
      c.pieceIsPawn(c.WHITE_KING).should.be.false;
      c.pieceIsPawn(c.WHITE_KNIGHT).should.be.false;
      c.pieceIsPawn(c.WHITE_PAWN).should.be.true;
      c.pieceIsPawn(c.WHITE_QUEEN).should.be.false;
      c.pieceIsPawn(c.WHITE_ROOK).should.be.false;
    });
    it('invalid input', () => {
      // does not return a relevant response
      c.pieceIsPawn(c.EMPTY).should.be.false
      c.pieceIsPawn(25).should.be.true
    });
  });
});
