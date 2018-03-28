var chakram = require('chakram');
var config = require('config');

expect = chakram.expect;

describe("Parse - Main Page", function() {
    it("should be properly formatted", function () {
    	  pageName = "Main Page";
        return chakram.get(
        	  config.get('base_url')
        	  + '?action=parse'
        	  + '&page=' + pageName.replace(" ", "_")
        	  + '&section=0'
        	  + '&prop=text'
        	  + '&format=json'
        )
        .then(function (response) {
            expect(response).to.have.status(200);
            expect(response.body.parse.title).to.be.eql(pageName);
            expect(response.body.parse.pageid).to.be.above(0);
            expect(response.body.parse.text["*"].length).to.be.above(100);
        });
    });
});
