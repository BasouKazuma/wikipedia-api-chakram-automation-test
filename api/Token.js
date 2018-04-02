const BaseAPI = require('../api/BaseAPI')

class Token extends BaseAPI {

  constructor (type) {
    super()
    this.endpoint = ""
    this.queryString = {
      action: "query",
      meta: "tokens",
      format: "json",
      type: type
    }
    this.parameters = {}
  }
  
}

module.exports = Token
