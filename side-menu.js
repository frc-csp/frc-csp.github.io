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

console.log('Has local storage: ' + hasLocalStorage());

/* Set the width of the side navigation to 250px */
function openNav() {
    document.getElementById("side-nav").style.width = "250px";
}

/* Set the width of the side navigation to 0 */
function closeNav() {
    document.getElementById("side-nav").style.width = "0";
}