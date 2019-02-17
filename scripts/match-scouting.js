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

DEBUGfillMatchBar();
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
        document.getElementById("auto-meta-data").style.display = "none";
        document.getElementById("sandstorm-levels-button").style.display = "none";
        document.getElementById("sandstorm-rocket-button").style.display = "none";
        document.getElementById("sandstorm-cargo-button").style.display = "none";
        document.getElementById("levels-closeup-view").style.display = "inline";
        document.getElementById("rocket-closeup-view").style.display = "none";
        document.getElementById("cargo-closeup-view").style.display = "none";
    } else if (newView === "Rocket") {
        document.getElementById("auto-meta-data").style.display = "none";
        document.getElementById("sandstorm-levels-button").style.display = "none";
        document.getElementById("sandstorm-rocket-button").style.display = "none";
        document.getElementById("sandstorm-cargo-button").style.display = "none";
        document.getElementById("levels-closeup-view").style.display = "none";
        document.getElementById("rocket-closeup-view").style.display = "inline";
        document.getElementById("cargo-closeup-view").style.display = "none";
        document.getElementById("rocket-closeup-nonmodal").style.display = "block";
        document.getElementById("attempts-successful-modal").style.display = "none";
    } else if (newView === "Cargo") {
        document.getElementById("auto-meta-data").style.display = "none";
        document.getElementById("sandstorm-levels-button").style.display = "none";
        document.getElementById("sandstorm-rocket-button").style.display = "none";
        document.getElementById("sandstorm-cargo-button").style.display = "none";
        document.getElementById("levels-closeup-view").style.display = "none";
        document.getElementById("rocket-closeup-view").style.display = "none";
        document.getElementById("cargo-closeup-view").style.display = "inline";
    } else if (newView === "Thumbnails") {
        document.getElementById("auto-meta-data").style.display = "block";
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

function pressHatch(selection) {
    document.getElementById("rocket-closeup-nonmodal").style.display = "none";
    document.getElementById("attempts-successful-modal").style.display = "block";

    const level = {
        "0": "Low",
        "1": "Medium",
        "2": "High"
    };

    const name = `Hatch ${level[selection]}`;
    document.getElementById("attempts-successful-modal-name").innerHTML = name;

    autoFillModalInfo();
}

function pressCargo(selection) {
    document.getElementById("rocket-closeup-nonmodal").style.display = "none";
    document.getElementById("attempts-successful-modal").style.display = "block";

    const level = {
        "0": "Low",
        "1": "Medium",
        "2": "High"
    };

    const name = `Rocket ${level[selection[0]]}`;
    document.getElementById("attempts-successful-modal-name").innerHTML = name;

    autoFillModalInfo();
}

function stepperDecrement() {
    var number = parseInt(document.getElementById("attempts-successful-modal-stepper-number").innerHTML);
    number--;
    if (number < 0) number = 0;
    document.getElementById("attempts-successful-modal-stepper-number").innerHTML = number;
    notifyChange();
}

function stepperIncrement() {
    var number = parseInt(document.getElementById("attempts-successful-modal-stepper-number").innerHTML);
    number++;
    document.getElementById("attempts-successful-modal-stepper-number").innerHTML = number;
    notifyChange();
}

// Set event listener for stepper and success
document.getElementById("attempts-successful-modal-success").addEventListener("change", notifyChange);

/**
 * Read the new values of stepper and checkbox and store them in the database
 */
function notifyChange() {
    const attempts = parseInt(document.getElementById("attempts-successful-modal-stepper-number").innerHTML);
    const success = document.getElementById("attempts-successful-modal-success").checked;

    // Check where to put it
    const headerText = document.getElementById("attempts-successful-modal-name").innerHTML;
    const hatch = headerText.indexOf("Hatch") >= 0;

    if (hatch) {
        // Hatch
        if (headerText.indexOf("High") >= 0) {
            sandstormDatabase.set("auto_numRocketHighAttempt", attempts);
            sandstormDatabase.set("auto_numRocketHighSuccess", success);
        } else if (headerText.indexOf("Medium") >= 0) {
            sandstormDatabase.set("auto_numRocketMidHatchAttempt", attempts);
            sandstormDatabase.set("auto_numRocketMidHatchSuccess", success);
        } else if (headerText.indexOf("Low") >= 0) {
            sandstormDatabase.set("auto_numRocketLowHatchAttempt", attempts);
            sandstormDatabase.set("auto_numRocketLowHatchSuccess", success);
        } else {
            console.log("ERROR: Changing hatch value that is not Low, Medium or High...");
        }
    } else {
        // Rocket
        if (headerText.indexOf("High") >= 0) {
            sandstormDatabase.set("auto_numRocketHighCargoAttempt", attempts);
            sandstormDatabase.set("auto_numRocketHighCargoSuccess", success);
        } else if (headerText.indexOf("Medium") >= 0) {
            sandstormDatabase.set("auto_numRocketMidCargoAttempt", attempts);
            sandstormDatabase.set("auto_numRocketMidCargoSuccess", success);
        } else if (headerText.indexOf("Low") >= 0) {
            sandstormDatabase.set("auto_numRocketLowCargoAttempt", attempts);
            sandstormDatabase.set("auto_numRocketLowCargoSuccess", success);
        } else {
            console.log("ERROR: Changing rocket value that is not Low, Medium or High...");
        }
    }
}

function autoFillModalInfo() {
    // Check where to put it
    const headerText = document.getElementById("attempts-successful-modal-name").innerHTML;
    const hatch = headerText.indexOf("Hatch") >= 0;

    if (hatch) {
        // Hatch
        if (headerText.indexOf("High") >= 0) {
            document.getElementById("attempts-successful-modal-stepper-number").innerHTML = sandstormDatabase.get("auto_numRocketHighAttempt") || 0;
            document.getElementById("attempts-successful-modal-success").checked = sandstormDatabase.get("auto_numRocketHighSuccess") || false;
        } else if (headerText.indexOf("Medium") >= 0) {
            document.getElementById("attempts-successful-modal-stepper-number").innerHTML = sandstormDatabase.get("auto_numRocketMidHatchAttempt") || 0;
            document.getElementById("attempts-successful-modal-success").checked = sandstormDatabase.get("auto_numRocketMidHatchSuccess") || false;
        } else if (headerText.indexOf("Low") >= 0) {
            document.getElementById("attempts-successful-modal-stepper-number").innerHTML = sandstormDatabase.get("auto_numRocketLowHatchAttempt") || 0;
            document.getElementById("attempts-successful-modal-success").checked = sandstormDatabase.get("auto_numRocketLowHatchSuccess") || false;
        } else {
            console.log("ERROR: Changing hatch value that is not Low, Medium or High...");
        }
    } else {
        // Rocket
        if (headerText.indexOf("High") >= 0) {
            document.getElementById("attempts-successful-modal-stepper-number").innerHTML = sandstormDatabase.get("auto_numRocketHighCargoAttempt") || 0;
            document.getElementById("attempts-successful-modal-success").checked = sandstormDatabase.get("auto_numRocketHighCargoSuccess") || false;
        } else if (headerText.indexOf("Medium") >= 0) {
            document.getElementById("attempts-successful-modal-stepper-number").innerHTML = sandstormDatabase.get("auto_numRocketMidCargoAttempt") || 0;
            document.getElementById("attempts-successful-modal-success").checked = sandstormDatabase.get("auto_numRocketMidCargoSuccess") || false;
        } else if (headerText.indexOf("Low") >= 0) {
            document.getElementById("attempts-successful-modal-stepper-number").innerHTML = sandstormDatabase.get("auto_numRocketLowCargoAttempt") || 0;
            document.getElementById("attempts-successful-modal-success").checked = sandstormDatabase.get("auto_numRocketLowCargoSuccess") || false;
        } else {
            console.log("ERROR: Changing rocket value that is not Low, Medium or High...");
        }
    }
}