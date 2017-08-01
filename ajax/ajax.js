//var myAppID = "1b825b26"
//var myAppKeys ="ce3480a43471dd8fc05cba609163e78a"

$( document).ready(function() {

    $.ajax({
        url: 'https://swapi.co/api/people/?format=json',
        dataType: 'json',
        success: function (data) {
            console.log(data);
        }
    });


});