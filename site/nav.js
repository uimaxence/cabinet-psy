document.addEventListener('DOMContentLoaded', function () {
  var toggle = document.querySelector('.nav-toggle');
  var nav = document.querySelector('.nav');
  if (toggle && nav) {
    toggle.addEventListener('click', function () {
      var open = nav.classList.toggle('open');
      toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
    });
  }

  // Sous-menu « Pourquoi consulter ? » : on laisse un court délai avant de
  // le refermer, pour que la souris puisse rejoindre les sous-items sans
  // que le menu disparaisse en route.
  document.querySelectorAll('.has-sub').forEach(function (item) {
    var timer;
    item.addEventListener('mouseenter', function () {
      clearTimeout(timer);
      item.classList.add('open');
    });
    item.addEventListener('mouseleave', function () {
      timer = setTimeout(function () { item.classList.remove('open'); }, 250);
    });
  });
});
