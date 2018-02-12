export default class Controller
{
  constructor(InstallManager, $scope, $http)
    {
        'ngInject'

        this.$onInit = (() => {
          $http.get('http://localhost/api/install/check')
            .then (result => {
              InstallManager.transition('completed_finish')
            })
            .catch (error => {
              InstallManager.transition('')
            })
        })


        $scope.continue = (() => {
          InstallManager.transition('completed_welcome')
        })
    }

}
