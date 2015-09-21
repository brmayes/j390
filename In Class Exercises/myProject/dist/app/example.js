angular.module('example', [
  // Declare here all AngularJS dependencies that are shared by the example module.
  'supersonic'
]);

angular
  .module('example')
  .controller('LearnMoreController', function($scope, supersonic) {

    $scope.navbarTitle = "Learn More";

  });

angular
  .module('example')
  .controller('PhotosController', function($scope, supersonic) {

    $scope.navbarTitle = "Photos";

    $scope.getCamera = function() {
        var options = {
        quality: 50,
        allowEdit: true,
        targetWidth: 300,
        targetHeight: 300,
        encodingType: "png",
        saveToPhotoAlbum: true
      };

        supersonic.media.camera.takePicture(options).then( function(result){
          // Do something with the image URI
          supersonic.ui.dialog.alert(result);
        });
    };

  });

angular
  .module('example')
  .controller('SettingsController', function($scope, supersonic) {
    $scope.navbarTitle = "Settings";
  });
