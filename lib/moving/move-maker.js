const c = require('../primative');

const castleMask = new Array(c.NUMBER_OF_SQUARES).fill(0);
castleMask[c.A1] = c.CASTLE_Q;
castleMask[c.E1] = c.CASTLE_KQ;
castleMask[c.H1] = c.CASTLE_K;
castleMask[c.A8] = c.CASTLE_q;
castleMask[c.E8] = c.CASTLE_kq;
castleMask[c.H8] = c.CASTLE_k;

class MoveMaker {
  constructor(position) {
    this.position = position;
    this.undoStack = [];
  }
  setPiece(square, piece) {
    const currentPiece = this.position.getPiece(square);
    this.position.setPiece(square, piece);
    this.undoStack.push(() => {
      this.position.setPiece(square, currentPiece);
    });
  }
  movePiece(from, to) {
    const fromPiece = this.position.getPiece(from);
    const toPiece = this.position.getPiece(to);
    this.position.setPiece(from, c.EMPTY);
    this.position.setPiece(to, fromPiece);
    this.undoStack.push(() => {
      this.position.setPiece(from, fromPiece);
      this.position.setPiece(to, toPiece);
    });
  }
  setEnPassant(to) {
    this.position.setEnPassant(to);
    this.undoStack.push(() => {
      this.position.clearEnPassant();
    });
  }
  clearEnPassant() {
    const enPassant = this.position.getEnPassant();
    if (enPassant !== c.NO_EN_PASSANT) {
      this.position.clearEnPassant();
      this.undoStack.push(() => {
        this.position.setEnPassant(enPassant);
      });
    }
  }
  updateCastle(from, to) {
    const castle = this.position.getCastle();
    if (castle & (castleMask[from] | castleMask[to])) {
      this.position.setCastle(castle & ~(castleMask[from] | castleMask[to]));
      this.undoStack.push(() => {
        this.position.setCastle(castle);
      });
    }
  }
  move(move) {
    const moveType = c.moveType(move);
    const from = c.moveFrom(move);
    const to = c.moveTo(move);

    this.undoStack.push(null);
    this.clearEnPassant();
    switch (moveType) {
      case c.CASTLE_KINGSIDE:
        this.movePiece(from + 3, from + 1);
        break;
      case c.CASTLE_QUEENSIDE:
        this.movePiece(from - 4, from - 1);
        break;
      case c.EN_PASSANT_POSSIBLE:
        this.setEnPassant(to);
        break;
      case c.EN_PASSANT_CAPTURE:
        const square = c.makeSquare(c.squareFile(to), c.squareRank(from));
        this.setPiece(square, c.EMPTY);
        break;
      case c.PROMOTION:
        this.setPiece(from, c.movePromotesTo(move));
        break;
    }
    this.movePiece(from, to);
    this.updateCastle(from, to);
    this.position.changeTurns();
  }
  undo() {
    let undo;
    while (undo = this.undoStack.pop()) {
      undo();
    }
    this.position.changeTurns();
  }
}

module.exports = {
  MoveMaker
};
