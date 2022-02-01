window.onload = function(){

    if (window.XMLHttpRequest) {
            XMLHttpRequestObject = new XMLHttpRequest();
        }
    
    document.getElementById('boton').onclick = loadDoc
    
    }
    
    
    function loadDoc(){
        if(XMLHttpRequestObject) {
     
            XMLHttpRequestObject.open("GET", "ejemplo.js");
            XMLHttpRequestObject.onreadystatechange = function(){
        if (XMLHttpRequestObject.readyState == 4 &&                   
            XMLHttpRequestObject.status == 200) {
            eval(XMLHttpRequestObject.responseText);
            }
      
        }
        XMLHttpRequestObject.send(null);
        } 
    }