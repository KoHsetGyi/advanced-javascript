/**
 * Created by henry on 4/20/17.
 */

$(function () {
    //alert("Hi");

    //selecting by id

//    $("#first").addClass("highlight");

    //selecting by element tags

   // $("p").addClass("highlight");

    //selecting by class
   // $('.chosen').addClass("highlight");

    //selecting by id and class

   // $('#first,.chosen').addClass('highlight');

    //Using contains that has the word three in its text
   // $('li:contains("Three")').addClass('highlight');

    //using next to through the list

   // $('li:contains("Three")').next().addClass('highlight');

    //using previous to through the list
    //$('li:contains("Three")').prev().addClass('highlight');

    //working with siblings and parents
    //$('li:contains("Three")').siblings().addClass('highlight');

    //Selecting by attributes
    //$('p[name="mySecondPara"]').addClass('highlight');
//    $('p[name!="mySecondPara"]').addClass('highlight');

    //selecting by choosing headers
    $(':header').addClass('highlight');

    //Using empty method to add some text
    $('p:empty').text('You seemed lonely so I gave you some text');
});