
$(function () {
    
    $('#forming').on('click', function () {
        username = $("#user").value;
        $('#lister').append("<li>"+ username+"</li>");

    })

})