const hoverSound = new Audio('hover.mp3');

hoverSound.volume = 0.5;

document.querySelectorAll('a').forEach(link => {
    link.addEventListener('mouseenter', () => {
        hoverSound.currentTime = 0;
        hoverSound.play();
    });
});
