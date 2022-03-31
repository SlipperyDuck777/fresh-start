// Clock function, gets system time and prints in the header, can be customized for users with advanced JavaScript knowledge, or removed altogether alongside the <span> element in the header.
var time = new Date();
document.getElementById("time").innerHTML = time.toLocaleTimeString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true });
