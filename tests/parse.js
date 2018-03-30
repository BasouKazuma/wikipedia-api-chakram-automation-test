const Parse = require('../api/Parse')
const chakram = require('chakram')
const config = require('config')


expect = chakram.expect

describe("Parse - Main Page", function() {
    it("should be properly formatted @web @full-suite", function () {
        let pageName = "Main Page"
        let parse = new Parse(pageName.replace(" ", "_"), 0, "text")
        return parse.getRequest()
        .then(function (response) {
            expect(response).to.have.status(200)
            expect(response.body.parse.title).to.be.eql(pageName)
            expect(response.body.parse.pageid).to.be.above(0)
            expect(response.body.parse.text["*"].length).to.be.above(100)
        })
    })
})
