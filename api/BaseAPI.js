const chakram = require('chakram')
const config = require('config')

class BaseAPI {

  constructor () {
    this.endpoint = ""
    this.queryString = {}
    this.parameters = {}
  }

  generateURL () {
    let url = config.get('base_url') + this.generateQueryString()
    return url
  }

  generateQueryString () {
    let keys = Object.keys(this.queryString)
    let qs = ""
    for (let i = 0; i < keys.length; i++) {
      if (i == 0) {
        qs = qs + '?' + keys[i] + '=' + this.queryString[keys[i]]
      } else {
        qs = qs + '&' + keys[i] + '=' + this.queryString[keys[i]]
      }
    }
    return qs
  }

  getRequest() {
    return chakram.get(this.generateURL())
  }

  postRequest() {
    return chakram.post(this.generateURL(), this.parameters)
  }

}

module.exports = BaseAPI
