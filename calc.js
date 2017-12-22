var app=angular.module('Calc',[]);
app.controller('MyCtrl',function($scope){
	$scope.scores=[{'sgpa':"",'cp':""}];
	$scope.showcgpa=false;
	$scope.cgpa=0;
	$scope.tableAdd=function(scores){
		 $scope.scores.push({'sgpa':"", 'cp':""});
		
	}
	$scope.calculate=function(scores,showcgpa,cgpa){
		var up=0;
		var down=0;
		for(var i=0;i<$scope.scores.length;i++)
		{
			up=up+(parseFloat($scope.scores[i].sgpa)*parseFloat($scope.scores[i].cp));
			down=down+parseFloat($scope.scores[i].cp);

		}
		console.log(up);
		console.log(down);
		$scope.cgpa=(up/down).toFixed(2);
		$scope.showcgpa=true;
	}
})
