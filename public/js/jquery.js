let data;

function save() {
    event.preventDefault();    
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
             $('#tableBody').append('<tr><td scope="row"> x </td><td>' + data.Name + '</td><td>' + data.Mobile + '</td><td>' + data.Category + '</td></tr>')
            
        })
        .catch(_result =>{
            // console.log("Catch" + result);
        });
}