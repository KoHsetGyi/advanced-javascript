/**
 * Created by henry on 4/22/17.
 */

$(function () {
   /* // alert('Hi');
    var version = '1.2';
    alert(window.version);
*/

   //considering what happens when the user browser has turned javascript off
   //  document.write();
/*
    $('#henry').click(function () {
        $('#main').append('You should see this if you clicked the image!');
    });*/
    $('#main').append('<img src="django.png" alt="Django Syntax, click me to see the paragraph" style="height: 100px;width: 100px" id="henry">');

    $('#henry').toggle(function () {
        $('#message').show('fast');
    }, function () {
        $('#message').hide('slow');
    });
    $('#message').hide();
});


//var version = '1.2';
/*

var Henry = {}

Henry.version = "1.3"

Henry.planet = {
    id: 34,
    name: 'Node Js',
}*/
