

// test method. What it does: it calls the server and calls the function registered under api/students (defined in the flask server in main.py)
function askNames(){
    
    // create a new request object
    let xhr = new XMLHttpRequest();
    xhr.responseType = 'json';
    xhr.open("GET", "http://127.0.0.1:5000/api/students");


    // define what to do when the response comes back
    xhr.onload = function () {
        // read the response
        let students = xhr.response;
        console.log("response: " + JSON.stringify({students}))

        // update the html page
        var name = ""
        for (let i = 0; i < students.length; i++){
            name += students[i]["name"] + " ";
        }
        document.getElementById("content").innerHTML = name

    }

    //send the request, and when it comes back, run the code above.
    xhr.send();

}