const { Position } = require('./class');
const c = require('../primative');

Position.prototype.valueOf =
Position.prototype.toFen = function() {
  let result = '';
  const isWhiteToMove = this.isWhiteToMove();
  const castle = this.getCastle();
  const enPassant = this.getEnPassant();
  for (let rank = c.RANK_8; rank >= c.RANK_1; rank--) {
    for (let squaresOutput, file = c.FILE_A; file <= c.FILE_H; file += squaresOutput) {
      squaresOutput = 1;
      const square = c.makeSquare(file, rank);
      const piece = this.getPiece(square);
      if (piece != c.EMPTY) {
        result += c.pieceToChar(piece);
      } else {
        while (
          file + squaresOutput <= c.FILE_H &&
          this.getPiece(square + squaresOutput) === c.EMPTY
        ) {
          squaresOutput++;
        }
        result += squaresOutput;
      }
    }
    if (rank != c.RANK_1) {
      result += '/';
    }
  }
  result += isWhiteToMove ? ' w ' : ' b ';
  if (castle === c.CASTLE_NONE) {
    result += '-'
  } else {
    if (castle & c.CASTLE_K) {
      result += 'K';
    }
    if (castle & c.CASTLE_Q) {
      result += 'Q';
    }
    if (castle & c.CASTLE_k) {
      result += 'k';
    }
    if (castle & c.CASTLE_q) {
      result += 'q';
    }
  }
  if (enPassant === c.NO_EN_PASSANT) {
    result += ' -'
  } else {
    result += ` ${c.fileToChar(enPassant)}${isWhiteToMove ? '6' : '3'}`;
  }
  return result;
};
