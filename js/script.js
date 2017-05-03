$('body').scrollspy({ target: '#navi-bar' });
$('[data-spy="scroll"]').each(function () {
  var $spy = $(this).scrollspy('refresh');
});
$('#myScrollspy').on('activate.bs.scrollspy', function () {
  $('#portfoliobtn').addClass('active');
})