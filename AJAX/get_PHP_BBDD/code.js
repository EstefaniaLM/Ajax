window.onload = function(){
    
  if (window.XMLHttpRequest) {
    XMLHttpRequestObject = new XMLHttpRequest();
}
    document.getElementById('customers').onchange = showCustomer
}

function showCustomer() {
 let str = this.value

 if(XMLHttpRequestObject) {
 
    XMLHttpRequestObject.open("GET", "validarDatos.php?q="+str);
    XMLHttpRequestObject.onreadystatechange = function(){
  if (XMLHttpRequestObject.readyState == 4 &&                   
    XMLHttpRequestObject.status == 200) {
    document.getElementById("contenedor").innerHTML = XMLHttpRequestObject.responseText;
    }
}
XMLHttpRequestObject.send(null);
} 
  }

