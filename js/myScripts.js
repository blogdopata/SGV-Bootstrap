
		document.getElementById("searchSpecial").addEventListener("click", busquedaSpecial);
		function busquedaSpecial(){
		 		open('contents/searchSpecial.html','','top=300,left=300,width=700,height=320');
		 	}
		 	
		document.getElementById("searchInstructor").addEventListener("click", busquedaInstructor);
		function busquedaInstructor(){
		 		open('contents/searchInstructor.html','','top=300,left=300,width=700,height=320') ;
		 	}

		document.getElementById("searchAeronave").addEventListener("click", busquedaAeronave);
		 	function busquedaAeronave(){
		 		open('contents/searchAeronave.html','','top=300,left=300,width=700,height=320') ;
		 	}
		 		
		$('#showContent').on('click',function(event){
		     	event.preventDefault();			    
      		$('#showMe').toggle('slow');
   				
		});

		$('#showContentTo').on('click',function(event){
		     	event.preventDefault();			    
      		$('#showMeTo').toggle('slow');
   				
		});
