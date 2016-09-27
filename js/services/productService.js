angular.module("infoApp").service("productService", ["$http", function($http){

    
    
   
    
         $http.get("/service/person").then(function(response){
            Obj.person= response.data; 
             console.log("from Service person")
             console.log(Obj.person);


   
    });
    
    
    
      var Obj=this;
        this.id=null;

    this.getpersonIds=function(){
        
        var url ="/service/person/"+Obj.id;
        
        
         $http.get(url).then(function(response){
                          

            Obj.personIds= response.data; 
             
             
             console.log("from Service inventory by inventorytype_id");
             console.log(Obj.personIds);


   
    });
    }
    
    
    
    
    
    $http.get("/service/inventory_type").then(function(response){  
                Obj.productLists= response.data;
                console.log("Service1");
                console.log(Obj.productLists);
                });
    
    
    
    this.currentId = null;
   
    
    this.getProductListsIds=function(){
         $http.get("/service/inventory_type/"+Obj.currentId).then(function(response){
            Obj.productListsIds= response.data;  
             
             console.log("from Service inventory_type by id")
             console.log(Obj.productListsIds);


   
    });
    }
    
    
    
    
    
    }]);

