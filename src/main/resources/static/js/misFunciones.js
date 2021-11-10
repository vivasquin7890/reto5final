//////////////  Motos /////////////////////////////

///// Agregar una nueva moto
'use strict'
function registro(){
  var elementomoto={
    name:$("#Nombre").val(),
    brand:$("#Brand").val(),
    year:$("#Modelo").val(),
    description:$("#Description").val(),
    category:{id:$("#Category").val()}
    }
var dataToSend25=JSON.stringify(elementomoto);
//JSON= JavaScript Object Notation
$.ajax({
      dataType: 'json',
      data:dataToSend25,
      url:"http://144.22.57.54:8080/api/Motorbike/save",
      //url: "http://localhost:8080/api/Motorbike/save",
      type:'POST',
      contentType:'application/json',
      success:function(response1) {
      },
      error: function(jqXHR, textStatus, errorThrown) {
      }
  });
  obtenerItems();
  obtenerItems();
}

//////// Obtener Motos de base de Datos 
function obtenerItems(){

  $.ajax({
      dataType: 'json',
      url:"http://144.22.57.54:8080/api/Motorbike/all",
      //url: "http://localhost:8080/api/Motorbike/all",
      type:'GET',
      
      success:function(response2) {
        var misItemsmoto=response2;
        $("#miResultado").html("");

        misItemsmoto.forEach(function(item){
          console.log(item);{
            $("#miResultado").append("<tr>");
            $("#miResultado").append("<td>"+item.id+"</td>");
            $("#miResultado").append("<td>"+item.name+"</td>");
            $("#miResultado").append("<td>"+item.brand+"</td>");
            $("#miResultado").append("<td>"+item.year+"</td>");
            $("#miResultado").append("<td>"+item.description+"</td>");
            $("#miResultado").append("<td>"+item.category.name+"</td>");
            $("#miResultado").append('<td><button onclick="borrarmoto('+item.id+')"> Borrar </button></td>');
            $("#miResultado").append('<td><button onclick="obtenerItemEspecificomoto('+item.id+')"> Editar </button></td>');
            $("#miResultado").append("</tr>");
          }
        });

        $("#Id").val("");
        $("#Nombre").val("");
        $("#Brand").val("");
        $("#Modelo").val("");
        $("#Description").val("");
        $("#Category").val("");
      },
      
      error: function(jqXHR, textStatus, errorThrown) {
            
      }
  });

}

//////// Borrar Motos de base de Datos 
function borrarmoto(idElemento){
var elementomoto2={id:idElemento};
var dataToSend=JSON.stringify(elementomoto2);
//JSON= JavaScript Object Notation
$.ajax({
      dataType:'json',
      data:dataToSend,
      url:"http://144.22.57.54:8080/api/Motorbike/"+idElemento,
      //url: "http://localhost:8080/api/Motorbike/" + idElemento,
      type:'DELETE',
      contentType:'application/json',
      success:function(response3) {
        console.log(response3);
      },
      
      error: function(jqXHR, textStatus, errorThrown) {
            
      }
  });
  obtenerItems();
  obtenerItems();
}

//////// Obtener Datos para Editar 
function obtenerItemEspecificomoto(idItemmoto){
  
  $.ajax({
      dataType: 'json', 
      data: {id:idItemmoto},
      url:"http://144.22.57.54:8080/api/Motorbike/"+idItemmoto,
      type:'GET',
      success:function(response4) {

        $("#Id").val(response4.id);
        $("#Nombre").val(response4.name);
        $("#Brand").val(response4.brand);
        $("#Modelo").val(response4.year);
        $("#Category").val(response4.category.name);
        $("#Description").val(response4.description);

      },
      error: function(jqXHR, textStatus, errorThrown) {
            
      }
  });

}

//////// actualizar un elemento 
function actualizar(){
var elemento3={
  id:$("#Id").val(),
  name:$("#Nombre").val(),
  brand:$("#Brand").val(),
  year:$("#Modelo").val(),
  description:$("#Description").val(),
  }
  var dataToSend4=JSON.stringify(elemento3);
//JSON= JavaScript Object Notation
$.ajax({
      dataType: 'json',
      data:dataToSend4,
      url:"http://144.22.57.54:8080/api/Motorbike/update",
      //url: "http://localhost:8080/api/motorbike/update",
      type:'PUT',
      contentType:'application/json',
      success:function(response4) {

      },
      error: function(jqXHR, textStatus, errorThrown) {
            
      }
  });
  obtenerItems();
}

////////////// Clientes ////////////////////////////

///// Agregar nuevo cliente
'use strict'
function registroclientes(){
  var elemento4={
    name:$("#Nombre").val(),
    email:$("#Email").val(),
    password:$("#Password").val(),
    age :$("#Age").val(),
    }

var dataToSend6=JSON.stringify(elemento4);
//JSON= JavaScript Object Notation
$.ajax({
      dataType: 'json',
      data:dataToSend6,
      url:"http://144.22.57.54:8080/api/Client/save",
      type:'POST',
      contentType:'application/json',
      success:function(response5) {
        console.log(response5);
      },
      error: function(jqXHR, textStatus, errorThrown) {
      }
  });
  obtenerclientes();
  obtenerclientes();
}

//////// Obtener Clientes de base de Datos 
function obtenerclientes(){

  $.ajax({
      dataType: 'json',
      url:"http://144.22.57.54:8080/api/Client/all",
      type:'GET',
      
      success:function(response6) {
        var misItemsclientes=response6;
        $("#miResultadoclientes").html("");
        misItemsclientes.forEach(function(item){
          console.log(item);{
            $("#miResultadoclientes").append("<tr>");
            $("#miResultadoclientes").append("<td>"+item.idClient+"</td>");
            $("#miResultadoclientes").append("<td>"+item.name+"</td>");
            $("#miResultadoclientes").append("<td>"+item.email+"</td>");
            $("#miResultadoclientes").append("<td>"+item.age+"</td>");
            $("#miResultadoclientes").append("<td>"+item.password+"</td>");
            $("#miResultadoclientes").append('<td><button onclick="borrarcliente('+item.idClient+')"> Borrar </button></td>');
            $("#miResultadoclientes").append('<td><button onclick="obtenerItemEspecificocliente('+item.idClient+')"> Editar </button></td>');
            $("#miResultadoclientes").append("</tr>");
          }
        });

        $("#Id").val("");
        $("#Nombre").val("");
        $("#Email").val("");
        $("#Password").val("");
        $("#Age").val("");
      },
      
      error: function(jqXHR, textStatus, errorThrown) {
            
      }
  });

}

//////// Borrar Cliente de base de Datos 
function borrarcliente(idElemento1){
var elemento5={id:idElemento1};
console.log(elemento5);
var dataToSend=JSON.stringify(elemento5);
console.log(dataToSend);
console.log(idElemento1);
//JSON= JavaScript Object Notation
$.ajax({
      dataType:'json',
      data:dataToSend,
      url:"http://144.22.57.54:8080/api/Client/"+idElemento1,
      type:'DELETE',
      contentType:'application/json',
      success:function(response7) {
        console.log(response7);
      },
      
      error: function(jqXHR, textStatus, errorThrown) {
            
      }

  });
  obtenerclientes();
  obtenerclientes();
}

//////// Obtener Datos para Editar 
function obtenerItemEspecificocliente(idItem2){
  
  $.ajax({
      dataType: 'json', 
      data: {id:idItem2},
      url:"http://144.22.57.54:8080/api/Client/"+idItem2,
      type:'GET',
      success:function(response8) {
        
        $("#Id").val(response8.idClient);
        $("#Nombre").val(response8.name);
        $("#Email").val(response8.email);
        $("#Age").val(response8.age);
        $("#Password").val(response8.password);
      },
      error: function(jqXHR, textStatus, errorThrown) {
            
      }
  });

}

//////// actualizar Información de cliente 
function actualizarclientes(){
var elemento5={
  idClient:$("#Id").val(),
  name:$("#Nombre").val(),
  email:$("#Email").val(),
  age:$("#Age").val(),
  password:$("#password").val(),
  }
  console.log(elemento5);
  var dataToSend=JSON.stringify(elemento5);
//JSON= JavaScript Object Notation
$.ajax({
      dataType: 'json',
      data:dataToSend,
      contentType:'application/json',
      url:"http://144.22.57.54:8080/api/Client/update",
      type:'PUT',
      
      success:function(response9) {
        console.log(response9);
      },
      
      error: function(jqXHR, textStatus, errorThrown) {
            
      }
  });
  obtenerclientes();
  obtenerclientes();
}

//////  Mensajes ///////////////////////////////////////////////

///// Agregar nuevo mensaje
'use strict'
function registromensajes(){
  var elemento={
    messageText:$("#Mensaje").val(),
    client:{idClient:$("#IdCliente").val()},
    motorbike:{id:$("#IdMoto").val()}
    }
    console.log(elemento);
var dataToSend7=JSON.stringify(elemento);
//JSON= JavaScript Object Notation
$.ajax({
      dataType: 'json',
      data:dataToSend7,
      url:"http://144.22.57.54:8080/api/Message/save",
      type:'POST',
      contentType:'application/json',
      success:function(response) {
        console.log(response);
      },
      
      error: function(jqXHR, textStatus, errorThrown) {

      }
  });
  obtenermensajes();
  obtenermensajes();
}

//////// Obtener Mensajes de DB 
function obtenermensajes(){

  $.ajax({
      dataType: 'json',
      url:"http://144.22.57.54:8080/api/Message/all",
      type:'GET',
      
      success:function(response10) {

        var misItems3=response10;
        $("#miResultadomensajes").html("");
        misItems3.forEach(function(item){
          console.log(item);{
            $("#miResultadomensajes").append("<tr>");
            $("#miResultadomensajes").append("<td>"+item.idMessage+"</td>");
            $("#miResultadomensajes").append("<td>"+item.messageText+"</td>");
            $("#miResultadomensajes").append("<td>"+item.client.idClient+"</td>");
            $("#miResultadomensajes").append("<td>"+item.motorbike.id+"</td>");
            $("#miResultadomensajes").append('<td><button onclick="borrarmensaje('+item.idMessage+')"> Borrar Mensaje </button></td>');
            $("#miResultadomensajes").append('<td><button onclick="obtenerItemEspecificomensaje('+item.idMessage+')"> Editar </button></td>');
            $("#miResultadomensajes").append("</tr>");
          }

          $("#Id").val("");
          $("#Mensaje").val("");
          $("#IdCliente").val("");
          $("#IdMoto").val("");

          
        });
      },
      
      error: function(jqXHR, textStatus, errorThrown) {
            
      }
  });

}

//////// Borrar Mensajes de base de Datos 
function borrarmensaje(idElemento4){
var elemento6={id:idElemento4};
var dataToSend=JSON.stringify(elemento6);
//JSON= JavaScript Object Notation
$.ajax({
      dataType:'json',
      data:dataToSend,
      url:"http://144.22.57.54:8080/api/Message/"+idElemento4,
      type:'DELETE',
      contentType:'application/json',
      success:function(response11) {
        console.log(response11);
      },
      
      error: function(jqXHR, textStatus, errorThrown) {
            
      }
  });
  obtenermensajes();
  obtenermensajes();
}

//////// Obtener Datos para Editar 
function obtenerItemEspecificomensaje(idItem5){
  
  $.ajax({
      dataType: 'json', 
      data: {id:idItem5},
      url:"http://144.22.57.54:8080/api/Message/"+idItem5,
      type:'GET',
      success:function(response12) {
        $("#Id").val(response12.idMessage);
        $("#Mensaje").val(response12.messageText);
        $("#IdCliente").val(response12.client.idClient);
        $("#IdMoto").val(response12.motorbike.id);
      },
      
      error: function(jqXHR, textStatus, errorThrown) {
            
      }
  });

}

//////// actualizar un elemento 
function actualizarmensajes(){
var elemento7={
  id:$("#Id").val(),
  messagetext:$("#Mensaje").val(),
  client:{idClient:$("#IdCliente").val()},
  motorbike:{id:$("#IdMoto").val()}
  }
  var dataToSend=JSON.stringify(elemento7);
//JSON= JavaScript Object Notation
$.ajax({
      dataType: 'json',
      data:dataToSend,
      contentType:'application/json',
      url:"http://144.22.57.54:8080/api/Message/update",
      type:'PUT',
      contentType:'application/json',
      success:function(response13) {
        console.log(response13);
      },
      
      error: function(jqXHR, textStatus, errorThrown) {
            
      }
  });

  obtenermensajes();
  obtenermensajes();
}

////// Categorias ////////////////////////////////////////////

///// Agregar un nueva Categoria
'use strict'
function Agregarcategoria(){
  var elemento8={
    name:$("#NameCategory").val(),
    description:$("#DescriptionCategory").val()
    }
    console.log(elemento8);
var dataToSend7=JSON.stringify(elemento8);
//JSON= JavaScript Object Notation
$.ajax({
      dataType: 'json',
      data:dataToSend7,
      url:"http://144.22.57.54:8080/api/Category/save",
      type:'POST',
      contentType:'application/json',
      success:function(response) {
        console.log(response);
      },

      error: function(jqXHR, textStatus, errorThrown) {
      }
  });
  VerCategorias();
  VerCategorias();
}

//////// Obtener Categorias de DB 
function VerCategorias(){

  $.ajax({
      dataType: 'json',
      url:"http://144.22.57.54:8080/api/Category/all",
      type:'GET',
      
      success:function(response10) {

        var misItems4=response10;
        $("#miResultadocategoria").html("");

        misItems4.forEach(function(item){
          console.log(item);{
            $("#miResultadocategoria").append("<tr>");
            $("#miResultadocategoria").append("<td>"+item.id+"</td>");
            $("#miResultadocategoria").append("<td>"+item.name+"</td>");
            $("#miResultadocategoria").append("<td>"+item.description+"</td>");
            
            $("#miResultadocategoria").append('<button onclick="borrarcategoria('+item.id+')"> Borrar </button>','<button onclick="obtenerItemEspecificocategoria('+item.id+')"> Editar </button></td>');
            // $("#miResultadocategoria").append('<td><button onclick="obtenerItemEspecificocategoria('+item.id+')"> Editar </button></td>');
            $("#miResultadocategoria").append("</tr>");
            
          }
        $("#Id").val("");
        $("#NameCategory").val("");
        $("#DescriptionCategory").val("");

        });
      },
      
      error: function(jqXHR, textStatus, errorThrown) {
            
      }
  });

}

//////// Borrar Categorias 
function borrarcategoria(idElemento2){
var elemento9={id:idElemento2};
var dataToSend=JSON.stringify(elemento9);
//JSON= JavaScript Object Notation
$.ajax({
      dataType:'json',
      data:dataToSend,
      url:"http://144.22.57.54:8080/api/Category/"+idElemento2,
      type:'DELETE',
      contentType:'application/json',
      success:function(response12) {
      console.log(response12);
      },
      
      error: function(jqXHR, textStatus, errorThrown) {
            
      }
  });
  VerCategorias();
  VerCategorias();
}

//////// Obtener Datos para Editar Categorias 
function obtenerItemEspecificocategoria(idItem1){
  
  $.ajax({
      dataType: 'json', 
      data: {id:idItem1},
      url:"http://144.22.57.54:8080/api/Category/"+idItem1,
      type:'GET',
      success:function(response12) {
        $("#NameCategory").val(response12.name);
        $("#DescriptionCategory").val(response12.description);
        $("#Id").val(response12.id);
      },
      
      error: function(jqXHR, textStatus, errorThrown) {
            
      }
  });

}

//////// actualizar un elemento 
function ActualizarCategorias(){
var elemento2={
  id:$("#Id").val(),
  name:$("#NameCategory").val(),
  description:$("#DescriptionCategory").val()
  }
  var dataToSend=JSON.stringify(elemento2);
//JSON= JavaScript Object Notation
$.ajax({
      dataType: 'json',
      data:dataToSend,
      contentType:'application/json',
      url:"http://144.22.57.54:8080/api/Category/update",
      type:'PUT',
      contentType:'application/json',
      success:function(response13) {
        console.log(response13);
      },
      
      error: function(jqXHR, textStatus, errorThrown) {
            
      }
  });

  VerCategorias();
  VerCategorias();
}


////// Reservas ///////////////////////////////////////////

///// Agregar una Reserva 
'use strict'
function NuevaReserva(){

  if($("#startDate").val().length == 0 || $("#devolutionDate").val().length == 0 || $("#status").val().length == 0){
    alert("Todos los campos son Obligatorios")
    }else
        let elemento8={
            startDate:$("#startdate").val(),
            devolutionDate:$("#enddate").val(),
            status: $("#status").val(),
            client:{idClient:$("#idCliente").val()},
            motorbike:{id:$("#idMotorbike").val()}
    }
    console.log(elemento8);
var dataToSend7=JSON.stringify(elemento8);
//JSON= JavaScript Object Notation
$.ajax({
      dataType: 'json',
      data:dataToSend7,
      url:"http://144.22.57.54:8080/api/Reservation/save",
      //url: "http://localhost:8080/api/Reservation/save",
      type:'POST',
      contentType:'application/json',
      success:function(response) {
        console.log(response);
      

      //Limpiar Campos
      $("#miResultadoreserva").empty();
      $("#startdate").val("");
      $("#enddate").val("");
      $("#status").val("");

      //Listar Tabla

      alert("Se ha guardado Correctamente!")
      },

      error: function(jqXHR, textStatus, errorThrown) {
        alert("No se guardo Correctamente!")
      }
  });
  VerReservas();
  VerReservas();
}

//////// Obtener Reservas de DB 
function VerReservas(){

  $.ajax({
      dataType: 'json',
      url:"http://144.22.57.54:8080/api/Reservation/all",
      //url: "http://localhost:8080/api/Reservation/all",
      type:'GET',
      
      success:function(response11) {

        var misItems2=response11;
        $("#miResultadoreserva").html("");
        misItems2.forEach(function(item){
          console.log(item);{
            $("#miResultadoreserva").append("<tr>");
            $("#miResultadoreserva").append("<td>"+item.idReservation+"</td>");
            $("#miResultadoreserva").append("<td>"+item.startDate+"</td>");
            $("#miResultadoreserva").append("<td>"+item.devolutionDate+"</td>");
            $("#miResultadoreserva").append("<td>"+item.client.name+"</td>");
            $("#miResultadoreserva").append("<td>"+item.motorbike.name+"</td>");
            $("#miResultadoreserva").append("<td>"+item.status+"</td>");
            
            $("#miResultadoreserva").append('<td><button onclick="borrarreserva('+item.dReservation+')"> Borrar Reserva </button></td>');
            $("#miResultadoreserva").append('<td><button onclick="obtenerItemEspecificoreserva('+item.idReservation+')"> Editar Reserva </button></td>');
            $("#miResultadoreserva").append('<td><button onclick="actualizarReservation('+item.idReservation+')"> Actualizar Reserva </button></td>');
            $("#miResultadoreserva").append("</tr>");
          }
        $("#idReservation").val("");
        $("#NameCategory").val("");
        $("#DescriptionCategory").val("");

        });
      },
      
      error: function(jqXHR, textStatus, errorThrown) {
        alert("No se Elimino Correctamente!")     
      }
  });

}

//////// Borrar Reservas 
function borrarreserva(idElemento3){
var elemento1={id:idElemento3};
var dataToSend=JSON.stringify(elemento1);
//JSON= JavaScript Object Notation
$.ajax({
      dataType:'json',
      data:dataToSend,
      url:"http://144.22.57.54:8080/api/Reservation/"+idElemento3,
      //url: "http://localhost:8080/api/Reservation/" + idElemento3,
      type:'DELETE',
      contentType:'application/json',
      success:function(response14) {
      console.log(response14);

      $("#miResultadoreserva").empty();

      alert("se ha Eliminado Correctamente!")
      },
      
      error: function(jqXHR, textStatus, errorThrown) {
            
      }
  });
  VerReservas();
  VerReservas();
}

//////// Obtener Datos para Editar reservas 
function obtenerItemEspecificoreserva(idItem3){
  
  $.ajax({
      dataType: 'json', 
      data: {id:idItem3},
      url:"http://144.22.57.54:8080/api/Reservation/"+idItem3,
      type:'GET',
      success:function(response13) {
        $("#idReservation").val(response13.idReservation);
        //$("#startdate").val(response13.startDate);
        //$("#enddate").val(response13.devolutionDate);
        $("#idCliente").val(response13.client.name);
        $("#idMotorbike").val(response13.motorbike.name);
        $("#status").val(response13.status);
      },
      
      error: function(jqXHR, textStatus, errorThrown) {
        alert("No se guardo Correctamente!")      
      }
  });

}

//////// actualizar una reserva
function actualizarReservation(idElemento){

  if($("#startdate").val().length == 0 || $("#enddate").val().length == 0 || $("#status").val().length == 0){
    alert("Todos los campos deben estar llenos")
    }else{
        let elementores = {
            idReservation: idElemento,
            startDate:$("#startdate").val(),
            devolutionDate:$("#enddate").val(),
            status: $("#status").val(),
            client:{name:$("#idCliente").val()},
            motorbike:{name:$("#idMotorbike").val()}
  }
  let dataToSend=JSON.stringify(elementores);
//JSON= JavaScript Object Notation
$.ajax({
      dataType: 'json',
      data:dataToSend,
      contentType:'application/json',
      url:"http://144.22.57.54:8080/api/Reservation/update",
      //url: "http://localhost:8080/api/Reservation/update",
      type:'PUT',
      contentType:'application/json',
      success:function(response13) {
        console.log(response13);
        $("#miResultadoreserva").empty();
        alert("se ha Actualizado Correctamente!")

        //Limpiar Campos
        $("#miResultadoreserva").empty();

        $("#startdate").val("");
        $("#enddate").val("");
        $("#status").val("");
      },
      
      error: function(jqXHR, textStatus, errorThrown) {
        alert("No se guardo Correctamente!")
            
      }
  });

  VerReservas();
  VerReservas();
}

///////////////// Reportes ///////////////////////////////////////////

//////// LImpiar Pantalla

function limpiarpantalla(){
  $("#misReportesReservas").html("");
}

//////// Ver Status Reservas
function VerStatusReservas(){

  $.ajax({
      dataType: 'json',
      url:"http://144.22.57.54:8080/api/Reservation/report-status",
      type:'GET',
      
      success:function(response15) {

        var misItems1=response15;
        console.log(misItems1);
        $("#misReportesReservas").html("");
        $("#misReportesReservas").append("<tr>");
        $("#misReportesReservas").append("<td>"+misItems1.completed+"</td>");
        $("#misReportesReservas").append("<td>"+misItems1.cancelled+"</td>");
        $("#misReportesReservas").append('<td><button onclick="limpiarpantalla()">Return</button></td>');
        $("#misReportesReservas").append("</tr>");
      },
      error: function(jqXHR, textStatus, errorThrown) {
      }
  });

}

//////// Ver Reservas Clientes 
function VerRervasClientes(){

  $.ajax({
      dataType: 'json',
      url:"http://144.22.57.54:8080/api/Reservation/report-clients",
      type:'GET',
      
      success:function(response16) {

        var misItems5=response16;
        console.log(misItems5);

        $("#misReportesReservas").html("");
        misItems5.forEach(function(item){
        {
            $("#misReportesReservas").append("<tr>");
            $("#misReportesReservas").append("<td>"+item.client.name+"</td>");
            $("#misReportesReservas").append("<td>"+item.total+"</td>");
            $("#misReportesReservas").append('<td><button onclick="limpiarpantalla()">Return</button></td>');
            $("#miResultadoreserva").append("</tr>");
          }
        });
      },
      
      error: function(jqXHR, textStatus, errorThrown) {
            
      }
  });

}

//////// Ver Reservas por fechas 
function VerReservasPorFecha(){
  var startdate1 = $("#startdate").val();
  var enddate1 = $("#enddate").val();
  $.ajax({
      dataType: 'json',
      url:"http://144.22.57.54:8080/api/Reservation/report-dates/"+startdate1+"/"+enddate1,
      type:'GET',
      
      success:function(response17) {
        var misItems6=response17;
        console.log(misItems6);
        $("#misReportesReservas").html("");
        misItems6.forEach(function(item){
        {
            $("#misReportesReservas").append("<tr>");
            $("#misReportesReservas").append("<td>"+item.client.name+"</td>");            
            $("#misReportesReservas").append("<td>"+item.motorbike.name+"</td>");
            $("#misReportesReservas").append("<td>"+item.startDate+"</td>");
            $("#misReportesReservas").append("<td>"+item.devolutionDate+"</td>");
            $("#misReportesReservas").append('<td><button onclick="limpiarpantalla()">Return</button></td>');
            $("#miResultadoreserva").append("</tr>");
          }
        });
      },
      
      error: function(jqXHR, textStatus, errorThrown) {
            
      }
  });

}

///////// Reportes ///////////////

function traerReporteStatus(){
  console.log("test");
  $.ajax({
      url:"http://144.22.57.54:8080/api/Reservation/report-status",
      type:"GET",
      datatype:"JSON",
      success:function(respuesta){
          console.log(respuesta);
          pintarRespuesta(respuesta);
      }
  });
}
function pintarRespuesta(respuesta){

  let myTable="<table>";
  myTable+="<tr>";
     myTable+="<th>completadas</th>";
      myTable+="<td>"+respuesta.completed+"</td>";
      myTable+="<th>canceladas</th>";
      myTable+="<td>"+respuesta.cancelled+"</td>";
      myTable+="</tr>";
  myTable+="</table>";
  $("#resultadoStatus").html(myTable);
}
function traerReporteDate(){

  var fechaInicio = document.getElementById("RstarDate").value;
  var fechaCierre = document.getElementById("RdevolutionDate").value;
  console.log(fechaInicio);
  console.log(fechaCierre);
  
      $.ajax({
          url:"http://144.22.57.54:8080/api/Reservation/report-dates/"+fechaInicio+"/"+fechaCierre,
          type:"GET",
          datatype:"JSON",
          success:function(respuesta){
              console.log(respuesta);
              pintarRespuestaDate(respuesta);
          }
      });
  }
  function pintarRespuestaDate(respuesta){

      let myTable="<table>";
      myTable+="<tr>";
        
      for(i=0;i<respuesta.length;i++){
      myTable+="<th>total</th>";
          myTable+="<td>"+respuesta[i].devolutionDate+"</td>";
          myTable+="<td>"+respuesta[i].startDate+"</td>";
          myTable+="<td>"+respuesta[i].status+"</td>";
        
        
          myTable+="</tr>";
      }
      myTable+="</table>";
      $("#resultadoDate").html(myTable);
  }

  function traerReporteClientes(){
      $.ajax({
          url:"http://144.22.57.54:8080/api/Reservation/report-dates/"+startdate1+"/"+enddate1,
          type:'GET',
          datatype:"JSON",
          success:function(respuesta){
              console.log(respuesta);
              pintarRespuestaClientes(respuesta);
          }
      });
  }
  function pintarRespuestaClientes(respuesta){

      let myTable="<table>";
      myTable+="<tr>";
        
      for(i=0;i<respuesta.length;i++){
      myTable+="<th>total</th>";
          myTable+="<td>"+respuesta[i].total+"</td>";
          myTable+="<td>"+respuesta[i].client.name+"</td>";
          myTable+="<td>"+respuesta[i].client.email+"</td>";
          myTable+="<td>"+respuesta[i].client.age+"</td>";
        
          myTable+="</tr>";
      }
      myTable+="</table>";
      $("#resultadoClientes").html(myTable);
  }}
