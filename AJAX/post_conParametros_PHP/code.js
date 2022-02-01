var XMLHttpRequestObject = false;

window.onload = function () {

    if (window.XMLHttpRequest) {
        XMLHttpRequestObject = new XMLHttpRequest();
    } else if (window.ActiveXObject) {
        XMLHttpRequestObject = new ActiveXObject("Microsoft.XMLHTTP");
    }

    contenedor = document.getElementById('contenedor');

    document.getElementById('boton').onclick = showData
}

function showData() {
    let nom = document.getElementById('nombre').value;
    let ed = document.getElementById('edad').value;
    let datos = "nombre="+nom+"&edad="+ed;
    
    
    if (XMLHttpRequestObject) {
        XMLHttpRequestObject.open("POST", 'archivo.php');
        XMLHttpRequestObject.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
        XMLHttpRequestObject.onreadystatechange = function () {
            if (XMLHttpRequestObject.readyState == 4 && XMLHttpRequestObject.status == 200) {
                contenedor.innerHTML = XMLHttpRequestObject.responseText;
            }
        }
        XMLHttpRequestObject.send(datos);
    }
}