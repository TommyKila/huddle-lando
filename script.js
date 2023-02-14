const sections = [...document.querySelectorAll('.container section')];
const cardTypo = [...document.querySelectorAll('.card-typo')];

let options = {
    root: document, // relative to document viewport 
    rootMargin: '0px', // margin around root. Values are similar to css property. Unitless values not allowed
    threshold: 0.5 // visible amount of item shown in relation to root
};

let callback = (entries, observer) => {
    /* entries.forEach(entry => {
        const section = entry.target;
        if (entry.isIntersecting) {
            section.classList.add('show-card');
        } else { 
            section.classList.remove('show-card');
        }
    }); */
    sections.forEach((section, index) => {
        entries.forEach(entry => {
            if (entry.target === section) {
                if (entry.isIntersecting) {
                    cardTypo[index].classList.add('active-card')
                } else { 
                    cardTypo[index].classList.remove('active-card')
                }
            };
        });
    });
};

let observer = new IntersectionObserver(callback, options);

sections.forEach(function (section) {
    observer.observe(section);
})