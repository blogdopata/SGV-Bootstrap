$(document).ready(function(){ 
  $('#registrar').on('click', function(){    
        $.ajax('contents/registrar.html', {                           
            success: function(response){    
             $('.contenido').html($(response).find('.mBody').fadeIn());
            },
            type: 'POST'       
    });
    });

  // $('#instructores').on('click', function(){    
  //         $.ajax('contents/instructores.html', {                           
  //             success: function(response){    
  //              $('.contenido').html($(response).find('.mBody').fadeIn());
  //             },
  //             type: 'POST'     
  //     });
  //     });

  $(".contenido").on('click','#editarInstructor', function(){    
           $.ajax('contents/editarInstructor.html', {                           
              success: function(response){    
               $('.contenido').html($(response).find('.mBody').fadeIn());
              },
              type: 'POST'  
      });
      });
  $(".contenido").on('click','#detalleInstructor', function(){    
           $.ajax('contents/detalleInstructor.html', {                           
              success: function(response){    
               $('.contenido').html($(response).find('.mBody').fadeIn());
              },
              type: 'POST'  
      });
      });
  $(".container").on('click','#instructores', function(){    
           $.ajax('contents/instructores.html', {                           
              success: function(response){    
               $('.contenido').html($(response).find('.mBody').fadeIn());
              },
              type: 'POST'  
      });
      });

   $(".container").on('click','#listaAlumnos', function(){    
           $.ajax('contents/listaAlumnos.html', {                           
              success: function(response){    
               $('.contenido').html($(response).find('.mBody').fadeIn());
              },
              type: 'POST'  
      });
      });
   $(".container").on('click','#detalleAlumno', function(){    
           $.ajax('contents/detalleAlumno.html', {                           
              success: function(response){    
               $('.contenido').html($(response).find('.mBody').fadeIn());
              },
              type: 'POST'  
      });
      });
    $(".container").on('click','#editarAlumno', function(){    
           $.ajax('contents/editarAlumno.html', {                           
              success: function(response){    
               $('.contenido').html($(response).find('.mBody').fadeIn());
              },
              type: 'POST'  
      });
      });

    $(".container").on('click','#listaSimulador', function(){    
           $.ajax('contents/listaSimulador.html', {                           
              success: function(response){    
               $('.contenido').html($(response).find('.mBody').fadeIn());
              },
              type: 'POST'  
      });
      });
});