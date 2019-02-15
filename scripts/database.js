// This file will house a dictionary that will be used
// to record the data from a match
function collectAllInformation() {
    const sandstorm = getSandstormRecord();

    console.log("Database: " + sandstorm);
}

function getSandstormRecord() {
    const record = new Record("auto_");

    const losesStartObject = document.getElementById("auto-loses-start-object").checked;
    record.add("flLoseStartObject", losesStartObject);

    const robotContact = document.getElementById("auto-robot-contact").checked;
    record.add("flRobotContact", robotContact);

    const foul = document.getElementById("auto-foul").checked;
    record.add("flFoul", foul);

    const crossover = document.getElementById("auto-crosses-midline").checked;
    record.add("flCrossOver", crossover);

    return record;
}

class Record {
    constructor(prefix) {
        this.prefix = prefix;
        this.data = {};
    }

    add(key, value) {
        this.data[this.prefix + key] = value;
    }
}