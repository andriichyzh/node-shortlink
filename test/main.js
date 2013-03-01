var should = require("should");

var shortlink = require("../lib/shortlink");

describe('shortlink', function () {

    describe('module API', function () {

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
            var random = shortlink.generate();
            random.should.be.a('string');
            random.should.have.length(5);
        });

        it('should return correct type value (with set length 1)', function () {
            var random = shortlink.generate(1);
            random.should.be.a('string');
            random.should.have.length(1);
        });

        it('should return correct type value (with set length 12)', function () {
            var random = shortlink.generate(12);
            random.should.be.a('string');
            random.should.have.length(12);
        });

    });

    describe('#encode method', function () {

        it('should return correct value', function () {
            var str = shortlink.encode(1234567890);
            str.should.be.a('string');
            str.should.equal('2T6u2h');
        });

        it('should return correct value (set real ID from flickr.com)', function () {
            var str = shortlink.encode(8515010570);
            str.should.be.a('string');
            str.should.equal('dYrDZ5');
        });

        it('should return correct value (set 1 digit number)', function () {
            var str = shortlink.encode(7);
            str.should.be.a('string');
            str.should.equal('8');
        });

        it('should return correct value (set 2 digit number)', function () {
            var str = shortlink.encode(77);
            str.should.be.a('string');
            str.should.equal('2k');
        });

        it('should return correct value (set max integer 64 bit)', function () {
            var str = shortlink.encode(9007199254740992);
            str.should.be.a('string');
            str.should.equal('2dknRmrjUG');
        });

    });

    describe('#decode method', function () {

        it('should return correct value', function () {
            var num = shortlink.decode('2T6u2h');
            num.should.be.a('number');
            num.should.equal(1234567890);
        });

        it('should return correct value (set real shortlink ID from flickr.com)', function () {
            var num = shortlink.decode('dYrDZ5');
            num.should.be.a('number');
            num.should.equal(8515010570);
        });

        it('should return correct value (set string with 1 character)', function () {
            var str = shortlink.decode('8');
            str.should.be.a('number');
            str.should.equal(7);
        });

        it('should return correct value (set string with 2 characters)', function () {
            var str = shortlink.decode('2k');
            str.should.be.a('number');
            str.should.equal(77);
        });

        it('should return correct value (expect get max integer 64 bit)', function () {
            var str = shortlink.decode('2dknRmrjUG');
            str.should.be.a('number');
            str.should.equal(9007199254740992);
        });

    });

    describe('module', function () {

        it('should no have integrations errors on generate/encode/decode operations', function () {
            var isError = false;
            for (var i = 0; i < 5000; i++) {
                var randomStr = shortlink.generate(7),
                    randomNum = shortlink.decode(randomStr),
                    str = shortlink.encode(randomNum),
                    num = shortlink.decode(str);

                if(randomStr !== str || randomNum !== num) {
                    isError = true;
                }
            }

            isError.should.be.false;

        });

    });


});
