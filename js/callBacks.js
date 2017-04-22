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
  $('#cargaData').on('click', function(){    
          $.ajax('contents/cargaData.html', {                           
              success: function(response){    
               $('.contenido').html($(response).find('.mBody').fadeIn());
              },
              type: 'POST',       
      });
      });

});