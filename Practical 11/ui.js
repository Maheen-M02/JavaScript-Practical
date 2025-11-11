import { logEvent } from './helper.js';

export function handleViewportChange() {
  if (window.innerWidth < 600) {
    document.body.style.background = '#f0f8ff';
  } else {
    document.body.style.background = 'white';
  }
}

export function addDynamicSessions() {
  const sessionsDiv = document.getElementById('sessions');
  sessionsDiv.addEventListener('click', (e) => {
    if (e.target.classList.contains('session')) {
      alert("You selected: " + e.target.textContent);
      logEvent(`User selected: ${e.target.textContent}`);
    }
  });
}

export function enableAddSession() {
  const btn = document.getElementById('addSessionBtn');
  const sessionsDiv = document.getElementById('sessions');

  btn.addEventListener('click', () => {
    const newSession = document.createElement('div');
    const randomHour = Math.floor(Math.random() * 12) + 1;
    newSession.classList.add('session');
    newSession.dataset.time = `${randomHour < 10 ? '0' + randomHour : randomHour}:00`;
    newSession.textContent = `New Session - ${randomHour}:00 AM`;
    sessionsDiv.appendChild(newSession);

    logEvent('New session added dynamically');
  });
}
