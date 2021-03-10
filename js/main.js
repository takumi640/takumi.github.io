'use script'

{
  const open = document.getElementById('open');
  const hidden = document.querySelector('.hidden');
  const menu = document.querySelector('.header-menu');
  const close = document.getElementById('close');

  open.addEventListener('click', () => {
    hidden.classList.add('back');
    menu.classList.add('none');
  })

  close.addEventListener('click', () => {
    hidden.classList.remove('back');
    menu.classList.remove('none');
  })
}