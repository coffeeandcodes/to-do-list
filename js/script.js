$(document).ready(function() {
 $('.add').click(function() {
    var newItem = $('input[name=newItem]').val();
    $('.list').append('<li class="item"><input type="checkbox" class="check">' + newItem + '</li>');
    $('form')[0].reset();

    $('.check').unbind('click');

    $('.check').click(function () {
 	  var checkbox = $(this).parent();
 	  checkbox.toggleClass('checked');
    });
     	return false;
  });
 $('.clear').click(function() {
 	$('.list li').remove();
 });
  $(window).keydown(function(event){
    if(event.keyCode == 13) {
      event.preventDefault();
      return false;
    }
  });
});