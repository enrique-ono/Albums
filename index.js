$(document).ready(function () {

    $("#search").keyup(function () {



        var albums = $(".album");
console.log(albums)
        $(albums).show();

        var searchTerm = $(this).val().toLocaleLowerCase();

        albums.each(function () {
            console.log("2")
            if ($(this).text().toLocaleLowerCase().search(searchTerm) == -1) {

                $(this).hide();

            }

        });

    });

});