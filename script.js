document.addEventListener("DOMContentLoaded", () => {
  const video = document.querySelector('.player__video');
  const toggle = document.querySelector('.toggle');
  const rewindBtn = document.querySelector('.rewind');
  const volumeInput = document.querySelector('.volume');
  const playbackSpeedInput = document.querySelector('.playbackSpeed');
  const speed = document.querySelector('.speed');
  const speedBar = document.querySelector('.speed-bar');

  if (!video) {
    console.warn('Video element not found!');
    return;
  }

  // Play/Pause toggle
  function togglePlay() {
    video.paused ? video.play() : video.pause();
  }

  function updateToggleIcon() {
    toggle.textContent = video.paused ? '►' : '❚ ❚';
  }

  // Rewind 10s
  function rewindVideo() {
    video.currentTime = Math.max(video.currentTime - 10, 0);
  }

  // Skip 25s
  function skipForward(e) {
    video.currentTime += parseFloat(e.target.dataset.skip);
  }

  // Volume
  volumeInput.addEventListener('input', () => {
    video.volume = volumeInput.value;
  });

  // Playback speed
  playbackSpeedInput.addEventListener('input', () => {
    video.playbackRate = playbackSpeedInput.value;
  });

  // Speed scrubber (visual + logic)
  speed.addEventListener('mousemove', (e) => {
    const y = e.offsetY;
    const height = speed.clientHeight;
    const percent = y / height;

    const min = 0.4;
    const max = 4;
    const playbackRate = (percent * (max - min)) + min;

    video.playbackRate = playbackRate;
    speedBar.style.height = `${percent * 100}%`;
    speedBar.textContent = `${playbackRate.toFixed(2)}×`;
  });

  // Event listeners
  toggle.addEventListener('click', togglePlay);
  video.addEventListener('play', updateToggleIcon);
  video.addEventListener('pause', updateToggleIcon);
  rewindBtn.addEventListener('click', rewindVideo);

  // 25s skip button
  const skipForwardBtn = document.querySelector('[data-skip="25"]');
  skipForwardBtn.addEventListener('click', skipForward);
});
