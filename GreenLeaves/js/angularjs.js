window.onload =limpiar;
    // // validar
    
    function limpiar() {
  //Utilizamos el elemento al que hacemos focus para borrar el campo.
 document.getElementById("nombre").value="";
    document.getElementById('email').value="";
    // var txtFecha = document.getElementById('fecha').value;
   document.getElementById('Telph').value="";
     document.getElementById('ubicacion').value="";
}
 function validar(){

    var txtNombre = document.getElementById("nombre").value;
    var txtCorreo = document.getElementById('email').value;
    // var txtFecha = document.getElementById('fecha').value;
    var txtTelph = document.getElementById('Telph').value;
    var txtubi = document.getElementById('ubicacion').value;
   
    var mesg ="";
    //Test campo obligatorio
    if(txtNombre == null || txtNombre.length == 0 || /^\s+$/.test(txtNombre)){
     
         mesg += "\nEl campo Nombre no debe ir vacío ";
       
    }
 
    //Test correo
    
   if( !(/^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/.test(txtCorreo)) ) {
       mesg += "\nEl campo Corre no debe ir vacío ";


     }

  //   //test telefono
    // Prefijo internacional (+ seguido de 2 o 3 cifras), espacio en blanco \s y 10 cifras consecutivas
    if( !(/^[\+\#]\d{2,3}\s\d{9,10}$/.test(txtTelph)) ) {
       mesg += "\nEl campo Telefono no debe ir vacío ";
     

    }

      if(txtubi == null || txtubi.length == 0 || /^\s+$/.test(txtubi)){
      mesg += "\nEl campo ubicacion no debe ir vacío ";
    }
 if(mesg!=""){
swal({
  title: "Alerta",
  text: "Se encontraron algunos campos incorrectos \n "+mesg+ "\n\n Porfavor corriga para continuar.",
  icon: "warning",
  dangerMode: true,
});
 
   }
   else {
    var form = document.getElementById('formulario');
       var form2 = document.getElementById('formulario2');
       form.style.display='none';
       form2.style.display='block';
       llenar();
       limpiar();
     
   }
 } 


  function llenar(){
var txtNombre = document.getElementById("nombre").value;
    var txtCorreo = document.getElementById('email').value;
    var txtFecha = document.getElementById('fecha').value;
    var txtTelph = document.getElementById('Telph').value;
    var txtubi = document.getElementById('ubicacion').value;

var x = document.forms["formulario"];
    var text = "";
    var text2="";
     var text3="";
      var text4="";
 
    
        text = x.elements[0].value ;
        text2 = x.elements[1].value ;
        text3 = txtubi;
        text4= txtFecha;
       
    
   document.getElementById("name").innerHTML = text;
   document.getElementById("mail").innerHTML = text2;
   document.getElementById("ubic").innerHTML=text3;
   document.getElementById("fecha").innerHTML=text4;
}
    
    

 // mostrar formulario



  // fecha

 // angular.module('date', ['ngMaterial', 'ngMessages'])
 
 // .controller
 //  ("AppCtrl", function($scope) 
 //  {

 //    $scope.myDate = new Date();

 //  $scope.minDate = new Date(
 //     $scope.myDate.getFullYear()-100,
 //      $scope.myDate.getMonth(),
 //      $scope.myDate.getDate());

 //  $scope.maxDate = new Date(
 //     $scope.myDate.getFullYear(),
 //      $scope.myDate.getMonth(),
 //      $scope.myDate.getDate());


 // }
 //  )
 // .config(


 //  function($mdDateLocaleProvider) {
 //    /**
 //     * @param date {Date}
 //     * @returns {string} string representation of the provided date
 //     */
 //  // Example of a Spanish localization.
 //  $mdDateLocaleProvider.months = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 
 //                                  'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'];
 //  $mdDateLocaleProvider.shortMonths = ['Ene', 'Feb', 'Mar', 'Abr', 'May', 'Jun', 
 //                                  'Jul', 'Ago', 'Sep', 'Oct', 'Nov', 'Dic'];
 //  $mdDateLocaleProvider.days = ['Domingo', 'Lunes', 'Martes', 'Miercoles', 'Jueves', 'Viernes', 'Sábado'];
 //  $mdDateLocaleProvider.shortDays = ['Do', 'Lu', 'Ma', 'Mi', 'Ju', 'Vi', 'Sa'];
 //  // Can change week display to start on Monday.
 //  $mdDateLocaleProvider.firstDayOfWeek = 1;


 //  } );
// ---------------------
// funcion
 // .filter("date", function () 
 // {


 //        return function (fecha) 
 //        {

 //            if (!fecha) return "";
 //            fecha = new Date(fecha);

 //            return 
 //            (
 //              fecha.getDate() > 9 ? fecha.getDate() : "0" + fecha.getDate()
 //            ) + "-" + (["ene", "feb", "mar", "abr", "may", "jun", "jul", 
 //              "ago", "sep", "oct", "nov", "dic"][fecha.getMonth()]) + "-" + fecha.getFullYear()
 //        };
 //  }

 //  );

// location
google.maps.event.addDomListener(window, 'load', function () {
            var places = new google.maps.places.Autocomplete(document.getElementById('ubicacion'));
            google.maps.event.addListener(places, 'place_changed', function () {
                var place = places.getPlace();
  
            });
        });


//                                                            codigo viejo

  angular.module('date',['ngMaterial', 'ngMessages'])
    .controller('AppCtrl', function($scope) 
{
  $scope.myDate = new Date();
  $scope.minDate = new Date(
      $scope.myDate.getFullYear()-100,
      $scope.myDate.getMonth(),
      $scope.myDate.getDate());
  $scope.maxDate = new Date(
      $scope.myDate.getFullYear(),
      $scope.myDate.getMonth(),
      $scope.myDate.getDate());

  
}

   )

    // para poner los meses en español
.config(
  function($mdDateLocaleProvider) {
  // Example of a Spanish localization.
  $mdDateLocaleProvider.months = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 
                                  'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'];
  $mdDateLocaleProvider.shortMonths = ['Ene', 'Feb', 'Mar', 'Abr', 'May', 'Jun', 
                                  'Jul', 'Ago', 'Sep', 'Oct', 'Nov', 'Dic'];
  $mdDateLocaleProvider.days = ['Domingo', 'Lunes', 'Martes', 'Miercoles', 'Jueves', 'Viernes', 'Sábado'];
  $mdDateLocaleProvider.shortDays = ['Do', 'Lu', 'Ma', 'Mi', 'Ju', 'Vi', 'Sa'];
  // Can change week display to start on Monday.
  $mdDateLocaleProvider.firstDayOfWeek = 1;
  

})

// cambiar el formato
 .filter("date", function () {
        return function (fecha) {

            if (!fecha) return "";
            fecha = new Date(fecha);

            return (
              fecha.getDate() > 9 ? fecha.getDate() : "0" + fecha.getDate()) + "-" + (["ene", "feb", "mar", "abr", "may", "jun", "jul", 
              "ago", "sep", "oct", "nov", "dic"][fecha.getMonth()]) + "-" + fecha.getFullYear()
        };
});


  
 



