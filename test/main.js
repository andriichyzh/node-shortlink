var should = require("should");

var shortlink = require("../lib/shortlink");

describe('shortlink', function () {
    describe('require module', function () {
        it('should have "generateBase52" method', function () {
            shortlink.should.have.property('generateBase52');
            shortlink.generateBase52.should.be.an.instanceOf(Function);
        });

        it('should have "generateBase58" method', function () {
            shortlink.should.have.property('generateBase58');
            shortlink.generateBase58.should.be.an.instanceOf(Function);
        });

        it('should have "generate" method', function () {
            shortlink.should.have.property('generate');
            shortlink.generate.should.be.an.instanceOf(Function);
        });

        it('should have "decodeBase52" method', function () {
            shortlink.should.have.property('decodeBase52');
            shortlink.decodeBase52.should.be.an.instanceOf(Function);
        });

        it('should have "decodeBase58" method', function () {
            shortlink.should.have.property('decodeBase58');
            shortlink.decodeBase58.should.be.an.instanceOf(Function);
        });

        it('should have "encodeBase52" method', function () {
            shortlink.should.have.property('encodeBase52');
            shortlink.encodeBase52.should.be.an.instanceOf(Function);
        });

        it('should have "encodeBase58" method', function () {
            shortlink.should.have.property('encodeBase58');
            shortlink.encodeBase58.should.be.an.instanceOf(Function);
        });

    });

    describe('"generateBase52" method', function () {
        it('should return correct value (with no set length)', function () {
            var result = shortlink.generateBase52();
            result.should.be.a('string');
            result.should.have.length(5);
        });

        it('should return correct value (with set length 10)', function () {
            var result = shortlink.generateBase52(10);
            result.should.be.a('string');
            result.should.have.length(10);
        });

    });
});
