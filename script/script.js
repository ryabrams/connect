const qrImages = {
  linkedin: "images/linkedin_qr.png",
  x: "images/x_qr.png",
  instagram: "images/instagram_qr.png",
  github: "images/github_qr.png" // Updated to include GitHub
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

  // Set the default value of the dropdown to the disabled option
  profileSelect.value = "";
  qrImage.src = ""; // Clear the QR code image
  qrImage.alt = "QR code"; // Reset the alt text
});

document.addEventListener('DOMContentLoaded', () => {
  const platformSelect = document.getElementById('platformSelect');
  const qrImage = document.getElementById('qrImage');

  // Map platform values to QR code image URLs
  const qrCodes = {
    linkedin: 'images/qr-linkedin.png',
    x: 'images/qr-x.png',
    github: 'images/qr-github.png',
  };

  platformSelect.addEventListener('change', () => {
    const selectedPlatform = platformSelect.value;

    if (qrCodes[selectedPlatform]) {
      qrImage.src = qrCodes[selectedPlatform];
      qrImage.alt = `QR code for ${selectedPlatform}`;
      qrImage.style.display = 'block'; // Ensure the image is visible
    } else {
      qrImage.src = '';
      qrImage.alt = 'QR code';
      qrImage.style.display = 'none'; // Hide the image if no valid option is selected
    }
  });
});