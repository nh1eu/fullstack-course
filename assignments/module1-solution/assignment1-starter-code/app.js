(function() {
    'use strict';
    angular.module('LunchCheck',[])
    .controller('LunchCheckController',LunchCheckController);
    
    LunchCheckController.$inject = ['$scope'];
    function LunchCheckController($scope){
        $scope.listItem = "";
        $scope.status = "";
        $scope.checkItem = function(){
            const item = $scope.listItem ? $scope.listItem.split(",") : [];
           
            
            if(item.length > 3){
                $scope.status = "Too much!";
            }
            else if(item.length < 4 && item.length > 0){
                $scope.status = "Enjoy!"
            }
            else if(!$scope.listItem){
                $scope.status = "Please enter data first";
            }
        }
    }
})()