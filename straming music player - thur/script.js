const audio = document.getElementById('audio');

const songs = document.querySelectorAll('.music');

songs.forEach(song => {
    song.addEventListener('click', () => {
        const src = song.getAttribute('data-src');
        audio.src = src;
        audio.play();
        
    });
});