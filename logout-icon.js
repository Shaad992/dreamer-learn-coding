function createLogoutIcon() {
  const icon = document.createElement('div');
  icon.className = 'icon-wrapper';
  icon.style.top = '20px';
  icon.style.left = '20px';
  icon.style.setProperty('--dx', '-5px');
  icon.style.setProperty('--dy', '-10px');

  icon.innerHTML = `
    <div class="icon" style="
      background: radial-gradient(circle at 30% 30%, rgba(144,238,144,0.4), rgba(144,238,144,0.05));
      border: 1px solid rgba(144,238,144,0.15);
      box-shadow:
        inset 0 0 12px rgba(144,238,144,0.15),
        0 0 25px rgba(144,238,144,0.3),
        0 0 40px rgba(144,238,144,0.15);
      backdrop-filter: blur(6px);
    ">
      🔓
    </div>
    <div class="label" style="color: #90ee90;">Logout</div>
  `;
  icon.onclick = () => {
    alert('Logging out...');
    // firebase.auth().signOut(); // activate if auth used
  };
  document.body.appendChild(icon);
}

createLogoutIcon();