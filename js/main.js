let video = document.getElementById("demo");

video.pause();
document.addEventListener("DOMContentLoaded", () => {
  setTimeout(() => {
    video.setAttribute("muted", true);
    video.setAttribute("loop", true);
    video.setAttribute("playinline", true);
    video.setAttribute("autoplay", true);
    video.removeAttribute("controls");
    video.dispatchEvent(new Event("click"));
    video.play();
  }, 1000);
});
