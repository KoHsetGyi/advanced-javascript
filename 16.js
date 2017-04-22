/**
 * Created by henry on 4/22/17.
 */

$(function () {
   // alert('Hi');
   /*$('#clickme').click(function () {
       $.getJSON('data.json',function (data) {
           var  items = [];

           $.each(data, function (key, val) {
               items.push('<li id="' + key + '">'+ val + '</li>')
           });

           $('<ul/>',{
               'class': 'interest-list',
               html: items.join('')
           }).appendTo('body');

       });
   });*/

   $.ajax({
       url: 'data.json',
       dataType: 'json',
       success: function (data) {
           var  items = [];

           $.each(data, function (key, val) {
               items.push('<li id="' + key + '">'+ val + '</li>')
           });

           $('<ul/>',{
               'class': 'interest-list',
               html: items.join('')
           }).appendTo('body');
       },
       statusCde: {
           404: function () {
               alert('There was a problem with the server. Try  again soon!');
           }
       }
   });

});