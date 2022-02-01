window.onload = function(){
    if (window.XMLHttpRequest) {
        XMLHttpRequestObject = new XMLHttpRequest();
    }
    document.getElementById('boton').onclick = sacarDatos
}

function sacarDatos() {
    
    if(event.preventDefault){
    event.preventDefault()
    if(XMLHttpRequestObject) {
        XMLHttpRequestObject.open("GET", "document.ext");
        XMLHttpRequestObject.onreadystatechange = function(){
            if (XMLHttpRequestObject.readyState == 4 && 
                XMLHttpRequestObject.status == 200) {
                document.getElementById("container").innerHTML = XMLHttpRequestObject.responseText;
            }
        }
        XMLHttpRequestObject.send(null);
    }
    }
}