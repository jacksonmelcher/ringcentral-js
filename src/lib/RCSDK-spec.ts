/// <reference path="../typings/tsd.d.ts" />

export import mocha = require('../test/mocha');
var expect = mocha.chai.expect;
var spy = mocha.sinon.spy;
var mock = mocha.mock;
var rcsdk = mocha.rcsdk;

describe('RCSDK', function() {

    describe('production server', function() {

        it('returns info', function(done) {

            this.timeout(10000); // Per SLA should be 3 seconds

            var server = 'https://platform.devtest.ringcentral.com',
                rcsdk = new mocha.RCSDK({server: server, appKey: '', appSecret: ''}),
                platform = rcsdk.getPlatform();

            platform.forceAuthentication();

            platform
                .apiCall({
                    url: ''
                })
                .then(function(ajax) {
                    expect(ajax.data.uri).to.equal(server + '/restapi/v1.0');
                    done();
                })
                .catch(function(e) {
                    done(e);
                });


        });

    });

});
