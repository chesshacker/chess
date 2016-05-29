const t = require('./type');

const STARTING_PIECES = [
  t.WHITE_ROOK, t.WHITE_KNIGHT, t.WHITE_BISHOP, t.WHITE_QUEEN,
  t.WHITE_KING, t.WHITE_BISHOP, t.WHITE_KNIGHT, t.WHITE_ROOK,
  ...(new Array(8).fill(t.WHITE_PAWN)),
  ...(new Array(32).fill(t.EMPTY)),
  ...(new Array(8).fill(t.BLACK_PAWN)),
  t.BLACK_ROOK, t.BLACK_KNIGHT, t.BLACK_BISHOP, t.BLACK_QUEEN,
  t.BLACK_KING, t.BLACK_BISHOP, t.BLACK_KNIGHT, t.BLACK_ROOK
];

class Position {
  constructor() {
    this.pieces = STARTING_PIECES.slice();
    this.whiteToMove = true;
    this.enPassant = t.NO_EN_PASSANT;
    this.castle = t.CASTLE_KQkq;
  }
  getPiece(square) {
    return this.pieces[square];
  }
  setPiece(square, piece) {
    this.pieces[square] = piece;
  }
  isWhiteToMove() {
    return this.whiteToMove;
  }
  setWhiteToMove() {
    this.whiteToMove = true;
  }
  setBlackToMove() {
    this.whiteToMove = false;
  }
  changeTurns() {
    this.whiteToMove = !this.whiteToMove;
  }
  getEnPassant() {
    return this.enPassant;
  }
  setEnPassant(value) {
    this.enPassant = value & 7; // same as squareFile(value)
  }
  clearEnPassant() {
    this.enPassant = t.NO_EN_PASSANT;
  }
  getCastle() {
    return this.castle;
  }
  setCastle(value) {
    this.castle = value;
  }
  copy(position) {
    for (let square = 0; square < t.NUMBER_OF_SQUARES; square++) {
      this.pieces[square] = position.pieces[square];
    }
    this.whiteToMove = position.whiteToMove;
    this.enPassant = position.enPassant;
    this.castle = position.castle;
  }
  clear() {
    this.pieces.fill(t.EMPTY);
    this.whiteToMove = true;
    this.enPassant = t.NO_EN_PASSANT;
    this.castle = t.CASTLE_NONE;
  }
  reset() {
    for (let square = 0; square < t.NUMBER_OF_SQUARES; square++) {
      this.pieces[square] = STARTING_PIECES[square];
    }
    this.whiteToMove = true;
    this.enPassant = t.NO_EN_PASSANT;
    this.castle = t.CASTLE_KQkq;
  }
}

module.exports = {
  Position
};
