const express = require("express");
const router = express.Router();

//------------------------------------------------------------------
// import Routes
//------------------------------------------------------------------
const logo = require("./logoRoutes");
const favicon = require("./faviconRoutes");
const banner = require("./bannerRoutes");
const about = require("./aboutRoutes");
const contact = require("./contactRoutes");
const highlightProject = require("./highlightProjectRoute");
const whyChooseSection = require("./whychooseSectonRoute");
const whychoose = require("./whychooseRoute");
const gallery = require("./galleryRoute");
const featureProject = require("./featureProjectRoutes");
const businessInfo = require("./businessInfoRoutes");
const seo = require("./seoRoutes");
const privacy = require("./privacyRoute");
const director = require("./directorRoute");
const contactMsg = require("./contactMsgRoute");
const user = require("./userRoutes");
const whoweare = require("./whoweareRoute");
const value = require("./valueRoute");
const history = require("./historyRoute");
const peopleSection = require("./peopleSectionRoute");
const people = require("./peopleRoute");
const leadership = require("./leadershipRoute");
const leadershipSection = require("./leadershipSectionRoute");
const offices = require("./officesRoute");
const whatwedo = require("./whatwedoRoute");
const serviceSection = require("./serviceSectionRoute");
const category = require("./categoryRoute");
const project = require("./projectRoute");
const careerSection = require("./careerSectionRoute");
const career = require("./careerRoute");
const subscriber = require("./subscribersRoute");

//------------------------------------------------------------------------
// use Routes
//------------------------------------------------------------------------
router.use("/logo", logo);
router.use("/favicon", favicon);
router.use("/banner", banner);
router.use("/about", about);
router.use("/contact", contact);
router.use("/highlightProject", highlightProject);
router.use("/whychooseSection", whyChooseSection);
router.use("/whychoose", whychoose);
router.use("/gallery", gallery);
router.use("/featureProject", featureProject);
router.use("/businessInfo", businessInfo);
router.use("/seo", seo);
router.use("/privacy", privacy);
router.use("/director", director);
router.use("/contactMsg", contactMsg);
router.use("/user", user);
router.use("/whoweare", whoweare);
router.use("/value", value);
router.use("/history", history);
router.use("/peopleSection", peopleSection);
router.use("/people", people);
router.use("/leadership", leadership);
router.use("/leadershipSection", leadershipSection);
router.use("/offices", offices);
router.use("/whatwedo", whatwedo);
router.use("/serviceSection", serviceSection);
router.use("/category", category);
router.use("/project", project);
router.use("/careerSection", careerSection);
router.use("/career", career);
router.use("/subscriber", subscriber);


module.exports = router;
