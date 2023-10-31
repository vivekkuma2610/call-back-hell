const countdownElement = document.getElementById('countdown');

const countdown = (num, callback) => {
    countdownElement.innerHTML = "10" + " 🎉";
    setTimeout(() => {
        countdownElement.innerHTML = "9" + " 🥳";
        setTimeout(() => {
            countdownElement.innerHTML = "9" + " 🎂";
            setTimeout(() => {
                countdownElement.innerHTML = "8" + " 🎁";
                setTimeout(() => {
                    countdownElement.innerHTML = "7" + " 🍰";
                    setTimeout(() => {
                        countdownElement.innerHTML = "6" + " 🎈";
                        setTimeout(() => {
                            countdownElement.innerHTML = "5" + " 🎊";
                            setTimeout(() => {
                                countdownElement.innerHTML = "4" + " 🎇";
                                setTimeout(() => {
                                    countdownElement.innerHTML = "3" + " 🎆";
                                    setTimeout(() => {
                                        countdownElement.innerHTML = "2" + " 🌟";
                                        setTimeout(() => {
                                            countdownElement.innerHTML = "1" + " 🎈";
                                            setTimeout(() => {
                                                countdownElement.innerHTML = "0" + " 🎂";
                                                setTimeout(() => {
                                                    countdownElement.innerHTML = "Happy Independence Day";
                                                    countdownElement.style.color = getRandomColor();
                                                    applyTextAnimation(countdownElement);
                                                    callback();
                                                }, 500);
                                            }, 500);
                                        }, 500);
                                    }, 500);
                                }, 500);
                            }, 500);
                        }, 500);
                    }, 500);
                }, 500);
            }, 500);
        }, 500);
    }, 500);
};

function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

function applyTextAnimation(element) {
    element.style.animation = "colorChange 1.5s infinite alternate";
}

countdown(10, () => {
    console.log('Countdown completed!');
    // Additional actions can be performed here after the countdown
});
