document.addEventListener('DOMContentLoaded', () => {
    const links = document.querySelectorAll('.transition-link');
    links.forEach(link => {
        link.addEventListener('click', event => {
            event.preventDefault();
            const url = link.href;
            document.body.classList.add('fade-out');
            setTimeout(() => {
                window.location.href = url;
            }, 1000); // Duration of the fade-out animatio
        });
    });
});

