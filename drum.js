window.addEventListener('keypress', function (e) {
    console.log(e.code);
    const audio = document.querySelector(`audio[data-key = "${e.code}"]`);
    const key = document.querySelector(`.key[data-key = "${e.code}"]`);
    console.log(audio);

function removeTransition(e) {
    if(e.propertyName !== 'transform') return;
    this.classList.remove('playing');
}

    if (!audio) return;
    audio.currentTime = 0;
    audio.play()
    key.classList.add('playing');

    const keys = document.querySelectorAll('.key');
    keys.forEach(key => key.addEventListener('transitionend', removeTransition))
});


window.addEventListener('mousedown', function(e){
    console.log(e.target.dataset.key);
    const audio = document.querySelector(`audio[data-key = "${e.target.dataset.key}"]`);
    const key = document.querySelector(`.key[data-key = "${e.target.dataset.key}"]`);
    console.log(audio);

    function removeTransition(e) {
        if(e.propertyName !== 'transform') return;
        this.classList.remove('playing');
    }

    if (!audio) return;
    audio.currentTime = 0;
    audio.play()
    key.classList.add('playing');

    const keys = document.querySelectorAll('.key');
    keys.forEach(key => key.addEventListener('transitionend', removeTransition))
    
    function handleClick(e) {
    if(e.propertyName !== 'transform') return;
    this.classList.remove('playing');
    const key = e.target.dataset.key;
    
    const audio = document.querySelector(`audio[data-key="${key}"]`);
    
    if (!audio) return;
    audio.currentTime = 0;
    audio.play();
    e.target.classList.add('playing');
    }
    keys.forEach(key => key.addEventListener('click', handleClick));
});
  

