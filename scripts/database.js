class Record {
    constructor() {
        this.data = {};
    }

    set(key, value) {
        console.log(`Setting ${key} to ${value}`);
        this.data[key] = value;
    }

    get(key) {
        return this.data[key];
    }
}

const sandstormDatabase = new Record();