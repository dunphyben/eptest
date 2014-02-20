var factorial = function(number) {
  if (parseInt(number) === 0) {
    return 1;
  } else if (!isNaN(number) && number > 0) { 
    return number * factorial(number - 1);
  };
};

$(function() {
  $('form#factorial').submit(function(event) {
    var number = $('#input-number').val();
    var result = factorial(number);

    $('#product').text(result);
    $('#result').show();  
    event.preventDefault();
  });
});
