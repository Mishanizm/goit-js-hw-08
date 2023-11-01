
import Player from '@vimeo/player';

const iframe = document.getElementById('vimeo-player');

const player = new Player(iframe);

player.on('timeupdate', (data) => {
  const currentTime = data.seconds;

  localStorage.setItem('videoplayer-current-time', currentTime);
});

const savedTime = localStorage.getItem('videoplayer-current-time');

if (savedTime) {
  player.setCurrentTime(savedTime).then(() => {
    player.play();
  }).catch((error) => {
    console.error('Error setting current time:', error);
  });
}
