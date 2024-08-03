function revealDescription(button) {
    const cardBody = button.closest('.card-body');
    const text = cardBody.querySelector('.description-text');
    const hideBtn = cardBody.querySelector('.hide-btn');
    const fullText = text.innerText;
    
    text.innerText = ''; // Clear the text initially
    text.style.display = 'block'; // Make the text block-level element
    button.style.display = 'none'; // Hide the description button
    hideBtn.style.display = 'block'; // Show the hide button
    text.classList.add('show'); // Add class to trigger transition

    let i = 0;
    function typeWriter() {
        if (i < fullText.length) {
            text.innerText += fullText.charAt(i);
            i++;

            // Check if the text element is within the viewport
            const rect = text.getBoundingClientRect();
            const isInViewport = rect.bottom <= window.innerHeight;

            if (!isInViewport) {
                text.scrollIntoView({ behavior: 'smooth', block: 'end' }); // Scroll smoothly as text appears
            }

            setTimeout(typeWriter, 50); // Adjust typing speed here (50ms per character)
        }
    }

    typeWriter();
}
  
  function hideDescription(button) {
    const cardBody = button.closest('.card-body');
    const text = cardBody.querySelector('.description-text');
    const descBtn = cardBody.querySelector('.description-btn');
    
    text.classList.remove('show'); // Remove class to trigger transition
    text.classList.add('hide'); // Add class to trigger transition
  
    setTimeout(() => {
      text.style.display = 'none'; // Hide the text after transition
      text.classList.remove('hide'); // Remove hide class after transition
    }, 500); // Match the timeout duration with the CSS transition duration
  
    button.style.display = 'none'; // Hide the hide button
    descBtn.style.display = 'block'; // Show the description button
  }

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

window.addEventListener('load', () => {
    const loadingScreen = document.getElementById('loading-screen');
    if (loadingScreen) {
        loadingScreen.classList.add('fade-out');
        setTimeout(() => {
            loadingScreen.style.display = 'none';
        }, 1000); // match the duration of the fade-out animation
    }
});
