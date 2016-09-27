angular.module('infoApp').controller('formCtrl', function($scope, $location)
    $scope.goForm = function(){
        $location.url("http://http://127.0.0.1:55975/views/form.html")
    };
