let data;
let old_mobile;

let edit_icon = '<a href="" class="px-1" onclick="edit(event);"><i class="fas fa-pencil-alt text-secondary"></i></a>';
let del_icon = '<a href="" class="px-1" onclick="remove(event);"><i class="far fa-trash-alt text-dark"></i></a>';
let save_icon = '<a href="" class="px-1" onclick="modify(event);"><i class="fas text-secondary fa-check"></i></a>';
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
                $('#tableBody').append('<tr class="tbrow"><td scope="row">' + sr + '</td><td>' + data.Name + '</td><td>' + data.Mobile + '</td><td>' + data.Category + '</td>' + '<td class="text-center">' +  edit_icon + del_icon + '</td></tr>');
            });
    }
} 

function edit(elem){
    event.preventDefault();
    let element_name = elem.path[3].children[1];    
    let element_mobile = elem.path[3].children[2];
    let element_category = elem.path[3].children[3];
    let element_icon = elem.path[3].children[4];
    
    let text_name = elem.path[3].children[1].innerText;
    let text_mobile = elem.path[3].children[2].innerText;
    old_mobile = text_mobile;
    
    element_name.innerHTML = '<input type="text" class="form-control element_name w-75" name="Name" value="' + text_name +'">';
    element_mobile.innerHTML = '<input type="text" class="form-control element_mobile w-75" name="Mobile" value="' + text_mobile +'">';
    element_category.innerHTML = '<div class="form-group"> <select class="form-control element_category" name="Category" placeholder="Category" id="category"> <option>Friend</option> <option>Family</option> <option>Office</option> <option>Neighbour</option> <option>Teacher</option> </select> </div>';
    element_icon.innerHTML = save_icon + del_icon;
}
// Function to modify a contact
function modify(elem){
    event.preventDefault();
    // Access to data
    let mod_name = $('.element_name').val();    
    let mod_mobile = $('.element_mobile').val();
    let mod_category = $('.element_category').val();

    // Access to elements
    let element_name = elem.path[3].children[1];    
    let element_mobile = elem.path[3].children[2];
    let element_category = elem.path[3].children[3];
    let element_icon = elem.path[3].children[4];
    
    element_name.innerHTML = mod_name;
    element_mobile.innerHTML = mod_mobile;
    
    element_category.innerHTML = mod_category;
    element_icon.innerHTML = edit_icon + del_icon;
    let data = {
        Name: mod_name,
        Mobile: mod_mobile,
        Category: mod_category,
        old_mobile
    }
    fetch('/update', {
        method: 'POST', 
        body: JSON.stringify(data),
        headers: {
            'Content-Type': 'application/json'
        }
    }).then(res => res.text());
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
        }).then(res => res.text());
    }    
}