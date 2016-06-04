const c = require('./enum');

function makeMove(from, to) {
  return (from << 6) | to;
}

function makeMoveCastleKingside(from) {
  return (c.CASTLE_KINGSIDE << 12) | (from << 6) | (from + 2 * c.D_E);
}

function makeMoveCastleQueenside(from) {
  return (c.CASTLE_QUEENSIDE << 12) | (from << 6) | (from + 2 * c.D_W);
}

function makeMoveEnPassantPossible(from, to) {
  return (c.EN_PASSANT_POSSIBLE << 12) | (from << 6) | to;
}

function makeMoveEnPassantCapture(from, to) {
  return (c.EN_PASSANT_CAPTURE << 12) | (from << 6) | to;
}

const PROMOTE_BITS_ENCODE = [
  0,      // EMPTY
  0,      // WHITE_PAWN
  0,      // WHITE_KING
  0x8000, // WHITE_KNIGHT
  0x9000, // WHITE_QUEEN
  0xA000, // WHITE_ROOK
  0xB000, // WHITE_BISHOP
  0,      // reserved
  0,      // reserved
  0,      // BLACK_PAWN
  0,      // BLACK_KING
  0xC000, // BLACK_KNIGHT
  0xD000, // BLACK_QUEEN
  0xE000, // BLACK_ROOK
  0xF000, // BLACK_BISHOP
  0,      // reserved
  0,      // reserved
];

const PROMOTE_BITS_DECODE = [
  ...new Array(8).fill(0),
  c.WHITE_KNIGHT,    // 8
  c.WHITE_QUEEN,     // 9
  c.WHITE_ROOK,      // A
  c.WHITE_BISHOP,    // B
  c.BLACK_KNIGHT,    // C
  c.BLACK_QUEEN,     // D
  c.BLACK_ROOK,      // E
  c.BLACK_BISHOP,    // F
];

function makeMovePromotion(from, to, piece) {
  return PROMOTE_BITS_ENCODE[piece] | (from << 6) | to;
}

function moveFrom(move) {
  return (move & 07700) >> 6;
}

function moveTo(move) {
  return move & 077;
}

const PROMOTION_BIT = 0x8000;
const MOVE_TYPE_MASK = 0xF000;
const MOVE_TYPE_SHIFT = 12;

function moveType(move) {
  if (move & PROMOTION_BIT)
    return c.PROMOTION;
  return (move & MOVE_TYPE_MASK) >> MOVE_TYPE_SHIFT;
}

function movePromotesTo(move) {
  return PROMOTE_BITS_DECODE[(move & MOVE_TYPE_MASK) >> MOVE_TYPE_SHIFT];
}

module.exports = {
  makeMove,
  makeMoveCastleKingside,
  makeMoveCastleQueenside,
  makeMoveEnPassantPossible,
  makeMoveEnPassantCapture,
  makeMovePromotion,
  moveFrom,
  moveTo,
  moveType,
  movePromotesTo
};
