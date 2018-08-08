var expect    = require("chai").expect;
var request = require("request");

describe("User General Login", function() {

	var url = "http://localhost:3000/";

	describe("Login: Wrong Username", function() {
		var reqOptions = {  
		    url: url+'signin',
		    method: 'POST',
		    headers: {
		        'Accept': 'application/json',
		        'Accept-Charset': 'utf-8'
		    },
		    form: {
		    	'username': 'abe',
		    	'password': '123456'
		    }
		};
		it("returns status 401", function(done) {
	    	request(reqOptions, function(error, response, body) {
		        expect(response.statusCode).to.equal(401);
		        done();
		    });
	    });
		it("User no exist", function(done) {
	    	request(reqOptions, function(error, response, body) {
	    		var res = JSON.parse(body);
		        expect(res.msg).to.equal('Authentication failed. User not found.');
		        done();
		    });
	    });
	});


	describe("Login: Wrong password", function() {
		var reqOptions = {  
		    url: url+'signin',
		    method: 'POST',
		    headers: {
		        'Accept': 'application/json',
		        'Accept-Charset': 'utf-8'
		    },
		    form: {
		    	'username': 'abel',
		    	'password': '456797'
		    }
		};
		it("returns status 401", function(done) {
	    	request(reqOptions, function(error, response, body) {
		        expect(response.statusCode).to.equal(401);
		        done();
		    });
	    });
		it("Wrong Password", function(done) {
	    	request(reqOptions, function(error, response, body) {
	    		var res = JSON.parse(body);
		        expect(res.msg).to.equal('Authentication failed. Wrong password.');
		        done();
		    });
	    });
	});


	describe("Login: Success", function() {
		var reqOptions = {  
		    url: url+'signin',
		    method: 'POST',
		    headers: {
		        'Accept': 'application/json',
		        'Accept-Charset': 'utf-8'
		    },
		    form: {
		    	'username': 'abel',
		    	'password': '123456'
		    }
		};
		it("returns status 200", function(done) {
	    	request(reqOptions, function(error, response, body) {
		        expect(response.statusCode).to.equal(200);
		        done();
		    });
	    });
		it("Current JWT", function(done) {
	    	request(reqOptions, function(error, response, body) {
	    		var res = JSON.parse(body);
		        //console.log(res);
		        done();
		    });
	    });
	});
 

});