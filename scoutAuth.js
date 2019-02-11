class Scout {
    constructor() {
        // Initialize variables
        this.authStateChangedListenerEventKey = "authStateChanged";
        this.delegates = [];
        this.name = null;
        this.tournament = null;

        this.load();
        this.save();
    }

    /**
     * Attempt to load data from session storage into this object
     */
    load() {
        let storageName = sessionStorage.getItem('scout-name');
        let tournamentName = sessionStorage.getItem('tournament-name');
        this.login(storageName, tournamentName);
    }

    /**
     * Save the data in this Scout object to session storage
     */
    save() {
        if (this.name === null) {
            sessionStorage.removeItem('scout-name');
        } else {
            sessionStorage.setItem('scout-name', this.name);
        }
        
        if (this.tournament === null) {
            sessionStorage.removeItem('tournament-name');
        } else {
            sessionStorage.setItem('tournament-name', this.tournament);
        }
    }

    isLoggedIn() {
        return this.name !== null && this.tournament !== null;
    }

    /**
     * Attempt to login a user by supplying a name and tournament
     * @param {String} name The name of the user
     * @param {String} tournament The name of the tournament the user entered in
     * @returns {Boolean} whether or not the scout was able to log in
     */
    login(name, tournament) {
        // TODO - validate name and tournament
        console.log("scout:login name=" + name + ", tournament=" + tournament);
        
        // If either parameter is null or empty, we cannot accept.
        if (name === null || name === "" || 
            tournament === null || tournament === "") {
            return false;
        }

        this.name = name;
        this.tournament = tournament;

        this.save();
        this.notifyDelegates(true);
        
        return true;
    }

    logout() {
        this.name = null;
        this.tournament = null;

        this.save();
        this.notifyDelegates(false);
    }

    addDelegate(elem) {
        this.delegates.push(elem);
    }

    notifyDelegates(authState) {
        const event = new CustomEvent(this.authStateChangedListenerEventKey, {detail: authState});
        for (var i = 0; i < this.delegates.length; i++) {
            this.delegates[i].dispatchEvent(event);
        }
    }
}

/* Let's check if localStorage exists */
// https://stackoverflow.com/questions/16427636/check-if-localstorage-is-available/16427747
function hasLocalStorage() {
    if (typeof localStorage !== 'undefined') {
        try {
            localStorage.setItem('feature_test', 'yes');
            if (localStorage.getItem('feature_test') === 'yes') {
                localStorage.removeItem('feature_test');
                return true;
            }
        } catch (e) {}
    }
    
    return false;
}

/**
 * Checks if this browser has session storage capabilities
 */
function hasSessionStorage() {
    if (typeof sessionStorage !== 'undefined') {
        try {
            sessionStorage.setItem('feature_test', 'yes');
            if (sessionStorage.getItem('feature_test') === 'yes') {
                sessionStorage.removeItem('feature_test');
                return true;
            }
        } catch (e) {}
    }

    return false;
}

if (!hasSessionStorage()) {
    alert('It appears you do not have session storage on this browser. This means this application will not work.');
}

// This will be the only scout in the program.
const scout = new Scout();