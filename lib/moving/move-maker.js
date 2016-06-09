const c = require('../primative');

class MoveMaker {
  constructor(position) {
    this.position = position;
  }
  move() {
    this.position.setPiece(c.E4, c.WHITE_PAWN);
    this.position.setPiece(c.E2, c.EMPTY);
    this.position.changeTurns();
  }
  undo() {
    this.position.setPiece(c.E4, c.EMPTY);
    this.position.setPiece(c.E2, c.WHITE_PAWN);
    this.position.changeTurns();
  }
}

module.exports = {
  MoveMaker
};
