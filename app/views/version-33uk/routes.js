const govukPrototypeKit = require("govuk-prototype-kit");
const router = govukPrototypeKit.requests.setupRouter();

const path = require("path");
const upload = require("../../../upload-middleware");

module.exports = router;
