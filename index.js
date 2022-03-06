// Adds an event listener that starts the music when clicked, and then removes said event listener. This is for chromnium-based browsers only, and can be removed if you are not on a chromnium-based browser, and it can be removed alongside the corresponding element if you do not wish to have music on the startpage.
document.addEventListener('click', musicPlay);
function musicPlay() {
    document.getElementById('music').play();
    document.removeEventListener('click', musicPlay);
}
// Clock function, gets system time and prints in the header, can be customized for users with advanced JavaScript knowledge, or removed altogether alongside the <span> element in the header.
var time = new Date();
document.getElementById("time").innerHTML = time.toLocaleTimeString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true });
