var mainApp = angular.module("mainApp", []);

mainApp.config(function($interpolateProvider) {
  $interpolateProvider.startSymbol('{[{');
  $interpolateProvider.endSymbol('}]}');
});         
mainApp.controller('facultyController',['$scope', '$http', function($scope,$http) {

	$scope.curExam = {
		type:null,
		weight:0,
		totalMarks:0
	}
	$scope.addExam = function() {
		console.log($scope.curExam);
		$scope.sendExam($scope.curExam)
		.then(function(res){
			console.log("response from send exam in addexam");
		});
	};
	$scope.sendExam = function(examData) {
		console.log("examdata apifun called");
		return $http({
           url: '/api/addPattern',
           method: "POST",
           data: examData
       })
       .then(function(response) {
               console.log(response);
               // console.log("response back from senddata succes");
               return {status:true,data:response.data};
       }, 
       function(err) { // optional
               console.log(err);
               // console.log("errorb ack from senddata fail");
               return {status:false,data:err};;
       });
	}
}]);
  

   


// mainApp.controller('searchInventoryController',['$scope', '$http', function($scope,$http) {

//    $scope.order = {};
//    $scope.orderFetched = false;
//    $scope.editMode = false;
//    $scope.cancelEditMode = false;

//    $scope.getDataById = function(orderId) {
//       console.log("getdatabyid api fun called");
//        return $http({
//            url: '/api/searchOrder/'+orderId,
//        })
//        .then(function(response) {
//                console.log(response);
//                // console.log("response back from getdatabyid succes");
//                return {status:true,data:response.data};
//        }, 
//        function(err) { // optional
//                console.log(err);
//                console.log("error back from getdatabyid fail");
//                return {status:false,data:err};
//        });
//    };

//    $scope.updateOrder = function() {
//       var orderUpdate = $scope.order;
//       console.log("actual updateOrder api fun called");
//        return $http({
//            url: '/api/updateOrder',
//            method: "POST",
//            data: orderUpdate
//        })
//        .then(function(response) {
//                console.log(response);
//                // console.log("response back from senddata succes");
//                return {status:true,data:response.data};
//        }, 
//        function(err) { // optional
//                console.log(err);
//                // console.log("error back from senddata fail");
//                return {status:false,data:err};;
//        });
//    };

//    $scope.getOrder = function() {
//       console.log("getorderbyid fun called");
//       $scope.getDataById($scope.orderid)
//       .then(function(res) {
//         console.log(res);
//             if (res.status) {

//             console.log(res.data.orderData);
//             console.log("getOrder succesfull");
//             $scope.orderOrig = res.data.orderData;
//             $scope.order = $scope.orderOrig;
//             $scope.orderFetched = true;
//             $scope.editMode = false;
//             console.log($scope.order);

//          }
//          if (!res.status) {
//             console.log(res);
//             console.log("getorder failed");
//             return res;
//          }
//       });
//    };

//    $scope.saveOrder = function() {
//      console.log("saveOrder fun called");
//      console.log($scope.order)
//       $scope.updateOrder()
//       .then(function(res) {
//         console.log(res);
//             if (res.status) {

//             console.log(res.data.orderData);
//             console.log("saveOrder succesfull");
//             $scope.orderOrig = res.data.orderData;
//             $scope.order = $scope.orderOrig;
//             $scope.orderFetched = true;
//             $scope.editMode = false;
//             console.log($scope.order);

//          }
//          if (!res.status) {
//             console.log(res);
//             console.log("saveorder failed");
//             return res;
//          }
//       });
//    }

//    $scope.editorder = function() {
//     $scope.editMode = true;
//     $scope.orderFetched = false;
//    };
//    $scope.cancelEditorder = function() {
//     $scope.editMode = false;
//     // $scope.orderFetched = false;
//    };
//    // $scope.postOrder = $http.post('/api/saveNewOrder', $scope.order);
//    //    postOrder.success(function(data, status, headers, config) {
//    //       $scope.message = data;
//    //    });
//    //    postOrder.error(function(data, status, headers, config) {
//    //       alert( "failure message: " + JSON.stringify({data: data}));
//    //    });
// }]);