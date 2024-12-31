document.addEventListener('DOMContentLoaded', function() {
    const content = document.getElementById('content');
    const links = document.querySelectorAll('.nav-link');

    links.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const href = this.getAttribute('href');

            content.classList.add('page-transition');

            setTimeout(() => {
                window.location.href = href;
            }, 500);
        });
    });
});

