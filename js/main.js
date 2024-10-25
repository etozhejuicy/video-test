const video = document.querySelector(".bg-video");
const videoDesktop = document.querySelector(".bg-video-desktop");

const startThisVideo = () => {
  if (window.innerWidth > 1024) {
    videoDesktop.pause();
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
  } else {
    video.pause();
    videoDesktop.pause();

    setTimeout(function () {
      videoDesktop.setAttribute("muted", true);
      videoDesktop.setAttribute("loop", true);
      videoDesktop.setAttribute("playsinline", true);
      videoDesktop.setAttribute("autoplay", true);
      videoDesktop.removeAttribute("controls");
      videoDesktop.dispatchEvent(new Event("click"));
      videoDesktop.play();
    }, 1000);
  }
};

window.addEventListener("resize", () => {
  startThisVideo();
});
