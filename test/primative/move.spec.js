require('../setup');
module.exports = describe('move', () => {
  it('null move', () => {
    const move = c.NULL_MOVE;
    c.moveFrom(move).should.equal(c.A1);
    c.moveTo(move).should.equal(c.A1);
    c.moveType(move).should.equal(c.NORMAL_MOVE);
    c.movePromotesTo(move).should.equal(c.EMPTY);
  });
  it('makeMove', () => {
    const move = c.makeMove(c.E8, c.G6);
    c.moveFrom(move).should.equal(c.E8);
    c.moveTo(move).should.equal(c.G6);
    c.moveType(move).should.equal(c.NORMAL_MOVE);
    c.movePromotesTo(move).should.equal(c.EMPTY);
  });
  it('makeMoveCastleKingside', () => {
    const move = c.makeMoveCastleKingside(c.E1);
    c.moveFrom(move).should.equal(c.E1);
    c.moveTo(move).should.equal(c.G1);
    c.moveType(move).should.equal(c.CASTLE_KINGSIDE);
    c.movePromotesTo(move).should.equal(c.EMPTY);
  });
  it('makeMoveCastleQueenside', () => {
    const move = c.makeMoveCastleQueenside(c.E1);
    c.moveFrom(move).should.equal(c.E1);
    c.moveTo(move).should.equal(c.C1);
    c.moveType(move).should.equal(c.CASTLE_QUEENSIDE);
    c.movePromotesTo(move).should.equal(c.EMPTY);
  });
  it('makeMoveEnPassantPossible', () => {
    const move = c.makeMoveEnPassantPossible(c.E2, c.E4);
    c.moveFrom(move).should.equal(c.E2);
    c.moveTo(move).should.equal(c.E4);
    c.moveType(move).should.equal(c.EN_PASSANT_POSSIBLE);
    c.movePromotesTo(move).should.equal(c.EMPTY);
  });
  it('makeMoveEnPassantCapture', () => {
    const move = c.makeMoveEnPassantCapture(c.D4, c.E3);
    c.moveFrom(move).should.equal(c.D4);
    c.moveTo(move).should.equal(c.E3);
    c.moveType(move).should.equal(c.EN_PASSANT_CAPTURE);
    c.movePromotesTo(move).should.equal(c.EMPTY);
  });
  it('makeMovePromotion to Q', () => {
    const move = c.makeMovePromotion(c.E7, c.F8, c.WHITE_QUEEN);
    c.moveFrom(move).should.equal(c.E7);
    c.moveTo(move).should.equal(c.F8);
    c.moveType(move).should.equal(c.PROMOTION);
    c.movePromotesTo(move).should.equal(c.WHITE_QUEEN);
  });
  it('makeMovePromotion to n', () => {
    const move = c.makeMovePromotion(c.B2, c.B1, c.BLACK_KNIGHT);
    c.moveFrom(move).should.equal(c.B2);
    c.moveTo(move).should.equal(c.B1);
    c.moveType(move).should.equal(c.PROMOTION);
    c.movePromotesTo(move).should.equal(c.BLACK_KNIGHT);
  });
});
