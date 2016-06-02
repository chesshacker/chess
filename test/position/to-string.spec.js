require('../setup');

module.exports = describe('to-string', () => {
  let position;
  beforeEach(() => {
    position = new c.Position();
  });
  it('initial position', () => {
    const expectedValue = [
      ' 8  r n b q k b n r',
      ' 7  p p p p p p p p',
      ' 6  - - - - - - - -',
      ' 5  - - - - - - - -',
      ' 4  - - - - - - - -',
      ' 3  - - - - - - - -',
      ' 2  P P P P P P P P',
      ' 1  R N B Q K B N R',
      '    a b c d e f g h',
      'White KQkq -'
    ].join('\n');
    position.toString().should.equal(expectedValue);
  });
  it('cleared position', () => {
    position.clear();
    const expectedValue = [
      ' 8  - - - - - - - -',
      ' 7  - - - - - - - -',
      ' 6  - - - - - - - -',
      ' 5  - - - - - - - -',
      ' 4  - - - - - - - -',
      ' 3  - - - - - - - -',
      ' 2  - - - - - - - -',
      ' 1  - - - - - - - -',
      '    a b c d e f g h',
      'White - -'
    ].join('\n');
    position.toString().should.equal(expectedValue);
  });
  it('test position with black to move and castling', () => {
    position.fromFen('rn2k2r/p3R1p1/b1p5/5pBp/1p5P/1BN5/PPP2PP1/3R2K1 b kq -');
    const expectedValue = [
      ' 8  r n - - k - - r',
      ' 7  p - - - R - p -',
      ' 6  b - p - - - - -',
      ' 5  - - - - - p B p',
      ' 4  - p - - - - - P',
      ' 3  - B N - - - - -',
      ' 2  P P P - - P P -',
      ' 1  - - - R - - K -',
      '    a b c d e f g h',
      'Black kq -'
    ].join('\n');
    position.toString().should.equal(expectedValue);
  });
  it('test position with en passant', () => {
    position.fromFen('rnbqkbnr/ppppppp1/8/P7/6Pp/8/1PPPPP1P/RNBQKBNR b KQkq g3');
    const expectedValue = [
      ' 8  r n b q k b n r',
      ' 7  p p p p p p p -',
      ' 6  - - - - - - - -',
      ' 5  P - - - - - - -',
      ' 4  - - - - - - P p',
      ' 3  - - - - - - - -',
      ' 2  - P P P P P - P',
      ' 1  R N B Q K B N R',
      '    a b c d e f g h',
      'Black KQkq g3'
    ].join('\n');
    position.toString().should.equal(expectedValue);
  });
});
