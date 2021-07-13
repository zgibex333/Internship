const itemsToCount = document.querySelectorAll('.customers');
const counters = document.querySelector('.point-inner');

document.addEventListener('scroll', startCounter);

function startCounter() {
    if (window.innerHeight >= counters.getBoundingClientRect().top) {
        Array.from(itemsToCount).forEach(item => {
            counter(item);
        });
        document.removeEventListener('scroll', startCounter);
    }
}

function counter(item) {
    let stopPoint = Number(item.innerText.slice(0, -1));
    let counterNum = 0;
    let duration;
    if (stopPoint < 20) {
        duration = 100;
    } else if (stopPoint < 100) {
        duration = 50;
    } else {
        duration = 10;
    }

    function increase() {
        if (counterNum > stopPoint) {
            setTimeout(() => {
                item.innerText = `${stopPoint}+`;
            }, duration);
            return;
        } else {
            setTimeout(() => {
                item.innerText = counterNum;
                counterNum += 2;
                increase();
            }, duration);
        }
    }
    increase();
}