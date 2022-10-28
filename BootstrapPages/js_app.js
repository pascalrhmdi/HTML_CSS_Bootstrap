window.onload = (e) => {
  const navbar = document.querySelector('.navbar');
  const navbarHeight = navbar.offsetHeight;
  const mainTag = document.querySelector('main');
  mainTag.style.marginTop = `${navbarHeight}px`;
}

$(document).ready(function () {
  $('#tables').DataTable();
});
