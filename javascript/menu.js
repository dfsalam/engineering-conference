const nav = document.querySelector('.nav__menu');
const menu = document.querySelector('.hamb__menu');
const close = document.querySelector('.hamb__close');
const hTagsa = document.querySelectorAll('.hamb__h');

// The hamburguer menu is originally hidden when I click remove the attribute
function hambClick() {
  menu.removeAttribute('hidden');
}

// when you click on the close icon the attribute hidden backs
function closeClick() {
  menu.setAttribute('hidden', 'hidden');
}

nav.addEventListener('click', hambClick);
close.addEventListener('click', closeClick);

// This for each is to close the menu when the elements inside are clicked
hTagsa.forEach((element) => {
  element.addEventListener('click', closeClick);
});