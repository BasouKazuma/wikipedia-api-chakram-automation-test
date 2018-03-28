var chakram = require('chakram');
var config = require('config');

expect = chakram.expect;

describe("Mobile - Main Page", function() {
    it("should be properly formatted", function () {
        pageName = "Main Page";
        return chakram.get(
            config.get('base_url') 
            + '?action=mobileview'
            + '&page=' + pageName.replace(" ", "_") 
            + '&sections=0'
            + '&format=json'
        )
        .then(function(response) {
            expect(response).to.have.status(200);
            expect(response.body.mobileview.normalizedtitle).to.be.eql(pageName);
            expect(response.body.mobileview.sections.length).to.be.above(0);
            for (var i=0; i < response.body.mobileview.sections.length; i++) {
                expect(response.body.mobileview.sections[i].id).to.be.eql(i);
                if(response.body.mobileview.sections[i].hasOwnProperty('text')) {
                    expect(response.body.mobileview.sections[i].text.length).to.be.above(0);
                } else {
                    expect(response.body.mobileview.sections[i].toclevel).to.be.above(0);
                    expect(response.body.mobileview.sections[i].line.length).to.be.above(0);
                }
            }
        });
    });
});
