// Reveal each month card as it scrolls into view, sliding in from the
// side declared in its data-direction attribute (left / right).
document.addEventListener('DOMContentLoaded', () => {
  const cards = document.querySelectorAll('.month-card');

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('in-view');
        observer.unobserve(entry.target); // reveal once, keep it settled
      }
    });
  }, {
    root: null,
    rootMargin: '0px 0px -10% 0px',
    threshold: 0.2
  });

  cards.forEach((card) => observer.observe(card));

  // ---- Background music ----
  // Browsers only allow audio-with-sound to start in direct response to a
  // real user gesture (tap/click). The entry overlay's "Tap to Open" click
  // IS that gesture, so music starts the instant the invitation opens.
  const bgm = document.getElementById('bgm');
  const soundToggle = document.getElementById('sound-toggle');
  const entryOverlay = document.getElementById('entry-overlay');
  bgm.volume = 0.5;

  const setPlayingState = (isPlaying) => {
    soundToggle.setAttribute('aria-pressed', isPlaying ? 'true' : 'false');
  };

  const openInvitation = () => {
    entryOverlay.classList.add('is-hidden');
    document.documentElement.style.overflow = '';
    document.body.style.overflow = '';
    bgm.play()
      .then(() => setPlayingState(true))
      .catch(() => setPlayingState(false));
    entryOverlay.removeEventListener('click', openInvitation);
  };

  document.documentElement.style.overflow = 'hidden';
  document.body.style.overflow = 'hidden'; // hold the page still behind the overlay
  entryOverlay.addEventListener('click', openInvitation);

  soundToggle.addEventListener('click', () => {
    if (bgm.paused) {
      bgm.play().then(() => setPlayingState(true)).catch(() => setPlayingState(false));
    } else {
      bgm.pause();
      setPlayingState(false);
    }
  });
});

