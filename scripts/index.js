document.getElementById("scout-status-section").addEventListener(scout.authStateChangedListenerEventKey, updateWelcomeView);

function updateWelcomeView(e) {
    if (scout.isLoggedIn()) {
        document.getElementById("scout-logged-in-view").style.display = "inline";
        document.getElementById("scout-not-logged-in-view").style.display = "none";
        document.getElementById("welcome-text-logged-in").innerHTML = `Welcome back, Scout ${scout.name}!`;
    } else {
        document.getElementById("scout-logged-in-view").style.display = "none";
        document.getElementById("scout-not-logged-in-view").style.display = "inline";
    }
}

scout.addDelegate(document.getElementById("scout-status-section"));
updateWelcomeView();

function scoutLogin() {
    const name = document.getElementById('scout-name').value;
    const tournament = document.getElementById('scout-tournament').value;
    scout.login(name, tournament);
}