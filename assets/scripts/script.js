let aside = document.querySelector('aside')
let sidebarMenu = document.querySelector('#sidebarMenu')
let overlay = document.querySelector('#overlay')
let blurBackground = document.querySelector('#asideOverlay')
let body = document.querySelector('body')
console.log(blurBackground)
function openSidebar() {
    body.style.overflow = 'hidden'
    overlay.classList.replace('hidden', 'block')
    sidebarMenu.classList.replace('-translate-x-full', 'translate-x-0')
    blurBackground.classList.add('blur-sm');
}

function closeSidebar() {
    body.style.overflow = 'auto'
    overlay.classList.replace('block', 'hidden')
    sidebarMenu.classList.replace('translate-x-0', '-translate-x-full')
    blurBackground.classList.remove('blur-sm');
}