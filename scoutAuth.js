class Scout {
    name = null;
    tournament = null;
    
    constructor() {
        
    }

    isLoggedIn() {
        return this.name !== null && this.tournament !== null;
    }

    login(name, tournament) {
        // TODO - validate name and tournament

        
        this.name = name;
        this.tournament = tournament;

        // TODO - if valid, notify subscribers to this that the auth state has changed
        
        return true;
    }

    logOut() {
        this.name = null;
        this.tournament = null;

        // TODO - notify subscribers to this that the auth state has changed
    }
}