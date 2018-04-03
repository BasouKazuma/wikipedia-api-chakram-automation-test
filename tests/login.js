const Login = require('../api/Login')
const Token = require('../api/Token')
const chakram = require('chakram')
const config = require('config')

expect = chakram.expect

test_user = require('./test_user.json');

describe("Mobile - Login", function() {
    it("should be properly formatted @broken", function () {
        chakram.setRequestDefaults({jar: true})
        let token = new Token("login")
        return token.getRequest()
        .then(function(tokenResponse) {
            let login = new Login(
                test_user.username,
                test_user.password,
                null,
                tokenResponse.body.query.tokens.logintoken
            )
            return login.postRequest()
        })
        .then(function(response) {
            expect(response).to.have.status(200)
            expect(response.body.warnings).to.be.eql()
        })
    })

    it("should require a token @mobile @full-suite", function () {
        chakram.setRequestDefaults({jar: true})
        let login = new Login(
            test_user.username,
            test_user.password,
            null,
            null
        )
        return login.postRequest()
        .then(function(response) {
            expect(response).to.have.status(200)
            expect(response.body.login.result).to.be.eql("NeedToken")
        })
    })

})
