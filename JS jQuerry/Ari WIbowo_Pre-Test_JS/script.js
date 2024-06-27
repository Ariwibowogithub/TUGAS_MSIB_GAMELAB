$(document).ready(function() {
    $('#checkButton').click(function() {
      var number = parseInt($('#numberInput').val());
  
      if (isNaN(number)) {
        $('#result').text('Please enter a valid number');
      } else {
        if (number % 2 === 0) {
          $('#result').text(number + ' angka tersebut angka Genap.');
        } else {
          $('#result').text(number + ' angka tersebut angka Ganjil.');
        }
      }
    });
  });
  