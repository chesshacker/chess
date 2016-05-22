const t = require('./type');

// TODO: experiment with more JavaScripty ways of doing this... maps and objects

const _charToPiece = new Array(256).fill(null);
const _pieceToChar = new Array(t.PIECE_MAX_VALUE + 1).fill(null);

_charToPiece['K'.charCodeAt(0)] = t.WHITE_KING;
_charToPiece['Q'.charCodeAt(0)] = t.WHITE_QUEEN;
_charToPiece['R'.charCodeAt(0)] = t.WHITE_ROOK;
_charToPiece['B'.charCodeAt(0)] = t.WHITE_BISHOP;
_charToPiece['N'.charCodeAt(0)] = t.WHITE_KNIGHT;
_charToPiece['P'.charCodeAt(0)] = t.WHITE_PAWN;
_charToPiece['k'.charCodeAt(0)] = t.BLACK_KING;
_charToPiece['q'.charCodeAt(0)] = t.BLACK_QUEEN;
_charToPiece['r'.charCodeAt(0)] = t.BLACK_ROOK;
_charToPiece['b'.charCodeAt(0)] = t.BLACK_BISHOP;
_charToPiece['n'.charCodeAt(0)] = t.BLACK_KNIGHT;
_charToPiece['p'.charCodeAt(0)] = t.BLACK_PAWN;

_pieceToChar[t.EMPTY] = '-';
_pieceToChar[t.WHITE_KING] = 'K';
_pieceToChar[t.WHITE_QUEEN] = 'Q';
_pieceToChar[t.WHITE_ROOK] = 'R';
_pieceToChar[t.WHITE_BISHOP] = 'B';
_pieceToChar[t.WHITE_KNIGHT] = 'N';
_pieceToChar[t.WHITE_PAWN] = 'P';
_pieceToChar[t.BLACK_KING] = 'k';
_pieceToChar[t.BLACK_QUEEN] = 'q';
_pieceToChar[t.BLACK_ROOK] = 'r';
_pieceToChar[t.BLACK_BISHOP] = 'b';
_pieceToChar[t.BLACK_KNIGHT] = 'n';
_pieceToChar[t.BLACK_PAWN] = 'p';

function pieceColor(piece) {
  return piece & t.COLOR_BIT;
}

function charToPiece(pieceChar) {
  return _charToPiece[pieceChar.charCodeAt(0)];
}

function pieceToChar(piece) {
  if (piece & ~t.PIECE_MASK_VALID_BITS) {
    return null;
  }
  return _pieceToChar[piece];
}

function pieceToWhite(piece) {
  return piece & ~t.COLOR_BIT;
}

function pieceToBlack(piece) {
  return piece == t.EMPTY ? t.EMPTY : (piece | t.COLOR_BIT);
}

function pieceIsPawn(piece) {
  return (piece & t.PIECE_MASK_NON_COLOR_BITS) === t.WHITE_PAWN;
}

module.exports = {
  pieceColor,
  charToPiece,
  pieceToChar,
  pieceToWhite,
  pieceToBlack,
  pieceIsPawn
};
