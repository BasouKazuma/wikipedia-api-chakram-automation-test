const BaseAPI = require('../api/BaseAPI')

class MobileView extends BaseAPI {

  constructor (page, section) {
    super()
    this.endpoint = ""
    this.queryString = {
      action: "mobileview",
      format: "json",
      page: page,
      section: section
    }
    this.parameters = {}
  }
  
}

module.exports = MobileView
