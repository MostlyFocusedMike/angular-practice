// thing.controller('otherController', ['$scope', function($scope) {         
//     let theApp = this
//     $scope.test = 'Hello there'; 
//     $scope.things = ["hello", "there"]
//     $scope.add = function() {
//         if (!$scope.things.includes($scope.foo)) {
//             $scope.things.push($scope.foo)
//         }
//         $scope.foo = ""
//     }
//     $scope.delete = function(index) {
//         $scope.things.splice(index, 1)
//     }
//   }]
// );

app.controller("MainController", ['$scope', function($scope){
    $scope.title = "hello there"
    $scope.myInput = "wow ok then"
    $scope.checkVal = false
    $scope.getCheckVal = function() {
        alert($scope.checkVal)
    }
}]);
console.log("hello");
