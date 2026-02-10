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

  // --- Chat Hover Sound ---
  const hoverSound = new Audio('./assets/sounds/click.mp3');
  hoverSound.volume = 0.2;

  const chatButtons = document.querySelectorAll('.chat-btn');
  chatButtons.forEach(btn => {
    btn.addEventListener('mouseenter', () => {
      hoverSound.currentTime = 0;
      hoverSound.play();
    });
  });

});
