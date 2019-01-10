(function ($) {

    $(document).ready(function () {

        var downloadButton = $("#downloadButton"),
            url = "http://code.eduweb.pl/bootcamp/users/",
            tablePlace = $("#here");

        ul = $('<ul>');
        ul.insertAfter(downloadButton);

        downloadButton.on("click", function () {

            $.getJSON(url, function (data) {
                showTable(data);
            });
        })

        function showTable(JSONobject) {

            var headTable = $("<table>", {
                "class": "table table-hover"
            }).append("<thead><tr>");

            headTable.find("tr").append("<th>#</th>")
                .append("<th>Name</th>")
                .append("<th>Username</th>")
                .append("<th>Email</th>")
                .append("<th>Phone</th>");

            var bodyTable = $("<tbody>");

            headTable.find("thead").after(bodyTable);

            $(JSONobject).each(function (i, elem) {
                bodyTable.append("<tr>").append("<th>" + elem.id + "</th>")
                    .append("<td>" + elem.name + "</td>")
                    .append("<td>" + elem.username + "</td>")
                    .append("<td>" + elem.email + "</td>")
                    .append("<td>" + elem.phone + "</td>");

            })

            headTable.insertAfter(tablePlace);
        }
    });
})(jQuery);