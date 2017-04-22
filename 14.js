/**
 * Created by henry on 4/22/17.
 */

$(function () {
    $('#success').hide();
    $('#startover').addClass('hoverout');
    var score  = 0;
   $('#henry').click(function () {
       // alert('Hi things are working so far');
       score++;
       $('#score').text(score);
       $('#success').show('slow').fadeOut(2000);
   });

   $('#startover').hover(function () {
      score = 0;
      $('#score').text(score);
      $('#startover').addClass('hoverin').removeClass('hoverout');
   }, function () {
       $('#startover').removeClass('hoverin').addClass('hoverout');
   });
});