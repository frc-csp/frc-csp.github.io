function setError(msg) {
    document.getElementById("error-banner-text").innerHTML = msg;
    document.getElementById("error-banner").style.display = "inline";
}

function clearError() {
    document.getElementById("error-banner").style.display = "none";
}

function onMatchBarInputChanged(e) {
    // Check if any of the data is missing
    var matchNumber = document.getElementById("matchNumberInput").value;
    var teamNumber = document.getElementById("teamNumberInput").value;
    var alliance = document.getElementById("alliance-select").value;
    var driveStation = document.getElementById("drive-station-select").value;
    var robotPosition = document.getElementById("robot-position-select").value;

    changeField(alliance);

    if (matchNumber === "") {
        setError("Missing Match Number");
    } else if (teamNumber === "") {
        setError("Missing Team Number");
    } else if (alliance === "---") {
        setError("Missing Alliance");
    } else if (driveStation === "---") {
        setError("Missing Drive Station");
    } else if (robotPosition === "---") {
        setError("Missing Robot Position");
    } else {
        // Check if signed in
        if (scout.isLoggedIn()) {
            clearError();
        } else {
            setError("Not Logged In");
        }
    }
}

function changeField(alliance) {
    switch (alliance) {
        case "Red":
            document.getElementById("sandstorm-levels-button").src = "/images/red_levels.png";
            document.getElementById("sandstorm-rocket-button").src = "/images/red_rocket.png";
            document.getElementById("sandstorm-cargo-button").src = "/images/red_cargo_ship.png";
            break;
        case "Blue":
            document.getElementById("sandstorm-levels-button").src = "/images/blue_levels.png";
            document.getElementById("sandstorm-rocket-button").src = "/images/blue_rocket.png"
            document.getElementById("sandstorm-cargo-button").src = "/images/blue_cargo_ship.png";
            break;
        case "---":
            document.getElementById("sandstorm-levels-button").src = "";
            document.getElementById("sandstorm-rocket-button").src = "";
            document.getElementById("sandstorm-cargo-button").src = "";
            break;
    }
}

function changeView(name) {
    var sandstorm = document.getElementById("sandstormContainer");
    var teleop = document.getElementById("teleopContainer");
    var rating = document.getElementById("ratingContainer");

    switch (name) {
        case "Sandstorm":
            sandstorm.style.display = "inline";
            teleop.style.display = "none";
            rating.style.display = "none";
            break;
        case "TeleOp":
            sandstorm.style.display = "none";
            teleop.style.display = "inline";
            rating.style.display = "none";
            break;
        case "Rating":
            sandstorm.style.display = "none";
            teleop.style.display = "none";
            rating.style.display = "inline";
            break;
    }
}

// Attach onMatchBarInputChanged to match bar inputs
document.getElementById("matchNumberInput").addEventListener("input", onMatchBarInputChanged);
document.getElementById("teamNumberInput").addEventListener("input", onMatchBarInputChanged);
document.getElementById("alliance-select").addEventListener("input", onMatchBarInputChanged);
document.getElementById("drive-station-select").addEventListener("input", onMatchBarInputChanged);
document.getElementById("robot-position-select").addEventListener("input", onMatchBarInputChanged);

onMatchBarInputChanged();
changeView('Sandstorm');

/**
 * This function is to fill out the match bar to default values
 * because it takes too long to fill it in everytime you
 * load the view.
 */
function DEBUGfillMatchBar() {
    document.getElementById("matchNumberInput").value = "1";
    document.getElementById("teamNumberInput").value = "6317";
    document.getElementById("alliance-select").value = "Red";
    document.getElementById("drive-station-select").value = "1";
    document.getElementById("robot-position-select").value = "1";
}

function switchSandstormView(newView) {
    if (newView === "Levels") {
        document.getElementById("sandstorm-levels-button").style.display = "none";
        document.getElementById("sandstorm-rocket-button").style.display = "none";
        document.getElementById("sandstorm-cargo-button").style.display = "none";
        document.getElementById("levels-closeup-view").style.display = "inline";
        document.getElementById("rocket-closeup-view").style.display = "none";
        document.getElementById("cargo-closeup-view").style.display = "none";
    } else if (newView === "Rocket") {
        document.getElementById("sandstorm-levels-button").style.display = "none";
        document.getElementById("sandstorm-rocket-button").style.display = "none";
        document.getElementById("sandstorm-cargo-button").style.display = "none";
        document.getElementById("levels-closeup-view").style.display = "none";
        document.getElementById("rocket-closeup-view").style.display = "inline";
        document.getElementById("cargo-closeup-view").style.display = "none";
    } else if (newView === "Cargo") {
        document.getElementById("sandstorm-levels-button").style.display = "none";
        document.getElementById("sandstorm-rocket-button").style.display = "none";
        document.getElementById("sandstorm-cargo-button").style.display = "none";
        document.getElementById("levels-closeup-view").style.display = "none";
        document.getElementById("rocket-closeup-view").style.display = "none";
        document.getElementById("cargo-closeup-view").style.display = "inline";
    } else if (newView === "Thumbnails") {
        document.getElementById("sandstorm-levels-button").style.display = "inline";
        document.getElementById("sandstorm-rocket-button").style.display = "inline";
        document.getElementById("sandstorm-cargo-button").style.display = "inline";
        document.getElementById("levels-closeup-view").style.display = "none";
        document.getElementById("rocket-closeup-view").style.display = "none";
        document.getElementById("cargo-closeup-view").style.display = "none";
    } else {
        console.log("ERROR: Invalid sandstorm view: " + newView);
    }
}