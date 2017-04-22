$(document).ready(function(){ 
  $('#registrar').on('click', function(){    
        $.ajax('contents/registrar.html', {                           
            success: function(response){    
             $('.contenido').html($(response).find('.mBody').fadeIn());
            },
            type: 'POST',       
    });
    });

  $('#instructores').on('click', function(){    
          $.ajax('contents/instructores.html', {                           
              success: function(response){    
               $('.contenido').html($(response).find('.mBody').fadeIn());
              },
              type: 'POST',       
      });
      });

  $(".contenido").on('click','#cargaData', function(){    
           $.ajax('contents/cargaData.html', {                           
              success: function(response){    
               $('.contenido').html($(response).find('.mBody').fadeIn());
              },
              type: 'POST',    
      });
      });

});