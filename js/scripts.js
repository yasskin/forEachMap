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
