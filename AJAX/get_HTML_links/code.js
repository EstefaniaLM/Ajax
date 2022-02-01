window.onload = function(){

    if (window.XMLHttpRequest) {
        
        XMLHttpRequestObject = new XMLHttpRequest();
    
    }

    document.getElementById("inicio").onclick = showData
    document.getElementById("bienvenida").onclick = showData

}


    function showData(event){
        if(event.preventDefault){
            event.preventDefault()
            if(XMLHttpRequestObject) {
    
                XMLHttpRequestObject.open("GET", this.getAttribute('href'));
    
                XMLHttpRequestObject.onreadystatechange = function(){
    
                    if (XMLHttpRequestObject.readyState == 4 && 
                        XMLHttpRequestObject.status == 200) {
    
                        document.getElementById("contenedor").innerHTML = XMLHttpRequestObject.responseText;
                    }
                }
    
    
                XMLHttpRequestObject.send(null);
        }
        }

}