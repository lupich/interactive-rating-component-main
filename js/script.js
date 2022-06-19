
let numeroMostrar=document.querySelector(`.card__qualification`);
const thank=document.querySelector(`.card--thank`);
const card=document.querySelector(`.card`);
const contenedorMensaje=document.querySelector(`#contenedor__mensaje`);

//eventos
document.addEventListener(`click`,(e)=>{
    if(e.target.classList.contains(`card__numero`)){
        numeroMostrar.textContent=`${e.target.textContent}`;
        eliminarMsj()
    }
    if(e.target.classList.contains(`card__botom`)){
        e.preventDefault();
       
        if(numeroMostrar.textContent===null || numeroMostrar.textContent===`` ){
            msj(`select attention rating`)
           
        }else{
            thank.classList.remove(`hidden`);
            card.classList.add(`hidden`);
            
        }
        
    }
      
});
function msj(texto){
    eliminarMsj()
    const mensaje=document.createElement(`span`);
    mensaje.classList.add(`mensaje__vacio`);
    mensaje.textContent=texto;
    contenedorMensaje.appendChild(mensaje);
}
function eliminarMsj(){
    while( contenedorMensaje.firstChild){
        contenedorMensaje.removeChild( contenedorMensaje.firstChild);
      }
}


