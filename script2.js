document.addEventListener('DOMContentLoaded', () => {
    const links = document.querySelectorAll('.transition-link');
    links.forEach(link => {
        link.addEventListener('click', event => {
            event.preventDefault();
            const url = link.href;
            document.body.classList.add('fade-out');
            setTimeout(() => {
                window.location.href = url;
            }, 1000); // Duration of the fade-out animation
        });
    });
});

const countdown = () => {
    const threeDaysFromNow = new Date().getTime() + 3 * 24 * 60 * 60 * 1000;
    const savedEndTime = localStorage.getItem('countdownEndTime');
    const endTime = savedEndTime ? parseInt(savedEndTime, 10) : threeDaysFromNow;

    localStorage.setItem('countdownEndTime', endTime);

    const updateCountdown = () => {
        const now = new Date().getTime();
        const distance = endTime - now;

        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);

        document.getElementById('days').innerText = days;
        document.getElementById('hours').innerText = hours;
        document.getElementById('minutes').innerText = minutes;
        document.getElementById('seconds').innerText = seconds;

        if (distance < 0) {
            clearInterval(x);
            document.getElementById('countdown').innerHTML = "EXPIRED";
        }
    };

    updateCountdown();
    const x = setInterval(updateCountdown, 1000);
};

document.addEventListener('DOMContentLoaded', countdown);
