const { Position } = require('./class');
const c = require('../primative');

const charCode0 = '0'.charCodeAt(0);
const charCode1 = '1'.charCodeAt(0);
const charCode8 = '8'.charCodeAt(0);

function errorInPart(partNumber, message, string, index) {
  const pointer = index === undefined ? '' : `\n${Array(index+1).join(' ')}^`;
  const longMessage = `Could not parse part ${partNumber} of FEN: ${message}\n${string}${pointer}`;
  return new Error(longMessage);
}

function part1(position, string) {
  let index = 0;
  for (let rank = c.LAST_RANK; rank >= c.RANK_1; rank--) {
    let file = c.FILE_A;
    while (file < c.NUMBER_OF_FILES) {
      let piece = c.charToPiece(string.charAt(index));
      let code = string.charCodeAt(index);
      if (piece) {
        position.setPiece(c.makeSquare(file, rank), piece);
        file++;
      } else if (code >= charCode1 && code <= charCode8) {
        file += code - charCode0;
      } else {
        throw errorInPart(1, 'expected piece or number', string, index);
      }
      index++;
    }
    if (rank > c.RANK_1) {
      if (string.charAt(index) != '/') {
        throw errorInPart(1, 'expected /', string, index);
      }
      index++;
    }
  }
  if (index != string.length) {
    throw errorInPart(1, 'unexpected character', string, index);
  }
}
function part2(position, string) {
  switch (string.charAt(0)) {
    case 'w':
      // nothing to do (default is white to move)
      break;
    case 'b':
      position.setBlackToMove();
      break;
    default:
      throw errorInPart(2, 'expected w or b', string);
  }
  if (string.length > 1) {
    throw errorInPart(2, 'unexpected character', string, 1);
  }
}

function part3(position, string) {
  if (string === '-') {
    return; // nothing to do (default is CASTLE_NONE)
  }
  let index;
  function verify(piece, square) {
    if (position.getPiece(square) != piece) {
      const pieceString = c.pieceToChar(piece);
      const squareString = c.squareToString(square).toUpperCase();
      const message = `expected ${pieceString} on ${squareString}`;
      throw errorInPart(3, message, string, index);
    }
  }
  let newCastle = c.CASTLE_NONE;
  for (index = 0; index < string.length; index++) {
    switch (string.charAt(index)) {
      case 'K':
        verify(c.WHITE_KING, c.E1);
        verify(c.WHITE_ROOK, c.H1);
        newCastle |= c.CASTLE_K;
        break;
      case 'Q':
        verify(c.WHITE_KING, c.E1);
        verify(c.WHITE_ROOK, c.A1);
        newCastle |= c.CASTLE_Q;
        break;
      case 'k':
        verify(c.BLACK_KING, c.E8);
        verify(c.BLACK_ROOK, c.H8);
        newCastle |= c.CASTLE_k;
        break;
      case 'q':
        verify(c.BLACK_KING, c.E8);
        verify(c.BLACK_ROOK, c.A8);
        newCastle |= c.CASTLE_q;
        break;
      default:
        throw errorInPart(3, 'unexpected character', string, index);
    }
  }
  position.setCastle(newCastle);
}

function part4(position, string) {
  if (string === '-') {
    return; // nothing to do (default is NO_EN_PASSANT)
  }
  if (string.match(/^[a-h][36]$/)) {
    position.setEnPassant(c.stringToSquare(string));
  } else {
    throw errorInPart(4, 'invalid target square for en passant', string);
  }
}

Position.prototype.fromFen = function(fen) {
  const parts = fen.trim().split(/\s+/);
  if (parts.length < 2) {
    throw new Error('Could not parse FEN: must define piece placement and active color');
  }
  this.clear();
  part1(this, parts.shift());
  part2(this, parts.shift());
  if (parts.length) {
    part3(this, parts.shift());
  }
  if (parts.length) {
    part4(this, parts.shift());
  }
  // ignoring parts 5 and 6 if provided
  return this;
};

module.exports = {
  part1,
  part2,
  part3,
  part4
};
