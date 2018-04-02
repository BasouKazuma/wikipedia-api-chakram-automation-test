const BaseAPI = require('../api/BaseAPI')

class Login extends BaseAPI {

  constructor (username, password, domain, token) {
    super()
    this.endpoint = ""
    this.queryString = {
      action: "login",
      format: "json"
    }
    this.parameters = {
      lgname: username,
      lgpassword: password,
      lgdomain: domain,
      lgtoken: token
    }
    this.options = {}
  }
  
}

module.exports = Login
