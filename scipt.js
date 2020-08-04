const container = document.querySelector(".container");
const text = document.querySelector('#text');

totalTime = 10000;
breatheTime = (totalTime / 5) * 2;
holdTime = totalTime / 5;

breatheAnimation();

function breatheAnimation(){
    text.innerHTML = "Breathe In";
    container.className = 'container grow'

    setTimeout(() => {
        text.innerHTML = 'Hold!';

        setTimeout(() => {
            text.innerHTML = 'Breathe Out';
            container.className = 'container shrink';
        }, holdTime);
    }, breatheTime);
};

setInterval(() => {
    breatheAnimation();
}, totalTime);