var expect    = require("chai").expect;
var request = require("request");

describe("User information", function() {
	
	describe("Artur test", function() {
	    it("Check Artur Name", function() {
	    	expect("Artur").to.equal('Artur');
	    	expect("Artur").to.equal('Artur');
	    });
	});

	var url = "http://localhost:3000/august";

    
	describe("August request 200", function() {
		it("returns status 200", function(done) {
	    	request(url, function(error, response, body) {
		        expect(response.statusCode).to.equal(200);
		        done();
		    });
	    });
	});

    
	describe("August controller test", function() {
		it("returns the August name", function(done) {
    		request(url, function(error, response, body) {
		        expect(body).to.equal('August');
		        done();
		    });
	    });
	});

});