$(document).ready (function() {
    $('#checkButton').click (function() {
        //method chaining dengan addClass() dan removeClass()
        $('#myDiv')
            .addClass('highlight')
            .removeClass('bold');

        // methid chaining dengan hasClass()
        var hasHighlightClass = $('#myDiv').hasClass('highlight');
        console.log('Apakah #myDiv memiliki class "highlight" ?', hasHighlightClass);

        //Method chaining attr() dan removeattr()
        $('#myDiv')
            .attr('title', 'ini adalah Div')
            .removeAttr ('id');

        // method chaining dengan text() dan html()
        $('#myDiv')
            .text('Teks yang diubah')
            .html('<p>Teks HTML yang diubah</p>');

        // method chaining dengan append() dan prepend()
        $('#myDiv')
            .append('<p>Teks yang di tambahkan di akhir</p>')
            .prepend('<p>Teks yang di tambahkan di awal</p>');

        //method chaining dengan remove()
        $('#myDiv')
            .find('p')
            .remove();

    });
});