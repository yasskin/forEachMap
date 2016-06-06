var wordplay =  [];
var newwordplay = [];
var lengthTest3 = function(word) {
  return word.length >= 3;
};

$(document).ready(function() {

  $("form#wordplayform").submit(function() {
    var inputsentence = $("input#sentence").val();
// Turn that sentence into an array using the split method.
    wordplay = inputsentence.split([" "]);
    event.preventDefault();
    $("#wordplayoutput").toggle();
//  Then, loop through this array to build a new array out of every word in the sentence that is 3 or more characters in length.
    wordplay=wordplay.filter(lengthTest3);
//  Finally, reverse the order of the new array, join it back together into a string, and display it to the user.
    newwordplay = wordplay.reverse();
    var outputsentence=newwordplay.join([" "]);
    $(".outputsentence").text(outputsentence);
  });
});


var groceryitems = [];
var uppercaseitems = [];

$(document).ready(function() {

  $("form#grocerylist").submit(function() {
     var item = $("input#grocery").val();
     groceryitems.push(item);
     event.preventDefault();
   });

  $("button#submit").click(function() {
    $("#grocerylist").toggle();
    uppercaseitems = groceryitems.map(function(lowercaseitem) {
      return lowercaseitem.toUpperCase();
    });
    uppercaseitems.sort();
    $("#outputlist").toggle();
    uppercaseitems.forEach(function(uppercaseitem) {
      $("#outputlist").append("<li>"+ uppercaseitem +"</li>");
    });
  });
});
