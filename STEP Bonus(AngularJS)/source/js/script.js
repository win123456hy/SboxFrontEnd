var app = angular.module("myApp", []);
app.controller("myCtrl", function ($scope) {

    $scope.dem = () => {
        $scope.numberitem = 0;
        for (let i = 0; i < $scope.myarray.length; i++) {
            if ($scope.myarray[i].status == false) {
                $scope.numberitem++;
            }

        }
        for (let i = 0; i < $scope.myarray.length; i++) {
            if ($scope.myarray[i].status == true) {
                $scope.clrc = true;
                break;
            }
            else
                $scope.clrc = false;
        }
        $scope.numberitem += " items left";

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
        $scope.vl = "";
    }


    $scope.changeAll = function (abc) {
        if (abc) {
            for (let index = 0; index < $scope.myarray.length; index++) {
                $scope.myarray[index].status = true;
            }
            console.log($scope.myarray);
            $scope.dem();
        } else {
            for (let index = 0; index < $scope.myarray.length; index++) {
                $scope.myarray[index].status = false;
            }
            console.log($scope.myarray);
            $scope.dem();
        }
    }

    $scope.insertinvited = function (isChecked, $index) {
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
    $scope.clearCompleted = () => {
        var index = 0;

        while (true) {
            if(index<$scope.myarray.length){
                if ($scope.myarray[index].status == true)
                $scope.myarray.splice(index, 1);
            }

            if (index == $scope.myarray.length) {
                var count = 0;
                var k=$scope.myarray.length;
                for (let i = 0; i < k; i++) {
                    if ($scope.myarray[i].status == true)
                        count++;
                }
                if (count == 0) {
                    break;
                }
                index = 0;
            }
            else
                index++;
        }
        console.log($scope.myarray);
        $scope.dem();
    }
    $scope.edit=function () {
        $scope.isEditing=true;
    }
    $scope.sm=function ($index,x) {
        $scope.myarray[$index].do=x;
        $scope.isEditing=false;
    }
});