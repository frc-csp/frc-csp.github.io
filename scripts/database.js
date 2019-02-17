class Record {
    constructor() {
        this.data = {};
    }

    set(key, value) {
        console.log(`Setting ${key} to ${value}`);
        this.data[key] = value;
    }
}

const sandstormDatabase = new Record();