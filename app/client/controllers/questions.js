angular.module('MyApp')
  .controller('QuestionsCtrl', function($scope, $alert) {
    // $scope.answer = function() {

    // };
    $scope.calc = function(provider) {
       $alert({
          content: "Adding",
          animation: 'fadeZoomFadeDown',
          type: 'material',
          duration: 3
        });
    };
    // $scope.calc()
    //   .then(function() {
    //     $alert({
    //       content: 'Adding',
    //       animation: 'fadeZoomFadeDown',
    //       type: 'material',
    //       duration: 3
    //     });
    //   });
  drawSvg();
  });

