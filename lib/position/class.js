const c = require('../primative');

const STARTING_PIECES = [
  c.WHITE_ROOK, c.WHITE_KNIGHT, c.WHITE_BISHOP, c.WHITE_QUEEN,
  c.WHITE_KING, c.WHITE_BISHOP, c.WHITE_KNIGHT, c.WHITE_ROOK,
  ...(new Array(8).fill(c.WHITE_PAWN)),
  ...(new Array(32).fill(c.EMPTY)),
  ...(new Array(8).fill(c.BLACK_PAWN)),
  c.BLACK_ROOK, c.BLACK_KNIGHT, c.BLACK_BISHOP, c.BLACK_QUEEN,
  c.BLACK_KING, c.BLACK_BISHOP, c.BLACK_KNIGHT, c.BLACK_ROOK
];

class Position {
  constructor() {
    this.pieces = STARTING_PIECES.slice();
    this.whiteToMove = true;
    this.enPassant = c.NO_EN_PASSANT;
    this.castle = c.CASTLE_KQkq;
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
    this.enPassant = c.NO_EN_PASSANT;
  }
  getCastle() {
    return this.castle;
  }
  setCastle(value) {
    this.castle = value;
  }
  copy(position) {
    for (let square = 0; square < c.NUMBER_OF_SQUARES; square++) {
      this.pieces[square] = position.pieces[square];
    }
    this.whiteToMove = position.whiteToMove;
    this.enPassant = position.enPassant;
    this.castle = position.castle;
  }
  clear() {
    this.pieces.fill(c.EMPTY);
    this.whiteToMove = true;
    this.enPassant = c.NO_EN_PASSANT;
    this.castle = c.CASTLE_NONE;
  }
  reset() {
    for (let square = 0; square < c.NUMBER_OF_SQUARES; square++) {
      this.pieces[square] = STARTING_PIECES[square];
    }
    this.whiteToMove = true;
    this.enPassant = c.NO_EN_PASSANT;
    this.castle = c.CASTLE_KQkq;
  }
}

module.exports = {
  Position
};
