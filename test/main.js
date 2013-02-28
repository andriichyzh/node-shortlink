var should = require("should");

var shortlink = require("../lib/shortlink");

describe('shortlink', function () {

    describe('module', function () {

        it('should have "generate" method', function () {
            shortlink.should.have.property('generate');
            shortlink.generate.should.be.an.instanceOf(Function);
        });


        it('should have "generate" method', function () {
            shortlink.should.have.property('decode');
            shortlink.generate.should.be.an.instanceOf(Function);
        });


        it('should have "generate" method', function () {
            shortlink.should.have.property('encode');
            shortlink.generate.should.be.an.instanceOf(Function);
        });

    });

    describe('#generate method', function () {

        it('should return correct type value (with no set length)', function () {
            var result = shortlink.generate();
            result.should.be.a('string');
            result.should.have.length(5);
        });

        it('should return correct type value (with set length 10)', function () {
            var result = shortlink.generate(10);
            result.should.be.a('string');
            result.should.have.length(10);
        });

    });

    describe('#encode method', function () {

        it('should return correct value', function () {
            var str = shortlink.encode(1234567890);
            str.should.be.a('string');
            str.should.equal('2T6u2h');
        });

        it('should return correct value (example from flickr.com)', function () {
            var str = shortlink.encode(8515010570);
            str.should.be.a('string');
            str.should.equal('dYrDZ5');
        });

    });

    describe('#decode method', function () {

        it('should return correct value', function () {
            var num = shortlink.decode('2T6u2h');
            num.should.be.a('number');
            num.should.equal(1234567890);
        });

        it('should return correct value (example from flickr.com)', function () {
            var num = shortlink.decode('dYrDZ5');
            num.should.be.a('number');
            num.should.equal(8515010570);
        });

    });

});
