import Vimeo from 'vimeo-player';
import throttle from 'lodash.throttle';

const iframe = document.getElementById('vimeo-player');
const player = new Vimeo(iframe);

const localStorageKey = 'videoplayer-current-time';

function saveTimeToLocalStorage() {
    player.getCurrentTime().then((time) => {
        localStorage.setItem(localStorageKey, time);
    });
}

const throttledSaveTimeToLocalStorage = throttle(saveTimeToLocalStorage, 1000);

player.on('timeupdate', throttledSaveTimeToLocalStorage);

const savedTime = localStorage.getItem(localStorageKey);

if (savedTime) {
    player.setCurrentTime(savedTime);
}

player.play();