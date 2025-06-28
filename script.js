const volumeInput = document.querySelector('.volume');
const playbackSpeedInput = document.querySelector('.playbackSpeed');

function updateVolume() {
  video.volume = volumeInput.value;
}

function updatePlaybackSpeed() {
  video.playbackRate = playbackSpeedInput.value;
}

// Event listeners
volumeInput.addEventListener('input', updateVolume);
playbackSpeedInput.addEventListener('input', updatePlaybackSpeed);