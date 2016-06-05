const { Position } = require('./class');
const c = require('../primative');

Position.prototype.toString = function() {
  let result = '';
  const pieceChars = Array.from(c.allSquares())
    .map(this.getPiece.bind(this))
    .map((p) => p ? c.pieceToChar(p) : '-');
  for (rank = c.RANK_8; rank >= c.RANK_1; rank--) {
    result += ` ${c.rankToChar(rank)}  ${pieceChars.slice(rank*8,(rank+1)*8).join(' ')}\n`;
  }
  result += '    a b c d e f g h\n';
  const isWhiteToMove = this.isWhiteToMove();
  result += `${isWhiteToMove?'White':'Black'} `;
  const castle = this.getCastle();
  if (castle === c.CASTLE_NONE) {
    result += '-';
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
  const enPassant = this.getEnPassant();
  if (enPassant === c.NO_EN_PASSANT) {
    result += ' -';
  } else {
    result += ` ${c.fileToChar(enPassant)}${isWhiteToMove?'6':'3'}`;
  }
  return result;
};
