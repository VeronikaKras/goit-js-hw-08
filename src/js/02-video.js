import Player from '@vimeo/player';

 const iframe = document.querySelector('iframe');
    const player = new Player(iframe);

    player.on('timeupdate', onPlay);

    function onPlay (event) {
    // data is an object containing properties specific to that event
        console.log(event);
        localStorage.setItem('videoplayer-current-time', event.seconds)
};

const time = localStorage.getItem('videoplayer-current-time')
console.log(time);


if (time) { 
    player.setCurrentTime(time);
}


