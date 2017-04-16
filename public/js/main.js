
//------------- Start ------------

var start = document.getElementById('start')
var update = document.getElementById('update')
var follow = document.getElementById('follow')

start.addEventListener('click', function () {

    //console.log('in main.js start')
    window.location.assign('/start')
    
})

update.addEventListener('click', function () {

    //console.log('in main.js start')
    window.location.assign('/update')
    
})

follow.addEventListener('click', function () {

    //console.log('in main.js start')
    window.location.assign('/follow')
    
})

function gameSelected(record) {
    
    //alert('team_name' + record);    
    var team_name = document.getElementById('team_name'+record).value;
    var opposition_name = document.getElementById('opposition_name'+record).value;
    var venue = document.getElementById('venue'+record).value;
    var date = document.getElementById('date'+record).value;
    
    document.getElementById('team_name').value = team_name;
    document.getElementById('opposition_name').value = opposition_name;
    document.getElementById('venue').value = venue;
    document.getElementById('date').value = date;
    
}


//------------- End ------------

/*
//getting button element from index.ejs


update.addEventListener('click', function () {
    // Send PUT Request here
    //alert('hi')
    
    fetch('quotes', {
        method: 'put',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({
            'name': 'delete_test',
            'quote': 'honey singh'
        })
    })
    .then(res => {
        if (res.ok) return res.json()
    })
    .then(data => {
        console.log(data)
        window.location.reload(true)
    })
})


follow.addEventListener('click', function () {
    //Send DELETE request here
    //alert('hi')
    
    fetch('quotes', {
        method: 'delete',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({
            'name': 'delete_test'
        })
    })
    .then(res => {
        if (res.ok) return res.json()
    })
    .then(data => {
        console.log(data)
        window.location.reload(true)
    })
})

Fetch takes in two parameters. The first parameter is a path. In this case, we’re sending the request to /quotes, which will be handled on our server.

method is straightforward. We set the method to put because we’re sending a PUT request. headers here refers to HTTP Headers you want to send to the server. It is an object with multiple key-value pairs. body refers to the content you send to the server.
*/