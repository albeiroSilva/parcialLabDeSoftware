
document.querySelector('#boton').addEventListener('click', traerDatos);

function traerDatos(){

    const xhttp = new XMLHttpRequest();
    xhttp.open('GET', '104615010798.json', true);
    xhttp.send();

    xhttp.onreadystatechange = function(){
        if(this.readyState == 4 && this.status == 200){
            let datos = JSON.parse(this.responseText);
            let respuesta = document.querySelector('#respuesta');
            respuesta.innerHTML = '';
            
            for(let item of datos){
                respuesta.innerHTML += `
                    <tr>
                        <td>${item.nombre}</td>
                        <td>${item.creditos}</td>
                        <td>${item.estado}</td>
                    </tr> 
                `
            }
        }
    }
}