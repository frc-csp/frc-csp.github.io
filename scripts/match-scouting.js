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
        clearError();
    }
}

// Attach onMatchBarInputChanged to match bar inputs
document.getElementById("matchNumberInput").addEventListener("input", onMatchBarInputChanged);
document.getElementById("teamNumberInput").addEventListener("input", onMatchBarInputChanged);
document.getElementById("alliance-select").addEventListener("input", onMatchBarInputChanged);
document.getElementById("drive-station-select").addEventListener("input", onMatchBarInputChanged);
document.getElementById("robot-position-select").addEventListener("input", onMatchBarInputChanged);
onMatchBarInputChanged();