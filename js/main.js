let video = document.getElementById("demo");

video[0].pause();
document.addEventListener("DOMContentLoaded", () => {
  setTimeout(() => {
    video.prop("muted", true);
    video.setAttribute("loop", true);
    video.setAttribute("playinline", true);
    video.setAttribute("autoplay", true);
    video.removeAttribute("controls");
    video.dispatchEvent(new Event("click"));
    video.play();
  }, 2000);
});
