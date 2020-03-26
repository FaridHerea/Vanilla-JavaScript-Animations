var ol = 0;
var circleInterval = setInterval(circleAnimation, 50);
function circleAnimation() {
    ol >= (4000 / 50)
    ? (
        document.getElementById('circle').style.backgroundColor = 'dimgrey',
        clearInterval()
    )
    : (
        ol++,
        document.getElementById('circle').style.left = ol + 'px'
    )
};