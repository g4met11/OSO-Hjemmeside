const klasseIndstillinger = document.querySelector('.menu-item:nth-child(6)');
const muteSettings = document.querySelector('.mute-settings');

klasseIndstillinger.addEventListener('click', function() {
  muteSettings.style.display = 'block';
});