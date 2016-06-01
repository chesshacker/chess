require('../setup');
const fromFen = require('../../lib/position/from-fen');

module.exports = describe('from-fen', () => {
  describe('private functions', () => {
    let position;
    describe('part1', () => {
      beforeEach(() => {
        position = { setPiece: sinon.spy() };
        sinon.spy(fromFen, 'part1');
      });
      afterEach(() => {
        fromFen.part1.restore();
      });
      it('empty board', () => {
        fromFen.part1(position, '8/8/8/8/8/8/8/8');
        position.setPiece.callCount.should.equal(0);
      });
      it('several pieces', () => {
        fromFen.part1(position, 'k6q/8/8/8/2pp4/8/R6K/1Q6');
        position.setPiece.getCall(0).should.have.been.calledWith(c.A8, c.BLACK_KING);
        position.setPiece.getCall(1).should.have.been.calledWith(c.H8, c.BLACK_QUEEN);
        position.setPiece.getCall(2).should.have.been.calledWith(c.C4, c.BLACK_PAWN);
        position.setPiece.getCall(3).should.have.been.calledWith(c.D4, c.BLACK_PAWN);
        position.setPiece.getCall(4).should.have.been.calledWith(c.A2, c.WHITE_ROOK);
        position.setPiece.getCall(5).should.have.been.calledWith(c.H2, c.WHITE_KING);
        position.setPiece.getCall(6).should.have.been.calledWith(c.B1, c.WHITE_QUEEN);
        position.setPiece.callCount.should.equal(7);
      });
      it('throws error for expected piece or number', () => {
        const string = '7/8/8/8/8/8/8/8';
        try {
          fromFen.part1(position, string);
        } catch (e) { /* pass */ }
        fromFen.part1.should.have.thrown();
        const expectedMessage = `Could not parse part 1 of FEN: expected piece or number\n${string}\n ^`;
        fromFen.part1.exceptions[0].message.should.equal(expectedMessage);
      });
      it('throws error: expected /', () => {
        const string = '8/88/8/8/8/8/8';
        try {
          fromFen.part1(position, string);
        } catch (e) { /* pass */ }
        fromFen.part1.should.have.thrown();
        const expectedMessage = `Could not parse part 1 of FEN: expected /\n${string}\n   ^`;
        fromFen.part1.exceptions[0].message.should.equal(expectedMessage);
      });
      it('throws error: unexpected character', () => {
        const string = '8/8/8/8/8/8/8/8/';
        try {
          fromFen.part1(position, string);
        } catch (e) { /* pass */ }
        fromFen.part1.should.have.thrown();
        const expectedMessage = `Could not parse part 1 of FEN: unexpected character\n${string}\n               ^`;
        fromFen.part1.exceptions[0].message.should.equal(expectedMessage);
      });
    });
    describe('part2', () => {
      beforeEach(() => {
        position = {
          setBlackToMove: sinon.spy()
        };
        sinon.spy(fromFen, 'part2');
      });
      afterEach(() => {
        fromFen.part2.restore();
      });
      it('white', () => {
        fromFen.part2(position, 'w');
        // does nothing because default is white to move
        position.setBlackToMove.callCount.should.equal(0);
      });
      it('black', () => {
        fromFen.part2(position, 'b');
        position.setBlackToMove.callCount.should.equal(1);
      });
      it('throws error: expected w or b', () => {
        try {
          fromFen.part2(position, 'a');
        } catch (e) { /* pass */ }
        fromFen.part2.should.have.thrown();
        fromFen.part2.exceptions[0].message.should.equal('Could not parse part 2 of FEN: expected w or b\na');
      });
      it('throws error: unexpected character', () => {
        try {
          fromFen.part2(position, 'ww');
        } catch (e) { /* pass */ }
        fromFen.part2.should.have.thrown();
        const expectedMessage = `Could not parse part 2 of FEN: unexpected character\nww\n ^`;
        fromFen.part2.exceptions[0].message.should.equal(expectedMessage);
      });
    });
    describe('part3', () => {
      beforeEach(() => {
        position = {
          setCastle: sinon.spy(),
          getPiece: sinon.stub()
        };
        sinon.spy(fromFen, 'part3');
      });
      afterEach(() => {
        fromFen.part3.restore();
      });
      it('K', () => {
        position.getPiece.withArgs(c.E1).returns(c.WHITE_KING);
        position.getPiece.withArgs(c.H1).returns(c.WHITE_ROOK);
        fromFen.part3(position, 'K');
        position.setCastle.should.be.calledWith(c.CASTLE_K);
      });
      it('KQkq', () => {
        position.getPiece.withArgs(c.A1).returns(c.WHITE_ROOK);
        position.getPiece.withArgs(c.E1).returns(c.WHITE_KING);
        position.getPiece.withArgs(c.H1).returns(c.WHITE_ROOK);
        position.getPiece.withArgs(c.A8).returns(c.BLACK_ROOK);
        position.getPiece.withArgs(c.E8).returns(c.BLACK_KING);
        position.getPiece.withArgs(c.H8).returns(c.BLACK_ROOK);
        fromFen.part3(position, 'KQkq');
        position.setCastle.should.be.calledWith(c.CASTLE_KQkq);
      });
      it('throws error: expected piece on square', () => {
        position.getPiece.withArgs(c.A8).returns(c.EMPTY);
        position.getPiece.withArgs(c.E8).returns(c.BLACK_KING);
        position.getPiece.withArgs(c.H8).returns(c.BLACK_ROOK);
        try {
          fromFen.part3(position, 'kq');
        } catch (e) { /* pass */ }
        fromFen.part3.should.have.thrown();
        fromFen.part3.exceptions[0].message.should.equal('Could not parse part 3 of FEN: expected r on A8\nkq\n ^');
      });
      it('throws error: unexpected character', () => {
        try {
          fromFen.part3(position, 'w');
        } catch (e) { /* pass */ }
        fromFen.part3.should.have.thrown();
        const expectedMessage = `Could not parse part 3 of FEN: unexpected character\nw\n^`;
        fromFen.part3.exceptions[0].message.should.equal(expectedMessage);
      });
    });
    describe('part4', () => {
      beforeEach(() => {
        position = {
          setEnPassant: sinon.spy()
        };
        sinon.spy(fromFen, 'part4');
      });
      afterEach(() => {
        fromFen.part4.restore();
      });
      it('no en passant', () => {
        fromFen.part4(position, '-');
        // does nothing because default is NO_EN_PASSANT
        position.setEnPassant.callCount.should.equal(0);
      });
      it('valid square', () => {
        fromFen.part4(position, 'e6');
        position.setEnPassant.should.have.been.calledWith(c.E6);
      });
      it('throws error: invalid target square', () => {
        try {
          fromFen.part4(position, 'e5');
        } catch (e) { /* pass */ }
        fromFen.part4.should.have.thrown();
        const expectedMessage = `Could not parse part 4 of FEN: invalid target square for en passant\ne5`;
        fromFen.part4.exceptions[0].message.should.equal(expectedMessage);
      });
    });
  });
  describe('public interface', () => {
    let position;
    beforeEach(() => {
      position = new c.Position();
      sinon.spy(position, 'fromFen');
      sinon.spy(position, 'clear');
    });
    afterEach(() => {
      position.fromFen.restore();
      position.clear.restore();
    });
    it('must define at least two parts', () => {
      try {
        position.fromFen('8/8/8/8/8/8/8/8');
      } catch (e) { /* pass */ }
      position.fromFen.should.have.thrown();
      const expectedMessage = 'Could not parse FEN: must define piece placement and active color';
      position.fromFen.exceptions[0].message.should.equal(expectedMessage);
    });
    it('valid two part fen', () => {
      position.fromFen('8/1p6/1k6/8/1K6/8/8/8 b');
      position.clear.callCount.should.equal(1);
      position.getPiece(c.B7).should.equal(c.BLACK_PAWN);
      position.getPiece(c.B6).should.equal(c.BLACK_KING);
      position.getPiece(c.B4).should.equal(c.WHITE_KING);
      position.isWhiteToMove().should.be.false;
    });
  });
});
