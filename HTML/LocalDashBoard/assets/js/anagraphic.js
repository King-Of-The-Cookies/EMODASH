
anagraphic = {
    initAnagraphicValues: function(){
	
				$.ajax({
					type: "GET",
					url: "http://localhost:8080/get_anagraphic_data?customer_id="+localStorage.getItem('customer_id'),
					dataType: "json",
					processData: false
				 }).done(function(result) 
				{
						myObj = result;
						console.log(myObj);
						
						name = myObj['name']
						
						document.getElementById('name').value = name
						
						surname = myObj['surname']
						
						document.getElementById('surname').value = surname
						                
						document.getElementById('user_name').value 	= name + " " +surname      
						document.getElementById('user_name2').value = name + " " +surname            
						
					    address = myObj['address']

					    document.getElementById('home_address').value = address             
					    
					    //document.getElementById('Company').value = 'ABP'
					    
					    age = myObj['age']
					    
					    document.getElementById('age').value = age
					                
					    postal_code = myObj['postalCode']
					                        
					    document.getElementById('post_code').value = postal_code

					    Region = myObj['region']

					    document.getElementById('Region').value = Region


				 })
    
		 }  
    
    
}

