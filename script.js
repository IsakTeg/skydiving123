/* Scripten som tillåter texten att komma fram när videon slutar */
window.onload = function() {
  let video = document.getElementById("myVideo");
  let text = document.getElementById("showText");

  video.addEventListener("ended", () => {
    text.style.opacity = "1";
  });
}
