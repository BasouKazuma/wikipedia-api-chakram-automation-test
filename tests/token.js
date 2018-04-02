const Token = require('../api/Token')
const chakram = require('chakram')
const config = require('config')

expect = chakram.expect

describe("Mobile - Login Token", function() {
    it("should be properly formatted @mobile @full-suite", function () {
        let token = new Token("login")
        return token.getRequest()
        .then(function(response) {
            expect(response).to.have.status(200)
            expect(response.body.query.tokens.logintoken.length).to.be.above(0)
        })
    })
})
