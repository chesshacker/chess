describe('primative', () => {
  require('./primative/square.spec'),
  require('./primative/piece.spec'),
  require('./primative/move.spec')
});
describe('position', () => {
  require('./position/class.spec'),
  require('./position/from-fen.spec'),
  require('./position/to-fen.spec'),
  require('./position/to-string.spec')
});
describe('moving', () => {
  require('./moving/move-maker.spec')
});
