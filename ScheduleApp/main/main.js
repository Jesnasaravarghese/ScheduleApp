angular.module('scheduleApp').controller('MainCtrl',function($scope,$firebase){        
var ref = new window.Firebase("https://sweltering-heat-7935.firebaseio.com/days");  
 var fb = $firebase(ref);
 var syncObject = fb.$asObject();
  syncObject.$bindTo($scope, 'days');
  $scope.reset = function() {    

   fb.$set({
     monday: {
       name: 'Monday',
       slots: {
         0900: {
           time: '9:00am',
           booked: false
         },
         0110: {
           time: '11:00am',
           booked: false
         }
       }
     },
     tuesday: {
       name: 'Wednesday',
       slots: {
         0900: {
           time: '9:00am',
           booked: false
         },
         0110: {
           time: '11:00am',
           booked: false
         }
       }
     }
   });    

 };
 

});