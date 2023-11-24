const govukPrototypeKit = require("govuk-prototype-kit");
const addFilter = govukPrototypeKit.views.addFilter;

module.exports = function (env) {
  /**
   * Instantiate object used to store the methods registered as a
   * 'filter' (of the same name) within nunjucks. You can override
   * gov.uk core filters by creating filter methods of the same name.
   * @type {Object}
   */
  var filters = {
    formatDate(dateBits) {
      const [day, month, year] = dateBits.map((str) => parseInt(str, 10));
      return day + " " + months[month - 1] + " " + year;
    },
  };
  return filters;
};
