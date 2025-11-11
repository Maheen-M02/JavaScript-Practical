import { startCountdown, highlightActiveSession } from './timer.js';
import { handleViewportChange, addDynamicSessions, enableAddSession } from './ui.js';

window.addEventListener('load', () => {
  const display = document.getElementById('countdown');
  const countdownDuration = 120; 
  startCountdown(countdownDuration, display);
  highlightActiveSession();
  handleViewportChange();
  addDynamicSessions();
  enableAddSession();
});

window.addEventListener('resize', handleViewportChange);
