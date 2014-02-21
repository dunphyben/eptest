var factorial = function(number) {
  if (parseInt(number) === 0) {
    return 1;
  } else if (!isNaN(number) && number > 0) { 
    return number * factorial(number - 1);
  };
};


var fibonacci = function(number) {
  if(number === 1){
    return 0;
  } else if(number === 2){
      return 1;
  } else if(number === 3){
    return 1;
  } else {
    return fibonacci(number-1)+fibonacci(number-2);
  }
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
