// write a fetch function that takes a url and returns a promise
// that resolves to the response text
function fetchAPI(url){
    return fetch(url).then(function(response){
       if(response.ok){
            return response.text();
       }else{
            return Promise.reject(response.status);
       }
    });
}
