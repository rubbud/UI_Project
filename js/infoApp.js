angular.module("infoApp").service("productService", ["$http", function($http){

    
    
   
    
         $http.get("/service/person").then(function(response){
            Obj.person= response.data; 
             console.log("from Service inventory")
             console.log(Obj.person);


   
    });
    
    
    
      var Obj=this;
        this.id=null;

    this.getpersonId=function(){
        
        var url ="/service/person/"+Obj.id;
        
        
         $http.get(url).then(function(response){
                          

            Obj.getpersonId= response.data; 
             
             
             console.log("from person by person_id");
             console.log(Obj.personId);


   
    });
    }
    
    