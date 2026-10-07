const birthdayContent =
    document.getElementById("birthdayContent");

const surpriseContent =
    document.getElementById("surpriseContent");

const envelopeContent =
    document.getElementById("envelopeContent");

const envelope =
    document.getElementById("envelope");

const paper =
    document.getElementById("paper");

const letterScreen =
    document.getElementById("letterScreen");


/* =========================================
   STATE
========================================= */

let currentScene = "birthday";


/* =========================================
   BIRTHDAY → SURPRISE
========================================= */

setTimeout(() => {

    birthdayContent.classList.add("fade-out");

    setTimeout(() => {

        surpriseContent.classList.add("show");

        currentScene = "surprise";

    }, 1300);

}, 5000);


/* =========================================
   FIRST TOUCH
   SURPRISE → ENVELOPE
========================================= */

document.addEventListener("click", (event) => {

    if (currentScene !== "surprise") {
        return;
    }

    currentScene = "transitioning";

    surpriseContent.classList.remove("show");

    setTimeout(() => {

        envelopeContent.classList.add("show");

        currentScene = "envelope";

    }, 1300);

});


/* =========================================
   TOUCH ENVELOPE
   → LETTER COMES OUT
========================================= */

envelope.addEventListener("click", (event) => {

    event.stopPropagation();

    if (currentScene !== "envelope") {
        return;
    }

    currentScene = "letter-coming";

    envelope.classList.add("open");

    setTimeout(() => {

        envelope.classList.add("letter-ready");

        currentScene = "letter";

    }, 950);

});


/* =========================================
   TOUCH LETTER
   → OPEN LETTER
========================================= */

paper.addEventListener("click", (event) => {

    event.stopPropagation();

    if (currentScene !== "letter") {
        return;
    }

    currentScene = "letter-opening";

    paper.classList.add("letter-open");

    setTimeout(() => {

        letterScreen.classList.add("show");

        currentScene = "letter-open";

    }, 500);

});