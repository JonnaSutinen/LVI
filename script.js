// Korostetaan aktiivinen välilehti
document.querySelectorAll('nav ul li a').forEach(link => {
    link.addEventListener('click', function() {
        document.querySelector('a.active').classList.remove('active');
        this.classList.add('active');
    });
});
