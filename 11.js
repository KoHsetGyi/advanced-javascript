/**
 * Created by henry on 4/18/17.
 */

window.onload = function () {
   // var clickMeButton = document.getElementById('clickMe');
   // clickMeButton.onclick = runExample;

    //using one line of code to achieve the same thing
    document.getElementById('clickMe').onclick = runExample;
}
/*

function runExample() {
    alert('running the example!');
}
*/

function runExample() {
   /* var myElement = document.getElementById('second');

    var myNodeName = myElement.nodeName;

    // alert(myNodeName);

    if (myElement != null) {
        alert(myElement.innerHTML);
    }

   document.getElementById('second').innerHTML = "See how i set the text here!";
    */

   //getting the number of paragraphs

   /* var listParagraphs = document.getElementsByTagName('p');
    //alert(listParagraphs.length);
    var secondParagraph = listParagraphs[1];
    alert(secondParagraph.innerHTML);*/

  /* myelement = document.getElementById('second');
   alert(myelement.parentNode.nodeName);*/

  //playing with anchor tag
    var anchor = document.getElementById('myAnchor');
    var myAnchorDestination = anchor.href;

    alert(myAnchorDestination);

    anchor.href = "http://learnvisualstudio.net";
}