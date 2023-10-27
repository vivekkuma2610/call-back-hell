// Get the element where countdown and message will be displayed
const countdownElement = document.getElementById('countdown');

// Countdown function using callback hell
const countdown = (num, callback) => {
    countdownElement.innerText = num;
    setTimeout(() => {
        num -= 1;
        countdownElement.innerText = num;
        setTimeout(() => {
            num -= 1;
            countdownElement.innerText = num;
            setTimeout(() => {
                num -= 1;
                countdownElement.innerText = num;
                setTimeout(() => {
                    num -= 1;
                    countdownElement.innerText = num;
                    setTimeout(() => {
                        num -= 1;
                        countdownElement.innerText = num;
                        setTimeout(() => {
                            num -= 1;
                            countdownElement.innerText = num;
                            setTimeout(() => {
                                num -= 1;
                                countdownElement.innerText = num;
                                setTimeout(() => {
                                    num -= 1;
                                    countdownElement.innerText = num;
                                    setTimeout(() => {
                                        num -= 1;
                                        countdownElement.innerText = num;
                                        setTimeout(() => {
                                            num -= 1;
                                            countdownElement.innerText = num;
                                            setTimeout(() => {
                                                countdownElement.innerText = 'Happy Independence Day!';
                                                // Additional code can be added here if needed
                                                callback();
                                            }, 1000);
                                        }, 1000);
                                    }, 1000);
                                }, 1000);
                            }, 1000);
                        }, 1000);
                    }, 1000);
                }, 1000);
            }, 1000);
        }, 1000);
    }, 1000);
};

// Start countdown
countdown(10, () => {
    // Callback function after countdown is complete
    console.log('Countdown completed!');
    // Additional actions can be performed here
});
