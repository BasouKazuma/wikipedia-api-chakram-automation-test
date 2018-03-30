const MobileView = require('../api/MobileView')
const chakram = require('chakram')
const config = require('config')

expect = chakram.expect

describe("Mobile - Main Page", function() {
    it("should be properly formatted @mobile @full-suite", function () {
        let pageName = "Main Page"
        let mobileView = new MobileView(pageName.replace(" ", "_"), 0)
        return mobileView.getRequest()
        .then(function(response) {
            expect(response).to.have.status(200)
            expect(response.body.mobileview.normalizedtitle).to.be.eql(pageName)
            expect(response.body.mobileview.sections.length).to.be.above(0)
            for (let i=0; i < response.body.mobileview.sections.length; i++) {
                expect(response.body.mobileview.sections[i].id).to.be.eql(i)
                if(response.body.mobileview.sections[i].hasOwnProperty('text')) {
                    expect(response.body.mobileview.sections[i].text.length).to.be.above(0)
                } else {
                    expect(response.body.mobileview.sections[i].toclevel).to.be.above(0)
                    expect(response.body.mobileview.sections[i].line.length).to.be.above(0)
                }
            }
        })
    })
})
