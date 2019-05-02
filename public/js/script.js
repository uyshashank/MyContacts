let data;
function save() {
    event.preventDefault();
    if ($('#name').val() != '')
        $('.warning-name').hide();

    if ($('#mobile').val() != '')
        $('.warning-mob').hide();

    if ($('#name').val() == '')
        $('.warning-name').show();

    else if ($('#mobile').val() == '')
        $('.warning-mob').show();

    else if ($('#name').val() && $('#mobile').val() == '')
        $('.warning-name, .warning-mob').show();        
    
    else {
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
                $('#tableBody').append('<tr class="tbrow"><td scope="row">' + sr + '</td><td>' + data.Name + '</td><td>' + data.Mobile + '</td><td>' + data.Category + '</td>' + '<td class="text-center"> <a href="#" onclick="edit(event);"><i class="fas fa-pencil-alt"></i></a> </td><td class="text-center"> <a href="#" onclick="remove(event);"><i class="far fa-trash-alt"></i></a> </td>' + '</tr>');
            });
    }
}

function edit(){
    event.preventDefault();
    
}
function remove(elem){
    event.preventDefault();
    let elem_id = elem.path[3].children[2].innerText;    
    deleteNumber(elem_id);
    elem.path[3].remove();
}

function deleteNumber(elem_id){    
    if(elem_id != undefined || null || ''){
        fetch('/delete', {
            method: 'POST',
            body: JSON.stringify({elem_id}),
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(res => res.text())
        .then(_response => {
            console.log("Positive");
        });
    }    
}