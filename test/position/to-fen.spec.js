require('../setup');

module.exports = describe('to-fen', () => {
  let position;
  function testFen(fen) {
    return () => {
      position.fromFen(fen);
      position.toFen().should.equal(fen);
    }
  }
  beforeEach(() => {
    position = new c.Position()
  });
  it('empty board',
    testFen('8/8/8/8/8/8/8/8 w - -')
  );
  it('initial position',
    testFen('rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq -')
  );
  it('more complicated position',
    testFen('r3k2r/p1ppqpb1/bn2pnp1/3PN3/1p2P3/2N2Q1p/PPPBBPPP/R3K2R w KQkq -')
  );
  it('no castling',
    testFen('8/2p5/3p4/KP5r/1R3p1k/8/4P1P1/8 w - -')
  );
  it('only black can castle',
    testFen('r3k2r/Pppp1ppp/1b3nbN/nP6/BBP1P3/q4N2/Pp1P2PP/R2Q1RK1 w kq -')
  );
  it('en passant white',
    testFen('rnbqkbnr/ppppppp1/8/P7/6Pp/8/1PPPPP1P/RNBQKBNR b KQkq g3')
  );
  it('en passant black',
    testFen('rnbqkbnr/p1ppppp1/8/Pp5p/8/8/1PPPPPPP/RNBQKBNR w KQkq b6')
  );
  it('toFen is also the valueOf', () => {
    (position == 'rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq -').should.be.true;
  });
});
