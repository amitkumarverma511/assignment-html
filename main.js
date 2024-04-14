const menuOpen = document.getElementById('menuOpen');
const sideBar = document.querySelector('aside.sidebar')
const overlay = document.querySelector('.overlay')

function toggleSidebar() {
    sideBar.classList.toggle('active');
    overlay.classList.toggle('d-block');
}

menuOpen.addEventListener('click', toggleSidebar);
overlay.addEventListener('click', toggleSidebar);