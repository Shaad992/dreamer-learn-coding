function createProfileIcon() {
  const icon = document.createElement('div');
  icon.className = 'icon-wrapper';
  icon.style.top = '20px';
  icon.style.right = '20px';
  icon.style.setProperty('--dx', '5px');
  icon.style.setProperty('--dy', '-10px');

  icon.innerHTML = `
    <div class="icon" style="
      background: radial-gradient(circle at 30% 30%, rgba(255,192,203,0.4), rgba(255,192,203,0.05));
      border: 1px solid rgba(255,182,193,0.2);
      box-shadow:
        inset 0 0 12px rgba(255,192,203,0.15),
        0 0 25px rgba(255,182,193,0.3),
        0 0 40px rgba(255,182,193,0.15);
      backdrop-filter: blur(6px);
    ">
      👤
    </div>
    <div class="label" style="color: #ffc0cb;">Profile</div>
  `;
  icon.onclick = () => {
    document.getElementById('profilePopup').classList.add('show');
  };
  document.body.appendChild(icon);
}

createProfileIcon();