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
    $(".container").on('click','#registrarSimulador', function(){    
         $.ajax('contents/registrarSimulador.html', {                           
            success: function(response){    
             $('.contenido').html($(response).find('.mBody').fadeIn());
            },
            type: 'POST'  
    });
    });
    $(".container").on('click','#editarSimulador', function(){    
         $.ajax('contents/editarSimulador.html', {                           
            success: function(response){    
             $('.contenido').html($(response).find('.mBody').fadeIn());
            },
            type: 'POST'  
    });
    });



     $(".container").on('click','#listaAeronaves', function(){    
           $.ajax('contents/listaAeronaves.html', {                           
              success: function(response){    
               $('.contenido').html($(response).find('.mBody').fadeIn());
              },
              type: 'POST'  
      });
      });

     $(".container").on('click','#registrarAeronave', function(){    
           $.ajax('contents/registrarAeronave.html', {                           
              success: function(response){    
               $('.contenido').html($(response).find('.mBody').fadeIn());
              },
              type: 'POST'  
      });
      });

      $(".container").on('click','#detalleAeronave', function(){    
           $.ajax('contents/detalleAeronave.html', {                           
              success: function(response){    
               $('.contenido').html($(response).find('.mBody').fadeIn());
              },
              type: 'POST'  
      });
      });

      $(".container").on('click','#editarAeronave', function(){    
           $.ajax('contents/editarAeronave.html', {                           
              success: function(response){    
               $('.contenido').html($(response).find('.mBody').fadeIn());
              },
              type: 'POST'  
      });
      });

      $(".container").on('click','#disponibilidadAlumno', function(){    
           $.ajax('contents/disponibilidadAlumno.html', {                           
              success: function(response){    
               $('.contenido').html($(response).find('.mBody').fadeIn());
              },
              type: 'POST'  
      });
      });

      $(".container").on('click','#programacionVuelos', function(){    
           $.ajax('contents/programacionVuelos.html', {                           
              success: function(response){    
               $('.contenido').html($(response).find('.mBody').fadeIn());
              },
              type: 'POST'  
      });
      });
      
       $(".container").on('click','#listaProgramacionVuelos', function(){    
           $.ajax('contents/listaProgramacionVuelos.html', {                           
              success: function(response){    
               $('.contenido').html($(response).find('.mBody').fadeIn());
              },
              type: 'POST'  
      });
      });

      $(".container").on('click','#cambiarPass', function(){    
           $.ajax('contents/cambiarPass.html', {                           
              success: function(response){    
               $('.contenido').html($(response).find('.mBody').fadeIn());
              },
              type: 'POST'  
      });
      });

       $(".container").on('click','#resultadoVuelo', function(){    
           $.ajax('contents/resultadoVuelo.html', {                           
              success: function(response){    
               $('.contenido').html($(response).find('.mBody').fadeIn());
              },
              type: 'POST'  
      });
      });

       $(".container").on('click','#detalleResultadoVuelo', function(){    
           $.ajax('contents/detalleResultadoVuelo.html', {                           
              success: function(response){    
               $('.contenido').html($(response).find('.mBody').fadeIn());
              },
              type: 'POST'  
      });
      });

       $(".container").on('click','#gestionCombustible', function(){    
           $.ajax('contents/gestionCombustible.html', {                           
              success: function(response){    
               $('.contenido').html($(response).find('.mBody').fadeIn());
              },
              type: 'POST'  
      });
      });



});