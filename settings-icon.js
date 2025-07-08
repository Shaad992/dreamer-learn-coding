function createSettingsIcon() {
  const icon = document.createElement('div');
  icon.className = 'icon-wrapper';
  icon.style.top = '50%';
  icon.style.left = '50%';
  icon.style.setProperty('--dx', '4px');
  icon.style.setProperty('--dy', '-8px');

  icon.innerHTML = `
    <div class="icon" style="
      background: radial-gradient(circle at 30% 30%, rgba(173,216,230,0.4), rgba(173,216,230,0.05));
      border: 1px solid rgba(173,216,230,0.15);
      box-shadow:
        inset 0 0 12px rgba(173,216,230,0.15),
        0 0 25px rgba(173,216,230,0.3),
        0 0 40px rgba(173,216,230,0.15);
      backdrop-filter: blur(6px);
    ">
      ⚙️
    </div>
    <div class="label" style="color: #add8e6;">Settings</div>
  `;

  // Drag logic (touch + mouse)
  let isDragging = false, offsetX, offsetY;

  const startDrag = e => {
    isDragging = true;
    const rect = icon.getBoundingClientRect();
    offsetX = (e.touches ? e.touches[0].clientX : e.clientX) - rect.left;
    offsetY = (e.touches ? e.touches[0].clientY : e.clientY) - rect.top;
  };

  const drag = e => {
    if (!isDragging) return;
    const x = (e.touches ? e.touches[0].clientX : e.clientX) - offsetX;
    const y = (e.touches ? e.touches[0].clientY : e.clientY) - offsetY;
    icon.style.left = `${x}px`;
    icon.style.top = `${y}px`;
  };

  const stopDrag = () => isDragging = false;

  icon.addEventListener('mousedown', startDrag);
  icon.addEventListener('mousemove', drag);
  icon.addEventListener('mouseup', stopDrag);
  icon.addEventListener('mouseleave', stopDrag);
  icon.addEventListener('touchstart', startDrag);
  icon.addEventListener('touchmove', drag);
  icon.addEventListener('touchend', stopDrag);

  document.body.appendChild(icon);
}

createSettingsIcon();