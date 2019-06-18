window.addEventListener("load", sidenVises);


function sidenVises() {
    console.log("sidenVises");

    //Mouseover dadaisme
    document.querySelector("#dadaisme").addEventListener("mouseover", glitch_dadaisme);

    //Mouseover exodus
    document.querySelector("#exodus").addEventListener("mouseover", glitch_exodus);

    //Mouseover sexsamfund
    document.querySelector("#sexsamfund").addEventListener("mouseover", glitch_sexsamfund);

    //Mouseover minifinans
    document.querySelector("#minifinans").addEventListener("mouseover", glitch_minifinans);

    //Mouseover moonbar
    document.querySelector("#moonbar").addEventListener("mouseover", glitch_moonbar);

    //Mouseover interview
    document.querySelector("#interview").addEventListener("mouseover", glitch_interview);
}

// DADAISME FUNCTIONS

function glitch_dadaisme() {
    console.log("glitch_dadaisme");

    document.querySelector("#dadaisme_glitch").classList.remove("hide");
    document.querySelector("#dadaisme").addEventListener("mouseleave", noGlitch_dadaisme);
}

function noGlitch_dadaisme() {
    console.log("noGlitch_dadaisme");

    document.querySelector("#dadaisme_glitch").classList.add("hide");

}

// EXODUS FUNCTIONS

function glitch_exodus() {
    console.log("glitch_exodus");

    document.querySelector("#exodus_glitch").classList.remove("hide");
    document.querySelector("#exodus").addEventListener("mouseleave", noGlitch_exodus);
}

function noGlitch_exodus() {
    console.log("noGlitch_exodus");

    document.querySelector("#exodus_glitch").classList.add("hide");

}

// SEX OG SAMFUND FUNCTIONS

function glitch_sexsamfund() {
    console.log("glitch_sexsamfund");

    document.querySelector("#sexsamfund_glitch").classList.remove("hide");
    document.querySelector("#sexsamfund").addEventListener("mouseleave", noGlitch_sexsamfund);
}

function noGlitch_sexsamfund() {
    console.log("noGlitch_sexsamfund");

    document.querySelector("#sexsamfund_glitch").classList.add("hide");

}

// MINIFINANS FUNCTIONS

function glitch_minifinans() {
    console.log("glitch_minifinans");

    document.querySelector("#minifinans_glitch").classList.remove("hide");
    document.querySelector("#minifinans").addEventListener("mouseleave", noGlitch_minifinans);
}

function noGlitch_minifinans() {
    console.log("noGlitch_minifinans");

    document.querySelector("#minifinans_glitch").classList.add("hide");

}

// MOONBAR FUNCTIONS

function glitch_moonbar() {
    console.log("glitch_moonbar");

    document.querySelector("#moonbar_glitch").classList.remove("hide");
    document.querySelector("#moonbar").addEventListener("mouseleave", noGlitch_moonbar);
}

function noGlitch_moonbar() {
    console.log("noGlitch_moonbar");

    document.querySelector("#moonbar_glitch").classList.add("hide");

}

// INTERVIEW FUNCTIONS

function glitch_interview() {
    console.log("glitch_interview");

    document.querySelector("#interview_glitch").classList.remove("hide");
    document.querySelector("#interview").addEventListener("mouseleave", noGlitch_interview);
}

function noGlitch_interview() {
    console.log("noGlitch_interview");

    document.querySelector("#interview_glitch").classList.add("hide");

}
