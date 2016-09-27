angular.module('infoApp').controller('infoAppCtrl', ['$scope','productService', function($scope, productService){
 
    
//$scope.productLists=productService.productLists;
//$scope.productItems=productService.productItems;

   // $scope.title = "RUS Store";
    $scope.personLists = "";
     
     $scope.$watch(function(){
                                return productService.personLists;
                            },function(newVal,oldVal){
                                if(oldVal!=newVal){
                                    $scope.personLists=newVal;
                                                                    
                                                                    
                                    console.log("This is coming from controller for productlist")
                                    console.log($scope.personLists);
                                                                    
                                                                    
                                                                    
                                                                }
        //console.log($scope.productLists);
       // alert($scope.productLists);
    });
    
     }]);