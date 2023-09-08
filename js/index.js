let nav = document.querySelector('#nav-area');
let btn = document.querySelector('.toggle');
let mask = document.querySelector('#mask');

// Hambarger Menu
btn.onclick = () => {
    nav.classList.toggle('open');
}

mask.onclick = () => {
    nav.classList.toggle('open'); 
}

// Menu
function jumpToPage(pageURL) {
    window.location.href = pageURL;
}