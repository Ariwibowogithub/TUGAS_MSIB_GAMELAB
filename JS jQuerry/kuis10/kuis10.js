function formatNumber(number) {
    if (isNaN(number) || number == null) {
        return 0;
    } else {
        return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
    }
}

$('button').click(function () {
    if($('input').val().length==0){
        return swal('', 'Mohon masukkan nama negara terlebih dahulu', 'warning');
    }

    var countryName = $('input').val().toLowerCase();

    swal({
        title: "",
        text: "Mencari data . . .",
        icon: "https://c.tenor.com/I6kN-6X7nhAAAAAj/loading-buffering.gif",
        button: false
    });

    $.ajax({
        "url": "https://covid-193.p.rapidapi.com/statistics",
        "method":"GET",
        "data" : {
            country: countryName,
        },
        "headers":{
            "X-RapidAPI-Host":"covid-193.p.rapidapi.com",
            "X-RapidAPI-Key": "0919597259msh307e02c1e354f04p1b8f5fjsn8155ea9f1c96"
        },

        success: function(res){
            if (res.response.length==0) {
                return swal('Data tidak ditemukan', 'Pastikan nama negara yang dituliskan benar','warning');
            };

            var data =  res.response[0].cases;
            console.log(data);

            $('.active-case').text(formatNumber(data.active));
            $('.critical-case').text(formatNumber(data.critical));
            $('.new-case').text(formatNumber(data.new));
            $('.recovered').text(formatNumber(data.recovered));
            swal.close();
            
            var newCountryName = countryName.charAt(0).toUpperCase()+countryName.slice(1);
            $('.nama-negara').text(newCountryName);

            $('.card-statistik').show();
        }
    });
});