class Record {
    constructor() {
        this.clear();
    }

    set(key, value) {
        console.log(`Setting ${key} to ${value}`);
        this.data[key] = value;
    }

    get(key) {
        return this.data[key];
    }

    /**
     * Export this record into CSV format
     */
    export() {
        /*
        auto_numShipFrontHatchAttempt
        auto_numShipFrontHatchSuccess
        auto_numShipSideHatchAttempt
        auto_numShipSideHatchSuccess
        auto_numShipFrontCargoAttempt
        auto_numShipFrontCargoSuccess
        auto_numShipSideCargoAttempt
        auto_numShipSideCargoSuccess
        auto_numRocketLowHatchAttempt
        auto_numRocketLowHatchSuccess
        auto_numRocketMidHatchAttempt
        auto_numRocketMidHatchSuccess
        auto_numRocketHighAttempt
        auto_numRocketHighSuccess
        auto_numRocketLowCargoAttempt
        auto_numRocketLowCargoSuccess
        auto_numRocketMidCargoAttempt
        auto_numRocketMidCargoSuccess
        auto_numRocketHighCargoAttempt
        auto_numRocketHighCargoSuccess */
        
        var csvData = "";
        csvData += this.get("auto_numShipFrontHatchAttempt") || 0;
        csvData += ",";
        csvData += this.get("auto_numShipFrontHatchSuccess") || false;
        csvData += ",";
        csvData += this.get("auto_numShipSideHatchAttempt") || 0;
        csvData += ",";
        csvData += this.get("auto_numShipSideHatchSuccess") || false;
        csvData += ",";
        csvData += this.get("auto_numShipFrontCargoAttempt") || 0;
        csvData += ",";
        csvData += this.get("auto_numShipFrontCargoSuccess") || false;
        csvData += ",";
        csvData += this.get("auto_numShipSideCargoAttempt") || 0;
        csvData += ",";
        csvData += this.get("auto_numShipSideCargoSuccess") || false;
        csvData += ",";
        csvData += this.get("auto_numRocketLowHatchAttempt") || 0;
        csvData += ",";
        csvData += this.get("auto_numRocketLowHatchSuccess") || false;
        csvData += ",";
        csvData += this.get("auto_numRocketMidHatchAttempt") || 0;
        csvData += ",";
        csvData += this.get("auto_numRocketMidHatchSuccess") || false;
        csvData += ",";
        csvData += this.get("auto_numRocketHighAttempt") || 0;
        csvData += ",";
        csvData += this.get("auto_numRocketHighSuccess") || false;
        csvData += ",";
        csvData += this.get("auto_numRocketLowCargoAttempt") || 0;
        csvData += ",";
        csvData += this.get("auto_numRocketLowCargoSuccess") || false;
        csvData += ",";
        csvData += this.get("auto_numRocketMidCargoAttempt") || 0;
        csvData += ",";
        csvData += this.get("auto_numRocketMidCargoSuccess") || false;
        csvData += ",";
        csvData += this.get("auto_numRocketHighCargoAttempt") || 0;
        csvData += ",";
        csvData += this.get("auto_numRocketHighCargoSuccess") || false;
        csvData += ",";

        return csvData;
    }

    /**
     * Delete all data in this record
     */
    clear() {
        this.data = {};
    }
}

const sandstormDatabase = new Record();