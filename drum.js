window.addEventListener('keypress', function (e) {
    console.log(e.code);
    const audio = document.querySelector(`audio[data-key = "${e.code}"]`);
    console.log(audio);
    if(!audio) return;
    audio.currentTime = 0;
    audio.play();
});