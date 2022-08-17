
const contentContainer = document.getElementsByClassName('content-container');
for (i = 0; i < contentContainer.length; i++) {
    contentContainer[i].addEventListener('click', function () {
        this.classList.toggle('active');
    })
};
// Scroll spy
const sections = document.querySelectorAll('section[id]');
const navlinks = document.querySelectorAll(' header nav .header-link-container a');
console.log(navlinks);
window.onscroll = () => {
    sections.forEach(sec => {
        const top = window.scrollY;
        const offset = sec.offsetTop;
        const height = sec.offsetHeight;
        const Id = sec.getAttribute("id");
        if (
            top >= offset &&
            top < offset + height
        ) {
            navlinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav .header-link-container a[href*=' + Id + ']').classList.add('active');
            })
        }
    });
}
// Modal
const openBtn = document.getElementById('open-modal');
const modalContainer = document.getElementById('modal-wrapper');
openBtn.addEventListener('click', function () {
    modalContainer.style.display = 'block';
})
window.addEventListener('click', function (e) {
    if (e.target === modalContainer) {
        modalContainer.style.display = 'none';
    }
})




