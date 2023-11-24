const govukPrototypeKit = require("govuk-prototype-kit");
const router = govukPrototypeKit.requests.setupRouter();

const path = require("path");
const upload = require("../../../upload-middleware");

//CRISTINA
router.post("/vloan33-uk/alt_format_answer", function (req, res) {
  // Make a variable and give it the value from 'plan-to-work'
  var alt_format = req.session.data["alt_format"];

  // Check whether the variable matches a condition
  if (alt_format === "Yes") {
    // Send user to next page
    res.redirect("alt_format_options");
  } else {
    // Send user to ineligible page
    res.redirect("email-address");
  }
});

router.post("/vloan33-uk/filter-birth-answer", function (req, res) {
  var birthyear = ["2003", "2004", "2005", "2006"];

  var year = req.session.data["birth"];
  console.log(req.session.data);

  if (birthyear.includes(year)) {
    res.redirect("child_benefit");
  } else {
    res.redirect("lived-uk_4A");
  }
});

//CRISTINA
router.post("/vloan33-uk/child_benefit_answer", function (req, res) {
  // Make a variable and give it the value from 'plan-to-work'
  var benefit = req.session.data["child_benefit"];

  // Check whether the variable matches a condition
  if (benefit === "yes") {
    // Send user to next page
    res.redirect("child_benefit_yes");
  }

  if (benefit === "no") {
    // Send user to next page
    res.redirect("lived-uk_4A");
  } else {
    // Send user to ineligible page
    res.redirect("child_benefit_unknown");
  }
});

//CRISTINA
router.post("/vloan33-uk/benefits_a1_answer", function (req, res) {
  // Make a variable and give it the value from 'plan-to-work'
  var settlement = req.session.data["benefits"];

  // Check whether the variable matches a condition
  if (settlement === "yes") {
    // Send user to next page
    res.redirect("name");
  } else {
    // Send user to ineligible page
    res.redirect("plan-to-work");
  }
});

//CRISTINA
router.post("/vloan33-uk/loan_a1_answer", function (req, res) {
  // Make a variable and give it the value from 'plan-to-work'
  var settlement = req.session.data["loan"];

  // Check whether the variable matches a condition
  if (settlement === "yes") {
    // Send user to next page
    res.redirect("name");
  } else {
    // Send user to ineligible page
    res.redirect("plan-to-work");
  }
});

//UPLOAD FEATURE//

router.post("/vloan33-uk/upload_optout_answer", function (req, res) {
  // Make a variable and give it the value from 'plan-to-work'
  var correct = req.session.data["upload_optout1"];

  // Check whether the variable matches a condition
  if (correct === "yes") {
    // Send user to next page
    res.redirect("upload_passport");
  }

  // Check whether the variable matches a condition
  if (correct === "no") {
    // Send user to next page
    res.redirect("check-your-answers-no-upload.html");
  }
});

//CRISTINA
router.post("/vloan33-uk/upload_passport_check_answer", function (req, res) {
  // Make a variable and give it the value from 'plan-to-work'
  var upload = req.session.data["upload_passport_check_answer1"];

  // Check whether the variable matches a condition
  if (upload === "Yes") {
    // Send user to next page
    res.redirect("upload_selfie");
  } else {
    // Send user to ineligible page
    res.redirect("upload_passport");
  }
});

//CRISTINA
router.post("/vloan33-uk/upload_selfie_check_answer", function (req, res) {
  // Make a variable and give it the value from 'plan-to-work'
  var upload = req.session.data["upload_selfie_check_answer1"];

  // Check whether the variable matches a condition
  if (upload === "Yes") {
    // Send user to next page
    res.redirect("check-your-answers");
  } else {
    // Send user to ineligible page
    res.redirect("upload_selfie");
  }
});

//UPLOAD FEATURE ENDS//

//PAULS Initial Passport question upfront
router.post("/vloan33-uk/brp-answer", function (req, res) {
  // Make a variable and give it the value from 'plan-to-work'
  var homeOffice = req.session.data["brp-document"];

  // Check whether the variable matches a condition
  if (homeOffice === "Yes") {
    // Send user to next page
    res.redirect("upload_optout");
  } else {
    // Send user to ineligible page
    res.redirect("visa_3");
  }
});

//CRISTINA
router.post("/vloan33-uk/visa-answer", function (req, res) {
  // Make a variable and give it the value from 'plan-to-work'
  var visa = req.session.data["visa_01"];

  // Check whether the variable matches a condition
  if (visa === "I used the app") {
    // Send user to next page
    res.redirect("eu_settlement_5");
  }

  if (visa === "I went to a visa application centre") {
    // Send user to next page
    res.redirect("upload_optout");
  }

  if (visa === "Sent documents via post") {
    // Send user to next page
    res.redirect("upload_optout");
  } else {
    // Send user to ineligible page
    res.redirect("home-office-residence");
  }
});

//CRISTINA
router.post("/vloan33-uk/visa_1_answer", function (req, res) {
  // Make a variable and give it the value from 'plan-to-work'
  var homeOffice = req.session.data["visa_01"];

  // Check whether the variable matches a condition
  if (homeOffice === "Yes") {
    // Send user to next page
    res.redirect("visa_2");
  } else {
    // Send user to ineligible page
    res.redirect("eu_settlement_1");
  }
});

//CRISTINA
router.post("/vloan33-uk/visa-answer2", function (req, res) {
  // Make a variable and give it the value from 'plan-to-work'
  var visa = req.session.data["visa_02"];

  // Check whether the variable matches a condition
  if (visa === "Yes") {
    // Send user to next page
    res.redirect("visa");
  } else {
    // Send user to ineligible page
    res.redirect("home-office-residence");
  }
});

//CRISTINA
router.post("/vloan33-uk/visa-answer3", function (req, res) {
  // Make a variable and give it the value from 'plan-to-work'
  var visa = req.session.data["visa_03"];

  // Check whether the variable matches a condition
  if (visa === "Yes") {
    // Send user to next page
    res.redirect("visa");
  }

  // Check whether the variable matches a condition
  if (visa === "No") {
    // Send user to next page
    res.redirect("eu_settlement_1");
  } else {
    // Send user to ineligible page
    res.redirect("eu_settlement_1");
  }
});

//CRISTINA
router.post("/vloan33-uk/immigration-answer", function (req, res) {
  // Make a variable and give it the value from 'plan-to-work'
  var treaty = req.session.data["eu-treaty01"];

  // Check whether the variable matches a condition
  if (treaty === "Yes") {
    // Send user to next page
    res.redirect("lived-uk_4A");
  } else {
    // Send user to ineligible page
    res.redirect("lived-uk_4A");
  }
});

//CRISTINA
router.post("/vloan33-uk/eu-treaty-answer", function (req, res) {
  // Make a variable and give it the value from 'plan-to-work'
  var treaty = req.session.data["eu-treaty01"];

  // Check whether the variable matches a condition
  if (treaty === "Yes") {
    // Send user to next page
    res.redirect("eu_settlement_1");
  } else {
    // Send user to ineligible page
    res.redirect("home-office-residence");
  }
});

//CRISTINA
router.post("/vloan33-uk/settlement-answer1", function (req, res) {
  // Make a variable and give it the value from 'plan-to-work'
  var settlement = req.session.data["settlement-answer01"];

  // Check whether the variable matches a condition
  if (settlement === "Yes") {
    // Send user to next page
    res.redirect("eu_settlement_2");
  } else {
    // Send user to ineligible page
    res.redirect("home-office-residence");
  }
});

//CRISTINA
router.post("/vloan33-uk/settlement-answer2", function (req, res) {
  // Make a variable and give it the value from 'plan-to-work'
  var settlement = req.session.data["settlement-answer02"];

  // Check whether the variable matches a condition
  if (settlement === "Settled") {
    // Send user to next page
    res.redirect("eu_settlement_5");
  }

  if (settlement === "Pre-settled") {
    // Send user to next page
    res.redirect("eu_settlement_5");
  } else {
    // Send user to ineligible page
    res.redirect("home-office-residence");
  }
});

//CRISTINA
router.post("/vloan33-uk/lived-uk1A", function (req, res) {
  // Make a variable and give it the value from 'plan-to-work'
  var homeOffice = req.session.data["lived-uk01A"];

  // Check whether the variable matches a condition
  if (homeOffice === "Yes") {
    // Send user to next page
    res.redirect("passport-number");
  } else {
    // Send user to ineligible page
    res.redirect("lived-uk_1B");
  }
});

router.post("/vloan33-uk/lived-uk4A", function (req, res) {
  // Make a variable and give it the value from 'plan-to-work'
  var homeOffice = req.session.data["lived-uk04A"];

  // Check whether the variable matches a condition
  if (homeOffice === "Yes") {
    // Send user to next page
    res.redirect("address");
  } else {
    // Send user to ineligible page
    res.redirect("lived-uk_4B");
  }
});

router.post("/vloan33-uk/have-nino-answer", function (req, res) {
  // Make a variable and give it the value from 'plan-to-work'
  var haveNino = req.session.data["have-nino"];

  // Check whether the variable matches a condition
  if (haveNino === "Yes") {
    // Send user to next page
    res.redirect("ineligible");
  } else {
    // Send user to ineligible page
    res.redirect("plan-to-work");
  }
});

// Jons hockey EU router
router.post("/vloan33-uk/filter-nationality-answer", function (req, res) {
  // Make a variable for our list of EU countries
  var euCountries = [
    "Austrian",
    "Belgian",
    "Bulgarian",
    "Croatian",
    "Cypriot",
    "Czech",
    "Danish",
    "Estonian",
    "Finnish",
    "French",
    "German",
    "Greek",
    "Hungarian",
    "Italian",
    "Latvian",
    "Lithuanian",
    "Luxembourger",
    "Maltese",
    "Dutch",
    "Polish",
    "Portuguese",
    "Romanian",
    "Slovak",
    "Slovenian",
    "Spanish",
    "Swedish",
    "Icelandic",
    "Liechtenstein citizen",
    "Norwegian",
    "Swiss",
  ];

  var test = ["Welsh", "Irish", "Scottish", "British"];

  // Make a variable and give it the value from 'nationality'
  var passport = req.session.data["filter-nationality"];
  console.log(req.session.data);
  // Check whether the variable matches a condition

  if (euCountries.includes(passport)) {
    // Send user to no BRP page
    res.redirect("/version-29row/lived-uk_4A"); //merging EU to the ROW cohort//
  }

  if (uk.includes(passport)) {
    // Send user to no BRP page
    res.redirect("/version-row/lived-uk_4A");
  }

  if (roi.includes(passport)) {
    // Send user to no BRP page
    res.redirect("/version-row/lived-uk_4A");
  } else {
    // Send user to BRP page
    res.redirect("/version-29row/lived-uk_4A");
  }
});

//CRISTINA
router.post("/vloan33-uk/warning_answer", function (req, res) {
  // Make a variable and give it the value from 'plan-to-work'
  var planToWork = req.session.data["warning"];

  // Check whether the variable matches a condition
  if (planToWork === "Yes") {
    // Send user to next page
    res.redirect("plan-to-work");
  } else {
    // Send user to ineligible page
    res.redirect("warning_out");
  }
});

//CRISTINA
router.post("/vloan33-uk/dob_answer", function (req, res) {
  // Make a variable and give it the value from 'plan-to-work'
  var parameter = req.session.data["dob-year"];

  // Check whether the variable matches a condition
  if (parameter === "1980") {
    // Send user to next page
    res.redirect("error-password");
  } else {
    // Send user to ineligible page
    res.redirect("nationality");
  }
});

//CRISTINA
router.post("/vloan33-uk/passport-answer", function (req, res) {
  // Make a variable and give it the value from 'plan-to-work'
  var homeOffice = req.session.data["passport-document"];

  // Check whether the variable matches a condition
  if (homeOffice === "Yes") {
    // Send user to next page
    res.redirect("upload_optout");
  } else {
    // Send user to ineligible page
    res.redirect("check-your-answers-no-passport");
  }
});

//CRISTINA
router.post("/vloan33-uk/id-answer", function (req, res) {
  // Make a variable and give it the value from 'plan-to-work'
  var homeOffice = req.session.data["id-document"];

  // Check whether the variable matches a condition
  if (homeOffice === "Yes") {
    // Send user to next page
    res.redirect("brp-number");
  } else {
    // Send user to ineligible page
    res.redirect("document_id");
  }
});

//CRISTINA
router.post("/vloan33-uk/home-answer", function (req, res) {
  // Make a variable and give it the value from 'plan-to-work'
  var homeOffice = req.session.data["home-number"];

  // Check whether the variable matches a condition
  if (homeOffice === "Yes") {
    // Send user to next page
    res.redirect("upload_optout");
  } else {
    // Send user to ineligible page
    res.redirect("eu-treaty");
  }
});

//CRISTINA
router.post("/vloan33-uk/immigration-answer", function (req, res) {
  // Make a variable and give it the value from 'plan-to-work'
  var homeOffice = req.session.data["immigration-number"];

  // Check whether the variable matches a condition
  if (homeOffice === "Yes") {
    // Send user to next page
    res.redirect("upload_optout");
  } else {
    // Send user to ineligible page
    res.redirect("upload_optout");
  }
});

//CRISTINA
router.post("/vloan33-uk/plan-to-work-answer", function (req, res) {
  // Make a variable and give it the value from 'plan-to-work'
  var planToWork = req.session.data["plan-to-work"];

  // Check whether the variable matches a condition
  if (planToWork === "Yes") {
    // Send user to next page
    res.redirect("plan-to-loan");
  } else {
    // Send user to ineligible page
    res.redirect("plan-to-loan");
  }
});

//CRISTINA
router.post("/vloan33-uk/spanish-question-answer", function (req, res) {
  // Make a variable and give it the value from 'plan-to-work'
  var planToLoan = req.session.data["spanish-question"];

  // Check whether the variable matches a condition
  if (planToLoan === "Yes") {
    // Send user to next page
    res.redirect("spanish-mother");
  } else {
    // Send user to ineligible page
    res.redirect("male-female");
  }
});

//CRISTINA
router.post("/vloan33-uk/residence-card-answer", function (req, res) {
  // Make a variable and give it the value from 'plan-to-work'
  var planToLoan = req.session.data["residence-card"];

  // Check whether the variable matches a condition
  if (planToLoan === "Yes") {
    // Send user to next page
    res.redirect("home-office-residence");
  } else {
    // Send user to ineligible page
    res.redirect("home-office-residence");
  }
});

//CRISTINA
router.post("/vloan33-uk/home-office-answer", function (req, res) {
  // Make a variable and give it the value from 'plan-to-work'
  var homeOffice = req.session.data["pending-application"];

  // Check whether the variable matches a condition
  if (homeOffice === "Yes") {
    // Send user to next page
    res.redirect("lived-uk_4A");
  } else {
    // Send user to ineligible page
    res.redirect("eu-treaty");
  }
});

//CRISTINA
router.post("/vloan33-uk/ho-immigration-answer", function (req, res) {
  // Make a variable and give it the value from 'plan-to-work'
  var homeOffice = req.session.data["ho-immigration"];

  // Check whether the variable matches a condition
  if (homeOffice === "Yes") {
    // Send user to next page
    res.redirect("lived-uk_4A");
  } else {
    // Send user to ineligible page
    res.redirect("lived-uk_4A");
  }
});

//CRISTINA
router.post("/vloan33-uk/lived-uk-answer", function (req, res) {
  // Make a variable and give it the value from 'plan-to-work'
  var livedUK = req.session.data["lived-uk"];

  // Check whether the variable matches a condition
  if (livedUK === "Yes") {
    // Send user to next page
    res.redirect("address-born");
  } else {
    // Send user to ineligible page
    res.redirect("address-born");
  }
});

//CRISTINA
router.post("/vloan33-uk/name-changes-answer", function (req, res) {
  // Make a variable and give it the value from 'plan-to-work'
  var nameChanges = req.session.data["name-changes"];

  // Check whether the variable matches a condition
  if (nameChanges === "firstnames") {
    // Send user to next page
    res.redirect("q04-1-other-names-details-firstname");
  }

  if (nameChanges === "surnames") {
    // Send user to next page
    res.redirect("q04-1-other-names-details-surname");
  } else {
    // Send user to ineligible page
    res.redirect("q04-1-other-names-details");
  }
});

//CRISTINA
router.post("/vloan33-uk/name-changes-answerx2", function (req, res) {
  // Make a variable and give it the value from 'plan-to-work'
  var nameChanges = req.session.data["name-changes"];

  // Check whether the variable matches a condition
  if (nameChanges === "First Name") {
    // Send user to next page
    res.redirect("q04-1-other-names-details-x2");
  } else {
    // Send user to ineligible page
    res.redirect("q04-1-other-names-details-x2");
  }
});

//CRISTINA
router.post(
  "/vloan33-uk/address-correspondence-question-answers",
  function (req, res) {
    // Make a variable and give it the value from 'plan-to-work'
    var addressCorrespondence = req.session.data["have-correspondence"];

    // Check whether the variable matches a condition
    if (addressCorrespondence === "Yes") {
      // Send user to next page
      res.redirect("alt_format");
    } else {
      // Send user to ineligible page
      res.redirect("address-correspondence-search");
    }
  }
);

//CRISTINA
router.post(
  "/vloan33-uk/address-correspondence-results-answers",
  function (req, res) {
    // Make a variable and give it the value from 'plan-to-work'
    var addressCorrespondence = req.session.data["address-correspondence"];

    // Check whether the variable matches a condition
    if (addressCorrespondence === "Yes") {
      // Send user to next page
      res.redirect("address-correspondence-search");
    } else {
      // Send user to ineligible page
      res.redirect("address-eu");
    }
  }
);

//CRISTINA
router.post("/vloan33-uk/have-brp-answer", function (req, res) {
  // Make a variable and give it the value from 'plan-to-work'
  var haveBRP = req.session.data["have-brp"];

  // Check whether the variable matches a condition
  if (haveBRP === "Yes") {
    // Send user to next page
    res.redirect("brp-number");
  } else {
    // Send user to ineligible page
    res.redirect("passport-number");
  }
});

router.post("/vloan33-uk/in-work-answer", function (req, res) {
  // Make a variable and give it the value from 'in-work'
  var inWork = req.session.data["in-work"];

  // Check whether the variable matches a condition
  if (inWork === "Yes") {
    // Send user to next page
    res.redirect("nationality");
  } else {
    // Send user to q02-plan-to-work page
    res.redirect("plan-to-work");
  }
});

// Jons hockey EU router
router.post("/vloan33-uk/brp-router", function (req, res) {
  // Make a variable for our list of EU countries
  var euCountries = [
    "Austrian",
    "Belgian",
    "Bulgarian",
    "Croatian",
    "Cypriot",
    "Czech",
    "Danish",
    "Estonian",
    "Finnish",
    "French",
    "German",
    "Greek",
    "Hungarian",
    "Irish",
    "Italian",
    "Latvian",
    "Lithuanian",
    "Luxembourger",
    "Maltese",
    "Dutch",
    "Polish",
    "Portuguese",
    "Romanian",
    "Slovak",
    "Slovenian",
    "Spainish",
    "Swedish",
    "British",
    "Icelandic",
    "Liechtenstein citizen",
    "Norwegian",
    "Swiss",
  ];
  // Make a variable and give it the value from 'nationality'
  var nationality = req.session.data["input-autocomplete"];
  console.log(req.session.data);
  // Check whether the variable matches a condition
  if (euCountries.includes(nationality)) {
    // Send user to no BRP page
    res.redirect("no-brp");
  } else {
    // Send user to BRP page
    res.redirect("brp-number");
  }
});

var data = {
  brpCardFront: null,
  brpCardFrontFilename: null,
};

router.post(
  "/vloan33-uk/upload-brp-image",
  upload.single("userPhoto"),
  async (req, res, next) => {
    console.log("file upload is ", req.file);

    if (!req.file && data.brpCardFront === null) {
      res.status(401).json({ error: "Please provide an image" });
    }

    // add the image stuff to data and session
    data.brpCardFront = req.file.path;
    data.brpCardFrontFilename = req.file.originalname;
    req.session.data["brp-img-upload"] = {
      filename: data.brpCardFrontFilename,
      path: data.brpCardFront,
    };

    // then redirect
    res.redirect("self-img-upload");
  }
);

router.post(
  "/vloan33-uk/upload-self-image",
  upload.single("userSelfPhoto"),
  async (req, res, next) => {
    console.log("file upload is ", req.file);

    if (!req.file && data.userPhoto === null) {
      res.status(401).json({ error: "Please provide an image" });
    }

    // add the image stuff to data and session
    data.userPhoto = req.file.path;
    data.userPhotoFilename = req.file.originalname;
    req.session.data["self-img-upload"] = {
      filename: data.userPhotoFilename,
      path: data.userPhoto,
    };

    console.log("checking the session", req.session.data);

    // then redirect
    res.redirect("q03-name");
  }
);

router.post("x/q02-3-nationality", function (req, res) {
  // Make a variable for our list of EU countries
  var euCountries = ["France", "Spain"];
  // Make a variable and give it the value from 'any-other-names'
  var nationality = req.session.data["nationality"];

  console.log(req.session.data);
  var otherNationalities = req.session.data["other-nationality"];
  // Check whether the variable matches a condition
  if (euCountries.includes(nationality) && otherNationalities === "Yes") {
    // Send user to next page
    res.redirect("q02-4-add-nationality");
  } else {
    // Send user to q05-date-of-birth page
    res.redirect("q05-date-of-birth");
  }
});

//CRISTINA
router.post("/vloan33-uk/any-other-names", function (req, res) {
  // Make a variable and give it the value from 'any-other-names'
  var anyOtherNames = req.session.data["any-other-names"];

  // Check whether the variable matches a condition
  if (anyOtherNames === "Yes") {
    // Send user to next page
    res.redirect("name-changes");
  } else {
    // Send user to q05-date-of-birth page
    res.redirect("male-female");
  }
});

//CRISTINA
router.post("/vloan33-uk/contacting-answer", function (req, res) {
  // Make a variable and give it the value from 'any-other-names'
  var howcontacted = req.session.data["how-contacted"];

  // Check whether the variable matches a condition
  if (howcontacted === "Yes") {
    // Send user to next page
    res.redirect("address-correspondence-search");
  } else {
    // Send user to q05-date-of-birth page
    res.redirect("email-address");
  }
});

router.post("/vloan33-uk/name-changes", function (req, res) {
  var nameChanges = req.session.data["name-changes"];

  if (nameChanges === "Both") {
    res.redirect("q04-1-other-names-details");
  } else {
    res.redirect("q04-1-other-names-details");
  }
});

router.get("/q03-name", function (req, res, next) {
  res.locals.change = "change" in req.query;
  next();
});

router.post("/vloan33-uk/add-other-name", function (req, res) {
  const givenNames = req.session.data["other-given-names"];
  const familyName = req.session.data["other-family-name"];

  const otherNames = req.session.data["other-names"] || [];

  otherNames.push({ givenNames, familyName });
  req.session.data["other-names"] = otherNames;
  res.redirect("date-of-birth");
});

router.get("/change-other-name/:id", function (req, res) {
  const nameId = parseInt(req.params.id, 10);
  const otherNames = req.session.data["other-names"] || [];
  const { givenNames, familyName } = otherNames[nameId];

  res.locals.id = nameId;
  res.locals.change = true;
  res.locals.givenNames = givenNames;
  res.locals.familyName = familyName;

  res.render("version-06/q04-1-other-names-details.html");
});

router.post("/vloan33-uk/change-other-name/:id", function (req, res) {
  const nameId = parseInt(req.params.id, 10);
  const givenNames = req.session.data["other-given-names"];
  const familyName = req.session.data["other-family-name"];
  const otherNames = req.session.data["other-names"] || [];

  otherNames[nameId] = { givenNames, familyName };
  req.session.data["other-names"] = otherNames;

  res.redirect("../q04-2-other-names-list");
});

router.get("/delete-other-name/:id", function (req, res) {
  const nameId = req.params.id;
  const otherNames = req.session.data["other-names"] || [];
  const { givenNames, familyName } = otherNames[nameId];

  res.locals.name = `${givenNames} ${familyName}`;

  res.render("version-06/delete-other-name.html");
});

router.post("/vloan33-uk/delete-other-name/:id", function (req, res) {
  const deleteNames = req.session.data["delete-name"];

  if (deleteNames === "yes") {
    const nameId = parseInt(req.params.id, 10);
    const otherNames = req.session.data["other-names"] || [];
    otherNames.splice(nameId, 1);
    req.session.data["other-names"] = otherNames;
  }

  res.redirect("../q04-2-other-names-list");
});

router.get("/q04-2-other-names-list", function (req, res) {
  // Creat summary list row for current name
  const givenNames = req.session.data["given-names"];
  const familyName = req.session.data["family-name"];
  // const currentName = {
  //   key: {
  //     classes: 'govuk-!-width-one-third',
  //     text: `Current name`
  //   },
  //   value: {
  //     classes: 'govuk-!-width-one-third',
  //     text: `${givenNames} ${familyName}`
  //   },
  //   actions: {
  //     classes: 'govuk-!-width-one-third',
  //     items: [
  //       {
  //         href: `q03-name?change`,
  //         text: 'Change',
  //         visuallyHiddenText: `current name`
  //       }
  //     ]
  //   }
  // }

  // Create array of summary list rows of other names
  const otherNames = req.session.data["other-names"] || [];
  const otherNameRows = otherNames.map((names, i) => ({
    key: {
      // classes: 'govuk-!-width-one-third',
      // text: `${(i === 0 ? '' : i + 1)}`
      classes: "govuk-!-width-one-third",
      text: `${names.givenNames} ${names.familyName}`,
    },
    // value: {
    //   classes: 'govuk-!-width-one-third',
    //   text: `${names.givenNames} ${names.familyName}`
    // },
    actions: {
      classes: "govuk-!-width-one-third",
      items: [
        {
          href: `change-other-name/${i}`,
          text: "Change",
          visuallyHiddenText: `previous name ${i + 1}`,
        },
        {
          href: `delete-other-name/${i}`,
          text: "Delete",
          visuallyHiddenText: `previous name ${i + 1}`,
        },
      ],
    },
  }));

  // Merge into one list and add to view
  res.locals.names = [...otherNameRows];
  res.render("version-11/q04-2-other-names-list.html");
});

router.post("/vloan33-uk/other-names-list-answer", function (req, res) {
  const anyMoreNames = req.session.data["any-more-names"];

  if (anyMoreNames === "Yes") {
    res.redirect("q04-1-other-names-details");
  } else {
    res.redirect("date-of-birth");
  }
});

// Colin's magic starts here

// NEED TO CHANGE THE FILE NAMES TO Q12

// function to filter out unchecked values
function filterUnchecked(checkBoxes) {
  if (checkBoxes.length > 0) {
    return checkBoxes.filter((value) => value !== "_unchecked");
  } else {
    return {};
  }
}

router.post("/vloan33-uk/contacting-you", function (req, res) {
  const validLocations = filterUnchecked(req.session.data["contact-pref"]);
  // redirect to the fist element
  if (validLocations.includes("telephone") && validLocations.includes("sms")) {
    // redirect them to the mobile page
    res.redirect("q12-1-mobile");
  }
  if (validLocations.includes("sms")) {
    res.redirect("q12-1-mobile");
  }
  if (validLocations.includes("telephone")) {
    res.redirect("q12-2-telephone");
  }
  if (validLocations.includes("email")) {
    res.redirect("q13-1-email-address");
  }
  if (validLocations.includes("letter")) {
    res.redirect("q13-3-postal-address");
  } else {
    res.redirect("check-your-answers");
  }
});

router.post("/vloan33-uk/q12-1-mobile", function (req, res) {
  const validLocations = filterUnchecked(req.session.data["contact-pref"]);
  // redirect to the fist element
  if (validLocations.includes("telephone") && validLocations.includes("sms")) {
    // redirect them to the mobile page
    res.redirect("q12-3-telephone-call");
  }
  if (validLocations.includes("email")) {
    res.redirect("q13-1-email-address");
  }
  if (validLocations.includes("letter")) {
    res.redirect("q13-3-postal-address");
  } else {
    res.redirect("check-your-answers");
  }
});

router.post("/vloan33-uk/q12-2-telephone", function (req, res) {
  const validLocations = filterUnchecked(req.session.data["contact-pref"]);
  // redirect to the fist element

  if (validLocations.includes("email")) {
    res.redirect("q13-1-email-address");
  }
  if (validLocations.includes("letter")) {
    res.redirect("q13-3-postal-address");
  } else {
    res.redirect("check-your-answers");
  }
});

// * TO FIX * need a router here to allow user to answer 'no', input an alternative number, then continue with email and postal address questions
router.post("/vloan33-uk/q12-3-telephone-call", function (req, res) {
  const validLocations = filterUnchecked(req.session.data["contact-pref"]);
  // redirect to the fist element
  if (validLocations.includes("email")) {
    res.redirect("q13-1-email-address");
  }
  if (validLocations.includes("letter")) {
    res.redirect("q13-3-postal-address");
  } else {
    res.redirect("check-your-answers");
  }
});

router.post("/vloan33-uk/q13-1-email-address", function (req, res) {
  const validLocations = filterUnchecked(req.session.data["contact-pref"]);
  // redirect to the fist element

  if (validLocations.includes("letter")) {
    res.redirect("q13-3-postal-address");
  } else {
    res.redirect("check-your-answers");
  }
});

router.post("/vloan33-uk/q13-3-postal-address", function (req, res) {
  // Make a variable and give it the value from 'postal-address'
  var isPostal = req.session.data["is-postal"];

  // Check whether the variable matches a condition
  if (isPostal === "No") {
    // Send user to add-a-postal-address
    res.redirect("q-postal-address");
  } else {
    // Send user to check-your-answers
    res.redirect("check-your-answers");
  }
});

router.post("check-for-next-page", function (req, res) {
  const validLocations = filterUnchecked(req.session.data["contact-pref"]);
  // redirect to the fist element

  if (validLocations.includes("email")) {
    res.redirect("q13-1-email-address");
  }
  if (validLocations.includes("letter")) {
    res.redirect("q13-3-postal-address");
  } else {
    res.redirect("check-your-answers");
  }
});

module.exports = router;
