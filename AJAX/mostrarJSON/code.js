window.onload = function(){

    if (window.XMLHttpRequest) {
            XMLHttpRequestObject = new XMLHttpRequest();
        }
    
    document.getElementById('boton').onclick = loadDoc
    
    }
    
    
    function loadDoc(){
        if(XMLHttpRequestObject) {
            XMLHttpRequestObject.open("GET", "datos.json");
            XMLHttpRequestObject.onreadystatechange = function(){
        if (XMLHttpRequestObject.readyState == 4 &&                   
            XMLHttpRequestObject.status == 200) {
            var obj = JSON.parse(XMLHttpRequestObject.responseText)
            document.getElementById("contenedor").innerHTML = obj.name + ',' + obj.country
            }
        }
        XMLHttpRequestObject.send(null);
        } 
    }