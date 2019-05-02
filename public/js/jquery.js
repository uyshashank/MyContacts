let data;

function save() {
    event.preventDefault();
    if ($('#name').val() == '') {
        $('.warning-name').show();
    } else if ($('#mobile').val() == '') {
        $('.warning-mob').show();
    } else if ($('#name').val() && $('#mobile').val() == '') {
        $('.warning-mob').show();
        $('.warning-name').show();
    } else {
        data = {
            "Name": $('#name').val(),
            "Mobile": $('#mobile').val(),
            "Category": $('#category').val()
        }

        fetch('/save', {
                method: 'POST', // or 'PUT'
                body: JSON.stringify(data), // data can be `string` or {object}!
                headers: {
                    'Content-Type': 'application/json'
                }
            }).then(res => res.text())
            .then(_response => {
                let sr = $('.tbrow').length + 1;
                $('#tableBody').append('<tr class="tbrow"><td scope="row">' + sr + '</td><td>' + data.Name + '</td><td>' + data.Mobile + '</td><td>' + data.Category + '</td>' + '<td class="text-center"> <a href="/edit"><i class="fas fa-pencil-alt"></i></a> </td> <td class="text-center"> <a href="/remove"><i class="far fa-trash-alt"></i></a> </td>' + '</tr>');
            });
    }

}