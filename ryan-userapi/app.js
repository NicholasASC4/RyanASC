$(document).ready(function () {

    $.ajax({
        url: 'https://randomuser.me/api/',
        dataType: 'json',
        success: function (data) {
            console.log(data.results[0].name.first);
            var userFirstName= data.results[0].name.first;
            var userLastName = data.results[0].name.last;
            console.log(userFirstName);
            $('body').append(userFirstName + ' ' + userLastName);
        }
    });


});