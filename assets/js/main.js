import "../scss/styles.scss";

const videoContainer = document.querySelector(".video-detail__container");

const registerView = () => {
  const videoId = window.location.href.split("/videos/")[1];
  fetch(`/api/${videoId}/view`, {
    method: "POST",
  });
};

function init() {
  registerView();
}

if (videoContainer) {
  init();
}
