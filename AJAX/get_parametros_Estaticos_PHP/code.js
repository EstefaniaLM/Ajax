onload = function(){

    if (window.XMLHttpRequest) {
        
        XMLHttpRequestObject = new XMLHttpRequest();
    
    }

    document.getElementById("boton").onclick = showData

}


    function showData(event){
        if(event.preventDefault){
            event.preventDefault()
            if(XMLHttpRequestObject) {
    
                XMLHttpRequestObject.open("GET", "archivo.php?nombre=Estefania&edad=19");
    
                XMLHttpRequestObject.onreadystatechange = function(){
    
                    if (XMLHttpRequestObject.readyState == 4 && 
                        XMLHttpRequestObject.status == 200) {
    
                        document.getElementById("contenedor").innerHTML = XMLHttpRequestObject.responseText
                    }
                }
    
    
                XMLHttpRequestObject.send(null);
        }
        }

}