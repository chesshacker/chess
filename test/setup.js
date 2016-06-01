const chai = require('chai');
global.should = chai.should();
global.sinon = require('sinon')
chai.use(require('sinon-chai'));
global.c = require('../lib');
