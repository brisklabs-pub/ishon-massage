// assets/js/main.js
document.addEventListener("DOMContentLoaded", () => {
  // --- Floating Chat Toggle ---
  const chatToggle = document.getElementById("chatToggle");
  const chatOptions = document.getElementById("chatOptions");
  const contactToggle = document.getElementById("toggleContact");

  if (chatToggle && chatOptions) {
    chatToggle.addEventListener("click", () => {
      chatOptions.classList.toggle("show");
    });
  }

  if (contactToggle && chatOptions) {
    contactToggle.addEventListener("click", () => {
      chatOptions.classList.toggle("show");
    });
  }

  // --- Dynamic Year ---
  const yearSpan = document.getElementById("currentYear");
  if (yearSpan) {
    yearSpan.textContent = new Date().getFullYear();
  }

  // Video
  const video = document.getElementById("relaxVideo");
  const playBtn = document.getElementById("videoPlayBtn");

  // Show play button initially
  playBtn.style.display = "flex";

  // Play/unmute on click
  playBtn.addEventListener("click", () => {
    video.muted = false;  // unmute
    video.play().catch(() => console.log("User interaction needed to play video"));
    playBtn.style.display = "none"; // hide button after play
  });

  // Hide button if video is already playing
  video.addEventListener("play", () => {
    playBtn.style.display = "none";
  });

  // Show button if video is paused
  video.addEventListener("pause", () => {
    playBtn.style.display = "flex";
  });

});
