window.onload = function(){

if (window.XMLHttpRequest) {
        XMLHttpRequestObject = new XMLHttpRequest();
    }

document.getElementById('boton').onclick = loadDoc

}


function loadDoc(){
    if(XMLHttpRequestObject) {

        XMLHttpRequestObject.open("GET", "archivo.php");
        XMLHttpRequestObject.onreadystatechange = function(){
    if (XMLHttpRequestObject.readyState == 4 &&                   
        XMLHttpRequestObject.status == 200) {
            document.getElementById("contenedor").innerHTML = XMLHttpRequestObject.responseText;
        }
    }
    XMLHttpRequestObject.send(null);
    } 
}