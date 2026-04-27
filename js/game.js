// ── State Management ──────────────────────────────────────────────────────────

function setProgress(key, value) {
  localStorage.setItem(key, value);
}

function getProgress(key) {
  return localStorage.getItem(key);
}

function checkAccess(requiredKey, redirectUrl) {
  if (getProgress(requiredKey) !== 'true') {
    window.location.href = redirectUrl;
  }
}

function clearProgress() {
  ['room1Complete', 'room2aComplete', 'room2bComplete', 'room3Complete'].forEach(
    key => localStorage.removeItem(key)
  );
}

// ── Timer ─────────────────────────────────────────────────────────────────────

function startTimer(minutes, timerId) {
  const el = document.getElementById(timerId);
  if (!el) return;

  let totalSeconds = minutes * 60;

  function tick() {
    const mins = Math.floor(totalSeconds / 60);
    const secs = totalSeconds % 60;
    el.textContent = `${String(mins).padStart(2, '0')}:${String(secs).padStart(2, '0')}`;

    if (totalSeconds <= 120) {
      el.classList.add('timer-urgent');
      el.style.animation = 'pulse 0.8s ease-in-out infinite';
    }

    if (totalSeconds <= 0) {
      clearInterval(intervalId);
      window.location.href = 'index.html?timeout=true';
      return;
    }

    totalSeconds--;
  }

  tick();
  const intervalId = setInterval(tick, 1000);
  return intervalId;
}

// ── Puzzle Helpers ────────────────────────────────────────────────────────────

function shakeElement(el) {
  if (!el) return;
  el.classList.remove('shake');
  // Force reflow so re-adding the class restarts the animation
  void el.offsetWidth;
  el.classList.add('shake');
  setTimeout(() => el.classList.remove('shake'), 500);
}

function showError(el, message) {
  if (!el) return;
  el.innerHTML = message;
  el.classList.remove('success-text');
  el.classList.add('error-text');
}

function showSuccess(el, message) {
  if (!el) return;
  el.innerHTML = message;
  el.classList.remove('error-text');
  el.classList.add('success-text');
}

// ── Drag and Drop ─────────────────────────────────────────────────────────────

function initDrag(dragId, dropId, onSuccess) {
  const draggable = document.getElementById(dragId);
  const dropZone  = document.getElementById(dropId);
  if (!draggable || !dropZone) return;

  draggable.setAttribute('draggable', 'true');

  draggable.addEventListener('dragstart', e => {
    e.dataTransfer.setData('text/plain', dragId);
    draggable.style.opacity = '0.5';
  });

  draggable.addEventListener('dragend', () => {
    draggable.style.opacity = '1';
  });

  dropZone.addEventListener('dragover', e => {
    e.preventDefault();
    dropZone.classList.add('drag-over');
  });

  dropZone.addEventListener('dragleave', () => {
    dropZone.classList.remove('drag-over');
  });

  dropZone.addEventListener('drop', e => {
    e.preventDefault();
    dropZone.classList.remove('drag-over');
    const droppedId = e.dataTransfer.getData('text/plain');
    if (droppedId === dragId) {
      onSuccess();
    }
  });
}

// ── Timeout Banner (index.html) ───────────────────────────────────────────────

document.addEventListener('DOMContentLoaded', () => {
  const isIndex =
    window.location.pathname.endsWith('index.html') ||
    window.location.pathname === '/' ||
    window.location.pathname.endsWith('/');

  if (!isIndex) return;

  const params = new URLSearchParams(window.location.search);
  if (params.get('timeout') !== 'true') return;

  const banner = document.createElement('div');
  banner.id = 'timeout-banner';
  banner.style.cssText = [
    'position:fixed',
    'top:0',
    'left:0',
    'width:100%',
    'background:rgba(200,16,46,0.95)',
    'color:#F8F4E9',
    'text-align:center',
    'padding:24px 16px',
    'z-index:9999',
    'font-family:"DM Sans",sans-serif',
  ].join(';');

  banner.innerHTML = `
    <p style="font-family:'Playfair Display',serif;font-size:1.4rem;margin-bottom:12px;">
      Time&rsquo;s up! The thief got away.
    </p>
    <button id="retry-btn" style="
      background:#F2A900;
      color:#0D1F17;
      font-family:'DM Sans',sans-serif;
      font-weight:700;
      font-size:0.875rem;
      text-transform:uppercase;
      letter-spacing:2px;
      padding:12px 28px;
      border:none;
      cursor:pointer;
    ">Try Again</button>
  `;

  document.body.prepend(banner);

  document.getElementById('retry-btn').addEventListener('click', () => {
    clearProgress();
    window.location.href = 'index.html';
  });
});
