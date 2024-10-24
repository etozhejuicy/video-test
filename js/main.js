let video = document.getElementById("demo");

document.addEventListener("load", () => {
  video.pause();
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
