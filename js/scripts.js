var factorial = function(number){
  var product = 1;
  if (number === 0 || number === 1) {
    return 1;
  } else {
    for (var i = number; i > 0; i--) {
      product *= i;
    };
    return product;
  };
};

$(function() {
  $('form#factorial').submit(function(event) {
    var number = $('#input-number').val();
    var result = factorial(number);

    $('#product').text(result);
 /*   console.log("product = " + product);*/
    $('#result').show();  
    event.preventDefault();
  });
});
