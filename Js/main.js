//Es6 
class vehiculos{
    constructor(marca,modelo,prestaciones,año){
        this.marca = marca;
        this.modelo = modelo;
        this.prestaciones = prestaciones;
        this.año = año;
    }
}
//Eventos UI
 class eventos{
     addVehicle(autos){ 
        //const vehicleList = document.getElementById("list");
        const elemento = document.createElement("div");
        jQuery("#list");
        //jQuery(document.createElement("div"))
        jQuery("#list").append(` <div>
        <div class="card text-center mb-4">
            <div class="card-body">
                <strong>Marca</strong>: ${autos.marca} -
                <strong>Modelo</strong>: ${autos.modelo} - 
                <strong>Prestaciones</strong>: ${autos.prestaciones} - 
                <strong>Año</strong>: ${autos.año}
                <a href="#" class = "btn btn-danger" name="delete">Delete</a>
            </div>
        </div>
        </div>
    `)
        /*elemento.innerHTML = ` 
        <div class="card text-center mb-4">
            <div class="card-body">
                <strong>Marca</strong>: ${autos.marca} -
                <strong>Modelo</strong>: ${autos.modelo} - 
                <strong>Prestaciones</strong>: ${autos.prestaciones} - 
                <strong>Año</strong>: ${autos.año}
                <a href="#" class = "btn btn-danger" name="delete">Delete</a>
            </div>
        </div>
    `;*/
    //vehicleList.appendChild(elemento);
      
     }
     
     resetform(){
        document.getElementById("vehicles-form").reset();
    } 
     deleteVechicle(elemento){
         if(elemento.name === "delete"){
            elemento.parentElement.parentElement.parentElement.remove();
            this.showAlert("se elimino el vehiculo" , "danger")
         }
     }
     showAlert(message,cssClass){
         const msj = document.createElement("div");
         msj.className = `alert alert-${cssClass} mt-4`;
         msj.appendChild(document.createTextNode(message));
         //mostrando en el dom 
         const container = document.querySelector(".Container");
         const app = document.querySelector("#app");
         container.insertBefore(msj, app);
         setTimeout(function(){
             document.querySelector(".alert").remove();

         }, 3000);
     }

 }
 //DomEvents

 document.getElementById("vehicles-form").addEventListener("submit", function(e){
     const marca = document.getElementById("marca").value;
     const modelo = document.getElementById("modelo").value;
     const prestaciones = document.getElementById("prestaciones").value;
     const año = document.getElementById("año").value;

     const autos = new vehiculos(marca, modelo,prestaciones,año); 

     const ui = new eventos();

     if(marca ==="" || modelo === "" || prestaciones === ""|| año === ""){
        return ui.showAlert("porfavor complete el formulario", "danger");
     }

     ui.addVehicle(autos);
    ui.resetform();
    ui.showAlert("se agrego correctamente", "success");

     e.preventDefault();

 })
 //document.getElementById("list").addEventListener("click" , function(e){
    $("#list").click(function(e){
     const ui = new eventos;
     ui.deleteVechicle(e.target);
 })