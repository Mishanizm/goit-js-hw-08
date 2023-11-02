import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('#vimeo-player');
const player = new Player(iframe);

const savedTime = parseFloat(localStorage.getItem('videoplayer-current-time')) || 0;

player.setCurrentTime(savedTime).catch((error) => {
  switch (error.name) {
    case 'RangeError':
      break;
    default:
      break;
  }
});

player.on('timeupdate', throttle((data) => {
  const currentTime = data.seconds;
  localStorage.setItem('videoplayer-current-time', currentTime);
}, 1000)); 


