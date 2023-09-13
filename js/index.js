let nav = document.querySelector('#mobile-nav');
let btn = document.querySelector('.toggle');
let mask = document.querySelector('#mask');

// Hambarger Menu
btn.onclick = () => {
    nav.classList.toggle('open');
}

mask.onclick = () => {
    nav.classList.toggle('open'); 
}

if (window.innerWidth >= 768) {
    btn.style.display = 'none';
}

// Menu
function jumpToPage(pageURL) {
    window.location.href = pageURL;
}