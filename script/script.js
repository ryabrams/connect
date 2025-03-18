const qrImages = {
  linkedin: "images/linkedin_qr.png",
  x: "images/x_qr.png",
  instagram: "images/instagram_qr.png"
};

const profileSelect = document.getElementById('platformSelect');
const qrImage = document.getElementById('qrImage');
const themeToggleBtn = document.getElementById('themeToggle');
const body = document.body;

function showQr(platform) {
  qrImage.classList.remove('visible');
  qrImage.src = qrImages[platform];
  qrImage.onload = () => {
    qrImage.classList.add('visible');
  };
}

profileSelect.addEventListener('change', (e) => {
  showQr(e.target.value);
});

// Dark/Light mode functionality
function applyTheme(theme) {
  if (theme === 'dark') {
    body.classList.add('dark-mode');
    body.classList.remove('light-mode');
    themeToggleBtn.textContent = '🌙';
  } else {
    body.classList.add('light-mode');
    body.classList.remove('dark-mode');
    themeToggleBtn.textContent = '☀️';
  }
  localStorage.setItem('theme', theme);
}

themeToggleBtn.addEventListener('click', () => {
  const newTheme = body.classList.contains('dark-mode') ? 'light' : 'dark';
  applyTheme(newTheme);
});

window.addEventListener('DOMContentLoaded', () => {
  const savedTheme = localStorage.getItem('theme') || 'light';
  applyTheme(savedTheme);
  profileSelect.value = "linkedin";
  showQr("linkedin");
});