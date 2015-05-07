/**
 * Created by Amit Thakkar on 03/05/15.
 */
describe('Sample Module Controller test cases', function () {
    var sampleController,
        scope;
    beforeEach(angular.mock.module("angular-amd.sample"));
    beforeEach(inject(function ($rootScope, $controller) {
        scope = $rootScope.$new();
        sampleController = $controller('SampleController', {
            $scope: scope
        });
    }));
    it('check that page is having right text', function () {
        expect(sampleController.page).toEqual('Sample Page Sample Service');
    });
});
describe('Sample Module, Service test cases', function () {
    var sampleService;
    beforeEach(angular.mock.module("angular-amd.sample"));
    beforeEach(inject(function (_SampleService_) {
        sampleService = _SampleService_;
    }));
    it('checks service a name', function () {
        expect(sampleService.getName()).toEqual('Sample Service');
    });
});