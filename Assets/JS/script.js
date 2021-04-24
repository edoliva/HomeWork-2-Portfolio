var jsProjectsBtn = document.querySelector("#JS-Projects-Btn");
var jsProjectsBtn1 = document.querySelector("#JS-Projects-Btn1");
var jsProjectsBtn2 = document.querySelector("#JS-Projects-Btn2");
var edtechProjectsBtn = document.querySelector("#EdTech-Projects-Btn");
var edtechProjectsBtn1 = document.querySelector("#EdTech-Projects-Btn1");
var edtechProjectsBtn2 = document.querySelector("#EdTech-Projects-Btn2");
var mixItUpBtn = document.querySelector("#mix-it-up-btn");
var weatherDashboardBtn = document.querySelector("#weather-dashboard-btn");
var randomPasswordBtn = document.querySelector("#random-password-btn");
var apiQuizBtn = document.querySelector("#api-quiz-btn"); 
var studentScheduleBtn = document.querySelector("#student-schedule-btn"); 

var mainScreen = document.querySelector(".main-screen");
var jsProjectPage = document.querySelector(".JS-Project-Page");
var edtechProjectPage = document.querySelector(".EdTech-Project-Page");

jsProjectsBtn.addEventListener("click", function (event) {
    mainScreen.setAttribute("style", "display: none;");
    jsProjectPage.setAttribute("style", "display: inline-block;");
    edtechProjectPage.setAttribute("style", "display: none;");
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
});
jsProjectsBtn1.addEventListener("click", function (event) {
    mainScreen.setAttribute("style", "display: none;");
    jsProjectPage.setAttribute("style", "display: inline-block;");
    edtechProjectPage.setAttribute("style", "display: none;");
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
});
jsProjectsBtn2.addEventListener("click", function (event) {
    mainScreen.setAttribute("style", "display: none;");
    jsProjectPage.setAttribute("style", "display: inline-block;");
    edtechProjectPage.setAttribute("style", "display: none;");
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
});
edtechProjectsBtn.addEventListener("click", function (event) {
    mainScreen.setAttribute("style", "display: none;");
    jsProjectPage.setAttribute("style", "display: none;");
    edtechProjectPage.setAttribute("style", "display: inline-block;");
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
});
edtechProjectsBtn1.addEventListener("click", function (event) {
    mainScreen.setAttribute("style", "display: none;");
    jsProjectPage.setAttribute("style", "display: none;");
    edtechProjectPage.setAttribute("style", "display: inline-block;");
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
});
edtechProjectsBtn2.addEventListener("click", function (event) {
    mainScreen.setAttribute("style", "display: none;");
    jsProjectPage.setAttribute("style", "display: none;");
    edtechProjectPage.setAttribute("style", "display: inline-block;");
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
});

mixItUpBtn.addEventListener("click", function (event) {
    window.open(
        'https://edoliva.github.io/Mix-It-Up-Food-and-Drink-Search-Tool/',
        '_blank'
      );
})
weatherDashboardBtn.addEventListener("click", function (event) {
    window.open(
        'https://edoliva.github.io/Weather-Dashboard/',
        '_blank'
      );
})
randomPasswordBtn.addEventListener("click", function (event) {
    window.open(
        'https://edoliva.github.io/RandomPasswordGenerator/Develop/index.html',
        '_blank'
      );
})
apiQuizBtn.addEventListener("click", function (event) {
    window.open(
        'https://edoliva.github.io/WebAPIsCodeQuiz/',
        '_blank'
      );
})
studentScheduleBtn.addEventListener("click", function (event) {
    window.open(
        'http://edoliva.github.io/StudentScheduler/index.html',
        '_blank'
      );
})

