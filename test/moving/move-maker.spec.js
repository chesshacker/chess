require('../setup');

// this is a short contrived game that has captures, en-passant, promotion and castling...
// 1.e4 f5 2.exf5 g5 3.fxg6 Bg7 4.gxh7 Nc6 5.hxg8=R+ Rxg8 6.Bc4 d5 7.Nf3 Rb8 8.O-O *
const FENS = [
  'rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq -',       // 1.e4
  'rnbqkbnr/pppppppp/8/8/4P3/8/PPPP1PPP/RNBQKBNR b KQkq -',     //   f5
  'rnbqkbnr/ppppp1pp/8/5p2/4P3/8/PPPP1PPP/RNBQKBNR w KQkq -',   // 2.exf5
  'rnbqkbnr/ppppp1pp/8/5P2/8/8/PPPP1PPP/RNBQKBNR b KQkq -',     //   g5
  'rnbqkbnr/ppppp2p/8/5Pp1/8/8/PPPP1PPP/RNBQKBNR w KQkq g6',    // 3.fxg6
  'rnbqkbnr/ppppp2p/6P1/8/8/8/PPPP1PPP/RNBQKBNR b KQkq -',      //   Bg7
  'rnbqk1nr/ppppp1bp/6P1/8/8/8/PPPP1PPP/RNBQKBNR w KQkq -',     // 4.gxh7
  'rnbqk1nr/ppppp1bP/8/8/8/8/PPPP1PPP/RNBQKBNR b KQkq -',       //   Nc6
  'r1bqk1nr/ppppp1bP/2n5/8/8/8/PPPP1PPP/RNBQKBNR w KQkq -',     // 5.hxg8=R+
  'r1bqk1Rr/ppppp1b1/2n5/8/8/8/PPPP1PPP/RNBQKBNR b KQkq -',     //   Rxg8
  'r1bqk1r1/ppppp1b1/2n5/8/8/8/PPPP1PPP/RNBQKBNR w KQq -',      // 6.Bc4
  'r1bqk1r1/ppppp1b1/2n5/8/2B5/8/PPPP1PPP/RNBQK1NR b KQq -',    //   d5
  'r1bqk1r1/ppp1p1b1/2n5/3p4/2B5/8/PPPP1PPP/RNBQK1NR w KQq -',  // 7.Nf3
  'r1bqk1r1/ppp1p1b1/2n5/3p4/2B5/5N2/PPPP1PPP/RNBQK2R b KQq -', //   Rb8
  '1rbqk1r1/ppp1p1b1/2n5/3p4/2B5/5N2/PPPP1PPP/RNBQK2R w KQ -',  // 8.O-O
  '1rbqk1r1/ppp1p1b1/2n5/3p4/2B5/5N2/PPPP1PPP/RNBQ1RK1 b - -'
];
const MOVES = [
  c.makeMove(c.E2, c.E4),                        // 1.e4
  c.makeMove(c.F7, c.F5),                        //   f5
  c.makeMove(c.E4, c.F5),                        // 2.exf5
  c.makeMoveEnPassantPossible(c.G7, c.G5),       //   g5
  c.makeMoveEnPassantCapture(c.F5, c.G6),        // 3.fxg6
  c.makeMove(c.F8, c.G7),                        //   Bg7
  c.makeMove(c.G6, c.H7),                        // 4.gxh7
  c.makeMove(c.B8, c.C6),                        //   Nc6
  c.makeMovePromotion(c.H7, c.G8, c.WHITE_ROOK), // 5.hxg8=R+
  c.makeMove(c.H8, c.G8),                        //   Rxg8
  c.makeMove(c.F1, c.C4),                        // 6.Bc4
  c.makeMove(c.D7, c.D5),                        //   d5
  c.makeMove(c.G1, c.F3),                        // 7.Nf3
  c.makeMove(c.A8, c.B8),                        //   Rb8
  c.makeMoveCastleKingside(c.E1)                 // 8.O-O
];

module.exports = describe('MoveMaker', () => {
  let position;
  let moveMaker;
  function testMove(index) {
    return () => {
      position = new c.Position();
      moveMaker = new c.MoveMaker(position);
      position.fromFen(FENS[index]);
      moveMaker.move(MOVES[index]);
      position.toFen().should.equal(FENS[index+1]);
      // moveMaker.undo();
      // position.toFen().should.equal(FENS[index]);
    };
  }
  it('normal move without capture by white', testMove(0));
  it('normal move without capture by black', testMove(1));
  it('enPassant possible move', testMove(3));
  it('enPassant capture', testMove(4));
  it('promotion', testMove(8));
  it('castle', testMove(14));
});
