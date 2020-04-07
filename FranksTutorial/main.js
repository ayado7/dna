

function buttonClicked() {
    //window.alert("button click has worked");
    document.getElementById("signinDialog").show();
}

function pageLoaded() {
    //window.alert("page has loaded");
    document.getElementById("sign-in").innerHTML = "Click me pleeeeease!";
    authenticate("Aya","asdasd");
}