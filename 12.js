/**
 * Created by henry on 4/19/17.
 */

$(document).ready(function () {
    //start up code goes here
    //alert("This works");
   // $("#title").text("Yay, I can now get at the h1 immediately!");
   // $("#first").html("<h2>Great Quotes</h2>");

    //Adding text before the paragraph with id first
    $("#first").prepend("<h2>Great Quotes</h2>");

    //Adding text after the paragraph with id first

    $("#first").append("<h3>...This is for you to ponder...</h3>");

    //changin the attribute of the anchor tag

    $("#myAnchor").attr("href", "http://channel9.msdn.com");

    //adding css style dynamically
    $("#title").addClass("standout");

});

/*
jQuery('<div id="test">This is text inserted from jQuery Script</div>');

$.myCustomMethd = function () {
    alert('Hi');
};

jQuery.listBox = {
    show: function () {
        
    },
    hide: function () {

    },
    position: function () {
        
    },
    initiate: function () {
        
    }
}*/
