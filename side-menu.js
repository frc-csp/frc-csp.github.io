/* Set the width of the side navigation to 250px */
function openNav() {
    document.getElementById("side-nav").style.width = "250px";
}

/* Set the width of the side navigation to 0 */
function closeNav() {
    document.getElementById("side-nav").style.width = "0";
}

// Subscribe to scout auth changes
document.getElementById("scout-name-a").addEventListener(scout.authStateChangedListenerEventKey, e => {
    console.log('AUTH STATE CHANGED: ' + e.detail);
});

scout.addDelegate(document.getElementById("scout-name-a"));