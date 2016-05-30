require('../setup');
function positionIsLikeNew(position) {
  const firstRank = [
    c.WHITE_ROOK, c.WHITE_KNIGHT, c.WHITE_BISHOP, c.WHITE_QUEEN,
    c.WHITE_KING, c.WHITE_BISHOP, c.WHITE_KNIGHT, c.WHITE_ROOK
  ];
  const lastRank = [
    c.BLACK_ROOK, c.BLACK_KNIGHT, c.BLACK_BISHOP, c.BLACK_QUEEN,
    c.BLACK_KING, c.BLACK_BISHOP, c.BLACK_KNIGHT, c.BLACK_ROOK
  ];
  let square, index;
  for (square = c.A1, index = 0; square <= c.H1; square++, index++) {
    position.getPiece(square).should.equal(firstRank[index]);
  }
  for (square = c.A2; square <= c.H2; square++) {
    position.getPiece(square).should.equal(c.WHITE_PAWN);
  }
  for (square = c.A3; square <= c.H6; square++) {
    position.getPiece(square).should.equal(c.EMPTY);
  }
  for (square = c.A7; square <= c.H7; square++) {
    position.getPiece(square).should.equal(c.BLACK_PAWN);
  }
  for (square = c.A8, index = 0; square <= c.H8; square++, index++) {
    position.getPiece(square).should.equal(lastRank[index]);
  }
  position.isWhiteToMove().should.be.true;
  position.getEnPassant().should.equal(c.NO_EN_PASSANT);
  position.getCastle().should.equal(c.CASTLE_KQkq);
}

module.exports = describe('class', () => {
  let position;
  beforeEach(() => {
    position = new c.Position();
  });
  it('new', () => {
    positionIsLikeNew(position);
  });
  it('clear', () => {
    position.clear();
    let square, index;
    for (square = c.A1; square <= c.H8; square++) {
      position.getPiece(square).should.equal(c.EMPTY);
    }
    position.isWhiteToMove().should.be.true;
    position.getEnPassant().should.equal(c.NO_EN_PASSANT);
    position.getCastle().should.equal(c.CASTLE_NONE);
  });
  it('reset', () => {
    position.clear().reset();
    positionIsLikeNew(position);
  });
  it('copy', () => {
    position2 = new c.Position()
      .clear()
      .setPiece(c.E4, c.WHITE_QUEEN)
      .setPiece(c.D5, c.BLACK_KNIGHT)
      .setBlackToMove()
      .setEnPassant(c.FILE_B)
      .setCastle(c.CASTLE_Qq);
    position.copy(position2);
    position.getPiece(c.E4).should.equal(c.WHITE_QUEEN);
    position.getPiece(c.D5).should.equal(c.BLACK_KNIGHT);
    position.isWhiteToMove.should.equal.false;
    position.getEnPassant().should.equal(c.FILE_B);
    position.getCastle().should.equal(c.CASTLE_Qq);
  });
  it('setPiece', () => {
    position.clear().setPiece(c.A1, c.WHITE_KING);
    position.getPiece(c.A1).should.equal(c.WHITE_KING);
  });
  it('set(White|Black)ToMove', () => {
    position.setBlackToMove();
    position.isWhiteToMove().should.be.false;
    position.setWhiteToMove();
    position.isWhiteToMove().should.be.true;
  });
  it('changeTurns', () => {
    position.changeTurns();
    position.isWhiteToMove().should.be.false;
    position.changeTurns();
    position.isWhiteToMove().should.be.true;
  });
  it('setEnPassant', () => {
    // en passant doesn't really make sense here, but it can be set
    position.setEnPassant(c.FILE_A);
    position.getEnPassant().should.equal(c.FILE_A);
    // you can set it by passing a square or a file
    position.setEnPassant(c.B3);
    position.getEnPassant().should.equal(c.FILE_B);
  });
  it('clearEnPassant', () => {
    // setEnPassant can only set it to a FILE. it can't set it to NO_EN_PASSANT...
    position.setEnPassant(c.NO_EN_PASSANT);
    position.getEnPassant().should.equal(c.FILE_H); // not NO_EN_PASSANT
    // what you should use instead is clearEnPassant
    position.clearEnPassant();
    position.getEnPassant().should.equal(c.NO_EN_PASSANT);
  });
  it('setCastle', () => {
    // castle doesn't really make sense here, but it can be set
    position.setCastle(c.CASTLE_Kq);
    position.getCastle().should.equal(c.CASTLE_Kq);
  });
});
