
// Rating

function highlightStars(event) {
    const stars = document.querySelectorAll('.star');
    const mouseX = event.clientX;

    stars.forEach((star, index) => {
        const starX = star.getBoundingClientRect().left;
        if (mouseX >= starX) {
            star.classList.add('active');
        } else {
            star.classList.remove('active');
        }
    });
}