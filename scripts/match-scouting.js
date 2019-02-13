function setError(msg) {
    document.getElementById("error-banner-text").innerHTML = msg;
    document.getElementById("error-banner").style.display = "block";
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
    /*switch (alliance) {
        case "Red":
            document.getElementById("red-field").style.display = "block";
            document.getElementById("blue-field").style.display = "none";
            break;
        case "Blue":
            document.getElementById("blue-field").style.display = "block";
            document.getElementById("red-field").style.display = "none";
            break;
        case "---":
            document.getElementById("blue-field").style.display = "none";
            document.getElementById("red-field").style.display = "none";
            break;
    }*/
}

// TODO
function changeView(name) {
    var sandstorm = document.getElementById("sandstormContainer");
    var teleop = document.getElementById("teleopContainer");
    var rating = document.getElementById("ratingContainer");

    switch (name) {
        case "Sandstorm":
            sandstorm.style.display = "block";
            teleop.style.display = "none";
            rating.style.display = "none";
            break;
        case "TeleOp":
            sandstorm.style.display = "none";
            teleop.style.display = "block";
            rating.style.display = "none";
            break;
        case "Rating":
            sandstorm.style.display = "none";
            teleop.style.display = "none";
            rating.style.display = "block";
            break;
    }
}

// Attach onMatchBarInputChanged to match bar inputs
document.getElementById("matchNumberInput").addEventListener("input", onMatchBarInputChanged);
document.getElementById("teamNumberInput").addEventListener("input", onMatchBarInputChanged);
document.getElementById("alliance-select").addEventListener("input", onMatchBarInputChanged);
document.getElementById("drive-station-select").addEventListener("input", onMatchBarInputChanged);
document.getElementById("robot-position-select").addEventListener("input", onMatchBarInputChanged);

DEBUGfillMatchBar();
onMatchBarInputChanged();
changeView('Sandstorm');

function DEBUGfillMatchBar() {
    document.getElementById("matchNumberInput").value = "1";
    document.getElementById("teamNumberInput").value = "6317";
    document.getElementById("alliance-select").value = "Red";
    document.getElementById("drive-station-select").value = "1";
    document.getElementById("robot-position-select").value = "1";
}
