// Function to get the value of a parameter from the URL
function getParameterByName(name) {
    name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]"); // help me debug this line
    var regex = new RegExp("[\\?&]" + name + "=([^&#]*)"), //explain this line
        // explain above line
        results = regex.exec(location.search);
    return results === null ? "" : decodeURIComponent(results[1].replace(/\+/g, " "));
}

//debug getParameterByName
console.log(getParameterByName('name'));
