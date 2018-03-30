const BaseAPI = require('../api/BaseAPI')

class Parse extends BaseAPI {

  constructor (page, section, prop) {
    super()
    this.endpoint = ""
    this.queryString = {
      action: "parse",
      format: "json",
      page: page,
      section: section,
      prop: prop
    }
    this.parameters = {}
  }
  
}

module.exports = Parse
