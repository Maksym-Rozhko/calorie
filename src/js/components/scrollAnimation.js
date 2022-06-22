const scrollAnimation = endElem => {
    const elem = document.querySelector(endElem);

    const observer = new IntersectionObserver(
        entries => {
            entries[0].isIntersecting ? elem.previousElementSibling.classList.add('animated') : elem.previousElementSibling.classList.remove('animated');
        },
        {
            rootMargin: '100px',
        },
    );

    observer.observe(elem);
};

scrollAnimation('.gps .end-elem');