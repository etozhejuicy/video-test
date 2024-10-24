const video = document.getElementById("demo");

video.pause();

setTimeout(function () {
  video.setAttribute("muted", true);
  video.setAttribute("loop", true);
  video.setAttribute("playsinline", true);
  video.setAttribute("autoplay", true);
  video.removeAttribute("controls");
  video.dispatchEvent(new Event("click"));
  video.play();
}, 1000);
