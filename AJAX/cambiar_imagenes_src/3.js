window.onload = function(){

if (window.XMLHttpRequest) {
        XMLHttpRequestObject = new XMLHttpRequest();
    }

document.getElementById('boton').onclick = sacardatos

}



function sacardatos(){
    if(XMLHttpRequestObject) {
        XMLHttpRequestObject.open("GET", "fotos.txt");
        XMLHttpRequestObject.onreadystatechange = function(){
    if (XMLHttpRequestObject.readyState == 4 &&                   
        XMLHttpRequestObject.status == 200) {
        document.getElementById("imagen").src = XMLHttpRequestObject.responseText;
        }
    }
    XMLHttpRequestObject.send(null);
    } 
}