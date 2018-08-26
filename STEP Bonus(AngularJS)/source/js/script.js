var app = angular.module("myApp", []);
app.controller("myCtrl", function($scope) {

    $scope.dem = () => {
        $scope.numberitem = 0;
        for (let i = 0; i < $scope.myarray.length; i++) {
            if ($scope.myarray[i].status == false) {
                $scope.numberitem++;
            }
        }
        if ($scope.numberitem != 0)
            $scope.numberitem += " items left";
        else
            $scope.numberitem = false;
    }

    $scope.summit = () => {
        if ($scope.vl.length > 0) {

            $scope.myarray.push({
                status: false,
                do: $scope.vl
            });
            $scope.dem();

        } else
            return;
    }




    $scope.insertinvited = function(isChecked, $index) {
        if (isChecked) {

            $scope.myarray[$index].status = true;
            console.log($scope.myarray);
            $scope.dem();
        } else {
            $scope.myarray[$index].status = false;
            console.log($scope.myarray);
            $scope.dem();
        }
    }
    $scope.completed = () => {
        $scope.st = true;
        console.log($scope.myarray);
    }

    $scope.all = () => {
        $scope.st = '';
        console.log($scope.myarray);
    }
    $scope.active = () => {
        $scope.st = false;
        console.log($scope.myarray);
        $scope.dem();
    }
    $scope.delete = ($index) => {
        $scope.myarray.splice($index, 1);
        console.log($scope.myarray);
        $scope.dem();
    }
});