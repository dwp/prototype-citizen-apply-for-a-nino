//
// For guidance on how to create routes see:
// https://prototype-kit.service.gov.uk/docs/routes
//

const govukPrototypeKit = require("govuk-prototype-kit");
const router = govukPrototypeKit.requests.setupRouter();

const upload = require("../upload-middleware");

router.post("/vbenefits33-roi/alt_format_answer", function (req, res) {
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

router.post("/vbenefits33-roi/filter-birth-answer", function (req, res) {
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
router.post("/vbenefits33-roi/child_benefit_answer", function (req, res) {
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
router.post("/vbenefits33-roi/benefits_a1_answer", function (req, res) {
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
router.post("/vbenefits33-roi/loan_a1_answer", function (req, res) {
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

//CRISTINA
router.post("/vbenefits33-roi/upload_document", function (req, res) {
  // Make a variable and give it the value from 'plan-to-work'
  var homeOffice = req.session.data["upload_docs"];

  // Check whether the variable matches a condition
  if (homeOffice === "yes") {
    // Send user to next page
    res.redirect("doc_guidance_sharecode");
  } else {
    // Send user to ineligible page
    res.redirect("doc_guidance_appointment");
  }
});

//UPLOAD FEATURE//

//CRISTINA's ORGINAL FOR PAGE 1

router.post("/vbenefits33-roi/upload_1_answer", function (req, res) {
  // Make a variable and give it the value from 'plan-to-work'
  var correct = req.session.data["upload_01"];

  // Check whether the variable matches a condition
  if (correct === "yes") {
    // Send user to next page
    res.redirect("upload_7");
  }

  // Check whether the variable matches a condition
  if (correct === "no") {
    // Send user to next page
    res.redirect("check-your-answers_no_upload.html");
  }
});

router.post("/vbenefits33-roi/upload_9_answer", function (req, res) {
  // Make a variable and give it the value from 'plan-to-work'
  var correct = req.session.data["upload_09"];

  // Check whether the variable matches a condition
  if (correct === "yes") {
    // Send user to next page
    res.redirect("upload_7");
  }

  // Check whether the variable matches a condition
  if (correct === "no") {
    // Send user to next page
    res.redirect("upload_4");
  }
});

//CRISTINA
router.post("/vbenefits33-roi/upload_answer_11", function (req, res) {
  // Make a variable and give it the value from 'plan-to-work'
  var upload = req.session.data["upload_011"];

  // Check whether the variable matches a condition
  if (upload === "Yes") {
    // Send user to next page
    res.redirect("upload_20");
  } else {
    // Send user to ineligible page
    res.redirect("upload_7");
  }
});

//CRISTINA
router.post("/vbenefits33-roi/upload_answer_22b", function (req, res) {
  // Make a variable and give it the value from 'plan-to-work'
  var upload = req.session.data["upload_022"];

  // Check whether the variable matches a condition
  if (upload === "Yes") {
    // Send user to next page
    res.redirect("check-your-answers");
  } else {
    // Send user to ineligible page
    res.redirect("upload_22");
  }
});

//CRISTINA
router.post("/vbenefits33-roi/upload_answer_21b", function (req, res) {
  // Make a variable and give it the value from 'plan-to-work'
  var upload = req.session.data["upload_021"];

  // Check whether the variable matches a condition
  if (upload === "Yes") {
    // Send user to next page
    res.redirect("upload_7a");
  } else {
    // Send user to ineligible page
    res.redirect("upload_21");
  }
});

//CRISTINA
router.post("/vbenefits33-roi/upload_answer_20b", function (req, res) {
  // Make a variable and give it the value from 'plan-to-work'
  var upload = req.session.data["upload_020"];

  // Check whether the variable matches a condition
  if (upload === "Yes") {
    // Send user to next page
    res.redirect("check-your-answers");
  } else {
    // Send user to ineligible page
    res.redirect("upload_20");
  }
});

router.post("/vbenefits33-roi/upload_answer_11a", function (req, res) {
  // Make a variable and give it the value from 'plan-to-work'
  var upload = req.session.data["upload_011"];

  // Check whether the variable matches a condition
  if (upload === "Yes") {
    // Send user to next page
    res.redirect("upload_18");
  } else {
    // Send user to ineligible page
    res.redirect("upload_7a");
  }
});

//CRISTINA

//PAULS Initial Passport question upfront
router.post("/vbenefits33-roi/upload_answer_18a", function (req, res) {
  // Make a variable and give it the value from 'plan-to-work'
  var homeOffice = req.session.data["upload_18a"];

  // Check whether the variable matches a condition
  if (homeOffice === "yes") {
    // Send user to next page
    res.redirect("upload_20");
  } else {
    // Send user to ineligible page
    res.redirect("upload_18");
  }
});

//UPLOAD FEATURE ENDS//

//PAULS Initial Passport question upfront
router.post("/vbenefits33-roi/brp-answer", function (req, res) {
  // Make a variable and give it the value from 'plan-to-work'
  var homeOffice = req.session.data["brp-document"];

  // Check whether the variable matches a condition
  if (homeOffice === "Yes") {
    // Send user to next page
    res.redirect("upload_1");
  } else {
    // Send user to ineligible page
    res.redirect("visa_3");
  }
});

//CRISTINA
router.post("/vbenefits33-roi/visa-answer", function (req, res) {
  // Make a variable and give it the value from 'plan-to-work'
  var visa = req.session.data["visa_01"];

  // Check whether the variable matches a condition
  if (visa === "I used the app") {
    // Send user to next page
    res.redirect("eu_settlement_5");
  }

  if (visa === "I went to a visa application centre") {
    // Send user to next page
    res.redirect("upload_1");
  }

  if (visa === "Sent documents via post") {
    // Send user to next page
    res.redirect("upload_1");
  } else {
    // Send user to ineligible page
    res.redirect("home-office-immigration");
  }
});

//CRISTINA
router.post("/vbenefits33-roi/visa_1_answer", function (req, res) {
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
router.post("/vbenefits33-roi/visa-answer2", function (req, res) {
  // Make a variable and give it the value from 'plan-to-work'
  var visa = req.session.data["visa_02"];

  // Check whether the variable matches a condition
  if (visa === "Yes") {
    // Send user to next page
    res.redirect("visa");
  } else {
    // Send user to ineligible page
    res.redirect("home-office-immigration");
  }
});

//CRISTINA
router.post("/vbenefits33-roi/visa-answer3", function (req, res) {
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
router.post("/vbenefits33-roi/immigration-answer", function (req, res) {
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
router.post("/vbenefits33-roi/eu-treaty-answer", function (req, res) {
  // Make a variable and give it the value from 'plan-to-work'
  var treaty = req.session.data["eu-treaty01"];

  // Check whether the variable matches a condition
  if (treaty === "Yes") {
    // Send user to next page
    res.redirect("eu_settlement_1");
  } else {
    // Send user to ineligible page
    res.redirect("home-office-immigration");
  }
});

//CRISTINA
router.post("/vbenefits33-roi/settlement-answer1", function (req, res) {
  // Make a variable and give it the value from 'plan-to-work'
  var settlement = req.session.data["settlement-answer01"];

  // Check whether the variable matches a condition
  if (settlement === "Yes") {
    // Send user to next page
    res.redirect("eu_settlement_2");
  } else {
    // Send user to ineligible page
    res.redirect("home-office-immigration");
  }
});

//CRISTINA
router.post("/vbenefits33-roi/settlement-answer2", function (req, res) {
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
    res.redirect("home-office-immigration");
  }
});

//CRISTINA
router.post("/vbenefits33-roi/lived-uk1A", function (req, res) {
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

router.post("/vbenefits33-roi/lived-uk4A", function (req, res) {
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

router.post("/vbenefits33-roi/have-nino-answer", function (req, res) {
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
router.post("/vbenefits33-roi/filter-nationality-answer", function (req, res) {
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
    res.redirect("/vbenefits33-roi/version-30row/lived-uk_4A"); //merging EU to the ROW cohort//
  }

  if (uk.includes(passport)) {
    // Send user to no BRP page
    res.redirect("/vbenefits33-roi/version-30row/lived-uk_4A");
  }

  if (roi.includes(passport)) {
    // Send user to no BRP page
    res.redirect("/vbenefits33-roi/version-30row/lived-uk_4A");
  } else {
    // Send user to BRP page
    res.redirect("/vbenefits33-roi/version-30row/lived-uk_4A");
  }
});

//CRISTINA
router.post("/vbenefits33-roi/warning_answer", function (req, res) {
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
router.post("/vbenefits33-roi/dob_answer", function (req, res) {
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
router.post("/vbenefits33-roi/passport-answer", function (req, res) {
  // Make a variable and give it the value from 'plan-to-work'
  var homeOffice = req.session.data["passport-document"];

  // Check whether the variable matches a condition
  if (homeOffice === "Yes") {
    // Send user to next page
    res.redirect("check-your-answers");
  } else {
    // Send user to ineligible page
    res.redirect("document_id");
  }
});

//CRISTINA
router.post("/vbenefits33-roi/id-answer", function (req, res) {
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
router.post("/vbenefits33-roi/home-answer", function (req, res) {
  // Make a variable and give it the value from 'plan-to-work'
  var homeOffice = req.session.data["home-number"];

  // Check whether the variable matches a condition
  if (homeOffice === "Yes") {
    // Send user to next page
    res.redirect("upload_1");
  } else {
    // Send user to ineligible page
    res.redirect("eu-treaty");
  }
});

//CRISTINA
router.post("/vbenefits33-roi/immigration-answer", function (req, res) {
  // Make a variable and give it the value from 'plan-to-work'
  var homeOffice = req.session.data["immigration-number"];

  // Check whether the variable matches a condition
  if (homeOffice === "Yes") {
    // Send user to next page
    res.redirect("upload_1");
  } else {
    // Send user to ineligible page
    res.redirect("upload_1");
  }
});

//CRISTINA
router.post("/vbenefits33-roi/plan-to-work-answer", function (req, res) {
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
router.post("/vbenefits33-roi/spanish-question-answer", function (req, res) {
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
router.post("/vbenefits33-roi/residence-card-answer", function (req, res) {
  // Make a variable and give it the value from 'plan-to-work'
  var planToLoan = req.session.data["residence-card"];

  // Check whether the variable matches a condition
  if (planToLoan === "Yes") {
    // Send user to next page
    res.redirect("home-office-immigration");
  } else {
    // Send user to ineligible page
    res.redirect("home-office-immigration");
  }
});

//CRISTINA
router.post("/vbenefits33-roi/home-office-answer", function (req, res) {
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
router.post("/vbenefits33-roi/ho-immigration-answer", function (req, res) {
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
router.post("/vbenefits33-roi/lived-uk-answer", function (req, res) {
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
router.post("/vbenefits33-roi/name-changes-answer", function (req, res) {
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
router.post("/vbenefits33-roi/name-changes-answerx2", function (req, res) {
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
  "/vbenefits33-roi/address-correspondence-question-answers",
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
  "/vbenefits33-roi/address-correspondence-results-answers",
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
router.post("/vbenefits33-roi/have-brp-answer", function (req, res) {
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

router.post("/vbenefits33-roi/in-work-answer", function (req, res) {
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
router.post("/vbenefits33-roi/brp-router", function (req, res) {
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
  "/vbenefits33-roi/upload-brp-image",
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
  "/vbenefits33-roi/upload-self-image",
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
router.post("/vbenefits33-roi/any-other-names", function (req, res) {
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
router.post("/vbenefits33-roi/contacting-answer", function (req, res) {
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

router.post("/vbenefits33-roi/name-changes", function (req, res) {
  var nameChanges = req.session.data["name-changes"];

  if (nameChanges === "Both") {
    res.redirect("q04-1-other-names-details");
  } else {
    res.redirect("q04-1-other-names-details");
  }
});

router.get("/vbenefits33-roi/q03-name", function (req, res, next) {
  res.locals.change = "change" in req.query;
  next();
});

router.post("/vbenefits33-roi/add-other-name", function (req, res) {
  const givenNames = req.session.data["other-given-names"];
  const familyName = req.session.data["other-family-name"];

  const otherNames = req.session.data["other-names"] || [];

  otherNames.push({ givenNames, familyName });
  req.session.data["other-names"] = otherNames;
  res.redirect("date-of-birth");
});

router.get("/vbenefits33-roi/change-other-name/:id", function (req, res) {
  const nameId = parseInt(req.params.id, 10);
  const otherNames = req.session.data["other-names"] || [];
  const { givenNames, familyName } = otherNames[nameId];

  res.locals.id = nameId;
  res.locals.change = true;
  res.locals.givenNames = givenNames;
  res.locals.familyName = familyName;

  res.render("version-06/q04-1-other-names-details.html");
});

router.post("/vbenefits33-roi/change-other-name/:id", function (req, res) {
  const nameId = parseInt(req.params.id, 10);
  const givenNames = req.session.data["other-given-names"];
  const familyName = req.session.data["other-family-name"];
  const otherNames = req.session.data["other-names"] || [];

  otherNames[nameId] = { givenNames, familyName };
  req.session.data["other-names"] = otherNames;

  res.redirect("../q04-2-other-names-list");
});

router.get("/vbenefits33-roi/delete-other-name/:id", function (req, res) {
  const nameId = req.params.id;
  const otherNames = req.session.data["other-names"] || [];
  const { givenNames, familyName } = otherNames[nameId];

  res.locals.name = `${givenNames} ${familyName}`;

  res.render("version-06/delete-other-name.html");
});

router.post("/vbenefits33-roi/delete-other-name/:id", function (req, res) {
  const deleteNames = req.session.data["delete-name"];

  if (deleteNames === "yes") {
    const nameId = parseInt(req.params.id, 10);
    const otherNames = req.session.data["other-names"] || [];
    otherNames.splice(nameId, 1);
    req.session.data["other-names"] = otherNames;
  }

  res.redirect("../q04-2-other-names-list");
});

router.get("/vbenefits33-roi/q04-2-other-names-list", function (req, res) {
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

router.post("/vbenefits33-roi/other-names-list-answer", function (req, res) {
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

router.post("/vbenefits33-roi/contacting-you", function (req, res) {
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

router.post("/vbenefits33-roi/q12-1-mobile", function (req, res) {
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

router.post("/vbenefits33-roi/q12-2-telephone", function (req, res) {
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
router.post("/vbenefits33-roi/q12-3-telephone-call", function (req, res) {
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

router.post("/vbenefits33-roi/q13-1-email-address", function (req, res) {
  const validLocations = filterUnchecked(req.session.data["contact-pref"]);
  // redirect to the fist element

  if (validLocations.includes("letter")) {
    res.redirect("q13-3-postal-address");
  } else {
    res.redirect("check-your-answers");
  }
});

router.post("/vbenefits33-roi/q13-3-postal-address", function (req, res) {
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

router.post("/vbenefits33-uk/alt_format_answer", function (req, res) {
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

router.post("/vbenefits33-uk/filter-birth-answer", function (req, res) {
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
router.post("/vbenefits33-uk/child_benefit_answer", function (req, res) {
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
router.post("/vbenefits33-uk/benefits_a1_answer", function (req, res) {
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
router.post("/vbenefits33-uk/loan_a1_answer", function (req, res) {
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

router.post("/vbenefits33-uk/upload_optout_answer", function (req, res) {
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
router.post(
  "/vbenefits33-uk/upload_passport_check_answer",
  function (req, res) {
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
  }
);

//CRISTINA
router.post("/vbenefits33-uk/upload_selfie_check_answer", function (req, res) {
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
router.post("/vbenefits33-uk/brp-answer", function (req, res) {
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
router.post("/vbenefits33-uk/visa-answer", function (req, res) {
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
router.post("/vbenefits33-uk/visa_1_answer", function (req, res) {
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
router.post("/vbenefits33-uk/visa-answer2", function (req, res) {
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
router.post("/vbenefits33-uk/visa-answer3", function (req, res) {
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
router.post("/vbenefits33-uk/immigration-answer", function (req, res) {
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
router.post("/vbenefits33-uk/eu-treaty-answer", function (req, res) {
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
router.post("/vbenefits33-uk/settlement-answer1", function (req, res) {
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
router.post("/vbenefits33-uk/settlement-answer2", function (req, res) {
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
router.post("/vbenefits33-uk/lived-uk1A", function (req, res) {
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

router.post("/vbenefits33-uk/lived-uk4A", function (req, res) {
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

router.post("/vbenefits33-uk/have-nino-answer", function (req, res) {
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
router.post("/vbenefits33-uk/filter-nationality-answer", function (req, res) {
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
    res.redirect("/vbenefits33-uk/version-29row/lived-uk_4A"); //merging EU to the ROW cohort//
  }

  if (uk.includes(passport)) {
    // Send user to no BRP page
    res.redirect("/vbenefits33-uk/version-row/lived-uk_4A");
  }

  if (roi.includes(passport)) {
    // Send user to no BRP page
    res.redirect("/vbenefits33-uk/version-row/lived-uk_4A");
  } else {
    // Send user to BRP page
    res.redirect("/vbenefits33-uk/version-29row/lived-uk_4A");
  }
});

//CRISTINA
router.post("/vbenefits33-uk/warning_answer", function (req, res) {
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
router.post("/vbenefits33-uk/dob_answer", function (req, res) {
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
router.post("/vbenefits33-uk/passport-answer", function (req, res) {
  // Make a variable and give it the value from 'plan-to-work'
  var homeOffice = req.session.data["passport-document"];

  // Check whether the variable matches a condition
  if (homeOffice === "Yes") {
    // Send user to next page
    res.redirect("upload_optout");
  } else {
    // Send user to ineligible page
    res.redirect("check-your-answers");
  }
});

//CRISTINA
router.post("/vbenefits33-uk/id-answer", function (req, res) {
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
router.post("/vbenefits33-uk/home-answer", function (req, res) {
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
router.post("/vbenefits33-uk/immigration-answer", function (req, res) {
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
router.post("/vbenefits33-uk/plan-to-work-answer", function (req, res) {
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
router.post("/vbenefits33-uk/spanish-question-answer", function (req, res) {
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
router.post("/vbenefits33-uk/residence-card-answer", function (req, res) {
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
router.post("/vbenefits33-uk/home-office-answer", function (req, res) {
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
router.post("/vbenefits33-uk/ho-immigration-answer", function (req, res) {
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
router.post("/vbenefits33-uk/lived-uk-answer", function (req, res) {
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
router.post("/vbenefits33-uk/name-changes-answer", function (req, res) {
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
router.post("/vbenefits33-uk/name-changes-answerx2", function (req, res) {
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
  "/vbenefits33-uk/address-correspondence-question-answers",
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
  "/vbenefits33-uk/address-correspondence-results-answers",
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
router.post("/vbenefits33-uk/have-brp-answer", function (req, res) {
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

router.post("/vbenefits33-uk/in-work-answer", function (req, res) {
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
router.post("/vbenefits33-uk/brp-router", function (req, res) {
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
  "/vbenefits33-uk/upload-brp-image",
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
  "/vbenefits33-uk/upload-self-image",
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
router.post("/vbenefits33-uk/any-other-names", function (req, res) {
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
router.post("/vbenefits33-uk/contacting-answer", function (req, res) {
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

router.post("/vbenefits33-uk/name-changes", function (req, res) {
  var nameChanges = req.session.data["name-changes"];

  if (nameChanges === "Both") {
    res.redirect("q04-1-other-names-details");
  } else {
    res.redirect("q04-1-other-names-details");
  }
});

router.get("/vbenefits33-uk/q03-name", function (req, res, next) {
  res.locals.change = "change" in req.query;
  next();
});

router.post("/vbenefits33-uk/add-other-name", function (req, res) {
  const givenNames = req.session.data["other-given-names"];
  const familyName = req.session.data["other-family-name"];

  const otherNames = req.session.data["other-names"] || [];

  otherNames.push({ givenNames, familyName });
  req.session.data["other-names"] = otherNames;
  res.redirect("date-of-birth");
});

router.get("/vbenefits33-uk/change-other-name/:id", function (req, res) {
  const nameId = parseInt(req.params.id, 10);
  const otherNames = req.session.data["other-names"] || [];
  const { givenNames, familyName } = otherNames[nameId];

  res.locals.id = nameId;
  res.locals.change = true;
  res.locals.givenNames = givenNames;
  res.locals.familyName = familyName;

  res.render("version-06/q04-1-other-names-details.html");
});

router.post("/vbenefits33-uk/change-other-name/:id", function (req, res) {
  const nameId = parseInt(req.params.id, 10);
  const givenNames = req.session.data["other-given-names"];
  const familyName = req.session.data["other-family-name"];
  const otherNames = req.session.data["other-names"] || [];

  otherNames[nameId] = { givenNames, familyName };
  req.session.data["other-names"] = otherNames;

  res.redirect("../q04-2-other-names-list");
});

router.get("/vbenefits33-uk/delete-other-name/:id", function (req, res) {
  const nameId = req.params.id;
  const otherNames = req.session.data["other-names"] || [];
  const { givenNames, familyName } = otherNames[nameId];

  res.locals.name = `${givenNames} ${familyName}`;

  res.render("version-06/delete-other-name.html");
});

router.post("/vbenefits33-uk/delete-other-name/:id", function (req, res) {
  const deleteNames = req.session.data["delete-name"];

  if (deleteNames === "yes") {
    const nameId = parseInt(req.params.id, 10);
    const otherNames = req.session.data["other-names"] || [];
    otherNames.splice(nameId, 1);
    req.session.data["other-names"] = otherNames;
  }

  res.redirect("../q04-2-other-names-list");
});

router.get("/vbenefits33-uk/q04-2-other-names-list", function (req, res) {
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

router.post("/vbenefits33-uk/other-names-list-answer", function (req, res) {
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

router.post("/vbenefits33-uk/contacting-you", function (req, res) {
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

router.post("/vbenefits33-uk/q12-1-mobile", function (req, res) {
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

router.post("/vbenefits33-uk/q12-2-telephone", function (req, res) {
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
router.post("/vbenefits33-uk/q12-3-telephone-call", function (req, res) {
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

router.post("/vbenefits33-uk/q13-1-email-address", function (req, res) {
  const validLocations = filterUnchecked(req.session.data["contact-pref"]);
  // redirect to the fist element

  if (validLocations.includes("letter")) {
    res.redirect("q13-3-postal-address");
  } else {
    res.redirect("check-your-answers");
  }
});

router.post("/vbenefits33-uk/q13-3-postal-address", function (req, res) {
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

router.post("/version-33eu/alt_format_answers_v3", function (req, res) {
  var clear = req.session.data["alt_format_v3"];

  if (clear === "Yes") {
    res.redirect("alt_format_options_v3");
  }

  if (clear === "No") {
    res.redirect("email-address");
  }
});

router.post("/version-33eu/alt_format_answers_v2", function (req, res) {
  var clear = req.session.data["alt_format_v2"];

  if (clear === "Yes") {
    res.redirect("alt_format_options_v2");
  }

  if (clear === "No") {
    res.redirect("email-address");
  }
});

router.post("/version-33eu/alt_format_answers", function (req, res) {
  var clear = req.session.data["alt_format"];

  if (clear === "Yes") {
    res.redirect("alt_format_options");
  }

  if (clear === "No") {
    res.redirect("email-address");
  }
});

//CRISTINA
router.post("/version-33eu/alt_format_answer", function (req, res) {
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

router.post("/version-33eu/filter-birth-answer", function (req, res) {
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
router.post("/version-33eu/child_benefit_answer", function (req, res) {
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
router.post("/version-33eu/benefits_a1_answer", function (req, res) {
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
router.post("/version-33eu/loan_a1_answer", function (req, res) {
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

router.post("/version-33eu/upload_optout_answer", function (req, res) {
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
router.post("/version-33eu/upload_passport_check_answer", function (req, res) {
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
router.post("/version-33eu/upload_selfie_check_answer", function (req, res) {
  // Make a variable and give it the value from 'plan-to-work'
  var upload = req.session.data["upload_selfie_check_answer1"];

  // Check whether the variable matches a condition
  if (upload === "Yes") {
    // Send user to next page
    res.redirect("upload_visa");
  } else {
    // Send user to ineligible page
    res.redirect("upload_selfie");
  }
});

//CRISTINA
router.post("/version-33eu/upload_id_check_answer", function (req, res) {
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

//CRISTINA
router.post("/version-33eu/upload_visa_check_answer", function (req, res) {
  // Make a variable and give it the value from 'plan-to-work'
  var upload = req.session.data["upload_visa_check_answer1"];

  // Check whether the variable matches a condition
  if (upload === "Yes") {
    // Send user to next page
    res.redirect("check-your-answers");
  } else {
    // Send user to ineligible page
    res.redirect("upload_visa");
  }
});

////

//PAULS Initial Passport question upfront
router.post("/version-33eu/brp-answer", function (req, res) {
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
router.post("/version-33eu/visa-answer", function (req, res) {
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
    res.redirect("home-office-immigration");
  }
});

//CRISTINA
router.post("/version-33eu/visa_1_answer", function (req, res) {
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
router.post("/version-33eu/visa-answer2", function (req, res) {
  // Make a variable and give it the value from 'plan-to-work'
  var visa = req.session.data["visa_02"];

  // Check whether the variable matches a condition
  if (visa === "Yes") {
    // Send user to next page
    res.redirect("visa");
  } else {
    // Send user to ineligible page
    res.redirect("home-office-immigration");
  }
});

//CRISTINA
router.post("/version-33eu/visa-answer3", function (req, res) {
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
router.post("/version-33eu/vignette-answer1", function (req, res) {
  // Make a variable and give it the value from 'plan-to-work'
  var settlement = req.session.data["vignette-answer01"];

  // Check whether the variable matches a condition
  if (settlement === "Yes") {
    // Send user to next page
    res.redirect("upload_optout");
  } else {
    // Send user to ineligible page
    res.redirect("home-office-immigration");
  }
});

//CRISTINA
router.post("/version-33eu/digital-answer1", function (req, res) {
  // Make a variable and give it the value from 'plan-to-work'
  var settlement = req.session.data["digital-answer01"];

  // Check whether the variable matches a condition
  if (settlement === "Yes") {
    // Send user to next page
    res.redirect("upload_optout");
  } else {
    // Send user to ineligible page
    res.redirect("home-office-immigration");
  }
});

//CRISTINA
router.post("/version-33eu/immigration-answer", function (req, res) {
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
router.post("/version-33eu/eu-treaty-answer", function (req, res) {
  // Make a variable and give it the value from 'plan-to-work'
  var treaty = req.session.data["eu-treaty01"];

  // Check whether the variable matches a condition
  if (treaty === "Yes") {
    // Send user to next page
    res.redirect("eu_settlement_1");
  } else {
    // Send user to ineligible page
    res.redirect("home-office-immigration");
  }
});

//CRISTINA
router.post("/version-33eu/settlement-answer1", function (req, res) {
  // Make a variable and give it the value from 'plan-to-work'
  var settlement = req.session.data["settlement-answer01"];

  // Check whether the variable matches a condition
  if (settlement === "Yes") {
    // Send user to next page
    res.redirect("eu_settlement_2");
  } else {
    // Send user to ineligible page
    res.redirect("home-office-immigration");
  }
});

//CRISTINA
router.post("/version-33eu/settlement-answer2", function (req, res) {
  // Make a variable and give it the value from 'plan-to-work'
  var settlement = req.session.data["settlement-answer02"];

  // Check whether the variable matches a condition
  if (settlement === "Settled") {
    // Send user to next page
    res.redirect("upload_optout");
  }

  if (settlement === "Pre-settled") {
    // Send user to next page
    res.redirect("upload_optout");
  } else {
    // Send user to ineligible page
    res.redirect("home-office-residence");
  }
});

//CRISTINA
router.post("/version-33eu/lived-uk1A", function (req, res) {
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

router.post("/version-33eu/lived-uk4A", function (req, res) {
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

router.post("/version-33eu/have-nino-answer", function (req, res) {
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
router.post("/version-33eu/filter-nationality-answer", function (req, res) {
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
    res.redirect("/version-33eu/version-30row/lived-uk_4A"); //merging EU to the ROW cohort//
  }

  if (uk.includes(passport)) {
    // Send user to no BRP page
    res.redirect("/version-33eu/version-30row/lived-uk_4A");
  }

  if (roi.includes(passport)) {
    // Send user to no BRP page
    res.redirect("/version-33eu/version-30row/lived-uk_4A");
  } else {
    // Send user to BRP page
    res.redirect("/version-33eu/version-30row/lived-uk_4A");
  }
});

//CRISTINA
router.post("/version-33eu/warning_answer", function (req, res) {
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
router.post("/version-33eu/dob_answer", function (req, res) {
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
router.post("/version-33eu/passport-answer", function (req, res) {
  // Make a variable and give it the value from 'plan-to-work'
  var homeOffice = req.session.data["passport-document"];

  // Check whether the variable matches a condition
  if (homeOffice === "Yes") {
    // Send user to next page
    res.redirect("visa_3");
  } else {
    // Send user to ineligible page
    res.redirect("document_id");
  }
});

//CRISTINA
router.post("/version-33eu/id-answer", function (req, res) {
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
router.post("/version-33eu/home-answer", function (req, res) {
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
router.post("/version-33eu/immigration-answer", function (req, res) {
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
router.post("/version-33eu/plan-to-work-answer", function (req, res) {
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
router.post("/version-33eu/spanish-question-answer", function (req, res) {
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
router.post("/version-33eu/residence-card-answer", function (req, res) {
  // Make a variable and give it the value from 'plan-to-work'
  var planToLoan = req.session.data["residence-card"];

  // Check whether the variable matches a condition
  if (planToLoan === "Yes") {
    // Send user to next page
    res.redirect("home-office-immigration");
  } else {
    // Send user to ineligible page
    res.redirect("home-office-immigration");
  }
});

//CRISTINA
router.post("/version-33eu/home-office-answer", function (req, res) {
  // Make a variable and give it the value from 'plan-to-work'
  var homeOffice = req.session.data["ho-document"];
  // Check whether the variable matches a condition
  if (homeOffice === "Yes") {
    // Send user to next page
    res.redirect("upload_optout");
  } else {
    // Send user to ineligible page
    res.redirect("right-to-live-work");
  }
});

//CRISTINA
router.post("/version-33eu/right-to-live-answer", function (req, res) {
  // Make a variable and give it the value from 'plan-to-work'
  var homeOffice = req.session.data["right-to-live"];
  // Check whether the variable matches a condition
  if (homeOffice === "Yes") {
    // Send user to next page
    res.redirect("check-your-answers-no-upload");
  } else {
    // Send user to ineligible page
    res.redirect("right-to-live-work-NO");
  }
});

//CRISTINA
router.post("/version-33eu/home-office-answer", function (req, res) {
  // Make a variable and give it the value from 'plan-to-work'
  var homeOffice = req.session.data["ho-document"];

  // Check whether the variable matches a condition
  if (homeOffice === "Yes") {
    // Send user to next page
    res.redirect("upload_optout");
  } else {
    // Send user to ineligible page
    res.redirect("right-to-live-work");
  }
});

//CRISTINA
router.post("/version-33eu/ho-immigration-answer", function (req, res) {
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
router.post("/version-33eu/lived-uk-answer", function (req, res) {
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
router.post("/version-33eu/name-changes-answer", function (req, res) {
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
router.post("/version-33eu/name-changes-answerx2", function (req, res) {
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
  "/version-33eu/address-correspondence-question-answers",
  function (req, res) {
    // Make a variable and give it the value from 'plan-to-work'
    var addressCorrespondence = req.session.data["have-correspondence"];

    // Check whether the variable matches a condition
    if (addressCorrespondence === "Yes") {
      // Send user to next page
      res.redirect("alt_format_v2");
    } else {
      // Send user to ineligible page
      res.redirect("address-correspondence-search");
    }
  }
);

//CRISTINA
router.post(
  "/version-33eu/address-correspondence-results-answers",
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
router.post("/version-33eu/have-brp-answer", function (req, res) {
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

router.post("/version-33eu/in-work-answer", function (req, res) {
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
router.post("/version-33eu/brp-router", function (req, res) {
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
  "/version-33eu/upload-brp-image",
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
  "/version-33eu/upload-self-image",
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
router.post("/version-33eu/any-other-names", function (req, res) {
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
router.post("/version-33eu/contacting-answer", function (req, res) {
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

router.post("/version-33eu/name-changes", function (req, res) {
  var nameChanges = req.session.data["name-changes"];

  if (nameChanges === "Both") {
    res.redirect("q04-1-other-names-details");
  } else {
    res.redirect("q04-1-other-names-details");
  }
});

router.get("/version-33eu/q03-name", function (req, res, next) {
  res.locals.change = "change" in req.query;
  next();
});

router.post("/version-33eu/add-other-name", function (req, res) {
  const givenNames = req.session.data["other-given-names"];
  const familyName = req.session.data["other-family-name"];

  const otherNames = req.session.data["other-names"] || [];

  otherNames.push({ givenNames, familyName });
  req.session.data["other-names"] = otherNames;
  res.redirect("date-of-birth");
});

router.get("/version-33eu/change-other-name/:id", function (req, res) {
  const nameId = parseInt(req.params.id, 10);
  const otherNames = req.session.data["other-names"] || [];
  const { givenNames, familyName } = otherNames[nameId];

  res.locals.id = nameId;
  res.locals.change = true;
  res.locals.givenNames = givenNames;
  res.locals.familyName = familyName;

  res.render("version-06/q04-1-other-names-details.html");
});

router.post("/version-33eu/change-other-name/:id", function (req, res) {
  const nameId = parseInt(req.params.id, 10);
  const givenNames = req.session.data["other-given-names"];
  const familyName = req.session.data["other-family-name"];
  const otherNames = req.session.data["other-names"] || [];

  otherNames[nameId] = { givenNames, familyName };
  req.session.data["other-names"] = otherNames;

  res.redirect("../q04-2-other-names-list");
});

router.get("/version-33eu/delete-other-name/:id", function (req, res) {
  const nameId = req.params.id;
  const otherNames = req.session.data["other-names"] || [];
  const { givenNames, familyName } = otherNames[nameId];

  res.locals.name = `${givenNames} ${familyName}`;

  res.render("version-06/delete-other-name.html");
});

router.post("/version-33eu/delete-other-name/:id", function (req, res) {
  const deleteNames = req.session.data["delete-name"];

  if (deleteNames === "yes") {
    const nameId = parseInt(req.params.id, 10);
    const otherNames = req.session.data["other-names"] || [];
    otherNames.splice(nameId, 1);
    req.session.data["other-names"] = otherNames;
  }

  res.redirect("../q04-2-other-names-list");
});

router.get("/version-33eu/q04-2-other-names-list", function (req, res) {
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

router.post("/version-33eu/other-names-list-answer", function (req, res) {
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

router.post("/version-33eu/contacting-you", function (req, res) {
  const validLocations = filterUnchecked(req.session.data["contact-pref"]);
  // redirect to the fist element
  if (validLocations.includes("telephone") && validLocations.includes("sms")) {
    // redirect them to the mobile page
    res.redirect("q12-1-mobile");
  } else if (validLocations.includes("sms")) {
    res.redirect("q12-1-mobile");
  } else if (validLocations.includes("telephone")) {
    res.redirect("q12-2-telephone");
  } else if (validLocations.includes("email")) {
    res.redirect("q13-1-email-address");
  } else if (validLocations.includes("letter")) {
    res.redirect("q13-3-postal-address");
  } else {
    res.redirect("check-your-answers");
  }
});

router.post("/version-33eu/q12-1-mobile", function (req, res) {
  const validLocations = filterUnchecked(req.session.data["contact-pref"]);
  // redirect to the fist element
  if (validLocations.includes("telephone") && validLocations.includes("sms")) {
    // redirect them to the mobile page
    res.redirect("q12-3-telephone-call");
  } else if (validLocations.includes("email")) {
    res.redirect("q13-1-email-address");
  } else if (validLocations.includes("letter")) {
    res.redirect("q13-3-postal-address");
  } else {
    res.redirect("check-your-answers");
  }
});

router.post("/version-33eu/q12-2-telephone", function (req, res) {
  const validLocations = filterUnchecked(req.session.data["contact-pref"]);
  // redirect to the fist element

  if (validLocations.includes("email")) {
    res.redirect("q13-1-email-address");
  } else if (validLocations.includes("letter")) {
    res.redirect("q13-3-postal-address");
  } else {
    res.redirect("check-your-answers");
  }
});

// * TO FIX * need a router here to allow user to answer 'no', input an alternative number, then continue with email and postal address questions
router.post("/version-33eu/q12-3-telephone-call", function (req, res) {
  const validLocations = filterUnchecked(req.session.data["contact-pref"]);
  // redirect to the fist element
  if (validLocations.includes("email")) {
    res.redirect("q13-1-email-address");
  } else if (validLocations.includes("letter")) {
    res.redirect("q13-3-postal-address");
  } else {
    res.redirect("check-your-answers");
  }
});

router.post("/version-33eu/q13-1-email-address", function (req, res) {
  const validLocations = filterUnchecked(req.session.data["contact-pref"]);
  // redirect to the fist element

  if (validLocations.includes("letter")) {
    res.redirect("q13-3-postal-address");
  } else {
    res.redirect("check-your-answers");
  }
});

router.post("/version-33eu/q13-3-postal-address", function (req, res) {
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

router.post("/version-33eu/check-for-next-page", function (req, res) {
  const validLocations = filterUnchecked(req.session.data["contact-pref"]);
  // redirect to the fist element

  if (validLocations.includes("email")) {
    res.redirect("q13-1-email-address");
  } else if (validLocations.includes("letter")) {
    res.redirect("q13-3-postal-address");
  } else {
    res.redirect("check-your-answers");
  }
});

router.post("/version-33roi/alt_format_answers_v3", function (req, res) {
  var clear = req.session.data["alt_format_v3"];

  if (clear === "Yes") {
    res.redirect("alt_format_options_v3");
  }

  if (clear === "No") {
    res.redirect("email-address");
  }
});

router.post("/version-33roi/alt_format_answers_v2", function (req, res) {
  var clear = req.session.data["alt_format_v2"];

  if (clear === "Yes") {
    res.redirect("alt_format_options_v2");
  }

  if (clear === "No") {
    res.redirect("email-address");
  }
});

router.post("/version-33roi/alt_format_answers", function (req, res) {
  var clear = req.session.data["alt_format"];

  if (clear === "Yes") {
    res.redirect("alt_format_options");
  }

  if (clear === "No") {
    res.redirect("email-address");
  }
});

router.post("/version-33roi/filter-birth-answer", function (req, res) {
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
router.post("/version-33roi/child_benefit_answer", function (req, res) {
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
router.post("/version-33roi/benefits_a1_answer", function (req, res) {
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
router.post("/version-33roi/loan_a1_answer", function (req, res) {
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

//CRISTINA
router.post("/version-33roi/upload_document", function (req, res) {
  // Make a variable and give it the value from 'plan-to-work'
  var homeOffice = req.session.data["upload_docs"];

  // Check whether the variable matches a condition
  if (homeOffice === "yes") {
    // Send user to next page
    res.redirect("doc_guidance_sharecode");
  } else {
    // Send user to ineligible page
    res.redirect("doc_guidance_appointment");
  }
});

//UPLOAD FEATURE//

//CRISTINA's ORGINAL FOR PAGE 1

router.post("/version-33roi/upload_1_answer", function (req, res) {
  // Make a variable and give it the value from 'plan-to-work'
  var correct = req.session.data["upload_01"];

  // Check whether the variable matches a condition
  if (correct === "yes") {
    // Send user to next page
    res.redirect("upload_7");
  }

  // Check whether the variable matches a condition
  if (correct === "no") {
    // Send user to next page
    res.redirect("check-your-answers_no_upload.html");
  }
});

router.post("/version-33roi/upload_9_answer", function (req, res) {
  // Make a variable and give it the value from 'plan-to-work'
  var correct = req.session.data["upload_09"];

  // Check whether the variable matches a condition
  if (correct === "yes") {
    // Send user to next page
    res.redirect("upload_7");
  }

  // Check whether the variable matches a condition
  if (correct === "no") {
    // Send user to next page
    res.redirect("upload_4");
  }
});

//CRISTINA
router.post("/version-33roi/upload_answer_11", function (req, res) {
  // Make a variable and give it the value from 'plan-to-work'
  var upload = req.session.data["upload_011"];

  // Check whether the variable matches a condition
  if (upload === "Yes") {
    // Send user to next page
    res.redirect("upload_20");
  } else {
    // Send user to ineligible page
    res.redirect("upload_7");
  }
});

//CRISTINA
router.post("/version-33roi/upload_answer_22b", function (req, res) {
  // Make a variable and give it the value from 'plan-to-work'
  var upload = req.session.data["upload_022"];

  // Check whether the variable matches a condition
  if (upload === "Yes") {
    // Send user to next page
    res.redirect("check-your-answers");
  } else {
    // Send user to ineligible page
    res.redirect("upload_22");
  }
});

//CRISTINA
router.post("/version-33roi/upload_answer_21b", function (req, res) {
  // Make a variable and give it the value from 'plan-to-work'
  var upload = req.session.data["upload_021"];

  // Check whether the variable matches a condition
  if (upload === "Yes") {
    // Send user to next page
    res.redirect("upload_7a");
  } else {
    // Send user to ineligible page
    res.redirect("upload_21");
  }
});

//CRISTINA
router.post("/version-33roi/upload_answer_20b", function (req, res) {
  // Make a variable and give it the value from 'plan-to-work'
  var upload = req.session.data["upload_020"];

  // Check whether the variable matches a condition
  if (upload === "Yes") {
    // Send user to next page
    res.redirect("check-your-answers");
  } else {
    // Send user to ineligible page
    res.redirect("upload_20");
  }
});

router.post("/version-33roi/upload_answer_11a", function (req, res) {
  // Make a variable and give it the value from 'plan-to-work'
  var upload = req.session.data["upload_011"];

  // Check whether the variable matches a condition
  if (upload === "Yes") {
    // Send user to next page
    res.redirect("upload_18");
  } else {
    // Send user to ineligible page
    res.redirect("upload_7a");
  }
});

//CRISTINA

//PAULS Initial Passport question upfront
router.post("/version-33roi/upload_answer_18a", function (req, res) {
  // Make a variable and give it the value from 'plan-to-work'
  var homeOffice = req.session.data["upload_18a"];

  // Check whether the variable matches a condition
  if (homeOffice === "yes") {
    // Send user to next page
    res.redirect("upload_20");
  } else {
    // Send user to ineligible page
    res.redirect("upload_18");
  }
});

//UPLOAD FEATURE ENDS//

//PAULS Initial Passport question upfront
router.post("/version-33roi/brp-answer", function (req, res) {
  // Make a variable and give it the value from 'plan-to-work'
  var homeOffice = req.session.data["brp-document"];

  // Check whether the variable matches a condition
  if (homeOffice === "Yes") {
    // Send user to next page
    res.redirect("upload_1");
  } else {
    // Send user to ineligible page
    res.redirect("visa_3");
  }
});

//CRISTINA
router.post("/version-33roi/visa-answer", function (req, res) {
  // Make a variable and give it the value from 'plan-to-work'
  var visa = req.session.data["visa_01"];

  // Check whether the variable matches a condition
  if (visa === "I used the app") {
    // Send user to next page
    res.redirect("eu_settlement_5");
  }

  if (visa === "I went to a visa application centre") {
    // Send user to next page
    res.redirect("upload_1");
  }

  if (visa === "Sent documents via post") {
    // Send user to next page
    res.redirect("upload_1");
  } else {
    // Send user to ineligible page
    res.redirect("home-office-immigration");
  }
});

//CRISTINA
router.post("/version-33roi/visa_1_answer", function (req, res) {
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
router.post("/version-33roi/visa-answer2", function (req, res) {
  // Make a variable and give it the value from 'plan-to-work'
  var visa = req.session.data["visa_02"];

  // Check whether the variable matches a condition
  if (visa === "Yes") {
    // Send user to next page
    res.redirect("visa");
  } else {
    // Send user to ineligible page
    res.redirect("home-office-immigration");
  }
});

//CRISTINA
router.post("/version-33roi/visa-answer3", function (req, res) {
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
router.post("/version-33roi/immigration-answer", function (req, res) {
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
router.post("/version-33roi/eu-treaty-answer", function (req, res) {
  // Make a variable and give it the value from 'plan-to-work'
  var treaty = req.session.data["eu-treaty01"];

  // Check whether the variable matches a condition
  if (treaty === "Yes") {
    // Send user to next page
    res.redirect("eu_settlement_1");
  } else {
    // Send user to ineligible page
    res.redirect("home-office-immigration");
  }
});

//CRISTINA
router.post("/version-33roi/settlement-answer1", function (req, res) {
  // Make a variable and give it the value from 'plan-to-work'
  var settlement = req.session.data["settlement-answer01"];

  // Check whether the variable matches a condition
  if (settlement === "Yes") {
    // Send user to next page
    res.redirect("eu_settlement_2");
  } else {
    // Send user to ineligible page
    res.redirect("home-office-immigration");
  }
});

//CRISTINA
router.post("/version-33roi/settlement-answer2", function (req, res) {
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
    res.redirect("home-office-immigration");
  }
});

//CRISTINA
router.post("/version-33roi/lived-uk1A", function (req, res) {
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

router.post("/version-33roi/lived-uk4A", function (req, res) {
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

router.post("/version-33roi/have-nino-answer", function (req, res) {
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
router.post("/version-33roi/filter-nationality-answer", function (req, res) {
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
    res.redirect("/version-33roi/version-30row/lived-uk_4A"); //merging EU to the ROW cohort//
  }

  if (uk.includes(passport)) {
    // Send user to no BRP page
    res.redirect("/version-33roi/version-30row/lived-uk_4A");
  }

  if (roi.includes(passport)) {
    // Send user to no BRP page
    res.redirect("/version-33roi/version-30row/lived-uk_4A");
  } else {
    // Send user to BRP page
    res.redirect("/version-33roi/version-30row/lived-uk_4A");
  }
});

//CRISTINA
router.post("/version-33roi/warning_answer", function (req, res) {
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
router.post("/version-33roi/dob_answer", function (req, res) {
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
router.post("/version-33roi/passport-answer", function (req, res) {
  // Make a variable and give it the value from 'plan-to-work'
  var homeOffice = req.session.data["passport-document"];

  // Check whether the variable matches a condition
  if (homeOffice === "Yes") {
    // Send user to next page
    res.redirect("check-your-answers");
  } else {
    // Send user to ineligible page
    res.redirect("document_id");
  }
});

//CRISTINA
router.post("/version-33roi/id-answer", function (req, res) {
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
router.post("/version-33roi/home-answer", function (req, res) {
  // Make a variable and give it the value from 'plan-to-work'
  var homeOffice = req.session.data["home-number"];

  // Check whether the variable matches a condition
  if (homeOffice === "Yes") {
    // Send user to next page
    res.redirect("upload_1");
  } else {
    // Send user to ineligible page
    res.redirect("eu-treaty");
  }
});

//CRISTINA
router.post("/version-33roi/immigration-answer", function (req, res) {
  // Make a variable and give it the value from 'plan-to-work'
  var homeOffice = req.session.data["immigration-number"];

  // Check whether the variable matches a condition
  if (homeOffice === "Yes") {
    // Send user to next page
    res.redirect("upload_1");
  } else {
    // Send user to ineligible page
    res.redirect("upload_1");
  }
});

//CRISTINA
router.post("/version-33roi/plan-to-work-answer", function (req, res) {
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
router.post("/version-33roi/spanish-question-answer", function (req, res) {
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
router.post("/version-33roi/residence-card-answer", function (req, res) {
  // Make a variable and give it the value from 'plan-to-work'
  var planToLoan = req.session.data["residence-card"];

  // Check whether the variable matches a condition
  if (planToLoan === "Yes") {
    // Send user to next page
    res.redirect("home-office-immigration");
  } else {
    // Send user to ineligible page
    res.redirect("home-office-immigration");
  }
});

//CRISTINA
router.post("/version-33roi/home-office-answer", function (req, res) {
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
router.post("/version-33roi/ho-immigration-answer", function (req, res) {
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
router.post("/version-33roi/lived-uk-answer", function (req, res) {
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
router.post("/version-33roi/name-changes-answer", function (req, res) {
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
router.post("/version-33roi/name-changes-answerx2", function (req, res) {
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
  "/version-33roi/address-correspondence-question-answers",
  function (req, res) {
    // Make a variable and give it the value from 'plan-to-work'
    var addressCorrespondence = req.session.data["have-correspondence"];

    // Check whether the variable matches a condition
    if (addressCorrespondence === "Yes") {
      // Send user to next page
      res.redirect("alt_format_v2");
    } else {
      // Send user to ineligible page
      res.redirect("address-correspondence-search");
    }
  }
);

//CRISTINA
router.post(
  "/version-33roi/address-correspondence-results-answers",
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
router.post("/version-33roi/have-brp-answer", function (req, res) {
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

router.post("/version-33roi/in-work-answer", function (req, res) {
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
router.post("/version-33roi/brp-router", function (req, res) {
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
  "/version-33roi/upload-brp-image",
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
  "/version-33roi/upload-self-image",
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
router.post("/version-33roi/any-other-names", function (req, res) {
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
router.post("/version-33roi/contacting-answer", function (req, res) {
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

router.post("/version-33roi/name-changes", function (req, res) {
  var nameChanges = req.session.data["name-changes"];

  if (nameChanges === "Both") {
    res.redirect("q04-1-other-names-details");
  } else {
    res.redirect("q04-1-other-names-details");
  }
});

router.get("/version-33roi/q03-name", function (req, res, next) {
  res.locals.change = "change" in req.query;
  next();
});

router.post("/version-33roi/add-other-name", function (req, res) {
  const givenNames = req.session.data["other-given-names"];
  const familyName = req.session.data["other-family-name"];

  const otherNames = req.session.data["other-names"] || [];

  otherNames.push({ givenNames, familyName });
  req.session.data["other-names"] = otherNames;
  res.redirect("date-of-birth");
});

router.get("/version-33roi/change-other-name/:id", function (req, res) {
  const nameId = parseInt(req.params.id, 10);
  const otherNames = req.session.data["other-names"] || [];
  const { givenNames, familyName } = otherNames[nameId];

  res.locals.id = nameId;
  res.locals.change = true;
  res.locals.givenNames = givenNames;
  res.locals.familyName = familyName;

  res.render("version-06/q04-1-other-names-details.html");
});

router.post("/version-33roi/change-other-name/:id", function (req, res) {
  const nameId = parseInt(req.params.id, 10);
  const givenNames = req.session.data["other-given-names"];
  const familyName = req.session.data["other-family-name"];
  const otherNames = req.session.data["other-names"] || [];

  otherNames[nameId] = { givenNames, familyName };
  req.session.data["other-names"] = otherNames;

  res.redirect("../q04-2-other-names-list");
});

router.get("/version-33roi/delete-other-name/:id", function (req, res) {
  const nameId = req.params.id;
  const otherNames = req.session.data["other-names"] || [];
  const { givenNames, familyName } = otherNames[nameId];

  res.locals.name = `${givenNames} ${familyName}`;

  res.render("version-06/delete-other-name.html");
});

router.post("/version-33roi/delete-other-name/:id", function (req, res) {
  const deleteNames = req.session.data["delete-name"];

  if (deleteNames === "yes") {
    const nameId = parseInt(req.params.id, 10);
    const otherNames = req.session.data["other-names"] || [];
    otherNames.splice(nameId, 1);
    req.session.data["other-names"] = otherNames;
  }

  res.redirect("../q04-2-other-names-list");
});

router.get("/version-33roi/q04-2-other-names-list", function (req, res) {
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

router.post("/version-33roi/other-names-list-answer", function (req, res) {
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

router.post("/version-33roi/contacting-you", function (req, res) {
  const validLocations = filterUnchecked(req.session.data["contact-pref"]);
  // redirect to the fist element
  if (validLocations.includes("telephone") && validLocations.includes("sms")) {
    // redirect them to the mobile page
    res.redirect("q12-1-mobile");
  } else if (validLocations.includes("sms")) {
    res.redirect("q12-1-mobile");
  } else if (validLocations.includes("telephone")) {
    res.redirect("q12-2-telephone");
  } else if (validLocations.includes("email")) {
    res.redirect("q13-1-email-address");
  } else if (validLocations.includes("letter")) {
    res.redirect("q13-3-postal-address");
  } else {
    res.redirect("check-your-answers");
  }
});

router.post("/version-33roi/q12-1-mobile", function (req, res) {
  const validLocations = filterUnchecked(req.session.data["contact-pref"]);
  // redirect to the fist element
  if (validLocations.includes("telephone") && validLocations.includes("sms")) {
    // redirect them to the mobile page
    res.redirect("q12-3-telephone-call");
  } else if (validLocations.includes("email")) {
    res.redirect("q13-1-email-address");
  } else if (validLocations.includes("letter")) {
    res.redirect("q13-3-postal-address");
  } else {
    res.redirect("check-your-answers");
  }
});

router.post("/version-33roi/q12-2-telephone", function (req, res) {
  const validLocations = filterUnchecked(req.session.data["contact-pref"]);
  // redirect to the fist element

  if (validLocations.includes("email")) {
    res.redirect("q13-1-email-address");
  } else if (validLocations.includes("letter")) {
    res.redirect("q13-3-postal-address");
  } else {
    res.redirect("check-your-answers");
  }
});

// * TO FIX * need a router here to allow user to answer 'no', input an alternative number, then continue with email and postal address questions
router.post("/version-33roi/q12-3-telephone-call", function (req, res) {
  const validLocations = filterUnchecked(req.session.data["contact-pref"]);
  // redirect to the fist element
  if (validLocations.includes("email")) {
    res.redirect("q13-1-email-address");
  } else if (validLocations.includes("letter")) {
    res.redirect("q13-3-postal-address");
  } else {
    res.redirect("check-your-answers");
  }
});

router.post("/version-33roi/q13-1-email-address", function (req, res) {
  const validLocations = filterUnchecked(req.session.data["contact-pref"]);
  // redirect to the fist element

  if (validLocations.includes("letter")) {
    res.redirect("q13-3-postal-address");
  } else {
    res.redirect("check-your-answers");
  }
});

router.post("/version-33roi/q13-3-postal-address", function (req, res) {
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
  } else if (validLocations.includes("letter")) {
    res.redirect("q13-3-postal-address");
  } else {
    res.redirect("check-your-answers");
  }
});

router.post("/version-33row/alt_format_answers_v3", function (req, res) {
  var clear = req.session.data["alt_format_v3"];

  if (clear === "Yes") {
    res.redirect("alt_format_options_v3");
  }

  if (clear === "No") {
    res.redirect("email-address");
  }
});

router.post("/version-33row/alt_format_answers_v2", function (req, res) {
  var clear = req.session.data["alt_format_v2"];

  if (clear === "Yes") {
    res.redirect("alt_format_options_v2");
  }

  if (clear === "No") {
    res.redirect("email-address");
  }
});

router.post("/version-33row/alt_format_answers", function (req, res) {
  var clear = req.session.data["alt_format"];

  if (clear === "Yes") {
    res.redirect("alt_format_options");
  }

  if (clear === "No") {
    res.redirect("email-address");
  }
});

router.post("/version-33row/filter-birth-answer", function (req, res) {
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
router.post("/version-33row/child_benefit_answer", function (req, res) {
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
router.post("/version-33row/benefits_a1_answer", function (req, res) {
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
router.post("/version-33row/loan_a1_answer", function (req, res) {
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

router.post("/version-33row/upload_optout_answer", function (req, res) {
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
    res.redirect("check-your-answers-no-upload");
  }
});

//CRISTINA
router.post("/version-33row/upload_passport_check_answer", function (req, res) {
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
router.post("/version-33row/upload_id_check_answer", function (req, res) {
  // Make a variable and give it the value from 'plan-to-work'
  var upload = req.session.data["upload_id_check_answer1"];

  // Check whether the variable matches a condition
  if (upload === "Yes") {
    // Send user to next page
    res.redirect("check-your-answers");
  } else {
    // Send user to ineligible page
    res.redirect("upload_22");
  }
});

//CRISTINA
router.post("/version-33row/upload_selfie_check_answer", function (req, res) {
  // Make a variable and give it the value from 'plan-to-work'
  var upload = req.session.data["upload_selfie_check_answer1"];

  // Check whether the variable matches a condition
  if (upload === "Yes") {
    // Send user to next page
    res.redirect("upload_brpfront");
  } else {
    // Send user to ineligible page
    res.redirect("upload_selfie");
  }
});

//CRISTINA
router.post("/version-33row/upload_visa_check_answer", function (req, res) {
  // Make a variable and give it the value from 'plan-to-work'
  var upload = req.session.data["upload_visa_check_answer1"];

  // Check whether the variable matches a condition
  if (upload === "Yes") {
    // Send user to next page
    res.redirect("check-your-answers");
  } else {
    // Send user to ineligible page
    res.redirect("upload_visa");
  }
});

router.post("/version-33row/upload_brpfront_check_answer", function (req, res) {
  // Make a variable and give it the value from 'plan-to-work'
  var upload = req.session.data["upload_brpfront_check_answer1"];

  // Check whether the variable matches a condition
  if (upload === "Yes") {
    // Send user to next page
    res.redirect("upload_visa");
  } else {
    // Send user to ineligible page
    res.redirect("upload_passport_check");
  }
});

//PAULS Initial Passport question upfront
router.post("/version-33row/upload_brpback_check_answer", function (req, res) {
  // Make a variable and give it the value from 'plan-to-work'
  var homeOffice = req.session.data["upload_brpback_check_answer1"];

  // Check whether the variable matches a condition
  if (homeOffice === "yes") {
    // Send user to next page
    res.redirect("upload_visa");
  } else {
    // Send user to ineligible page
    res.redirect("upload_brpback");
  }
});

//UPLOAD FEATURE ENDS//

//UPLOAD VISA ROUTE//
router.post("/version-33row/upload_optout_vr", function (req, res) {
  // Make a variable and give it the value from 'plan-to-work'
  var correct = req.session.data["upload_optout_vr1"];

  // Check whether the variable matches a condition
  if (correct === "yes") {
    // Send user to next page
    res.redirect("upload_passport_vr");
  }

  // Check whether the variable matches a condition
  if (correct === "no") {
    // Send user to next page
    res.redirect("check-your-answers-no-upload");
  }
});

//CRISTINA
router.post(
  "/version-33row/upload_passport_check_answer_vr",
  function (req, res) {
    // Make a variable and give it the value from 'plan-to-work'
    var upload = req.session.data["upload_passport_check_answer_vr1"];

    // Check whether the variable matches a condition
    if (upload === "Yes") {
      // Send user to next page
      res.redirect("upload_selfie_vr");
    } else {
      // Send user to ineligible page
      res.redirect("upload_passport_vr");
    }
  }
);

router.post(
  "/version-33row/upload_selfie_check_answer_vr",
  function (req, res) {
    // Make a variable and give it the value from 'plan-to-work'
    var upload = req.session.data["upload_selfie_check_answer_vr1"];

    // Check whether the variable matches a condition
    if (upload === "Yes") {
      // Send user to next page
      res.redirect("upload_visa_vr");
    } else {
      // Send user to ineligible page
      res.redirect("upload_selfie_vr");
    }
  }
);

//CRISTINA
router.post("/version-33row/upload_visa_check_answer_vr", function (req, res) {
  // Make a variable and give it the value from 'plan-to-work'
  var upload = req.session.data["upload_visa_check_answer_vr1"];

  // Check whether the variable matches a condition
  if (upload === "Yes") {
    // Send user to next page
    res.redirect("check-your-answers-vr");
  } else {
    // Send user to ineligible page
    res.redirect("upload_visa_vr");
  }
});

// end visa route

//CRISTINA
router.post("/version-33row/vignette-answer1", function (req, res) {
  // Make a variable and give it the value from 'plan-to-work'
  var settlement = req.session.data["vignette-answer01"];

  // Check whether the variable matches a condition
  if (settlement === "Yes") {
    // Send user to next page
    res.redirect("upload_optout");
  } else {
    // Send user to ineligible page
    res.redirect("home-office-immigration");
  }
});

//CRISTINA
router.post("/version-33row/digital-answer1", function (req, res) {
  // Make a variable and give it the value from 'plan-to-work'
  var settlement = req.session.data["digital-answer01"];

  // Check whether the variable matches a condition
  if (settlement === "Yes") {
    // Send user to next page
    res.redirect("upload_optout");
  } else {
    // Send user to ineligible page
    res.redirect("home-office-immigration");
  }
});

//PAULS Initial Passport question upfront
router.post("/version-33row/brp-answer", function (req, res) {
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
router.post("/version-33row/visa-answer", function (req, res) {
  // Make a variable and give it the value from 'plan-to-work'
  var visa = req.session.data["visa_01"];

  // Check whether the variable matches a condition
  if (visa === "I used the app") {
    // Send user to next page
    res.redirect("eu_settlement_5");
  }

  if (visa === "I went to a visa application centre") {
    // Send user to next page
    res.redirect("upload_optout_vr");
  }

  if (visa === "Sent documents via post") {
    // Send user to next page
    res.redirect("upload_optout_vr");
  } else {
    // Send user to ineligible page
    res.redirect("home-office-residence");
  }
});

//CRISTINA
router.post("/version-33row/visa_1_answer", function (req, res) {
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
router.post("/version-33row/visa-answer2", function (req, res) {
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
router.post("/version-33row/visa-answer3", function (req, res) {
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
router.post("/version-33row/immigration-answer", function (req, res) {
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
router.post("/version-33row/eu-treaty-answer", function (req, res) {
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
router.post("/version-33row/settlement-answer1", function (req, res) {
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
router.post("/version-33row/settlement-answer2", function (req, res) {
  // Make a variable and give it the value from 'plan-to-work'
  var settlement = req.session.data["settlement-answer02"];

  // Check whether the variable matches a condition
  if (settlement === "Settled") {
    // Send user to next page
    res.redirect("upload_optout");
  }

  if (settlement === "Pre-settled") {
    // Send user to next page
    res.redirect("upload_optout");
  } else {
    // Send user to ineligible page
    res.redirect("home-office-residence");
  }
});

//CRISTINA
router.post("/version-33row/lived-uk1A", function (req, res) {
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

router.post("/version-33row/lived-uk4A", function (req, res) {
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

router.post("/version-33row/have-nino-answer", function (req, res) {
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
router.post("/version-33row/filter-nationality-answer", function (req, res) {
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
    res.redirect("/version-33row/version-32row/lived-uk_4A"); //merging EU to the ROW cohort//
  }

  if (uk.includes(passport)) {
    // Send user to no BRP page
    res.redirect("/version-33row/version-row/lived-uk_4A");
  }

  if (roi.includes(passport)) {
    // Send user to no BRP page
    res.redirect("/version-33row/version-row/lived-uk_4A");
  } else {
    // Send user to BRP page
    res.redirect("/version-33row/version-32row/lived-uk_4A");
  }
});

//CRISTINA
router.post("/version-33row/warning_answer", function (req, res) {
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
router.post("/version-33row/dob_answer", function (req, res) {
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
router.post("/version-33row/passport-answer", function (req, res) {
  // Make a variable and give it the value from 'plan-to-work'
  var homeOffice = req.session.data["passport-document"];

  // Check whether the variable matches a condition
  if (homeOffice === "Yes") {
    // Send user to next page
    res.redirect("brp-number");
  } else {
    // Send user to ineligible page
    res.redirect("brp-number");
  }
});

//CRISTINA
router.post("/version-33row/id-answer", function (req, res) {
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
router.post("/version-33row/home-answer", function (req, res) {
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
router.post("/version-33row/immigration-answer", function (req, res) {
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
router.post("/version-33row/plan-to-work-answer", function (req, res) {
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
router.post("/version-33row/spanish-question-answer", function (req, res) {
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
router.post("/version-33row/residence-card-answer", function (req, res) {
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
router.post("/version-33row/home-office-answer", function (req, res) {
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
router.post("/version-33row/ho-immigration-answer", function (req, res) {
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
router.post("/version-33row/lived-uk-answer", function (req, res) {
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
router.post("/version-33row/name-changes-answer", function (req, res) {
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
router.post("/version-33row/name-changes-answerx2", function (req, res) {
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
  "/version-33row/address-correspondence-question-answers",
  function (req, res) {
    // Make a variable and give it the value from 'plan-to-work'
    var addressCorrespondence = req.session.data["have-correspondence"];

    // Check whether the variable matches a condition
    if (addressCorrespondence === "Yes") {
      // Send user to next page
      res.redirect("alt_format_v2");
    } else {
      // Send user to ineligible page
      res.redirect("address-correspondence-search");
    }
  }
);

//CRISTINA
router.post(
  "/version-33row/address-correspondence-results-answers",
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
router.post("/version-33row/have-brp-answer", function (req, res) {
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

router.post("/version-33row/in-work-answer", function (req, res) {
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
router.post("/version-33row/brp-router", function (req, res) {
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
  "/version-33row/upload-brp-image",
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
  "/version-33row/upload-self-image",
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
router.post("/version-33row/any-other-names", function (req, res) {
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
router.post("/version-33row/contacting-answer", function (req, res) {
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

router.post("/version-33row/name-changes", function (req, res) {
  var nameChanges = req.session.data["name-changes"];

  if (nameChanges === "Both") {
    res.redirect("q04-1-other-names-details");
  } else {
    res.redirect("q04-1-other-names-details");
  }
});

router.get("/version-33row/q03-name", function (req, res, next) {
  res.locals.change = "change" in req.query;
  next();
});

router.post("/version-33row/add-other-name", function (req, res) {
  const givenNames = req.session.data["other-given-names"];
  const familyName = req.session.data["other-family-name"];

  const otherNames = req.session.data["other-names"] || [];

  otherNames.push({ givenNames, familyName });
  req.session.data["other-names"] = otherNames;
  res.redirect("date-of-birth");
});

router.get("/version-33row/change-other-name/:id", function (req, res) {
  const nameId = parseInt(req.params.id, 10);
  const otherNames = req.session.data["other-names"] || [];
  const { givenNames, familyName } = otherNames[nameId];

  res.locals.id = nameId;
  res.locals.change = true;
  res.locals.givenNames = givenNames;
  res.locals.familyName = familyName;

  res.render("version-06/q04-1-other-names-details.html");
});

router.post("/version-33row/change-other-name/:id", function (req, res) {
  const nameId = parseInt(req.params.id, 10);
  const givenNames = req.session.data["other-given-names"];
  const familyName = req.session.data["other-family-name"];
  const otherNames = req.session.data["other-names"] || [];

  otherNames[nameId] = { givenNames, familyName };
  req.session.data["other-names"] = otherNames;

  res.redirect("../q04-2-other-names-list");
});

router.get("/version-33row/delete-other-name/:id", function (req, res) {
  const nameId = req.params.id;
  const otherNames = req.session.data["other-names"] || [];
  const { givenNames, familyName } = otherNames[nameId];

  res.locals.name = `${givenNames} ${familyName}`;

  res.render("version-06/delete-other-name.html");
});

router.post("/version-33row/delete-other-name/:id", function (req, res) {
  const deleteNames = req.session.data["delete-name"];

  if (deleteNames === "yes") {
    const nameId = parseInt(req.params.id, 10);
    const otherNames = req.session.data["other-names"] || [];
    otherNames.splice(nameId, 1);
    req.session.data["other-names"] = otherNames;
  }

  res.redirect("../q04-2-other-names-list");
});

router.get("/version-33row/q04-2-other-names-list", function (req, res) {
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

router.post("/version-33row/other-names-list-answer", function (req, res) {
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

router.post("/version-33row/contacting-you", function (req, res) {
  const validLocations = filterUnchecked(req.session.data["contact-pref"]);
  // redirect to the fist element
  if (validLocations.includes("telephone") && validLocations.includes("sms")) {
    // redirect them to the mobile page
    res.redirect("q12-1-mobile");
  } else if (validLocations.includes("sms")) {
    res.redirect("q12-1-mobile");
  } else if (validLocations.includes("telephone")) {
    res.redirect("q12-2-telephone");
  } else if (validLocations.includes("email")) {
    res.redirect("q13-1-email-address");
  } else if (validLocations.includes("letter")) {
    res.redirect("q13-3-postal-address");
  } else {
    res.redirect("check-your-answers");
  }
});

router.post("/version-33row/q12-1-mobile", function (req, res) {
  const validLocations = filterUnchecked(req.session.data["contact-pref"]);
  // redirect to the fist element
  if (validLocations.includes("telephone") && validLocations.includes("sms")) {
    // redirect them to the mobile page
    res.redirect("q12-3-telephone-call");
  } else if (validLocations.includes("email")) {
    res.redirect("q13-1-email-address");
  } else if (validLocations.includes("letter")) {
    res.redirect("q13-3-postal-address");
  } else {
    res.redirect("check-your-answers");
  }
});

router.post("/version-33row/q12-2-telephone", function (req, res) {
  const validLocations = filterUnchecked(req.session.data["contact-pref"]);
  // redirect to the fist element

  if (validLocations.includes("email")) {
    res.redirect("q13-1-email-address");
  } else if (validLocations.includes("letter")) {
    res.redirect("q13-3-postal-address");
  } else {
    res.redirect("check-your-answers");
  }
});

// * TO FIX * need a router here to allow user to answer 'no', input an alternative number, then continue with email and postal address questions
router.post("/version-33row/q12-3-telephone-call", function (req, res) {
  const validLocations = filterUnchecked(req.session.data["contact-pref"]);
  // redirect to the fist element
  if (validLocations.includes("email")) {
    res.redirect("q13-1-email-address");
  } else if (validLocations.includes("letter")) {
    res.redirect("q13-3-postal-address");
  } else {
    res.redirect("check-your-answers");
  }
});

router.post("/version-33row/q13-1-email-address", function (req, res) {
  const validLocations = filterUnchecked(req.session.data["contact-pref"]);
  // redirect to the fist element

  if (validLocations.includes("letter")) {
    res.redirect("q13-3-postal-address");
  } else {
    res.redirect("check-your-answers");
  }
});

router.post("/version-33row/q13-3-postal-address", function (req, res) {
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
  } else if (validLocations.includes("letter")) {
    res.redirect("q13-3-postal-address");
  } else {
    res.redirect("check-your-answers");
  }
});

router.post("/vloan33-eu/alt_format_answer", function (req, res) {
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

router.post("/vloan33-eu/filter-birth-answer", function (req, res) {
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
router.post("/vloan33-eu/child_benefit_answer", function (req, res) {
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
router.post("/vloan33-eu/benefits_a1_answer", function (req, res) {
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
router.post("/vloan33-eu/loan_a1_answer", function (req, res) {
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

router.post("/vloan33-eu/upload_optout_answer", function (req, res) {
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
router.post("/vloan33-eu/upload_passport_check_answer", function (req, res) {
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
router.post("/vloan33-eu/upload_selfie_check_answer", function (req, res) {
  // Make a variable and give it the value from 'plan-to-work'
  var upload = req.session.data["upload_selfie_check_answer1"];

  // Check whether the variable matches a condition
  if (upload === "Yes") {
    // Send user to next page
    res.redirect("upload_visa");
  } else {
    // Send user to ineligible page
    res.redirect("upload_selfie");
  }
});

//CRISTINA
router.post("/vloan33-eu/upload_id_check_answer", function (req, res) {
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

//CRISTINA
router.post("/vloan33-eu/upload_visa_check_answer", function (req, res) {
  // Make a variable and give it the value from 'plan-to-work'
  var upload = req.session.data["upload_visa_check_answer1"];

  // Check whether the variable matches a condition
  if (upload === "Yes") {
    // Send user to next page
    res.redirect("check-your-answers");
  } else {
    // Send user to ineligible page
    res.redirect("upload_visa");
  }
});

////

//PAULS Initial Passport question upfront
router.post("/vloan33-eu/brp-answer", function (req, res) {
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
router.post("/vloan33-eu/visa-answer", function (req, res) {
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
    res.redirect("home-office-immigration");
  }
});

//CRISTINA
router.post("/vloan33-eu/visa_1_answer", function (req, res) {
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
router.post("/vloan33-eu/visa-answer2", function (req, res) {
  // Make a variable and give it the value from 'plan-to-work'
  var visa = req.session.data["visa_02"];

  // Check whether the variable matches a condition
  if (visa === "Yes") {
    // Send user to next page
    res.redirect("visa");
  } else {
    // Send user to ineligible page
    res.redirect("home-office-immigration");
  }
});

//CRISTINA
router.post("/vloan33-eu/visa-answer3", function (req, res) {
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
router.post("/vloan33-eu/vignette-answer1", function (req, res) {
  // Make a variable and give it the value from 'plan-to-work'
  var settlement = req.session.data["vignette-answer01"];

  // Check whether the variable matches a condition
  if (settlement === "Yes") {
    // Send user to next page
    res.redirect("upload_optout");
  } else {
    // Send user to ineligible page
    res.redirect("home-office-immigration");
  }
});

//CRISTINA
router.post("/vloan33-eu/digital-answer1", function (req, res) {
  // Make a variable and give it the value from 'plan-to-work'
  var settlement = req.session.data["digital-answer01"];

  // Check whether the variable matches a condition
  if (settlement === "Yes") {
    // Send user to next page
    res.redirect("upload_optout");
  } else {
    // Send user to ineligible page
    res.redirect("home-office-immigration");
  }
});

//CRISTINA
router.post("/vloan33-eu/immigration-answer", function (req, res) {
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
router.post("/vloan33-eu/eu-treaty-answer", function (req, res) {
  // Make a variable and give it the value from 'plan-to-work'
  var treaty = req.session.data["eu-treaty01"];

  // Check whether the variable matches a condition
  if (treaty === "Yes") {
    // Send user to next page
    res.redirect("eu_settlement_1");
  } else {
    // Send user to ineligible page
    res.redirect("home-office-immigration");
  }
});

//CRISTINA
router.post("/vloan33-eu/settlement-answer1", function (req, res) {
  // Make a variable and give it the value from 'plan-to-work'
  var settlement = req.session.data["settlement-answer01"];

  // Check whether the variable matches a condition
  if (settlement === "Yes") {
    // Send user to next page
    res.redirect("eu_settlement_2");
  } else {
    // Send user to ineligible page
    res.redirect("home-office-immigration");
  }
});

//CRISTINA
router.post("/vloan33-eu/settlement-answer2", function (req, res) {
  // Make a variable and give it the value from 'plan-to-work'
  var settlement = req.session.data["settlement-answer02"];

  // Check whether the variable matches a condition
  if (settlement === "Settled") {
    // Send user to next page
    res.redirect("upload_optout");
  }

  if (settlement === "Pre-settled") {
    // Send user to next page
    res.redirect("upload_optout");
  } else {
    // Send user to ineligible page
    res.redirect("home-office-residence");
  }
});

//CRISTINA
router.post("/vloan33-eu/lived-uk1A", function (req, res) {
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

router.post("/vloan33-eu/lived-uk4A", function (req, res) {
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

router.post("/vloan33-eu/have-nino-answer", function (req, res) {
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
router.post("/vloan33-eu/filter-nationality-answer", function (req, res) {
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
    res.redirect("/vloan33-eu/version-30row/lived-uk_4A"); //merging EU to the ROW cohort//
  }

  if (uk.includes(passport)) {
    // Send user to no BRP page
    res.redirect("/vloan33-eu/version-30row/lived-uk_4A");
  }

  if (roi.includes(passport)) {
    // Send user to no BRP page
    res.redirect("/vloan33-eu/version-30row/lived-uk_4A");
  } else {
    // Send user to BRP page
    res.redirect("/vloan33-eu/version-30row/lived-uk_4A");
  }
});

//CRISTINA
router.post("/vloan33-eu/warning_answer", function (req, res) {
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
router.post("/vloan33-eu/dob_answer", function (req, res) {
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
router.post("/vloan33-eu/passport-answer", function (req, res) {
  // Make a variable and give it the value from 'plan-to-work'
  var homeOffice = req.session.data["passport-document"];

  // Check whether the variable matches a condition
  if (homeOffice === "Yes") {
    // Send user to next page
    res.redirect("visa_3");
  } else {
    // Send user to ineligible page
    res.redirect("document_id");
  }
});

//CRISTINA
router.post("/vloan33-eu/id-answer", function (req, res) {
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
router.post("/vloan33-eu/home-answer", function (req, res) {
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
router.post("/vloan33-eu/immigration-answer", function (req, res) {
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
router.post("/vloan33-eu/plan-to-work-answer", function (req, res) {
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
router.post("/vloan33-eu/spanish-question-answer", function (req, res) {
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
router.post("/vloan33-eu/residence-card-answer", function (req, res) {
  // Make a variable and give it the value from 'plan-to-work'
  var planToLoan = req.session.data["residence-card"];

  // Check whether the variable matches a condition
  if (planToLoan === "Yes") {
    // Send user to next page
    res.redirect("home-office-immigration");
  } else {
    // Send user to ineligible page
    res.redirect("home-office-immigration");
  }
});

//CRISTINA
router.post("/vloan33-eu/home-office-answer", function (req, res) {
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
router.post("/vloan33-eu/ho-immigration-answer", function (req, res) {
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
router.post("/vloan33-eu/lived-uk-answer", function (req, res) {
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
router.post("/vloan33-eu/name-changes-answer", function (req, res) {
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
router.post("/vloan33-eu/name-changes-answerx2", function (req, res) {
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
  "/vloan33-eu/address-correspondence-question-answers",
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
  "/vloan33-eu/address-correspondence-results-answers",
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
router.post("/vloan33-eu/have-brp-answer", function (req, res) {
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

router.post("/vloan33-eu/in-work-answer", function (req, res) {
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
router.post("/vloan33-eu/brp-router", function (req, res) {
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
  "/vloan33-eu/upload-brp-image",
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
  "/vloan33-eu/upload-self-image",
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
router.post("/vloan33-eu/any-other-names", function (req, res) {
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
router.post("/vloan33-eu/contacting-answer", function (req, res) {
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

router.post("/vloan33-eu/name-changes", function (req, res) {
  var nameChanges = req.session.data["name-changes"];

  if (nameChanges === "Both") {
    res.redirect("q04-1-other-names-details");
  } else {
    res.redirect("q04-1-other-names-details");
  }
});

router.get("/vloan33-eu/q03-name", function (req, res, next) {
  res.locals.change = "change" in req.query;
  next();
});

router.post("/vloan33-eu/add-other-name", function (req, res) {
  const givenNames = req.session.data["other-given-names"];
  const familyName = req.session.data["other-family-name"];

  const otherNames = req.session.data["other-names"] || [];

  otherNames.push({ givenNames, familyName });
  req.session.data["other-names"] = otherNames;
  res.redirect("date-of-birth");
});

router.get("/vloan33-eu/change-other-name/:id", function (req, res) {
  const nameId = parseInt(req.params.id, 10);
  const otherNames = req.session.data["other-names"] || [];
  const { givenNames, familyName } = otherNames[nameId];

  res.locals.id = nameId;
  res.locals.change = true;
  res.locals.givenNames = givenNames;
  res.locals.familyName = familyName;

  res.render("version-06/q04-1-other-names-details.html");
});

router.post("/vloan33-eu/change-other-name/:id", function (req, res) {
  const nameId = parseInt(req.params.id, 10);
  const givenNames = req.session.data["other-given-names"];
  const familyName = req.session.data["other-family-name"];
  const otherNames = req.session.data["other-names"] || [];

  otherNames[nameId] = { givenNames, familyName };
  req.session.data["other-names"] = otherNames;

  res.redirect("../q04-2-other-names-list");
});

router.get("/vloan33-eu/delete-other-name/:id", function (req, res) {
  const nameId = req.params.id;
  const otherNames = req.session.data["other-names"] || [];
  const { givenNames, familyName } = otherNames[nameId];

  res.locals.name = `${givenNames} ${familyName}`;

  res.render("version-06/delete-other-name.html");
});

router.post("/vloan33-eu/delete-other-name/:id", function (req, res) {
  const deleteNames = req.session.data["delete-name"];

  if (deleteNames === "yes") {
    const nameId = parseInt(req.params.id, 10);
    const otherNames = req.session.data["other-names"] || [];
    otherNames.splice(nameId, 1);
    req.session.data["other-names"] = otherNames;
  }

  res.redirect("../q04-2-other-names-list");
});

router.get("/vloan33-eu/q04-2-other-names-list", function (req, res) {
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

router.post("/vloan33-eu/other-names-list-answer", function (req, res) {
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

router.post("/vloan33-eu/contacting-you", function (req, res) {
  const validLocations = filterUnchecked(req.session.data["contact-pref"]);
  // redirect to the fist element
  if (validLocations.includes("telephone") && validLocations.includes("sms")) {
    // redirect them to the mobile page
    res.redirect("q12-1-mobile");
  } else if (validLocations.includes("sms")) {
    res.redirect("q12-1-mobile");
  } else if (validLocations.includes("telephone")) {
    res.redirect("q12-2-telephone");
  } else if (validLocations.includes("email")) {
    res.redirect("q13-1-email-address");
  } else if (validLocations.includes("letter")) {
    res.redirect("q13-3-postal-address");
  } else {
    res.redirect("check-your-answers");
  }
});

router.post("/vloan33-eu/q12-1-mobile", function (req, res) {
  const validLocations = filterUnchecked(req.session.data["contact-pref"]);
  // redirect to the fist element
  if (validLocations.includes("telephone") && validLocations.includes("sms")) {
    // redirect them to the mobile page
    res.redirect("q12-3-telephone-call");
  } else if (validLocations.includes("email")) {
    res.redirect("q13-1-email-address");
  } else if (validLocations.includes("letter")) {
    res.redirect("q13-3-postal-address");
  } else {
    res.redirect("check-your-answers");
  }
});

router.post("/vloan33-eu/q12-2-telephone", function (req, res) {
  const validLocations = filterUnchecked(req.session.data["contact-pref"]);
  // redirect to the fist element

  if (validLocations.includes("email")) {
    res.redirect("q13-1-email-address");
  } else if (validLocations.includes("letter")) {
    res.redirect("q13-3-postal-address");
  } else {
    res.redirect("check-your-answers");
  }
});

// * TO FIX * need a router here to allow user to answer 'no', input an alternative number, then continue with email and postal address questions
router.post("/vloan33-eu/q12-3-telephone-call", function (req, res) {
  const validLocations = filterUnchecked(req.session.data["contact-pref"]);
  // redirect to the fist element
  if (validLocations.includes("email")) {
    res.redirect("q13-1-email-address");
  } else if (validLocations.includes("letter")) {
    res.redirect("q13-3-postal-address");
  } else {
    res.redirect("check-your-answers");
  }
});

router.post("/vloan33-eu/q13-1-email-address", function (req, res) {
  const validLocations = filterUnchecked(req.session.data["contact-pref"]);
  // redirect to the fist element

  if (validLocations.includes("letter")) {
    res.redirect("q13-3-postal-address");
  } else {
    res.redirect("check-your-answers");
  }
});

router.post("/vloan33-eu/q13-3-postal-address", function (req, res) {
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
  } else if (validLocations.includes("letter")) {
    res.redirect("q13-3-postal-address");
  } else {
    res.redirect("check-your-answers");
  }
});

router.post("/vloan33-roi/alt_format_answer", function (req, res) {
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

router.post("/vloan33-roi/filter-birth-answer", function (req, res) {
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
router.post("/vloan33-roi/child_benefit_answer", function (req, res) {
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
router.post("/vloan33-roi/benefits_a1_answer", function (req, res) {
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
router.post("/vloan33-roi/loan_a1_answer", function (req, res) {
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

//CRISTINA
router.post("/vloan33-roi/upload_document", function (req, res) {
  // Make a variable and give it the value from 'plan-to-work'
  var homeOffice = req.session.data["upload_docs"];

  // Check whether the variable matches a condition
  if (homeOffice === "yes") {
    // Send user to next page
    res.redirect("doc_guidance_sharecode");
  } else {
    // Send user to ineligible page
    res.redirect("doc_guidance_appointment");
  }
});

//UPLOAD FEATURE//

//CRISTINA's ORGINAL FOR PAGE 1

router.post("/vloan33-roi/upload_1_answer", function (req, res) {
  // Make a variable and give it the value from 'plan-to-work'
  var correct = req.session.data["upload_01"];

  // Check whether the variable matches a condition
  if (correct === "yes") {
    // Send user to next page
    res.redirect("upload_7");
  }

  // Check whether the variable matches a condition
  if (correct === "no") {
    // Send user to next page
    res.redirect("check-your-answers_no_upload.html");
  }
});

router.post("/vloan33-roi/upload_9_answer", function (req, res) {
  // Make a variable and give it the value from 'plan-to-work'
  var correct = req.session.data["upload_09"];

  // Check whether the variable matches a condition
  if (correct === "yes") {
    // Send user to next page
    res.redirect("upload_7");
  }

  // Check whether the variable matches a condition
  if (correct === "no") {
    // Send user to next page
    res.redirect("upload_4");
  }
});

//CRISTINA
router.post("/vloan33-roi/upload_answer_11", function (req, res) {
  // Make a variable and give it the value from 'plan-to-work'
  var upload = req.session.data["upload_011"];

  // Check whether the variable matches a condition
  if (upload === "Yes") {
    // Send user to next page
    res.redirect("upload_20");
  } else {
    // Send user to ineligible page
    res.redirect("upload_7");
  }
});

//CRISTINA
router.post("/vloan33-roi/upload_answer_22b", function (req, res) {
  // Make a variable and give it the value from 'plan-to-work'
  var upload = req.session.data["upload_022"];

  // Check whether the variable matches a condition
  if (upload === "Yes") {
    // Send user to next page
    res.redirect("check-your-answers");
  } else {
    // Send user to ineligible page
    res.redirect("upload_22");
  }
});

//CRISTINA
router.post("/vloan33-roi/upload_answer_21b", function (req, res) {
  // Make a variable and give it the value from 'plan-to-work'
  var upload = req.session.data["upload_021"];

  // Check whether the variable matches a condition
  if (upload === "Yes") {
    // Send user to next page
    res.redirect("upload_7a");
  } else {
    // Send user to ineligible page
    res.redirect("upload_21");
  }
});

//CRISTINA
router.post("/vloan33-roi/upload_answer_20b", function (req, res) {
  // Make a variable and give it the value from 'plan-to-work'
  var upload = req.session.data["upload_020"];

  // Check whether the variable matches a condition
  if (upload === "Yes") {
    // Send user to next page
    res.redirect("check-your-answers");
  } else {
    // Send user to ineligible page
    res.redirect("upload_20");
  }
});

router.post("/vloan33-roi/upload_answer_11a", function (req, res) {
  // Make a variable and give it the value from 'plan-to-work'
  var upload = req.session.data["upload_011"];

  // Check whether the variable matches a condition
  if (upload === "Yes") {
    // Send user to next page
    res.redirect("upload_18");
  } else {
    // Send user to ineligible page
    res.redirect("upload_7a");
  }
});

//CRISTINA

//PAULS Initial Passport question upfront
router.post("/vloan33-roi/upload_answer_18a", function (req, res) {
  // Make a variable and give it the value from 'plan-to-work'
  var homeOffice = req.session.data["upload_18a"];

  // Check whether the variable matches a condition
  if (homeOffice === "yes") {
    // Send user to next page
    res.redirect("upload_20");
  } else {
    // Send user to ineligible page
    res.redirect("upload_18");
  }
});

//UPLOAD FEATURE ENDS//

//PAULS Initial Passport question upfront
router.post("/vloan33-roi/brp-answer", function (req, res) {
  // Make a variable and give it the value from 'plan-to-work'
  var homeOffice = req.session.data["brp-document"];

  // Check whether the variable matches a condition
  if (homeOffice === "Yes") {
    // Send user to next page
    res.redirect("upload_1");
  } else {
    // Send user to ineligible page
    res.redirect("visa_3");
  }
});

//CRISTINA
router.post("/vloan33-roi/visa-answer", function (req, res) {
  // Make a variable and give it the value from 'plan-to-work'
  var visa = req.session.data["visa_01"];

  // Check whether the variable matches a condition
  if (visa === "I used the app") {
    // Send user to next page
    res.redirect("eu_settlement_5");
  }

  if (visa === "I went to a visa application centre") {
    // Send user to next page
    res.redirect("upload_1");
  }

  if (visa === "Sent documents via post") {
    // Send user to next page
    res.redirect("upload_1");
  } else {
    // Send user to ineligible page
    res.redirect("home-office-immigration");
  }
});

//CRISTINA
router.post("/vloan33-roi/visa_1_answer", function (req, res) {
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
router.post("/vloan33-roi/visa-answer2", function (req, res) {
  // Make a variable and give it the value from 'plan-to-work'
  var visa = req.session.data["visa_02"];

  // Check whether the variable matches a condition
  if (visa === "Yes") {
    // Send user to next page
    res.redirect("visa");
  } else {
    // Send user to ineligible page
    res.redirect("home-office-immigration");
  }
});

//CRISTINA
router.post("/vloan33-roi/visa-answer3", function (req, res) {
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
router.post("/vloan33-roi/immigration-answer", function (req, res) {
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
router.post("/vloan33-roi/eu-treaty-answer", function (req, res) {
  // Make a variable and give it the value from 'plan-to-work'
  var treaty = req.session.data["eu-treaty01"];

  // Check whether the variable matches a condition
  if (treaty === "Yes") {
    // Send user to next page
    res.redirect("eu_settlement_1");
  } else {
    // Send user to ineligible page
    res.redirect("home-office-immigration");
  }
});

//CRISTINA
router.post("/vloan33-roi/settlement-answer1", function (req, res) {
  // Make a variable and give it the value from 'plan-to-work'
  var settlement = req.session.data["settlement-answer01"];

  // Check whether the variable matches a condition
  if (settlement === "Yes") {
    // Send user to next page
    res.redirect("eu_settlement_2");
  } else {
    // Send user to ineligible page
    res.redirect("home-office-immigration");
  }
});

//CRISTINA
router.post("/vloan33-roi/settlement-answer2", function (req, res) {
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
    res.redirect("home-office-immigration");
  }
});

//CRISTINA
router.post("/vloan33-roi/lived-uk1A", function (req, res) {
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

router.post("/vloan33-roi/lived-uk4A", function (req, res) {
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

router.post("/vloan33-roi/have-nino-answer", function (req, res) {
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
router.post("/vloan33-roi/filter-nationality-answer", function (req, res) {
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
    res.redirect("/vloan33-roi/version-30row/lived-uk_4A"); //merging EU to the ROW cohort//
  }

  if (uk.includes(passport)) {
    // Send user to no BRP page
    res.redirect("/vloan33-roi/version-30row/lived-uk_4A");
  }

  if (roi.includes(passport)) {
    // Send user to no BRP page
    res.redirect("/vloan33-roi/version-30row/lived-uk_4A");
  } else {
    // Send user to BRP page
    res.redirect("/vloan33-roi/version-30row/lived-uk_4A");
  }
});

//CRISTINA
router.post("/vloan33-roi/warning_answer", function (req, res) {
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
router.post("/vloan33-roi/dob_answer", function (req, res) {
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
router.post("/vloan33-roi/passport-answer", function (req, res) {
  // Make a variable and give it the value from 'plan-to-work'
  var homeOffice = req.session.data["passport-document"];

  // Check whether the variable matches a condition
  if (homeOffice === "Yes") {
    // Send user to next page
    res.redirect("check-your-answers");
  } else {
    // Send user to ineligible page
    res.redirect("document_id");
  }
});

//CRISTINA
router.post("/vloan33-roi/id-answer", function (req, res) {
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
router.post("/vloan33-roi/home-answer", function (req, res) {
  // Make a variable and give it the value from 'plan-to-work'
  var homeOffice = req.session.data["home-number"];

  // Check whether the variable matches a condition
  if (homeOffice === "Yes") {
    // Send user to next page
    res.redirect("upload_1");
  } else {
    // Send user to ineligible page
    res.redirect("eu-treaty");
  }
});

//CRISTINA
router.post("/vloan33-roi/immigration-answer", function (req, res) {
  // Make a variable and give it the value from 'plan-to-work'
  var homeOffice = req.session.data["immigration-number"];

  // Check whether the variable matches a condition
  if (homeOffice === "Yes") {
    // Send user to next page
    res.redirect("upload_1");
  } else {
    // Send user to ineligible page
    res.redirect("upload_1");
  }
});

//CRISTINA
router.post("/vloan33-roi/plan-to-work-answer", function (req, res) {
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
router.post("/vloan33-roi/spanish-question-answer", function (req, res) {
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
router.post("/vloan33-roi/residence-card-answer", function (req, res) {
  // Make a variable and give it the value from 'plan-to-work'
  var planToLoan = req.session.data["residence-card"];

  // Check whether the variable matches a condition
  if (planToLoan === "Yes") {
    // Send user to next page
    res.redirect("home-office-immigration");
  } else {
    // Send user to ineligible page
    res.redirect("home-office-immigration");
  }
});

//CRISTINA
router.post("/vloan33-roi/home-office-answer", function (req, res) {
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
router.post("/vloan33-roi/ho-immigration-answer", function (req, res) {
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
router.post("/vloan33-roi/lived-uk-answer", function (req, res) {
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
router.post("/vloan33-roi/name-changes-answer", function (req, res) {
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
router.post("/vloan33-roi/name-changes-answerx2", function (req, res) {
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
  "/vloan33-roi/address-correspondence-question-answers",
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
  "/vloan33-roi/address-correspondence-results-answers",
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
router.post("/vloan33-roi/have-brp-answer", function (req, res) {
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

router.post("/vloan33-roi/in-work-answer", function (req, res) {
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
router.post("/vloan33-roi/brp-router", function (req, res) {
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
  "/vloan33-roi/upload-brp-image",
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
  "/vloan33-roi/upload-self-image",
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
router.post("/vloan33-roi/any-other-names", function (req, res) {
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
router.post("/vloan33-roi/contacting-answer", function (req, res) {
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

router.post("/vloan33-roi/name-changes", function (req, res) {
  var nameChanges = req.session.data["name-changes"];

  if (nameChanges === "Both") {
    res.redirect("q04-1-other-names-details");
  } else {
    res.redirect("q04-1-other-names-details");
  }
});

router.get("/vloan33-roi/q03-name", function (req, res, next) {
  res.locals.change = "change" in req.query;
  next();
});

router.post("/vloan33-roi/add-other-name", function (req, res) {
  const givenNames = req.session.data["other-given-names"];
  const familyName = req.session.data["other-family-name"];

  const otherNames = req.session.data["other-names"] || [];

  otherNames.push({ givenNames, familyName });
  req.session.data["other-names"] = otherNames;
  res.redirect("date-of-birth");
});

router.get("/vloan33-roi/change-other-name/:id", function (req, res) {
  const nameId = parseInt(req.params.id, 10);
  const otherNames = req.session.data["other-names"] || [];
  const { givenNames, familyName } = otherNames[nameId];

  res.locals.id = nameId;
  res.locals.change = true;
  res.locals.givenNames = givenNames;
  res.locals.familyName = familyName;

  res.render("version-06/q04-1-other-names-details.html");
});

router.post("/vloan33-roi/change-other-name/:id", function (req, res) {
  const nameId = parseInt(req.params.id, 10);
  const givenNames = req.session.data["other-given-names"];
  const familyName = req.session.data["other-family-name"];
  const otherNames = req.session.data["other-names"] || [];

  otherNames[nameId] = { givenNames, familyName };
  req.session.data["other-names"] = otherNames;

  res.redirect("../q04-2-other-names-list");
});

router.get("/vloan33-roi/delete-other-name/:id", function (req, res) {
  const nameId = req.params.id;
  const otherNames = req.session.data["other-names"] || [];
  const { givenNames, familyName } = otherNames[nameId];

  res.locals.name = `${givenNames} ${familyName}`;

  res.render("version-06/delete-other-name.html");
});

router.post("/vloan33-roi/delete-other-name/:id", function (req, res) {
  const deleteNames = req.session.data["delete-name"];

  if (deleteNames === "yes") {
    const nameId = parseInt(req.params.id, 10);
    const otherNames = req.session.data["other-names"] || [];
    otherNames.splice(nameId, 1);
    req.session.data["other-names"] = otherNames;
  }

  res.redirect("../q04-2-other-names-list");
});

router.get("/vloan33-roi/q04-2-other-names-list", function (req, res) {
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

router.post("/vloan33-roi/other-names-list-answer", function (req, res) {
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

router.post("/vloan33-roi/contacting-you", function (req, res) {
  const validLocations = filterUnchecked(req.session.data["contact-pref"]);
  // redirect to the fist element
  if (validLocations.includes("telephone") && validLocations.includes("sms")) {
    // redirect them to the mobile page
    res.redirect("q12-1-mobile");
  } else if (validLocations.includes("sms")) {
    res.redirect("q12-1-mobile");
  } else if (validLocations.includes("telephone")) {
    res.redirect("q12-2-telephone");
  } else if (validLocations.includes("email")) {
    res.redirect("q13-1-email-address");
  } else if (validLocations.includes("letter")) {
    res.redirect("q13-3-postal-address");
  } else {
    res.redirect("check-your-answers");
  }
});

router.post("/vloan33-roi/q12-1-mobile", function (req, res) {
  const validLocations = filterUnchecked(req.session.data["contact-pref"]);
  // redirect to the fist element
  if (validLocations.includes("telephone") && validLocations.includes("sms")) {
    // redirect them to the mobile page
    res.redirect("q12-3-telephone-call");
  } else if (validLocations.includes("email")) {
    res.redirect("q13-1-email-address");
  } else if (validLocations.includes("letter")) {
    res.redirect("q13-3-postal-address");
  } else {
    res.redirect("check-your-answers");
  }
});

router.post("/vloan33-roi/q12-2-telephone", function (req, res) {
  const validLocations = filterUnchecked(req.session.data["contact-pref"]);
  // redirect to the fist element

  if (validLocations.includes("email")) {
    res.redirect("q13-1-email-address");
  } else if (validLocations.includes("letter")) {
    res.redirect("q13-3-postal-address");
  } else {
    res.redirect("check-your-answers");
  }
});

// * TO FIX * need a router here to allow user to answer 'no', input an alternative number, then continue with email and postal address questions
router.post("/vloan33-roi/q12-3-telephone-call", function (req, res) {
  const validLocations = filterUnchecked(req.session.data["contact-pref"]);
  // redirect to the fist element
  if (validLocations.includes("email")) {
    res.redirect("q13-1-email-address");
  } else if (validLocations.includes("letter")) {
    res.redirect("q13-3-postal-address");
  } else {
    res.redirect("check-your-answers");
  }
});

router.post("/vloan33-roi/q13-1-email-address", function (req, res) {
  const validLocations = filterUnchecked(req.session.data["contact-pref"]);
  // redirect to the fist element

  if (validLocations.includes("letter")) {
    res.redirect("q13-3-postal-address");
  } else {
    res.redirect("check-your-answers");
  }
});

router.post("/vloan33-roi/q13-3-postal-address", function (req, res) {
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
  } else if (validLocations.includes("letter")) {
    res.redirect("q13-3-postal-address");
  } else {
    res.redirect("check-your-answers");
  }
});

router.post("/vloan33-row/alt_format_answer", function (req, res) {
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

router.post("/vloan33-row/filter-birth-answer", function (req, res) {
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
router.post("/vloan33-row/child_benefit_answer", function (req, res) {
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
router.post("/vloan33-row/benefits_a1_answer", function (req, res) {
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
router.post("/vloan33-row/loan_a1_answer", function (req, res) {
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

router.post("/vloan33-row/upload_optout_answer", function (req, res) {
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
    res.redirect("check-your-answers-no-upload");
  }
});

//CRISTINA
router.post("/vloan33-row/upload_passport_check_answer", function (req, res) {
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
router.post("/vloan33-row/upload_id_check_answer", function (req, res) {
  // Make a variable and give it the value from 'plan-to-work'
  var upload = req.session.data["upload_id_check_answer1"];

  // Check whether the variable matches a condition
  if (upload === "Yes") {
    // Send user to next page
    res.redirect("check-your-answers");
  } else {
    // Send user to ineligible page
    res.redirect("upload_22");
  }
});

//CRISTINA
router.post("/vloan33-row/upload_selfie_check_answer", function (req, res) {
  // Make a variable and give it the value from 'plan-to-work'
  var upload = req.session.data["upload_selfie_check_answer1"];

  // Check whether the variable matches a condition
  if (upload === "Yes") {
    // Send user to next page
    res.redirect("upload_brpfront");
  } else {
    // Send user to ineligible page
    res.redirect("upload_selfie");
  }
});

//CRISTINA
router.post("/vloan33-row/upload_visa_check_answer", function (req, res) {
  // Make a variable and give it the value from 'plan-to-work'
  var upload = req.session.data["upload_visa_check_answer1"];

  // Check whether the variable matches a condition
  if (upload === "Yes") {
    // Send user to next page
    res.redirect("check-your-answers");
  } else {
    // Send user to ineligible page
    res.redirect("upload_visa");
  }
});

router.post("/vloan33-row/upload_brpfront_check_answer", function (req, res) {
  // Make a variable and give it the value from 'plan-to-work'
  var upload = req.session.data["upload_brpfront_check_answer1"];

  // Check whether the variable matches a condition
  if (upload === "Yes") {
    // Send user to next page
    res.redirect("upload_visa");
  } else {
    // Send user to ineligible page
    res.redirect("upload_passport_check");
  }
});

//PAULS Initial Passport question upfront
router.post("/vloan33-row/upload_brpback_check_answer", function (req, res) {
  // Make a variable and give it the value from 'plan-to-work'
  var homeOffice = req.session.data["upload_brpback_check_answer1"];

  // Check whether the variable matches a condition
  if (homeOffice === "yes") {
    // Send user to next page
    res.redirect("upload_visa");
  } else {
    // Send user to ineligible page
    res.redirect("upload_brpback");
  }
});

//UPLOAD FEATURE ENDS//

//UPLOAD VISA ROUTE//
router.post("/vloan33-row/upload_optout_vr", function (req, res) {
  // Make a variable and give it the value from 'plan-to-work'
  var correct = req.session.data["upload_optout_vr1"];

  // Check whether the variable matches a condition
  if (correct === "yes") {
    // Send user to next page
    res.redirect("upload_passport_vr");
  }

  // Check whether the variable matches a condition
  if (correct === "no") {
    // Send user to next page
    res.redirect("check-your-answers-no-upload");
  }
});

//CRISTINA
router.post(
  "/vloan33-row/upload_passport_check_answer_vr",
  function (req, res) {
    // Make a variable and give it the value from 'plan-to-work'
    var upload = req.session.data["upload_passport_check_answer_vr1"];

    // Check whether the variable matches a condition
    if (upload === "Yes") {
      // Send user to next page
      res.redirect("upload_selfie_vr");
    } else {
      // Send user to ineligible page
      res.redirect("upload_passport_vr");
    }
  }
);

router.post("/vloan33-row/upload_selfie_check_answer_vr", function (req, res) {
  // Make a variable and give it the value from 'plan-to-work'
  var upload = req.session.data["upload_selfie_check_answer_vr1"];

  // Check whether the variable matches a condition
  if (upload === "Yes") {
    // Send user to next page
    res.redirect("upload_visa_vr");
  } else {
    // Send user to ineligible page
    res.redirect("upload_selfie_vr");
  }
});

//CRISTINA
router.post("/vloan33-row/upload_visa_check_answer_vr", function (req, res) {
  // Make a variable and give it the value from 'plan-to-work'
  var upload = req.session.data["upload_visa_check_answer_vr1"];

  // Check whether the variable matches a condition
  if (upload === "Yes") {
    // Send user to next page
    res.redirect("check-your-answers-vr");
  } else {
    // Send user to ineligible page
    res.redirect("upload_visa_vr");
  }
});

// end visa route

//CRISTINA
router.post("/vloan33-row/vignette-answer1", function (req, res) {
  // Make a variable and give it the value from 'plan-to-work'
  var settlement = req.session.data["vignette-answer01"];

  // Check whether the variable matches a condition
  if (settlement === "Yes") {
    // Send user to next page
    res.redirect("upload_optout");
  } else {
    // Send user to ineligible page
    res.redirect("home-office-immigration");
  }
});

//CRISTINA
router.post("/vloan33-row/digital-answer1", function (req, res) {
  // Make a variable and give it the value from 'plan-to-work'
  var settlement = req.session.data["digital-answer01"];

  // Check whether the variable matches a condition
  if (settlement === "Yes") {
    // Send user to next page
    res.redirect("upload_optout");
  } else {
    // Send user to ineligible page
    res.redirect("home-office-immigration");
  }
});

//PAULS Initial Passport question upfront
router.post("/vloan33-row/brp-answer", function (req, res) {
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
router.post("/vloan33-row/visa-answer", function (req, res) {
  // Make a variable and give it the value from 'plan-to-work'
  var visa = req.session.data["visa_01"];

  // Check whether the variable matches a condition
  if (visa === "I used the app") {
    // Send user to next page
    res.redirect("eu_settlement_5");
  }

  if (visa === "I went to a visa application centre") {
    // Send user to next page
    res.redirect("upload_optout_vr");
  }

  if (visa === "Sent documents via post") {
    // Send user to next page
    res.redirect("upload_optout_vr");
  } else {
    // Send user to ineligible page
    res.redirect("home-office-residence");
  }
});

//CRISTINA
router.post("/vloan33-row/visa_1_answer", function (req, res) {
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
router.post("/vloan33-row/visa-answer2", function (req, res) {
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
router.post("/vloan33-row/visa-answer3", function (req, res) {
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
router.post("/vloan33-row/immigration-answer", function (req, res) {
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
router.post("/vloan33-row/eu-treaty-answer", function (req, res) {
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
router.post("/vloan33-row/settlement-answer1", function (req, res) {
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
router.post("/vloan33-row/settlement-answer2", function (req, res) {
  // Make a variable and give it the value from 'plan-to-work'
  var settlement = req.session.data["settlement-answer02"];

  // Check whether the variable matches a condition
  if (settlement === "Settled") {
    // Send user to next page
    res.redirect("upload_optout");
  }

  if (settlement === "Pre-settled") {
    // Send user to next page
    res.redirect("upload_optout");
  } else {
    // Send user to ineligible page
    res.redirect("home-office-residence");
  }
});

//CRISTINA
router.post("/vloan33-row/lived-uk1A", function (req, res) {
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

router.post("/vloan33-row/lived-uk4A", function (req, res) {
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

router.post("/vloan33-row/have-nino-answer", function (req, res) {
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
router.post("/vloan33-row/filter-nationality-answer", function (req, res) {
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
    res.redirect("/vloan33-row/version-29row/lived-uk_4A"); //merging EU to the ROW cohort//
  }

  if (uk.includes(passport)) {
    // Send user to no BRP page
    res.redirect("/vloan33-row/version-row/lived-uk_4A");
  }

  if (roi.includes(passport)) {
    // Send user to no BRP page
    res.redirect("/vloan33-row/version-row/lived-uk_4A");
  } else {
    // Send user to BRP page
    res.redirect("/vloan33-row/version-29row/lived-uk_4A");
  }
});

//CRISTINA
router.post("/vloan33-row/warning_answer", function (req, res) {
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
router.post("/vloan33-row/dob_answer", function (req, res) {
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
router.post("/vloan33-row/passport-answer", function (req, res) {
  // Make a variable and give it the value from 'plan-to-work'
  var homeOffice = req.session.data["passport-document"];

  // Check whether the variable matches a condition
  if (homeOffice === "Yes") {
    // Send user to next page
    res.redirect("brp-number");
  } else {
    // Send user to ineligible page
    res.redirect("brp-number");
  }
});

//CRISTINA
router.post("/vloan33-row/id-answer", function (req, res) {
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
router.post("/vloan33-row/home-answer", function (req, res) {
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
router.post("/vloan33-row/immigration-answer", function (req, res) {
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
router.post("/vloan33-row/plan-to-work-answer", function (req, res) {
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
router.post("/vloan33-row/spanish-question-answer", function (req, res) {
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
router.post("/vloan33-row/residence-card-answer", function (req, res) {
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
router.post("/vloan33-row/home-office-answer", function (req, res) {
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
router.post("/vloan33-row/ho-immigration-answer", function (req, res) {
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
router.post("/vloan33-row/lived-uk-answer", function (req, res) {
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
router.post("/vloan33-row/name-changes-answer", function (req, res) {
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
router.post("/vloan33-row/name-changes-answerx2", function (req, res) {
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
  "/vloan33-row/address-correspondence-question-answers",
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
  "/vloan33-row/address-correspondence-results-answers",
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
router.post("/vloan33-row/have-brp-answer", function (req, res) {
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

router.post("/vloan33-row/in-work-answer", function (req, res) {
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
router.post("/vloan33-row/brp-router", function (req, res) {
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
  "/vloan33-row/upload-brp-image",
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
  "/vloan33-row/upload-self-image",
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
router.post("/vloan33-row/any-other-names", function (req, res) {
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
router.post("/vloan33-row/contacting-answer", function (req, res) {
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

router.post("/vloan33-row/name-changes", function (req, res) {
  var nameChanges = req.session.data["name-changes"];

  if (nameChanges === "Both") {
    res.redirect("q04-1-other-names-details");
  } else {
    res.redirect("q04-1-other-names-details");
  }
});

router.get("/vloan33-row/q03-name", function (req, res, next) {
  res.locals.change = "change" in req.query;
  next();
});

router.post("/vloan33-row/add-other-name", function (req, res) {
  const givenNames = req.session.data["other-given-names"];
  const familyName = req.session.data["other-family-name"];

  const otherNames = req.session.data["other-names"] || [];

  otherNames.push({ givenNames, familyName });
  req.session.data["other-names"] = otherNames;
  res.redirect("date-of-birth");
});

router.get("/vloan33-row/change-other-name/:id", function (req, res) {
  const nameId = parseInt(req.params.id, 10);
  const otherNames = req.session.data["other-names"] || [];
  const { givenNames, familyName } = otherNames[nameId];

  res.locals.id = nameId;
  res.locals.change = true;
  res.locals.givenNames = givenNames;
  res.locals.familyName = familyName;

  res.render("version-06/q04-1-other-names-details.html");
});

router.post("/vloan33-row/change-other-name/:id", function (req, res) {
  const nameId = parseInt(req.params.id, 10);
  const givenNames = req.session.data["other-given-names"];
  const familyName = req.session.data["other-family-name"];
  const otherNames = req.session.data["other-names"] || [];

  otherNames[nameId] = { givenNames, familyName };
  req.session.data["other-names"] = otherNames;

  res.redirect("../q04-2-other-names-list");
});

router.get("/vloan33-row/delete-other-name/:id", function (req, res) {
  const nameId = req.params.id;
  const otherNames = req.session.data["other-names"] || [];
  const { givenNames, familyName } = otherNames[nameId];

  res.locals.name = `${givenNames} ${familyName}`;

  res.render("version-06/delete-other-name.html");
});

router.post("/vloan33-row/delete-other-name/:id", function (req, res) {
  const deleteNames = req.session.data["delete-name"];

  if (deleteNames === "yes") {
    const nameId = parseInt(req.params.id, 10);
    const otherNames = req.session.data["other-names"] || [];
    otherNames.splice(nameId, 1);
    req.session.data["other-names"] = otherNames;
  }

  res.redirect("../q04-2-other-names-list");
});

router.get("/vloan33-row/q04-2-other-names-list", function (req, res) {
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

router.post("/vloan33-row/other-names-list-answer", function (req, res) {
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

router.post("/vloan33-row/contacting-you", function (req, res) {
  const validLocations = filterUnchecked(req.session.data["contact-pref"]);
  // redirect to the fist element
  if (validLocations.includes("telephone") && validLocations.includes("sms")) {
    // redirect them to the mobile page
    res.redirect("q12-1-mobile");
  } else if (validLocations.includes("sms")) {
    res.redirect("q12-1-mobile");
  } else if (validLocations.includes("telephone")) {
    res.redirect("q12-2-telephone");
  } else if (validLocations.includes("email")) {
    res.redirect("q13-1-email-address");
  } else if (validLocations.includes("letter")) {
    res.redirect("q13-3-postal-address");
  } else {
    res.redirect("check-your-answers");
  }
});

router.post("/vloan33-row/q12-1-mobile", function (req, res) {
  const validLocations = filterUnchecked(req.session.data["contact-pref"]);
  // redirect to the fist element
  if (validLocations.includes("telephone") && validLocations.includes("sms")) {
    // redirect them to the mobile page
    res.redirect("q12-3-telephone-call");
  } else if (validLocations.includes("email")) {
    res.redirect("q13-1-email-address");
  } else if (validLocations.includes("letter")) {
    res.redirect("q13-3-postal-address");
  } else {
    res.redirect("check-your-answers");
  }
});

router.post("/vloan33-row/q12-2-telephone", function (req, res) {
  const validLocations = filterUnchecked(req.session.data["contact-pref"]);
  // redirect to the fist element

  if (validLocations.includes("email")) {
    res.redirect("q13-1-email-address");
  } else if (validLocations.includes("letter")) {
    res.redirect("q13-3-postal-address");
  } else {
    res.redirect("check-your-answers");
  }
});

// * TO FIX * need a router here to allow user to answer 'no', input an alternative number, then continue with email and postal address questions
router.post("/vloan33-row/q12-3-telephone-call", function (req, res) {
  const validLocations = filterUnchecked(req.session.data["contact-pref"]);
  // redirect to the fist element
  if (validLocations.includes("email")) {
    res.redirect("q13-1-email-address");
  } else if (validLocations.includes("letter")) {
    res.redirect("q13-3-postal-address");
  } else {
    res.redirect("check-your-answers");
  }
});

router.post("/vloan33-row/q13-1-email-address", function (req, res) {
  const validLocations = filterUnchecked(req.session.data["contact-pref"]);
  // redirect to the fist element

  if (validLocations.includes("letter")) {
    res.redirect("q13-3-postal-address");
  } else {
    res.redirect("check-your-answers");
  }
});

router.post("/vloan33-row/q13-3-postal-address", function (req, res) {
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
  } else if (validLocations.includes("letter")) {
    res.redirect("q13-3-postal-address");
  } else {
    res.redirect("check-your-answers");
  }
});

router.post("/vloan33/passport-answer", function (req, res) {
  var passcheck = req.session.data["passport-question"];

  if (passcheck === "Yes") {
    res.redirect("upload_1a");
  } else {
    res.redirect("lived-uk");
  }
});

//PAUL
router.post("/vloan33/upload_8", function (req, res) {
  // Make a variable and give it the value from 'plan-to-work'
  var clear = req.session.data["clear_01"];

  // Check whether the variable matches a condition
  if (clear === "Yes") {
    // Send user to next page
    res.redirect("upload_9");
  }

  // Check whether the variable matches a condition
  if (clear === "No") {
    // Send user to next page
    res.redirect("");
  }
});

//PAUL
router.post("/vloan33/upload_9_answer", function (req, res) {
  // Make a variable and give it the value from 'plan-to-work'
  var correct = req.session.data["upload_09"];

  // Check whether the variable matches a condition
  if (correct === "yes") {
    // Send user to next page
    res.redirect("upload_7");
  }

  // Check whether the variable matches a condition
  if (correct === "no") {
    // Send user to next page
    res.redirect("upload_5");
  }
});

router.post("/vloan33/upload_9row_answer", function (req, res) {
  // Make a variable and give it the value from 'plan-to-work'
  var correct = req.session.data["upload_09"];

  // Check whether the variable matches a condition
  if (correct === "yes") {
    // Send user to next page
    res.redirect("upload_7a");
  }

  // Check whether the variable matches a condition
  if (correct === "no") {
    // Send user to next page
    res.redirect("upload_5row");
  }
});

//PAUL UPLOAD 12 CONFIRM PAGE
router.post("/vloan33/upload_confirm", function (req, res) {
  // Make a variable and give it the value from 'upload_12'
  var uploadConfirm = req.session.data["upload"];
});


//CRISTINA's ORGINAL FOR PAGE 1

router.post("/vloan33/upload_1_answer", function (req, res) {
  // Make a variable and give it the value from 'plan-to-work'
  var correct = req.session.data["upload_01"];

  // Check whether the variable matches a condition
  if (correct === "yes") {
    // Send user to next page
    res.redirect("upload_4");
  }

  // Check whether the variable matches a condition
  if (correct === "no") {
    // Send user to next page
    res.redirect("upload_14");
  }
});

router.post("/vloan33/upload_2-answer", function (req, res) {
  // Make a variable and give it the value from 'plan-to-work'
  var document = req.session.data["upload_02"];
  // Check whether the variable matches a condition
  if (document === "1") {
    // Send user to next page
    res.redirect("upload_3");
  }
  // Check whether the variable matches a condition
  if (document === "2") {
    // Send user to next page
    res.redirect("upload_15");
  }
  // Check whether the variable matches a condition
  if (document === "3") {
    // Send user to next page
    res.redirect("upload_3");
  } else {
    // Send user to cannot do it this way page
    res.redirect("upload_14");
  }
});

//PAUL
router.post("/vloan33/upload_8", function (req, res) {
  // Make a variable and give it the value from 'plan-to-work'
  var clear = req.session.data["clear_01"];

  // Check whether the variable matches a condition
  if (clear === "Yes") {
    // Send user to next page
    res.redirect("upload_9");
  }

  // Check whether the variable matches a condition
  if (clear === "No") {
    // Send user to next page
    res.redirect("");
  }
});

//PAUL
router.post("/vloan33/upload_9_answer", function (req, res) {
  // Make a variable and give it the value from 'plan-to-work'
  var correct = req.session.data["upload_09"];

  // Check whether the variable matches a condition
  if (correct === "yes") {
    // Send user to next page
    res.redirect("upload_7");
  }

  // Check whether the variable matches a condition
  if (correct === "no") {
    // Send user to next page
    res.redirect("upload_8");
  }
});

//CRISTINA
router.post("/vloan33/upload_answer_11", function (req, res) {
  // Make a variable and give it the value from 'plan-to-work'
  var upload = req.session.data["upload_011"];

  // Check whether the variable matches a condition
  if (upload === "Yes") {
    // Send user to next page
    res.redirect("upload_12");
  } else {
    // Send user to ineligible page
    res.redirect("upload_10");
  }
});

//CRISTINA
router.post("/vloan33/upload_answer_20", function (req, res) {
  // Make a variable and give it the value from 'plan-to-work'
  var upload = req.session.data["upload_020"];

  // Check whether the variable matches a condition
  if (upload === "Yes") {
    // Send user to next page
    res.redirect("upload_12");
  } else {
    // Send user to ineligible page
    res.redirect("upload_19");
  }
});

//CRISTINA
router.post("/vloan33/upload_document", function (req, res) {
  // Make a variable and give it the value from 'plan-to-work'
  var homeOffice = req.session.data["upload_docs"];

  // Check whether the variable matches a condition
  if (homeOffice === "yes") {
    // Send user to next page
    res.redirect("plan-to-work");
  } else {
    // Send user to ineligible page
    res.redirect("doc_guidance_appointment");
  }
});

//CRISTINA
router.post("/vloan33/lived-uk1A", function (req, res) {
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

router.post("/vloan33/lived-uk4A", function (req, res) {
  // Make a variable and give it the value from 'plan-to-work'
  var homeOffice = req.session.data["lived-uk04A"];

  // Check whether the variable matches a condition
  if (homeOffice === "Yes") {
    // Send user to next page
    res.redirect("passport-number");
  } else {
    // Send user to ineligible page
    res.redirect("lived-uk_4B");
  }
});

//CRISTINA
router.post("/vloan33/benefits_a1_answer", function (req, res) {
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
router.post("/vloan33/loan_a1_answer", function (req, res) {
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

//CRISTINA
router.post("/vloan33/settlement-answer1", function (req, res) {
  // Make a variable and give it the value from 'plan-to-work'
  var settlement = req.session.data["settlement-answer01"];

  // Check whether the variable matches a condition
  if (settlement === "Yes") {
    // Send user to next page
    res.redirect("eu_settlement_2");
  } else {
    // Send user to ineligible page
    res.redirect("upload_1");
  }
});

//CRISTINA
router.post("/vloan33/settlement-answer2", function (req, res) {
  // Make a variable and give it the value from 'plan-to-work'
  var settlement = req.session.data["settlement-answer02"];

  // Check whether the variable matches a condition
  if (settlement === "settled") {
    // Send user to next page
    res.redirect("lived-uk");
  }

  // Check whether the variable matches a condition
  if (settlement === "pre-settled") {
    // Send user to next page
    res.redirect("lived-uk");
  } else {
    // Send user to ineligible page
    res.redirect("eu_settlement_3");
  }
});

//CRISTINA
router.post("/vloan33/warning_answer", function (req, res) {
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
router.post("/vloan33/dob_answer", function (req, res) {
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

// Jons hockey EU router
router.post("/vloan33/filter-nationality-answer", function (req, res) {
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

  var uk = ["Welsh", "welsh", "Scottish", "scottish", "British", "british"];

  var roi = ["Irish", "irish"];

  // Make a variable and give it the value from 'nationality'
  var passport = req.session.data["filter-nationality"];
  console.log(req.session.data);
  // Check whether the variable matches a condition

  if (euCountries.includes(passport)) {
    // Send user to no BRP page
    res.redirect("/vloan33-eu/date-of-birth"); //merging EU to the ROW cohort//
  }

  if (uk.includes(passport)) {
    // Send user to no BRP page
    res.redirect("/vloan33-uk/date-of-birth");
  }

  if (roi.includes(passport)) {
    // Send user to no BRP page
    res.redirect("/vloan33-roi/date-of-birth");
  } else {
    // Send user to BRP page
    res.redirect("/vloan33-row/date-of-birth");
  }
});

//CRISTINA
router.post("/vloan33/passport-answer", function (req, res) {
  // Make a variable and give it the value from 'plan-to-work'
  var homeOffice = req.session.data["passport-question"];

  // Check whether the variable matches a condition
  if (homeOffice === "Yes") {
    // Send user to next page
    res.redirect("name");
  } else {
    // Send user to ineligible page
    res.redirect("lived-uk");
  }
});

//CRISTINA
router.post("/vloan33/plan-to-work-answer", function (req, res) {
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
router.post("/vloan33/spanish-question-answer", function (req, res) {
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
router.post("/vloan33/brp-answer", function (req, res) {
  // Make a variable and give it the value from 'plan-to-work'
  var planToLoan = req.session.data["brp-question"];

  // Check whether the variable matches a condition
  if (planToLoan === "Yes") {
    // Send user to next page
    res.redirect("brp-number");
  } else {
    // Send user to ineligible page
    res.redirect("home-office");
  }
});

//CRISTINA
router.post("/vloan33/residence-card-answer", function (req, res) {
  // Make a variable and give it the value from 'plan-to-work'
  var planToLoan = req.session.data["residence-card"];

  // Check whether the variable matches a condition
  if (planToLoan === "Yes") {
    // Send user to next page
    res.redirect("home-office-immigration");
  } else {
    // Send user to ineligible page
    res.redirect("home-office-immigration");
  }
});

//CRISTINA
router.post("/vloan33/home-office-answer", function (req, res) {
  // Make a variable and give it the value from 'plan-to-work'
  var homeOffice = req.session.data["home-office-application"];

  // Check whether the variable matches a condition
  if (homeOffice === "Yes") {
    // Send user to next page
    res.redirect("home-office-residence");
  } else {
    // Send user to ineligible page
    res.redirect("home-office-residence");
  }
});

//CRISTINA
router.post("/vloan33/ho-immigration-answer", function (req, res) {
  // Make a variable and give it the value from 'plan-to-work'
  var homeOffice = req.session.data["ho-immigration"];

  // Check whether the variable matches a condition
  if (homeOffice === "Yes") {
    // Send user to next page
    res.redirect("lived-uk");
  } else {
    // Send user to ineligible page
    res.redirect("lived-uk");
  }
});

//CRISTINA
router.post("/vloan33/lived-uk-answer", function (req, res) {
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
router.post("/vloan33/name-changes-answer", function (req, res) {
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
router.post("/vloan33/name-changes-answerx2", function (req, res) {
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
  "/vloan33/address-correspondence-question-answers",
  function (req, res) {
    // Make a variable and give it the value from 'plan-to-work'
    var addressCorrespondence = req.session.data["have-correspondence"];

    // Check whether the variable matches a condition
    if (addressCorrespondence === "Yes") {
      // Send user to next page
      res.redirect("email-address");
    } else {
      // Send user to ineligible page
      res.redirect("address-correspondence-search");
    }
  }
);

//CRISTINA
router.post(
  "/vloan33/address-correspondence-results-answers",
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
router.post("/vloan33/have-brp-answer", function (req, res) {
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

router.post("/vloan33/in-work-answer", function (req, res) {
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
router.post("/vloan33/brp-router", function (req, res) {
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
  "/vloan33/upload-brp-image",
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
  "/vloan33/upload-self-image",
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
router.post("/vloan33/any-other-names", function (req, res) {
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
router.post("/vloan33/contacting-answer", function (req, res) {
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

router.post("/vloan33/name-changes", function (req, res) {
  var nameChanges = req.session.data["name-changes"];

  if (nameChanges === "Both") {
    res.redirect("q04-1-other-names-details");
  } else {
    res.redirect("q04-1-other-names-details");
  }
});

router.get("/vloan33/q03-name", function (req, res, next) {
  res.locals.change = "change" in req.query;
  next();
});

router.post("/vloan33/add-other-name", function (req, res) {
  const givenNames = req.session.data["other-given-names"];
  const familyName = req.session.data["other-family-name"];

  const otherNames = req.session.data["other-names"] || [];

  otherNames.push({ givenNames, familyName });
  req.session.data["other-names"] = otherNames;
  res.redirect("date-of-birth");
});

router.get("/vloan33/change-other-name/:id", function (req, res) {
  const nameId = parseInt(req.params.id, 10);
  const otherNames = req.session.data["other-names"] || [];
  const { givenNames, familyName } = otherNames[nameId];

  res.locals.id = nameId;
  res.locals.change = true;
  res.locals.givenNames = givenNames;
  res.locals.familyName = familyName;

  res.render("version-06/q04-1-other-names-details.html");
});

router.post("/vloan33/change-other-name/:id", function (req, res) {
  const nameId = parseInt(req.params.id, 10);
  const givenNames = req.session.data["other-given-names"];
  const familyName = req.session.data["other-family-name"];
  const otherNames = req.session.data["other-names"] || [];

  otherNames[nameId] = { givenNames, familyName };
  req.session.data["other-names"] = otherNames;

  res.redirect("../q04-2-other-names-list");
});

router.get("/vloan33/delete-other-name/:id", function (req, res) {
  const nameId = req.params.id;
  const otherNames = req.session.data["other-names"] || [];
  const { givenNames, familyName } = otherNames[nameId];

  res.locals.name = `${givenNames} ${familyName}`;

  res.render("version-06/delete-other-name.html");
});

router.post("/vloan33/delete-other-name/:id", function (req, res) {
  const deleteNames = req.session.data["delete-name"];

  if (deleteNames === "yes") {
    const nameId = parseInt(req.params.id, 10);
    const otherNames = req.session.data["other-names"] || [];
    otherNames.splice(nameId, 1);
    req.session.data["other-names"] = otherNames;
  }

  res.redirect("../q04-2-other-names-list");
});

router.get("/vloan33/q04-2-other-names-list", function (req, res) {
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

router.post("/vloan33/other-names-list-answer", function (req, res) {
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

router.post("/vloan33/contacting-you", function (req, res) {
  const validLocations = filterUnchecked(req.session.data["contact-pref"]);
  // redirect to the fist element
  if (validLocations.includes("telephone") && validLocations.includes("sms")) {
    // redirect them to the mobile page
    res.redirect("q12-1-mobile");
  } else if (validLocations.includes("sms")) {
    res.redirect("q12-1-mobile");
  } else if (validLocations.includes("telephone")) {
    res.redirect("q12-2-telephone");
  } else if (validLocations.includes("email")) {
    res.redirect("q13-1-email-address");
  } else if (validLocations.includes("letter")) {
    res.redirect("q13-3-postal-address");
  } else {
    res.redirect("check-your-answers");
  }
});

router.post("/vloan33/q12-1-mobile", function (req, res) {
  const validLocations = filterUnchecked(req.session.data["contact-pref"]);
  // redirect to the fist element
  if (validLocations.includes("telephone") && validLocations.includes("sms")) {
    // redirect them to the mobile page
    res.redirect("q12-3-telephone-call");
  } else if (validLocations.includes("email")) {
    res.redirect("q13-1-email-address");
  } else if (validLocations.includes("letter")) {
    res.redirect("q13-3-postal-address");
  } else {
    res.redirect("check-your-answers");
  }
});

router.post("/vloan33/q12-2-telephone", function (req, res) {
  const validLocations = filterUnchecked(req.session.data["contact-pref"]);
  // redirect to the fist element

  if (validLocations.includes("email")) {
    res.redirect("q13-1-email-address");
  } else if (validLocations.includes("letter")) {
    res.redirect("q13-3-postal-address");
  } else {
    res.redirect("check-your-answers");
  }
});

// * TO FIX * need a router here to allow user to answer 'no', input an alternative number, then continue with email and postal address questions
router.post("/vloan33/q12-3-telephone-call", function (req, res) {
  const validLocations = filterUnchecked(req.session.data["contact-pref"]);
  // redirect to the fist element
  if (validLocations.includes("email")) {
    res.redirect("q13-1-email-address");
  } else if (validLocations.includes("letter")) {
    res.redirect("q13-3-postal-address");
  } else {
    res.redirect("check-your-answers");
  }
});

router.post("/vloan33/q13-1-email-address", function (req, res) {
  const validLocations = filterUnchecked(req.session.data["contact-pref"]);
  // redirect to the fist element

  if (validLocations.includes("letter")) {
    res.redirect("q13-3-postal-address");
  } else {
    res.redirect("check-your-answers");
  }
});

router.post("/vloan33/q13-3-postal-address", function (req, res) {
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
  } else if (validLocations.includes("letter")) {
    res.redirect("q13-3-postal-address");
  } else {
    res.redirect("check-your-answers");
  }
});

router.post("/vbenefits33-eu/alt_format_answer", function (req, res) {
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

router.post("/vbenefits33-eu/filter-birth-answer", function (req, res) {
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
router.post("/vbenefits33-eu/child_benefit_answer", function (req, res) {
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
router.post("/vbenefits33-eu/benefits_a1_answer", function (req, res) {
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
router.post("/vbenefits33-eu/loan_a1_answer", function (req, res) {
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

router.post("/vbenefits33-eu/upload_optout_answer", function (req, res) {
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
router.post(
  "/vbenefits33-eu/upload_passport_check_answer",
  function (req, res) {
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
  }
);

//CRISTINA
router.post("/vbenefits33-eu/upload_selfie_check_answer", function (req, res) {
  // Make a variable and give it the value from 'plan-to-work'
  var upload = req.session.data["upload_selfie_check_answer1"];

  // Check whether the variable matches a condition
  if (upload === "Yes") {
    // Send user to next page
    res.redirect("upload_visa");
  } else {
    // Send user to ineligible page
    res.redirect("upload_selfie");
  }
});

//CRISTINA
router.post("/vbenefits33-eu/upload_id_check_answer", function (req, res) {
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

//CRISTINA
router.post("/vbenefits33-eu/upload_visa_check_answer", function (req, res) {
  // Make a variable and give it the value from 'plan-to-work'
  var upload = req.session.data["upload_visa_check_answer1"];

  // Check whether the variable matches a condition
  if (upload === "Yes") {
    // Send user to next page
    res.redirect("check-your-answers");
  } else {
    // Send user to ineligible page
    res.redirect("upload_visa");
  }
});

////

//PAULS Initial Passport question upfront
router.post("/vbenefits33-eu/brp-answer", function (req, res) {
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
router.post("/vbenefits33-eu/visa-answer", function (req, res) {
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
    res.redirect("home-office-immigration");
  }
});

//CRISTINA
router.post("/vbenefits33-eu/visa_1_answer", function (req, res) {
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
router.post("/vbenefits33-eu/visa-answer2", function (req, res) {
  // Make a variable and give it the value from 'plan-to-work'
  var visa = req.session.data["visa_02"];

  // Check whether the variable matches a condition
  if (visa === "Yes") {
    // Send user to next page
    res.redirect("visa");
  } else {
    // Send user to ineligible page
    res.redirect("home-office-immigration");
  }
});

//CRISTINA
router.post("/vbenefits33-eu/visa-answer3", function (req, res) {
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
router.post("/vbenefits33-eu/vignette-answer1", function (req, res) {
  // Make a variable and give it the value from 'plan-to-work'
  var settlement = req.session.data["vignette-answer01"];

  // Check whether the variable matches a condition
  if (settlement === "Yes") {
    // Send user to next page
    res.redirect("upload_optout");
  } else {
    // Send user to ineligible page
    res.redirect("home-office-immigration");
  }
});

//CRISTINA
router.post("/vbenefits33-eu/digital-answer1", function (req, res) {
  // Make a variable and give it the value from 'plan-to-work'
  var settlement = req.session.data["digital-answer01"];

  // Check whether the variable matches a condition
  if (settlement === "Yes") {
    // Send user to next page
    res.redirect("upload_optout");
  } else {
    // Send user to ineligible page
    res.redirect("home-office-immigration");
  }
});

//CRISTINA
router.post("/vbenefits33-eu/immigration-answer", function (req, res) {
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
router.post("/vbenefits33-eu/eu-treaty-answer", function (req, res) {
  // Make a variable and give it the value from 'plan-to-work'
  var treaty = req.session.data["eu-treaty01"];

  // Check whether the variable matches a condition
  if (treaty === "Yes") {
    // Send user to next page
    res.redirect("eu_settlement_1");
  } else {
    // Send user to ineligible page
    res.redirect("home-office-immigration");
  }
});

//CRISTINA
router.post("/vbenefits33-eu/settlement-answer1", function (req, res) {
  // Make a variable and give it the value from 'plan-to-work'
  var settlement = req.session.data["settlement-answer01"];

  // Check whether the variable matches a condition
  if (settlement === "Yes") {
    // Send user to next page
    res.redirect("eu_settlement_2");
  } else {
    // Send user to ineligible page
    res.redirect("home-office-immigration");
  }
});

//CRISTINA
router.post("/vbenefits33-eu/settlement-answer2", function (req, res) {
  // Make a variable and give it the value from 'plan-to-work'
  var settlement = req.session.data["settlement-answer02"];

  // Check whether the variable matches a condition
  if (settlement === "Settled") {
    // Send user to next page
    res.redirect("upload_optout");
  }

  if (settlement === "Pre-settled") {
    // Send user to next page
    res.redirect("upload_optout");
  } else {
    // Send user to ineligible page
    res.redirect("home-office-residence");
  }
});

//CRISTINA
router.post("/vbenefits33-eu/lived-uk1A", function (req, res) {
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

router.post("/vbenefits33-eu/lived-uk4A", function (req, res) {
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

router.post("/vbenefits33-eu/have-nino-answer", function (req, res) {
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
router.post("/vbenefits33-eu/filter-nationality-answer", function (req, res) {
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
    res.redirect("/vbenefits33-eu/version-30row/lived-uk_4A"); //merging EU to the ROW cohort//
  }

  if (uk.includes(passport)) {
    // Send user to no BRP page
    res.redirect("/vbenefits33-eu/version-30row/lived-uk_4A");
  }

  if (roi.includes(passport)) {
    // Send user to no BRP page
    res.redirect("/vbenefits33-eu/version-30row/lived-uk_4A");
  } else {
    // Send user to BRP page
    res.redirect("/vbenefits33-eu/version-30row/lived-uk_4A");
  }
});

//CRISTINA
router.post("/vbenefits33-eu/warning_answer", function (req, res) {
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
router.post("/vbenefits33-eu/dob_answer", function (req, res) {
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
router.post("/vbenefits33-eu/passport-answer", function (req, res) {
  // Make a variable and give it the value from 'plan-to-work'
  var homeOffice = req.session.data["passport-document"];

  // Check whether the variable matches a condition
  if (homeOffice === "Yes") {
    // Send user to next page
    res.redirect("visa_3");
  } else {
    // Send user to ineligible page
    res.redirect("document_id");
  }
});

//CRISTINA
router.post("/vbenefits33-eu/id-answer", function (req, res) {
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
router.post("/vbenefits33-eu/home-answer", function (req, res) {
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
router.post("/vbenefits33-eu/immigration-answer", function (req, res) {
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
router.post("/vbenefits33-eu/plan-to-work-answer", function (req, res) {
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
router.post("/vbenefits33-eu/spanish-question-answer", function (req, res) {
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
router.post("/vbenefits33-eu/residence-card-answer", function (req, res) {
  // Make a variable and give it the value from 'plan-to-work'
  var planToLoan = req.session.data["residence-card"];

  // Check whether the variable matches a condition
  if (planToLoan === "Yes") {
    // Send user to next page
    res.redirect("home-office-immigration");
  } else {
    // Send user to ineligible page
    res.redirect("home-office-immigration");
  }
});

//CRISTINA
router.post("/vbenefits33-eu/home-office-answer", function (req, res) {
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
router.post("/vbenefits33-eu/ho-immigration-answer", function (req, res) {
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
router.post("/vbenefits33-eu/lived-uk-answer", function (req, res) {
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
router.post("/vbenefits33-eu/name-changes-answer", function (req, res) {
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
router.post("/vbenefits33-eu/name-changes-answerx2", function (req, res) {
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
  "/vbenefits33-eu/address-correspondence-question-answers",
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
  "/vbenefits33-eu/address-correspondence-results-answers",
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
router.post("/vbenefits33-eu/have-brp-answer", function (req, res) {
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

router.post("/vbenefits33-eu/in-work-answer", function (req, res) {
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
router.post("/vbenefits33-eu/brp-router", function (req, res) {
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
  "/vbenefits33-eu/upload-brp-image",
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
  "/vbenefits33-eu/upload-self-image",
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
router.post("/vbenefits33-eu/any-other-names", function (req, res) {
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
router.post("/vbenefits33-eu/contacting-answer", function (req, res) {
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

router.post("/vbenefits33-eu/name-changes", function (req, res) {
  var nameChanges = req.session.data["name-changes"];

  if (nameChanges === "Both") {
    res.redirect("q04-1-other-names-details");
  } else {
    res.redirect("q04-1-other-names-details");
  }
});

router.get("/vbenefits33-eu/q03-name", function (req, res, next) {
  res.locals.change = "change" in req.query;
  next();
});

router.post("/vbenefits33-eu/add-other-name", function (req, res) {
  const givenNames = req.session.data["other-given-names"];
  const familyName = req.session.data["other-family-name"];

  const otherNames = req.session.data["other-names"] || [];

  otherNames.push({ givenNames, familyName });
  req.session.data["other-names"] = otherNames;
  res.redirect("date-of-birth");
});

router.get("/vbenefits33-eu/change-other-name/:id", function (req, res) {
  const nameId = parseInt(req.params.id, 10);
  const otherNames = req.session.data["other-names"] || [];
  const { givenNames, familyName } = otherNames[nameId];

  res.locals.id = nameId;
  res.locals.change = true;
  res.locals.givenNames = givenNames;
  res.locals.familyName = familyName;

  res.render("version-06/q04-1-other-names-details.html");
});

router.post("/vbenefits33-eu/change-other-name/:id", function (req, res) {
  const nameId = parseInt(req.params.id, 10);
  const givenNames = req.session.data["other-given-names"];
  const familyName = req.session.data["other-family-name"];
  const otherNames = req.session.data["other-names"] || [];

  otherNames[nameId] = { givenNames, familyName };
  req.session.data["other-names"] = otherNames;

  res.redirect("../q04-2-other-names-list");
});

router.get("/vbenefits33-eu/delete-other-name/:id", function (req, res) {
  const nameId = req.params.id;
  const otherNames = req.session.data["other-names"] || [];
  const { givenNames, familyName } = otherNames[nameId];

  res.locals.name = `${givenNames} ${familyName}`;

  res.render("version-06/delete-other-name.html");
});

router.post("/vbenefits33-eu/delete-other-name/:id", function (req, res) {
  const deleteNames = req.session.data["delete-name"];

  if (deleteNames === "yes") {
    const nameId = parseInt(req.params.id, 10);
    const otherNames = req.session.data["other-names"] || [];
    otherNames.splice(nameId, 1);
    req.session.data["other-names"] = otherNames;
  }

  res.redirect("../q04-2-other-names-list");
});

router.get("/vbenefits33-eu/q04-2-other-names-list", function (req, res) {
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

router.post("/vbenefits33-eu/other-names-list-answer", function (req, res) {
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

router.post("/vbenefits33-eu/contacting-you", function (req, res) {
  const validLocations = filterUnchecked(req.session.data["contact-pref"]);
  // redirect to the fist element
  if (validLocations.includes("telephone") && validLocations.includes("sms")) {
    // redirect them to the mobile page
    res.redirect("q12-1-mobile");
  } else if (validLocations.includes("sms")) {
    res.redirect("q12-1-mobile");
  } else if (validLocations.includes("telephone")) {
    res.redirect("q12-2-telephone");
  } else if (validLocations.includes("email")) {
    res.redirect("q13-1-email-address");
  } else if (validLocations.includes("letter")) {
    res.redirect("q13-3-postal-address");
  } else {
    res.redirect("check-your-answers");
  }
});

router.post("/vbenefits33-eu/q12-1-mobile", function (req, res) {
  const validLocations = filterUnchecked(req.session.data["contact-pref"]);
  // redirect to the fist element
  if (validLocations.includes("telephone") && validLocations.includes("sms")) {
    // redirect them to the mobile page
    res.redirect("q12-3-telephone-call");
  } else if (validLocations.includes("email")) {
    res.redirect("q13-1-email-address");
  } else if (validLocations.includes("letter")) {
    res.redirect("q13-3-postal-address");
  } else {
    res.redirect("check-your-answers");
  }
});

router.post("/vbenefits33-eu/q12-2-telephone", function (req, res) {
  const validLocations = filterUnchecked(req.session.data["contact-pref"]);
  // redirect to the fist element

  if (validLocations.includes("email")) {
    res.redirect("q13-1-email-address");
  } else if (validLocations.includes("letter")) {
    res.redirect("q13-3-postal-address");
  } else {
    res.redirect("check-your-answers");
  }
});

// * TO FIX * need a router here to allow user to answer 'no', input an alternative number, then continue with email and postal address questions
router.post("/vbenefits33-eu/q12-3-telephone-call", function (req, res) {
  const validLocations = filterUnchecked(req.session.data["contact-pref"]);
  // redirect to the fist element
  if (validLocations.includes("email")) {
    res.redirect("q13-1-email-address");
  } else if (validLocations.includes("letter")) {
    res.redirect("q13-3-postal-address");
  } else {
    res.redirect("check-your-answers");
  }
});

router.post("/vbenefits33-eu/q13-1-email-address", function (req, res) {
  const validLocations = filterUnchecked(req.session.data["contact-pref"]);
  // redirect to the fist element

  if (validLocations.includes("letter")) {
    res.redirect("q13-3-postal-address");
  } else {
    res.redirect("check-your-answers");
  }
});

router.post("/vbenefits33-eu/q13-3-postal-address", function (req, res) {
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
  } else if (validLocations.includes("letter")) {
    res.redirect("q13-3-postal-address");
  } else {
    res.redirect("check-your-answers");
  }
});

router.post("/vbenefits33-row/alt_format_answer", function (req, res) {
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

router.post("/vbenefits33-row/filter-birth-answer", function (req, res) {
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
router.post("/vbenefits33-row/child_benefit_answer", function (req, res) {
  // Make a variable and give it the value from 'plan-to-work'
  var benefit = req.session.data["child_benefit"];

  // Check whether the variable matches a condition
  if (benefit === "yes") {
    // Send user to next page
    res.redirect("child_benefit_yes");
  } else if (benefit === "no") {
    // Send user to next page
    res.redirect("lived-uk_4A");
  } else {
    // Send user to ineligible page
    res.redirect("child_benefit_unknown");
  }
});

//CRISTINA
router.post("/vbenefits33-row/benefits_a1_answer", function (req, res) {
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
router.post("/vbenefits33-row/loan_a1_answer", function (req, res) {
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

router.post("/vbenefits33-row/upload_optout_answer", function (req, res) {
  // Make a variable and give it the value from 'plan-to-work'
  var correct = req.session.data["upload_optout1"];

  // Check whether the variable matches a condition
  if (correct === "yes") {
    // Send user to next page
    res.redirect("upload_passport");
  } else if (correct === "no") {
    // Send user to next page
    res.redirect("check-your-answers-no-upload");
  }
});

//CRISTINA
router.post(
  "/vbenefits33-row/upload_passport_check_answer",
  function (req, res) {
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
  }
);

//CRISTINA
router.post("/vbenefits33-row/upload_id_check_answer", function (req, res) {
  // Make a variable and give it the value from 'plan-to-work'
  var upload = req.session.data["upload_id_check_answer1"];

  // Check whether the variable matches a condition
  if (upload === "Yes") {
    // Send user to next page
    res.redirect("check-your-answers");
  } else {
    // Send user to ineligible page
    res.redirect("upload_22");
  }
});

//CRISTINA
router.post("/vbenefits33-row/upload_selfie_check_answer", function (req, res) {
  // Make a variable and give it the value from 'plan-to-work'
  var upload = req.session.data["upload_selfie_check_answer1"];

  // Check whether the variable matches a condition
  if (upload === "Yes") {
    // Send user to next page
    res.redirect("upload_brpfront");
  } else {
    // Send user to ineligible page
    res.redirect("upload_selfie");
  }
});

//CRISTINA
router.post("/vbenefits33-row/upload_visa_check_answer", function (req, res) {
  // Make a variable and give it the value from 'plan-to-work'
  var upload = req.session.data["upload_visa_check_answer1"];

  // Check whether the variable matches a condition
  if (upload === "Yes") {
    // Send user to next page
    res.redirect("check-your-answers");
  } else {
    // Send user to ineligible page
    res.redirect("upload_visa");
  }
});

router.post(
  "/vbenefits33-row/upload_brpfront_check_answer",
  function (req, res) {
    // Make a variable and give it the value from 'plan-to-work'
    var upload = req.session.data["upload_brpfront_check_answer1"];

    // Check whether the variable matches a condition
    if (upload === "Yes") {
      // Send user to next page
      res.redirect("upload_visa");
    } else {
      // Send user to ineligible page
      res.redirect("upload_passport_check");
    }
  }
);

//PAULS Initial Passport question upfront
router.post(
  "/vbenefits33-row/upload_brpback_check_answer",
  function (req, res) {
    // Make a variable and give it the value from 'plan-to-work'
    var homeOffice = req.session.data["upload_brpback_check_answer1"];

    // Check whether the variable matches a condition
    if (homeOffice === "yes") {
      // Send user to next page
      res.redirect("upload_visa");
    } else {
      // Send user to ineligible page
      res.redirect("upload_brpback");
    }
  }
);

//UPLOAD FEATURE ENDS//

//UPLOAD VISA ROUTE//
router.post("/vbenefits33-row/upload_optout_vr", function (req, res) {
  // Make a variable and give it the value from 'plan-to-work'
  var correct = req.session.data["upload_optout_vr1"];

  // Check whether the variable matches a condition
  if (correct === "yes") {
    // Send user to next page
    res.redirect("upload_passport_vr");
  } else if (correct === "no") {
    // Send user to next page
    res.redirect("check-your-answers-no-upload");
  }
});

//CRISTINA
router.post(
  "/vbenefits33-row/upload_passport_check_answer_vr",
  function (req, res) {
    // Make a variable and give it the value from 'plan-to-work'
    var upload = req.session.data["upload_passport_check_answer_vr1"];

    // Check whether the variable matches a condition
    if (upload === "Yes") {
      // Send user to next page
      res.redirect("upload_selfie_vr");
    } else {
      // Send user to ineligible page
      res.redirect("upload_passport_vr");
    }
  }
);

router.post(
  "/vbenefits33-row/upload_selfie_check_answer_vr",
  function (req, res) {
    // Make a variable and give it the value from 'plan-to-work'
    var upload = req.session.data["upload_selfie_check_answer_vr1"];

    // Check whether the variable matches a condition
    if (upload === "Yes") {
      // Send user to next page
      res.redirect("upload_visa_vr");
    } else {
      // Send user to ineligible page
      res.redirect("upload_selfie_vr");
    }
  }
);

//CRISTINA
router.post(
  "/vbenefits33-row/upload_visa_check_answer_vr",
  function (req, res) {
    // Make a variable and give it the value from 'plan-to-work'
    var upload = req.session.data["upload_visa_check_answer_vr1"];

    // Check whether the variable matches a condition
    if (upload === "Yes") {
      // Send user to next page
      res.redirect("check-your-answers-vr");
    } else {
      // Send user to ineligible page
      res.redirect("upload_visa_vr");
    }
  }
);

// end visa route

//CRISTINA
router.post("/vbenefits33-row/vignette-answer1", function (req, res) {
  // Make a variable and give it the value from 'plan-to-work'
  var settlement = req.session.data["vignette-answer01"];

  // Check whether the variable matches a condition
  if (settlement === "Yes") {
    // Send user to next page
    res.redirect("upload_optout");
  } else {
    // Send user to ineligible page
    res.redirect("home-office-immigration");
  }
});

//CRISTINA
router.post("/vbenefits33-row/digital-answer1", function (req, res) {
  // Make a variable and give it the value from 'plan-to-work'
  var settlement = req.session.data["digital-answer01"];

  // Check whether the variable matches a condition
  if (settlement === "Yes") {
    // Send user to next page
    res.redirect("upload_optout");
  } else {
    // Send user to ineligible page
    res.redirect("home-office-immigration");
  }
});

//PAULS Initial Passport question upfront
router.post("/vbenefits33-row/brp-answer", function (req, res) {
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
router.post("/vbenefits33-row/visa-answer", function (req, res) {
  // Make a variable and give it the value from 'plan-to-work'
  var visa = req.session.data["visa_01"];

  // Check whether the variable matches a condition
  if (visa === "I used the app") {
    // Send user to next page
    res.redirect("eu_settlement_5");
  } else if (visa === "I went to a visa application centre") {
    // Send user to next page
    res.redirect("upload_optout_vr");
  } else if (visa === "Sent documents via post") {
    // Send user to next page
    res.redirect("upload_optout_vr");
  } else {
    // Send user to ineligible page
    res.redirect("home-office-residence");
  }
});

//CRISTINA
router.post("/vbenefits33-row/visa_1_answer", function (req, res) {
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
router.post("/vbenefits33-row/visa-answer2", function (req, res) {
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
router.post("/vbenefits33-row/visa-answer3", function (req, res) {
  // Make a variable and give it the value from 'plan-to-work'
  var visa = req.session.data["visa_03"];

  // Check whether the variable matches a condition
  if (visa === "Yes") {
    // Send user to next page
    res.redirect("visa");
  } else if (visa === "No") {
    // Send user to next page
    res.redirect("eu_settlement_1");
  } else {
    // Send user to ineligible page
    res.redirect("eu_settlement_1");
  }
});

//CRISTINA
router.post("/vbenefits33-row/immigration-answer", function (req, res) {
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
router.post("/vbenefits33-row/eu-treaty-answer", function (req, res) {
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
router.post("/vbenefits33-row/settlement-answer1", function (req, res) {
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
router.post("/vbenefits33-row/settlement-answer2", function (req, res) {
  // Make a variable and give it the value from 'plan-to-work'
  var settlement = req.session.data["settlement-answer02"];

  // Check whether the variable matches a condition
  if (settlement === "Settled") {
    // Send user to next page
    res.redirect("upload_optout");
  } else if (settlement === "Pre-settled") {
    // Send user to next page
    res.redirect("upload_optout");
  } else {
    // Send user to ineligible page
    res.redirect("home-office-residence");
  }
});

//CRISTINA
router.post("/vbenefits33-row/lived-uk1A", function (req, res) {
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

router.post("/vbenefits33-row/lived-uk4A", function (req, res) {
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

router.post("/vbenefits33-row/have-nino-answer", function (req, res) {
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
router.post("/vbenefits33-row/filter-nationality-answer", function (req, res) {
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
  } else if (uk.includes(passport)) {
    // Send user to no BRP page
    res.redirect("/version-row/lived-uk_4A");
  } else if (roi.includes(passport)) {
    // Send user to no BRP page
    res.redirect("/version-row/lived-uk_4A");
  } else {
    // Send user to BRP page
    res.redirect("/version-29row/lived-uk_4A");
  }
});

//CRISTINA
router.post("/vbenefits33-row/warning_answer", function (req, res) {
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
router.post("/vbenefits33-row/dob_answer", function (req, res) {
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
router.post("/vbenefits33-row/passport-answer", function (req, res) {
  // Make a variable and give it the value from 'plan-to-work'
  var homeOffice = req.session.data["passport-document"];

  // Check whether the variable matches a condition
  if (homeOffice === "Yes") {
    // Send user to next page
    res.redirect("brp-number");
  } else {
    // Send user to ineligible page
    res.redirect("brp-number");
  }
});

//CRISTINA
router.post("/vbenefits33-row/id-answer", function (req, res) {
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
router.post("/vbenefits33-row/home-answer", function (req, res) {
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
router.post("/vbenefits33-row/immigration-answer", function (req, res) {
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
router.post("/vbenefits33-row/plan-to-work-answer", function (req, res) {
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
router.post("/vbenefits33-row/spanish-question-answer", function (req, res) {
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
router.post("/vbenefits33-row/residence-card-answer", function (req, res) {
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
router.post("/vbenefits33-row/home-office-answer", function (req, res) {
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
router.post("/vbenefits33-row/ho-immigration-answer", function (req, res) {
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
router.post("/vbenefits33-row/lived-uk-answer", function (req, res) {
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
router.post("/vbenefits33-row/name-changes-answer", function (req, res) {
  // Make a variable and give it the value from 'plan-to-work'
  var nameChanges = req.session.data["name-changes"];

  // Check whether the variable matches a condition
  if (nameChanges === "firstnames") {
    // Send user to next page
    res.redirect("q04-1-other-names-details-firstname");
  } else if (nameChanges === "surnames") {
    // Send user to next page
    res.redirect("q04-1-other-names-details-surname");
  } else {
    // Send user to ineligible page
    res.redirect("q04-1-other-names-details");
  }
});

//CRISTINA
router.post("/vbenefits33-row/name-changes-answerx2", function (req, res) {
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
  "/vbenefits33-row/address-correspondence-question-answers",
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
  "/vbenefits33-row/address-correspondence-results-answers",
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
router.post("/vbenefits33-row/have-brp-answer", function (req, res) {
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

router.post("/vbenefits33-row/in-work-answer", function (req, res) {
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
router.post("/vbenefits33-row/brp-router", function (req, res) {
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
  "/vbenefits33-row/upload-brp-image",
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
  "/vbenefits33-row/upload-self-image",
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
router.post("/vbenefits33-row/any-other-names", function (req, res) {
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
router.post("/vbenefits33-row/contacting-answer", function (req, res) {
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

router.post("/vbenefits33-row/name-changes", function (req, res) {
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

router.post("/vbenefits33-row/add-other-name", function (req, res) {
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

router.post("/vbenefits33-row/change-other-name/:id", function (req, res) {
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

router.post("/vbenefits33-row/delete-other-name/:id", function (req, res) {
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

router.post("/vbenefits33-row/other-names-list-answer", function (req, res) {
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

router.post("/vbenefits33-row/contacting-you", function (req, res) {
  const validLocations = filterUnchecked(req.session.data["contact-pref"]);
  // redirect to the fist element
  if (validLocations.includes("telephone") && validLocations.includes("sms")) {
    // redirect them to the mobile page
    res.redirect("q12-1-mobile");
  } else if (validLocations.includes("sms")) {
    res.redirect("q12-1-mobile");
  } else if (validLocations.includes("telephone")) {
    res.redirect("q12-2-telephone");
  } else if (validLocations.includes("email")) {
    res.redirect("q13-1-email-address");
  } else if (validLocations.includes("letter")) {
    res.redirect("q13-3-postal-address");
  } else {
    res.redirect("check-your-answers");
  }
});

router.post("/vbenefits33-row/q12-1-mobile", function (req, res) {
  const validLocations = filterUnchecked(req.session.data["contact-pref"]);
  // redirect to the fist element
  if (validLocations.includes("telephone") && validLocations.includes("sms")) {
    // redirect them to the mobile page
    res.redirect("q12-3-telephone-call");
  } else if (validLocations.includes("email")) {
    res.redirect("q13-1-email-address");
  } else if (validLocations.includes("letter")) {
    res.redirect("q13-3-postal-address");
  } else {
    res.redirect("check-your-answers");
  }
});

router.post("/vbenefits33-row/q12-2-telephone", function (req, res) {
  const validLocations = filterUnchecked(req.session.data["contact-pref"]);
  // redirect to the fist element

  if (validLocations.includes("email")) {
    res.redirect("q13-1-email-address");
  } else if (validLocations.includes("letter")) {
    res.redirect("q13-3-postal-address");
  } else {
    res.redirect("check-your-answers");
  }
});

// * TO FIX * need a router here to allow user to answer 'no', input an alternative number, then continue with email and postal address questions
router.post("/vbenefits33-row/q12-3-telephone-call", function (req, res) {
  const validLocations = filterUnchecked(req.session.data["contact-pref"]);
  // redirect to the fist element
  if (validLocations.includes("email")) {
    res.redirect("q13-1-email-address");
  } else if (validLocations.includes("letter")) {
    res.redirect("q13-3-postal-address");
  } else {
    res.redirect("check-your-answers");
  }
});

router.post("/vbenefits33-row/q13-1-email-address", function (req, res) {
  const validLocations = filterUnchecked(req.session.data["contact-pref"]);
  // redirect to the fist element

  if (validLocations.includes("letter")) {
    res.redirect("q13-3-postal-address");
  } else {
    res.redirect("check-your-answers");
  }
});

router.post("/vbenefits33-row/q13-3-postal-address", function (req, res) {
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
  } else if (validLocations.includes("letter")) {
    res.redirect("q13-3-postal-address");
  } else {
    res.redirect("check-your-answers");
  }
});

router.post("/vbenefits33/passport-answer", function (req, res) {
  var passcheck = req.session.data["passport-question"];

  if (passcheck === "Yes") {
    res.redirect("upload_1a");
  } else {
    res.redirect("lived-uk");
  }
});

//PAUL
router.post("/vbenefits33/upload_8", function (req, res) {
  // Make a variable and give it the value from 'plan-to-work'
  var clear = req.session.data["clear_01"];

  // Check whether the variable matches a condition
  if (clear === "Yes") {
    // Send user to next page
    res.redirect("upload_9");
  }

  // Check whether the variable matches a condition
  else if (clear === "No") {
    // Send user to next page
    res.redirect("");
  }
});

//PAUL
router.post("/vbenefits33/upload_9_answer", function (req, res) {
  // Make a variable and give it the value from 'plan-to-work'
  var correct = req.session.data["upload_09"];

  // Check whether the variable matches a condition
  if (correct === "yes") {
    // Send user to next page
    res.redirect("upload_7");
  } else if (correct === "no") {
    // Send user to next page
    res.redirect("upload_5");
  }
});

router.post("/vbenefits33/upload_9row_answer", function (req, res) {
  // Make a variable and give it the value from 'plan-to-work'
  var correct = req.session.data["upload_09"];

  // Check whether the variable matches a condition
  if (correct === "yes") {
    // Send user to next page
    res.redirect("upload_7a");
  } else if (correct === "no") {
    // Send user to next page
    res.redirect("upload_5row");
  }
});

//PAUL UPLOAD 12 CONFIRM PAGE
router.post("/vbenefits33/upload_confirm", function (req, res) {
  // Make a variable and give it the value from 'upload_12'
  var uploadConfirm = req.session.data["upload"];
});

//CRISTINA's ORGINAL FOR PAGE 1

router.post("/vbenefits33/upload_1_answer", function (req, res) {
  // Make a variable and give it the value from 'plan-to-work'
  var correct = req.session.data["upload_01"];

  // Check whether the variable matches a condition
  if (correct === "yes") {
    // Send user to next page
    res.redirect("upload_4");
  } else if (correct === "no") {
    // Send user to next page
    res.redirect("upload_14");
  }
});

router.post("/vbenefits33/upload_2-answer", function (req, res) {
  // Make a variable and give it the value from 'plan-to-work'
  var document = req.session.data["upload_02"];
  // Check whether the variable matches a condition
  if (document === "1") {
    // Send user to next page
    res.redirect("upload_3");
  } else if (document === "2") {
    // Send user to next page
    res.redirect("upload_15");
  } else if (document === "3") {
    // Send user to next page
    res.redirect("upload_3");
  } else {
    // Send user to cannot do it this way page
    res.redirect("upload_14");
  }
});

//PAUL
router.post("/vbenefits33/upload_8", function (req, res) {
  // Make a variable and give it the value from 'plan-to-work'
  var clear = req.session.data["clear_01"];

  // Check whether the variable matches a condition
  if (clear === "Yes") {
    // Send user to next page
    res.redirect("upload_9");
  } else if (clear === "No") {
    // Send user to next page
    res.redirect("");
  }
});

//PAUL
router.post("/vbenefits33/upload_9_answer", function (req, res) {
  // Make a variable and give it the value from 'plan-to-work'
  var correct = req.session.data["upload_09"];

  // Check whether the variable matches a condition
  if (correct === "yes") {
    // Send user to next page
    res.redirect("upload_7");
  } else if (correct === "no") {
    // Send user to next page
    res.redirect("upload_8");
  }
});

//CRISTINA
router.post("/vbenefits33/upload_answer_11", function (req, res) {
  // Make a variable and give it the value from 'plan-to-work'
  var upload = req.session.data["upload_011"];

  // Check whether the variable matches a condition
  if (upload === "Yes") {
    // Send user to next page
    res.redirect("upload_12");
  } else {
    // Send user to ineligible page
    res.redirect("upload_10");
  }
});

//CRISTINA
router.post("/vbenefits33/upload_answer_20", function (req, res) {
  // Make a variable and give it the value from 'plan-to-work'
  var upload = req.session.data["upload_020"];

  // Check whether the variable matches a condition
  if (upload === "Yes") {
    // Send user to next page
    res.redirect("upload_12");
  } else {
    // Send user to ineligible page
    res.redirect("upload_19");
  }
});

//CRISTINA
router.post("/vbenefits33/upload_document", function (req, res) {
  // Make a variable and give it the value from 'plan-to-work'
  var homeOffice = req.session.data["upload_docs"];

  // Check whether the variable matches a condition
  if (homeOffice === "yes") {
    // Send user to next page
    res.redirect("plan-to-work");
  } else {
    // Send user to ineligible page
    res.redirect("doc_guidance_appointment");
  }
});

//CRISTINA
router.post("/vbenefits33/lived-uk1A", function (req, res) {
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

router.post("/vbenefits33/lived-uk4A", function (req, res) {
  // Make a variable and give it the value from 'plan-to-work'
  var homeOffice = req.session.data["lived-uk04A"];

  // Check whether the variable matches a condition
  if (homeOffice === "Yes") {
    // Send user to next page
    res.redirect("passport-number");
  } else {
    // Send user to ineligible page
    res.redirect("lived-uk_4B");
  }
});

//CRISTINA
router.post("/vbenefits33/benefits_a1_answer", function (req, res) {
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
router.post("/vbenefits33/loan_a1_answer", function (req, res) {
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

//CRISTINA
router.post("/vbenefits33/settlement-answer1", function (req, res) {
  // Make a variable and give it the value from 'plan-to-work'
  var settlement = req.session.data["settlement-answer01"];

  // Check whether the variable matches a condition
  if (settlement === "Yes") {
    // Send user to next page
    res.redirect("eu_settlement_2");
  } else {
    // Send user to ineligible page
    res.redirect("upload_1");
  }
});

//CRISTINA
router.post("/vbenefits33/settlement-answer2", function (req, res) {
  // Make a variable and give it the value from 'plan-to-work'
  var settlement = req.session.data["settlement-answer02"];

  // Check whether the variable matches a condition
  if (settlement === "settled") {
    // Send user to next page
    res.redirect("lived-uk");
  } else if (settlement === "pre-settled") {
    // Send user to next page
    res.redirect("lived-uk");
  } else {
    // Send user to ineligible page
    res.redirect("eu_settlement_3");
  }
});

//CRISTINA
router.post("/vbenefits33/warning_answer", function (req, res) {
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
router.post("/vbenefits33/dob_answer", function (req, res) {
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

// Jons hockey EU router
router.post("/vbenefits33/filter-nationality-answer", function (req, res) {
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

  var uk = ["Welsh", "Welsh", "Scottish", "scottish", "British", "british"];

  var roi = ["Irish", "irish"];

  // Make a variable and give it the value from 'nationality'
  var passport = req.session.data["filter-nationality"];
  console.log(req.session.data);
  // Check whether the variable matches a condition

  if (euCountries.includes(passport)) {
    // Send user to no BRP page
    res.redirect("/vbenefits33-eu/date-of-birth"); //merging EU to the ROW cohort//
  } else if (uk.includes(passport)) {
    // Send user to no BRP page
    res.redirect("/vbenefits33-uk/date-of-birth");
  } else if (roi.includes(passport)) {
    // Send user to no BRP page
    res.redirect("/vbenefits33-roi/date-of-birth");
  } else {
    // Send user to BRP page
    res.redirect("/vbenefits33-row/date-of-birth");
  }
});

//CRISTINA
router.post("/vbenefits33/passport-answer", function (req, res) {
  // Make a variable and give it the value from 'plan-to-work'
  var homeOffice = req.session.data["passport-question"];

  // Check whether the variable matches a condition
  if (homeOffice === "Yes") {
    // Send user to next page
    res.redirect("name");
  } else {
    // Send user to ineligible page
    res.redirect("lived-uk");
  }
});

//CRISTINA
router.post("/vbenefits33/plan-to-work-answer", function (req, res) {
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
router.post("/vbenefits33/spanish-question-answer", function (req, res) {
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
router.post("/vbenefits33/brp-answer", function (req, res) {
  // Make a variable and give it the value from 'plan-to-work'
  var planToLoan = req.session.data["brp-question"];

  // Check whether the variable matches a condition
  if (planToLoan === "Yes") {
    // Send user to next page
    res.redirect("brp-number");
  } else {
    // Send user to ineligible page
    res.redirect("home-office");
  }
});

//CRISTINA
router.post("/vbenefits33/residence-card-answer", function (req, res) {
  // Make a variable and give it the value from 'plan-to-work'
  var planToLoan = req.session.data["residence-card"];

  // Check whether the variable matches a condition
  if (planToLoan === "Yes") {
    // Send user to next page
    res.redirect("home-office-immigration");
  } else {
    // Send user to ineligible page
    res.redirect("home-office-immigration");
  }
});

//CRISTINA
router.post("/vbenefits33/home-office-answer", function (req, res) {
  // Make a variable and give it the value from 'plan-to-work'
  var homeOffice = req.session.data["home-office-application"];

  // Check whether the variable matches a condition
  if (homeOffice === "Yes") {
    // Send user to next page
    res.redirect("home-office-residence");
  } else {
    // Send user to ineligible page
    res.redirect("home-office-residence");
  }
});

//CRISTINA
router.post("/vbenefits33/ho-immigration-answer", function (req, res) {
  // Make a variable and give it the value from 'plan-to-work'
  var homeOffice = req.session.data["ho-immigration"];

  // Check whether the variable matches a condition
  if (homeOffice === "Yes") {
    // Send user to next page
    res.redirect("lived-uk");
  } else {
    // Send user to ineligible page
    res.redirect("lived-uk");
  }
});

//CRISTINA
router.post("/vbenefits33/lived-uk-answer", function (req, res) {
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
router.post("/vbenefits33/name-changes-answer", function (req, res) {
  // Make a variable and give it the value from 'plan-to-work'
  var nameChanges = req.session.data["name-changes"];

  // Check whether the variable matches a condition
  if (nameChanges === "firstnames") {
    // Send user to next page
    res.redirect("q04-1-other-names-details-firstname");
  } else if (nameChanges === "surnames") {
    // Send user to next page
    res.redirect("q04-1-other-names-details-surname");
  } else {
    // Send user to ineligible page
    res.redirect("q04-1-other-names-details");
  }
});

//CRISTINA
router.post("/vbenefits33/name-changes-answerx2", function (req, res) {
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
  "/vbenefits33/address-correspondence-question-answers",
  function (req, res) {
    // Make a variable and give it the value from 'plan-to-work'
    var addressCorrespondence = req.session.data["have-correspondence"];

    // Check whether the variable matches a condition
    if (addressCorrespondence === "Yes") {
      // Send user to next page
      res.redirect("email-address");
    } else {
      // Send user to ineligible page
      res.redirect("address-correspondence-search");
    }
  }
);

//CRISTINA
router.post(
  "/vbenefits33/address-correspondence-results-answers",
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
router.post("/vbenefits33/have-brp-answer", function (req, res) {
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

router.post("/vbenefits33/in-work-answer", function (req, res) {
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
router.post("/vbenefits33/brp-router", function (req, res) {
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
  "/vbenefits33/upload-brp-image",
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
  "/vbenefits33/upload-self-image",
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
router.post("/vbenefits33/any-other-names", function (req, res) {
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
router.post("/vbenefits33/contacting-answer", function (req, res) {
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

router.post("/vbenefits33/name-changes", function (req, res) {
  var nameChanges = req.session.data["name-changes"];

  if (nameChanges === "Both") {
    res.redirect("q04-1-other-names-details");
  } else {
    res.redirect("q04-1-other-names-details");
  }
});

router.get("/vbenefits33/q03-name", function (req, res, next) {
  res.locals.change = "change" in req.query;
  next();
});

router.post("/vbenefits33/add-other-name", function (req, res) {
  const givenNames = req.session.data["other-given-names"];
  const familyName = req.session.data["other-family-name"];

  const otherNames = req.session.data["other-names"] || [];

  otherNames.push({ givenNames, familyName });
  req.session.data["other-names"] = otherNames;
  res.redirect("date-of-birth");
});

router.get("/vbenefits33/change-other-name/:id", function (req, res) {
  const nameId = parseInt(req.params.id, 10);
  const otherNames = req.session.data["other-names"] || [];
  const { givenNames, familyName } = otherNames[nameId];

  res.locals.id = nameId;
  res.locals.change = true;
  res.locals.givenNames = givenNames;
  res.locals.familyName = familyName;

  res.render("version-06/q04-1-other-names-details.html");
});

router.post("/vbenefits33/change-other-name/:id", function (req, res) {
  const nameId = parseInt(req.params.id, 10);
  const givenNames = req.session.data["other-given-names"];
  const familyName = req.session.data["other-family-name"];
  const otherNames = req.session.data["other-names"] || [];

  otherNames[nameId] = { givenNames, familyName };
  req.session.data["other-names"] = otherNames;

  res.redirect("../q04-2-other-names-list");
});

router.get("/vbenefits33/delete-other-name/:id", function (req, res) {
  const nameId = req.params.id;
  const otherNames = req.session.data["other-names"] || [];
  const { givenNames, familyName } = otherNames[nameId];

  res.locals.name = `${givenNames} ${familyName}`;

  res.render("version-06/delete-other-name.html");
});

router.post("/vbenefits33/delete-other-name/:id", function (req, res) {
  const deleteNames = req.session.data["delete-name"];

  if (deleteNames === "yes") {
    const nameId = parseInt(req.params.id, 10);
    const otherNames = req.session.data["other-names"] || [];
    otherNames.splice(nameId, 1);
    req.session.data["other-names"] = otherNames;
  }

  res.redirect("../q04-2-other-names-list");
});

router.get("/vbenefits33/q04-2-other-names-list", function (req, res) {
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

router.post("/vbenefits33/other-names-list-answer", function (req, res) {
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

router.post("/vbenefits33/contacting-you", function (req, res) {
  const validLocations = filterUnchecked(req.session.data["contact-pref"]);
  // redirect to the fist element
  if (validLocations.includes("telephone") && validLocations.includes("sms")) {
    // redirect them to the mobile page
    res.redirect("q12-1-mobile");
  } else if (validLocations.includes("sms")) {
    res.redirect("q12-1-mobile");
  } else if (validLocations.includes("telephone")) {
    res.redirect("q12-2-telephone");
  } else if (validLocations.includes("email")) {
    res.redirect("q13-1-email-address");
  } else if (validLocations.includes("letter")) {
    res.redirect("q13-3-postal-address");
  } else {
    res.redirect("check-your-answers");
  }
});

router.post("/vbenefits33/q12-1-mobile", function (req, res) {
  const validLocations = filterUnchecked(req.session.data["contact-pref"]);
  // redirect to the fist element
  if (validLocations.includes("telephone") && validLocations.includes("sms")) {
    // redirect them to the mobile page
    res.redirect("q12-3-telephone-call");
  } else if (validLocations.includes("email")) {
    res.redirect("q13-1-email-address");
  } else if (validLocations.includes("letter")) {
    res.redirect("q13-3-postal-address");
  } else {
    res.redirect("check-your-answers");
  }
});

router.post("/vbenefits33/q12-2-telephone", function (req, res) {
  const validLocations = filterUnchecked(req.session.data["contact-pref"]);
  // redirect to the fist element

  if (validLocations.includes("email")) {
    res.redirect("q13-1-email-address");
  } else if (validLocations.includes("letter")) {
    res.redirect("q13-3-postal-address");
  } else {
    res.redirect("check-your-answers");
  }
});

// * TO FIX * need a router here to allow user to answer 'no', input an alternative number, then continue with email and postal address questions
router.post("/vbenefits33/q12-3-telephone-call", function (req, res) {
  const validLocations = filterUnchecked(req.session.data["contact-pref"]);
  // redirect to the fist element
  if (validLocations.includes("email")) {
    res.redirect("q13-1-email-address");
  } else if (validLocations.includes("letter")) {
    res.redirect("q13-3-postal-address");
  } else {
    res.redirect("check-your-answers");
  }
});

router.post("/vbenefits33/q13-1-email-address", function (req, res) {
  const validLocations = filterUnchecked(req.session.data["contact-pref"]);
  // redirect to the fist element

  if (validLocations.includes("letter")) {
    res.redirect("q13-3-postal-address");
  } else {
    res.redirect("check-your-answers");
  }
});

router.post("/vbenefits33/q13-3-postal-address", function (req, res) {
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
  } else if (validLocations.includes("letter")) {
    res.redirect("q13-3-postal-address");
  } else {
    res.redirect("check-your-answers");
  }
});

router.post("/version-33uk/alt_format_answers_v3", function (req, res) {
  var clear = req.session.data["alt_format_v3"];

  if (clear === "Yes") {
    res.redirect("alt_format_options_v3");
  } else if (clear === "No") {
    res.redirect("email-address");
  }
});

router.post("/version-33uk/alt_format_answers_v3", function (req, res) {
  var clear = req.session.data["alt_format_v3"];

  if (clear === "Yes") {
    res.redirect("alt_format_options_v3");
  } else if (clear === "No") {
    res.redirect("email-address");
  }
});

router.post("/version-33uk/alt_format_answers_v2", function (req, res) {
  var clear = req.session.data["alt_format_v2"];

  if (clear === "Yes") {
    res.redirect("alt_format_options_v2");
  } else if (clear === "No") {
    res.redirect("email-address");
  }
});

router.post("/version-33uk/alt_format_answers", function (req, res) {
  var clear = req.session.data["alt_format"];

  if (clear === "Yes") {
    res.redirect("alt_format_options");
  } else if (clear === "No") {
    res.redirect("email-address");
  }
});

router.post("/version-33uk/filter-birth-answer", function (req, res) {
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
router.post("/version-33uk/child_benefit_answer", function (req, res) {
  // Make a variable and give it the value from 'plan-to-work'
  var benefit = req.session.data["child_benefit"];

  // Check whether the variable matches a condition
  if (benefit === "yes") {
    // Send user to next page
    res.redirect("child_benefit_yes");
  } else if (benefit === "no") {
    // Send user to next page
    res.redirect("lived-uk_4A");
  } else {
    // Send user to ineligible page
    res.redirect("child_benefit_unknown");
  }
});

//CRISTINA
router.post("/version-33uk/benefits_a1_answer", function (req, res) {
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
router.post("/version-33uk/loan_a1_answer", function (req, res) {
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

router.post("/version-33uk/upload_optout_answer", function (req, res) {
  // Make a variable and give it the value from 'plan-to-work'
  var correct = req.session.data["upload_optout1"];

  // Check whether the variable matches a condition
  if (correct === "yes") {
    // Send user to next page
    res.redirect("upload_passport");
  } else if (correct === "no") {
    // Send user to next page
    res.redirect("check-your-answers-no-upload.html");
  }
});

//CRISTINA
router.post("/version-33uk/upload_passport_check_answer", function (req, res) {
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
router.post("/version-33uk/upload_selfie_check_answer", function (req, res) {
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
router.post("/version-33uk/brp-answer", function (req, res) {
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
router.post("/version-33uk/visa-answer", function (req, res) {
  // Make a variable and give it the value from 'plan-to-work'
  var visa = req.session.data["visa_01"];

  // Check whether the variable matches a condition
  if (visa === "I used the app") {
    // Send user to next page
    res.redirect("eu_settlement_5");
  } else if (visa === "I went to a visa application centre") {
    // Send user to next page
    res.redirect("upload_optout");
  } else if (visa === "Sent documents via post") {
    // Send user to next page
    res.redirect("upload_optout");
  } else {
    // Send user to ineligible page
    res.redirect("home-office-residence");
  }
});

//CRISTINA
router.post("/version-33uk/visa_1_answer", function (req, res) {
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
router.post("/version-33uk/visa-answer2", function (req, res) {
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
router.post("/version-33uk/visa-answer3", function (req, res) {
  // Make a variable and give it the value from 'plan-to-work'
  var visa = req.session.data["visa_03"];

  // Check whether the variable matches a condition
  if (visa === "Yes") {
    // Send user to next page
    res.redirect("visa");
  } else if (visa === "No") {
    // Send user to next page
    res.redirect("eu_settlement_1");
  } else {
    // Send user to ineligible page
    res.redirect("eu_settlement_1");
  }
});

//CRISTINA
router.post("/version-33uk/immigration-answer", function (req, res) {
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
router.post("/version-33uk/eu-treaty-answer", function (req, res) {
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
router.post("/version-33uk/settlement-answer1", function (req, res) {
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
router.post("/version-33uk/settlement-answer2", function (req, res) {
  // Make a variable and give it the value from 'plan-to-work'
  var settlement = req.session.data["settlement-answer02"];

  // Check whether the variable matches a condition
  if (settlement === "Settled") {
    // Send user to next page
    res.redirect("eu_settlement_5");
  } else if (settlement === "Pre-settled") {
    // Send user to next page
    res.redirect("eu_settlement_5");
  } else {
    // Send user to ineligible page
    res.redirect("home-office-residence");
  }
});

//CRISTINA
router.post("/version-33uk/lived-uk1A", function (req, res) {
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

router.post("/version-33uk/lived-uk4A", function (req, res) {
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

router.post("/version-33uk/have-nino-answer", function (req, res) {
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
router.post("/version-33uk/filter-nationality-answer", function (req, res) {
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
  } else if (uk.includes(passport)) {
    // Send user to no BRP page
    res.redirect("/version-row/lived-uk_4A");
  } else if (roi.includes(passport)) {
    // Send user to no BRP page
    res.redirect("/version-row/lived-uk_4A");
  } else {
    // Send user to BRP page
    res.redirect("/version-29row/lived-uk_4A");
  }
});

//CRISTINA
router.post("/version-33uk/warning_answer", function (req, res) {
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
router.post("/version-33uk/dob_answer", function (req, res) {
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
router.post("/version-33uk/passport-answer", function (req, res) {
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
router.post("/version-33uk/id-answer", function (req, res) {
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
router.post("/version-33uk/home-answer", function (req, res) {
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
router.post("/version-33uk/immigration-answer", function (req, res) {
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
router.post("/version-33uk/plan-to-work-answer", function (req, res) {
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
router.post("/version-33uk/spanish-question-answer", function (req, res) {
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
router.post("/version-33uk/residence-card-answer", function (req, res) {
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
router.post("/version-33uk/home-office-answer", function (req, res) {
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
router.post("/version-33uk/ho-immigration-answer", function (req, res) {
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
router.post("/version-33uk/lived-uk-answer", function (req, res) {
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
router.post("/version-33uk/name-changes-answer", function (req, res) {
  // Make a variable and give it the value from 'plan-to-work'
  var nameChanges = req.session.data["name-changes"];

  // Check whether the variable matches a condition
  if (nameChanges === "firstnames") {
    // Send user to next page
    res.redirect("q04-1-other-names-details-firstname");
  } else if (nameChanges === "surnames") {
    // Send user to next page
    res.redirect("q04-1-other-names-details-surname");
  } else {
    // Send user to ineligible page
    res.redirect("q04-1-other-names-details");
  }
});

//CRISTINA
router.post("/version-33uk/name-changes-answerx2", function (req, res) {
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
  "/version-33uk/address-correspondence-question-answers",
  function (req, res) {
    // Make a variable and give it the value from 'plan-to-work'
    var addressCorrespondence = req.session.data["have-correspondence"];

    // Check whether the variable matches a condition
    if (addressCorrespondence === "Yes") {
      // Send user to next page
      res.redirect("alt_format_v2");
    } else {
      // Send user to ineligible page
      res.redirect("address-correspondence-search");
    }
  }
);

//CRISTINA
router.post(
  "/version-33uk/address-correspondence-results-answers",
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
router.post("/version-33uk/have-brp-answer", function (req, res) {
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

router.post("/version-33uk/in-work-answer", function (req, res) {
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
router.post("/version-33uk/brp-router", function (req, res) {
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

// router.post(
//   "/version-33uk/upload-brp-image",
upload.single("userPhoto"),
  //   async (req, res, next) => {
  //     console.log("file upload is ", req.file);

  //     if (!req.file && data.brpCardFront === null) {
  //       res.status(401).json({ error: "Please provide an image" });
  //     }

  //     // add the image stuff to data and session
  //     data.brpCardFront = req.file.path;
  //     data.brpCardFrontFilename = req.file.originalname;
  //     req.session.data["brp-img-upload"] = {
  //       filename: data.brpCardFrontFilename,
  //       path: data.brpCardFront,
  //     };

  //     // then redirect
  //     res.redirect("self-img-upload");
  //   }
  // );

  // router.post(
  //   "/version-33uk/upload-self-image",
  upload.single("userSelfPhoto"),
  //   async (req, res, next) => {
  //     console.log("file upload is ", req.file);

  //     if (!req.file && data.userPhoto === null) {
  //       res.status(401).json({ error: "Please provide an image" });
  //     }

  //     // add the image stuff to data and session
  //     data.userPhoto = req.file.path;
  //     data.userPhotoFilename = req.file.originalname;
  //     req.session.data["self-img-upload"] = {
  //       filename: data.userPhotoFilename,
  //       path: data.userPhoto,
  //     };

  //     console.log("checking the session", req.session.data);

  //     // then redirect
  //     res.redirect("q03-name");
  //   }
  // );

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
router.post("/version-33uk/any-other-names", function (req, res) {
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
router.post("/version-33uk/contacting-answer", function (req, res) {
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

router.post("/version-33uk/name-changes-answer", function (req, res) {
  var nameChanges = req.session.data["name-changes"];
  console.log(nameChanges);

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

router.post("/version-33uk/add-other-name", function (req, res) {
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

router.post("/version-33uk/change-other-name/:id", function (req, res) {
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

router.post("/version-33uk/delete-other-name/:id", function (req, res) {
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

router.post("/version-33uk/other-names-list-answer", function (req, res) {
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

router.post("/version-33uk/contacting-you", function (req, res) {
  const validLocations = filterUnchecked(req.session.data["contact-pref"]);
  // redirect to the fist element
  if (validLocations.includes("telephone") && validLocations.includes("sms")) {
    // redirect them to the mobile page
    res.redirect("q12-1-mobile");
  } else if (validLocations.includes("sms")) {
    res.redirect("q12-1-mobile");
  } else if (validLocations.includes("telephone")) {
    res.redirect("q12-2-telephone");
  } else if (validLocations.includes("email")) {
    res.redirect("q13-1-email-address");
  } else if (validLocations.includes("letter")) {
    res.redirect("q13-3-postal-address");
  } else {
    res.redirect("check-your-answers");
  }
});

router.post("/version-33uk/q12-1-mobile", function (req, res) {
  const validLocations = filterUnchecked(req.session.data["contact-pref"]);
  // redirect to the fist element
  if (validLocations.includes("telephone") && validLocations.includes("sms")) {
    // redirect them to the mobile page
    res.redirect("q12-3-telephone-call");
  } else if (validLocations.includes("email")) {
    res.redirect("q13-1-email-address");
  } else if (validLocations.includes("letter")) {
    res.redirect("q13-3-postal-address");
  } else {
    res.redirect("check-your-answers");
  }
});

router.post("/version-33uk/q12-2-telephone", function (req, res) {
  const validLocations = filterUnchecked(req.session.data["contact-pref"]);
  // redirect to the fist element

  if (validLocations.includes("email")) {
    res.redirect("q13-1-email-address");
  } else if (validLocations.includes("letter")) {
    res.redirect("q13-3-postal-address");
  } else {
    res.redirect("check-your-answers");
  }
});

// * TO FIX * need a router here to allow user to answer 'no', input an alternative number, then continue with email and postal address questions
router.post("/version-33uk/q12-3-telephone-call", function (req, res) {
  const validLocations = filterUnchecked(req.session.data["contact-pref"]);
  // redirect to the fist element
  if (validLocations.includes("email")) {
    res.redirect("q13-1-email-address");
  } else if (validLocations.includes("letter")) {
    res.redirect("q13-3-postal-address");
  } else {
    res.redirect("check-your-answers");
  }
});

router.post("/version-33uk/q13-1-email-address", function (req, res) {
  const validLocations = filterUnchecked(req.session.data["contact-pref"]);
  // redirect to the fist element

  if (validLocations.includes("letter")) {
    res.redirect("q13-3-postal-address");
  } else {
    res.redirect("check-your-answers");
  }
});

router.post("/version-33uk/q13-3-postal-address", function (req, res) {
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
  } else if (validLocations.includes("letter")) {
    res.redirect("q13-3-postal-address");
  } else {
    res.redirect("check-your-answers");
  }
});
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
  } else if (benefit === "no") {
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
  } else if (correct === "no") {
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
  } else if (visa === "I went to a visa application centre") {
    // Send user to next page
    res.redirect("upload_optout");
  } else if (visa === "Sent documents via post") {
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
  } else if (visa === "No") {
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
  } else if (settlement === "Pre-settled") {
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
  } else if (uk.includes(passport)) {
    // Send user to no BRP page
    res.redirect("/version-row/lived-uk_4A");
  } else if (roi.includes(passport)) {
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
  } else if (nameChanges === "surnames") {
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

// router.post(
//   "/vloan33-uk/upload-brp-image",
upload.single("userPhoto"),
  //   async (req, res, next) => {
  //     console.log("file upload is ", req.file);

  //     if (!req.file && data.brpCardFront === null) {
  //       res.status(401).json({ error: "Please provide an image" });
  //     }

  //     // add the image stuff to data and session
  //     data.brpCardFront = req.file.path;
  //     data.brpCardFrontFilename = req.file.originalname;
  //     req.session.data["brp-img-upload"] = {
  //       filename: data.brpCardFrontFilename,
  //       path: data.brpCardFront,
  //     };

  //     // then redirect
  //     res.redirect("self-img-upload");
  //   }
  // );

  // router.post(
  //   "/vloan33-uk/upload-self-image",
  upload.single("userSelfPhoto"),
  //   async (req, res, next) => {
  //     console.log("file upload is ", req.file);

  //     if (!req.file && data.userPhoto === null) {
  //       res.status(401).json({ error: "Please provide an image" });
  //     }

  //     // add the image stuff to data and session
  //     data.userPhoto = req.file.path;
  //     data.userPhotoFilename = req.file.originalname;
  //     req.session.data["self-img-upload"] = {
  //       filename: data.userPhotoFilename,
  //       path: data.userPhoto,
  //     };

  //     console.log("checking the session", req.session.data);

  //     // then redirect
  //     res.redirect("q03-name");
  //   }
  // );

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
  } else if (validLocations.includes("sms")) {
    res.redirect("q12-1-mobile");
  } else if (validLocations.includes("telephone")) {
    res.redirect("q12-2-telephone");
  } else if (validLocations.includes("email")) {
    res.redirect("q13-1-email-address");
  } else if (validLocations.includes("letter")) {
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
  } else if (validLocations.includes("email")) {
    res.redirect("q13-1-email-address");
  } else if (validLocations.includes("letter")) {
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
  } else if (validLocations.includes("letter")) {
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
  } else if (validLocations.includes("letter")) {
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
  } else if (validLocations.includes("letter")) {
    res.redirect("q13-3-postal-address");
  } else {
    res.redirect("check-your-answers");
  }
});

router.post("/version-33/duplicate_passport", function (req, res) {
  var clear = req.session.data["passport_dup"];

  if (clear === "Yes") {
    res.redirect("duplicate_applyagain_changed");
  } else if (clear === "No") {
    res.redirect("duplicate_appointment");
  }
});

//Duplicate application screens

router.post("/version-33/duplicate_apply_answer", function (req, res) {
  var clear = req.session.data["duplicate_apply"];

  if (clear === "yes") {
    res.redirect("duplicate_why");
  } else if (clear === "no") {
    res.redirect("plan-to-work");
  }
});

router.post("/version-33/duplicate_why_answer", function (req, res) {
  const chkbxs = [];
  if (req.session.data["duplicate-1"])
    //{
    chkbxs.push("duplicate_applyagain_changed");
  //res.redirect('duplicate_call');
  //} else if (req.session.data["duplicate-2"]) chkbxs.push("duplicate_wait");
  if (req.session.data["duplicate-3"]) chkbxs.push("duplicate_call");
  if (req.session.data["duplicate-4"]) chkbxs.push("duplicate_upload");
  if (req.session.data["duplicate-5"]) chkbxs.push("duplicate_applyagain");
  if (req.session.data["duplicate-6"]) chkbxs.push("duplicate_noneed");
  if (req.session.data["duplicate-7"]) chkbxs.push("duplicate_applyagain");
  if (req.session.data["duplicate-8"]) chkbxs.push("duplicate_lost");
  if (req.session.data["duplicate-9"]) chkbxs.push("duplicate_callus");

  if (chkbxs.length == 0) res.redirect("duplicate_why");
  else if (chkbxs.length == 1) res.redirect(chkbxs[0]);
  else res.redirect("duplicate_noneed");
});

//PAUL
router.post("/version-33/duplicates_2b_answer", function (req, res) {
  // Make a variable and give it the value from 'plan-to-work'
  var clear = req.session.data["duplicates"];

  // Check whether the variable matches a condition
  if (clear === "Yes") {
    // Send user to next page
    res.redirect("plan-to-work");
  } else if (clear === "No") {
    // Send user to next page
    res.redirect("duplicate_2c");
  }
});

//PAULS Initial Passport question upfront
router.post("/version-33/passport-answer", function (req, res) {
  var passcheck = req.session.data["passport-question"];

  if (passcheck === "Yes") {
    res.redirect("upload_1a");
  } else {
    res.redirect("lived-uk");
  }
});

//PAUL
router.post("/version-33/upload_8", function (req, res) {
  // Make a variable and give it the value from 'plan-to-work'
  var clear = req.session.data["clear_01"];

  // Check whether the variable matches a condition
  if (clear === "Yes") {
    // Send user to next page
    res.redirect("upload_9");
  } else if (clear === "No") {
    // Send user to next page
    res.redirect("");
  }
});

//PAUL
router.post("/version-33/upload_9_answer", function (req, res) {
  // Make a variable and give it the value from 'plan-to-work'
  var correct = req.session.data["upload_09"];

  // Check whether the variable matches a condition
  if (correct === "yes") {
    // Send user to next page
    res.redirect("upload_7");
  } else if (correct === "no") {
    // Send user to next page
    res.redirect("upload_5");
  }
});

router.post("/version-33/upload_9row_answer", function (req, res) {
  // Make a variable and give it the value from 'plan-to-work'
  var correct = req.session.data["upload_09"];

  // Check whether the variable matches a condition
  if (correct === "yes") {
    // Send user to next page
    res.redirect("upload_7a");
  } else if (correct === "no") {
    // Send user to next page
    res.redirect("upload_5row");
  }
});

//PAUL UPLOAD 12 CONFIRM PAGE
router.post("/version-33/upload_confirm", function (req, res) {
  // Make a variable and give it the value from 'upload_12'
  var uploadConfirm = req.session.data["upload"];
});

//CRISTINA's ORGINAL FOR PAGE 1

router.post("/version-33/upload_1_answer", function (req, res) {
  // Make a variable and give it the value from 'plan-to-work'
  var correct = req.session.data["upload_01"];

  // Check whether the variable matches a condition
  if (correct === "yes") {
    // Send user to next page
    res.redirect("upload_4");
  } else if (correct === "no") {
    // Send user to next page
    res.redirect("upload_14");
  }
});

router.post("/version-33/upload_2-answer", function (req, res) {
  // Make a variable and give it the value from 'plan-to-work'
  var document = req.session.data["upload_02"];
  // Check whether the variable matches a condition
  if (document === "1") {
    // Send user to next page
    res.redirect("upload_3");
  }
  // Check whether the variable matches a condition
  if (document === "2") {
    // Send user to next page
    res.redirect("upload_15");
  }
  // Check whether the variable matches a condition
  if (document === "3") {
    // Send user to next page
    res.redirect("upload_3");
  } else {
    // Send user to cannot do it this way page
    res.redirect("upload_14");
  }
});

//PAUL
router.post("/version-33/upload_8", function (req, res) {
  // Make a variable and give it the value from 'plan-to-work'
  var clear = req.session.data["clear_01"];

  // Check whether the variable matches a condition
  if (clear === "Yes") {
    // Send user to next page
    res.redirect("upload_9");
  } else if (clear === "No") {
    // Send user to next page
    res.redirect("");
  }
});

//PAUL
router.post("/version-33/upload_9_answer", function (req, res) {
  // Make a variable and give it the value from 'plan-to-work'
  var correct = req.session.data["upload_09"];

  // Check whether the variable matches a condition
  if (correct === "yes") {
    // Send user to next page
    res.redirect("upload_7");
  } else if (correct === "no") {
    // Send user to next page
    res.redirect("upload_8");
  }
});

//CRISTINA
router.post("/version-33/upload_answer_11", function (req, res) {
  // Make a variable and give it the value from 'plan-to-work'
  var upload = req.session.data["upload_011"];

  // Check whether the variable matches a condition
  if (upload === "Yes") {
    // Send user to next page
    res.redirect("upload_12");
  } else {
    // Send user to ineligible page
    res.redirect("upload_10");
  }
});

//CRISTINA
router.post("/version-33/upload_answer_20", function (req, res) {
  // Make a variable and give it the value from 'plan-to-work'
  var upload = req.session.data["upload_020"];

  // Check whether the variable matches a condition
  if (upload === "Yes") {
    // Send user to next page
    res.redirect("upload_12");
  } else {
    // Send user to ineligible page
    res.redirect("upload_19");
  }
});

//CRISTINA
router.post("/version-33/upload_document", function (req, res) {
  // Make a variable and give it the value from 'plan-to-work'
  var homeOffice = req.session.data["upload_docs"];

  // Check whether the variable matches a condition
  if (homeOffice === "yes") {
    // Send user to next page
    res.redirect("plan-to-work");
  } else {
    // Send user to ineligible page
    res.redirect("doc_guidance_appointment");
  }
});

//CRISTINA
router.post("/version-33/lived-uk1A", function (req, res) {
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

router.post("/version-33/lived-uk4A", function (req, res) {
  // Make a variable and give it the value from 'plan-to-work'
  var homeOffice = req.session.data["lived-uk04A"];

  // Check whether the variable matches a condition
  if (homeOffice === "Yes") {
    // Send user to next page
    res.redirect("passport-number");
  } else {
    // Send user to ineligible page
    res.redirect("lived-uk_4B");
  }
});

//CRISTINA
router.post("/version-33/benefits_a1_answer", function (req, res) {
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
router.post("/version-33/loan_a1_answer", function (req, res) {
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

//CRISTINA
router.post("/version-33/settlement-answer1", function (req, res) {
  // Make a variable and give it the value from 'plan-to-work'
  var settlement = req.session.data["settlement-answer01"];

  // Check whether the variable matches a condition
  if (settlement === "Yes") {
    // Send user to next page
    res.redirect("eu_settlement_2");
  } else {
    // Send user to ineligible page
    res.redirect("upload_1");
  }
});

//CRISTINA
router.post("/version-33/settlement-answer2", function (req, res) {
  // Make a variable and give it the value from 'plan-to-work'
  var settlement = req.session.data["settlement-answer02"];

  // Check whether the variable matches a condition
  if (settlement === "settled") {
    // Send user to next page
    res.redirect("lived-uk");
  } else if (settlement === "pre-settled") {
    // Send user to next page
    res.redirect("lived-uk");
  } else {
    // Send user to ineligible page
    res.redirect("eu_settlement_3");
  }
});

//CRISTINA
router.post("/version-33/warning_answer", function (req, res) {
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
router.post("/version-33/dob_answer", function (req, res) {
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

// Jons hockey EU router
router.post("/version-33/filter-nationality-answer", function (req, res) {
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

  var uk = [
    "Welsh",
    "Welsh",
    "Scottish",
    "scottish",
    "British",
    "british",
    "english",
    "English",
  ];

  var roi = ["Irish", "irish"];

  // Make a variable and give it the value from 'nationality'
  var passport = req.session.data["filter-nationality"];
  // Check whether the variable matches a condition
  if (euCountries.includes(passport)) {
    // Send user to no BRP page
    // res.redirect("/version-33eu/date-of-birth"); //merging EU to the ROW cohort//
  } else if (uk.includes(passport)) {
    // Send user to no BRP page
    res.redirect("/version-33uk/date-of-birth");
  } else if (roi.includes(passport)) {
    // Send user to no BRP page
    res.redirect("/version-33roi/date-of-birth");
  } else {
    //   // Send user to BRP page
    res.redirect("/version-33row/date-of-birth");
  }
});

//CRISTINA
router.post("/version-33/passport-answer", function (req, res) {
  // Make a variable and give it the value from 'plan-to-work'
  var homeOffice = req.session.data["passport-question"];

  // Check whether the variable matches a condition
  if (homeOffice === "Yes") {
    // Send user to next page
    res.redirect("name");
  } else {
    // Send user to ineligible page
    res.redirect("lived-uk");
  }
});

//CRISTINA
router.post("/version-33/plan-to-work-answer", function (req, res) {
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
router.post("/version-33/spanish-question-answer", function (req, res) {
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
router.post("/version-33/brp-answer", function (req, res) {
  // Make a variable and give it the value from 'plan-to-work'
  var planToLoan = req.session.data["brp-question"];

  // Check whether the variable matches a condition
  if (planToLoan === "Yes") {
    // Send user to next page
    res.redirect("brp-number");
  } else {
    // Send user to ineligible page
    res.redirect("home-office");
  }
});

//CRISTINA
router.post("/version-33/residence-card-answer", function (req, res) {
  // Make a variable and give it the value from 'plan-to-work'
  var planToLoan = req.session.data["residence-card"];

  // Check whether the variable matches a condition
  if (planToLoan === "Yes") {
    // Send user to next page
    res.redirect("home-office-immigration");
  } else {
    // Send user to ineligible page
    res.redirect("home-office-immigration");
  }
});

//CRISTINA
router.post("/version-33/home-office-answer", function (req, res) {
  // Make a variable and give it the value from 'plan-to-work'
  var homeOffice = req.session.data["home-office-application"];

  // Check whether the variable matches a condition
  if (homeOffice === "Yes") {
    // Send user to next page
    res.redirect("home-office-residence");
  } else {
    // Send user to ineligible page
    res.redirect("home-office-residence");
  }
});

//CRISTINA
router.post("/version-33/ho-immigration-answer", function (req, res) {
  // Make a variable and give it the value from 'plan-to-work'
  var homeOffice = req.session.data["ho-immigration"];

  // Check whether the variable matches a condition
  if (homeOffice === "Yes") {
    // Send user to next page
    res.redirect("lived-uk");
  } else {
    // Send user to ineligible page
    res.redirect("lived-uk");
  }
});

//CRISTINA
router.post("/version-33/lived-uk-answer", function (req, res) {
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
router.post("/version-33/name-changes-answer", function (req, res) {
  // Make a variable and give it the value from 'plan-to-work'
  var nameChanges = req.session.data["name-changes"];

  // Check whether the variable matches a condition
  if (nameChanges === "firstnames") {
    // Send user to next page
    res.redirect("q04-1-other-names-details-firstname");
  } else if (nameChanges === "surnames") {
    // Send user to next page
    res.redirect("q04-1-other-names-details-surname");
  } else {
    // Send user to ineligible page
    res.redirect("q04-1-other-names-details");
  }
});

//CRISTINA
router.post("/version-33/name-changes-answerx2", function (req, res) {
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
  "/version-33/address-correspondence-question-answers",
  function (req, res) {
    // Make a variable and give it the value from 'plan-to-work'
    var addressCorrespondence = req.session.data["have-correspondence"];

    // Check whether the variable matches a condition
    if (addressCorrespondence === "Yes") {
      // Send user to next page
      res.redirect("email-address");
    } else {
      // Send user to ineligible page
      res.redirect("address-correspondence-search");
    }
  }
);

//CRISTINA
router.post(
  "/version-33/address-correspondence-results-answers",
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
router.post("/version-33/have-brp-answer", function (req, res) {
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

router.post("/version-33/in-work-answer", function (req, res) {
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
router.post("/version-33/brp-router", function (req, res) {
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
  "/version-33/upload-brp-image",
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
  "/version-33/upload-self-image",
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

router.post("/version-33x/q02-3-nationality", function (req, res) {
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
router.post("/version-33/any-other-names", function (req, res) {
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
router.post("/version-33/contacting-answer", function (req, res) {
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

router.post("/version-33/name-changes", function (req, res) {
  var nameChanges = req.session.data["name-changes"];

  if (nameChanges === "Both") {
    res.redirect("q04-1-other-names-details");
  } else {
    res.redirect("q04-1-other-names-details");
  }
});

router.post("/version-33/q03-name", function (req, res, next) {
  res.locals.change = "change" in req.query;
  next();
});

router.post("/version-33/add-other-name", function (req, res) {
  const givenNames = req.session.data["other-given-names"];
  const familyName = req.session.data["other-family-name"];

  const otherNames = req.session.data["other-names"] || [];

  otherNames.push({ givenNames, familyName });
  req.session.data["other-names"] = otherNames;
  res.redirect("date-of-birth");
});

router.post("/version-33/change-other-name/:id", function (req, res) {
  const nameId = parseInt(req.params.id, 10);
  const otherNames = req.session.data["other-names"] || [];
  const { givenNames, familyName } = otherNames[nameId];

  res.locals.id = nameId;
  res.locals.change = true;
  res.locals.givenNames = givenNames;
  res.locals.familyName = familyName;

  res.render("version-06/q04-1-other-names-details.html");
});

router.post("/version-33/change-other-name/:id", function (req, res) {
  const nameId = parseInt(req.params.id, 10);
  const givenNames = req.session.data["other-given-names"];
  const familyName = req.session.data["other-family-name"];
  const otherNames = req.session.data["other-names"] || [];

  otherNames[nameId] = { givenNames, familyName };
  req.session.data["other-names"] = otherNames;

  res.redirect("../q04-2-other-names-list");
});

router.post("/version-33/delete-other-name/:id", function (req, res) {
  const nameId = req.params.id;
  const otherNames = req.session.data["other-names"] || [];
  const { givenNames, familyName } = otherNames[nameId];

  res.locals.name = `${givenNames} ${familyName}`;

  res.render("version-06/delete-other-name.html");
});

router.post("/version-33/delete-other-name/:id", function (req, res) {
  const deleteNames = req.session.data["delete-name"];

  if (deleteNames === "yes") {
    const nameId = parseInt(req.params.id, 10);
    const otherNames = req.session.data["other-names"] || [];
    otherNames.splice(nameId, 1);
    req.session.data["other-names"] = otherNames;
  }

  res.redirect("../q04-2-other-names-list");
});

router.post("/version-33/q04-2-other-names-list", function (req, res) {
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

router.post("/version-33/other-names-list-answer", function (req, res) {
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

router.post("/version-33/contacting-you", function (req, res) {
  const validLocations = filterUnchecked(req.session.data["contact-pref"]);
  // redirect to the fist element
  if (validLocations.includes("telephone") && validLocations.includes("sms")) {
    // redirect them to the mobile page
    res.redirect("q12-1-mobile");
  } else if (validLocations.includes("sms")) {
    res.redirect("q12-1-mobile");
  } else if (validLocations.includes("telephone")) {
    res.redirect("q12-2-telephone");
  } else if (validLocations.includes("email")) {
    res.redirect("q13-1-email-address");
  } else if (validLocations.includes("letter")) {
    res.redirect("q13-3-postal-address");
  } else {
    res.redirect("check-your-answers");
  }
});

router.post("/version-33/q12-1-mobile", function (req, res) {
  const validLocations = filterUnchecked(req.session.data["contact-pref"]);
  // redirect to the fist element
  if (validLocations.includes("telephone") && validLocations.includes("sms")) {
    // redirect them to the mobile page
    res.redirect("q12-3-telephone-call");
  } else if (validLocations.includes("email")) {
    res.redirect("q13-1-email-address");
  } else if (validLocations.includes("letter")) {
    res.redirect("q13-3-postal-address");
  } else {
    res.redirect("check-your-answers");
  }
});

router.post("/version-33/q12-2-telephone", function (req, res) {
  const validLocations = filterUnchecked(req.session.data["contact-pref"]);
  // redirect to the fist element

  if (validLocations.includes("email")) {
    res.redirect("q13-1-email-address");
  } else if (validLocations.includes("letter")) {
    res.redirect("q13-3-postal-address");
  } else {
    res.redirect("check-your-answers");
  }
});

// * TO FIX * need a router here to allow user to answer 'no', input an alternative number, then continue with email and postal address questions
router.post("/version-33/q12-3-telephone-call", function (req, res) {
  const validLocations = filterUnchecked(req.session.data["contact-pref"]);
  // redirect to the fist element
  if (validLocations.includes("email")) {
    res.redirect("q13-1-email-address");
  } else if (validLocations.includes("letter")) {
    res.redirect("q13-3-postal-address");
  } else {
    res.redirect("check-your-answers");
  }
});

router.post("/version-33/q13-1-email-address", function (req, res) {
  const validLocations = filterUnchecked(req.session.data["contact-pref"]);
  // redirect to the fist element

  if (validLocations.includes("letter")) {
    res.redirect("q13-3-postal-address");
  } else {
    res.redirect("check-your-answers");
  }
});

router.post("/version-33/q13-3-postal-address", function (req, res) {
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

router.post("/version-33/check-for-next-page", function (req, res) {
  const validLocations = filterUnchecked(req.session.data["contact-pref"]);
  // redirect to the fist element

  if (validLocations.includes("email")) {
    res.redirect("q13-1-email-address");
  } else if (validLocations.includes("letter")) {
    res.redirect("q13-3-postal-address");
  } else {
    res.redirect("check-your-answers");
  }
});

router.post("/vbenefits33-eu/confirmation_benefits_NoAction_green", function (req, res) {
 
    res.redirect("confirmation_benefits_NoAction_green");
  
});
router.post("/vbenefits33-uk/confirmation_benefits_NoAction_green", function (req, res) {
 
  res.redirect("confirmation_benefits_NoAction_green");

});
router.post("/vbenefits33-roi/confirmation_benefits_NoAction_green", function (req, res) {
 
  res.redirect("confirmation_benefits_NoAction_green");

});
router.post("/vbenefits33-row/confirmation_benefits_NoAction_green", function (req, res) {
 
  res.redirect("confirmation_benefits_NoAction_green");

});
router.post("/vbenefits33/confirmation_benefits_NoAction_green", function (req, res) {
 
  res.redirect("confirmation_benefits_NoAction_green");

});
