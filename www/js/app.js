// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.services' is found in services.js
// 'starter.controllers' is found in controllers.js
angular.module('starter', ['ionic', 'starter.controllers', 'starter.services'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(true);

    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }
  });
})

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider

  // setup an abstract state for the tabs directive
    .state('tab', {
    url: '/tab',
    abstract: true,
    templateUrl: 'templates/tabs.html'
  })

  // Each tab has its own nav history stack:

  .state('tab.home', {
    url: '/home',
    views: {
      'tab-home': {
        templateUrl: 'templates/tab-home.html',
        controller: 'HomeCtrol'
      }
    }
  })
//注册页面
.state('tab.register', {
    url: '/register',
    views: {
      'tab-home': {
        templateUrl: 'templates/tab-register.html',
        controller: 'RegisterCtrl'
      }
    }
  })
//密码重置
.state('tab.passback', {
    url: '/passback',
    views: {
      'tab-home': {
        templateUrl: 'templates/tab-passback.html',
        controller: 'PassbackCtrl'
      }
    }
  })
//内容筛选
.state('tab.conChoose', {
    url: '/conChoose',
    views: {
      'tab-home': {
        templateUrl: 'templates/tab-conChoose.html',
        controller: 'HomeCtrol'
      }
    }
  })
//个人信息
.state('tab.information', {
    url: '/information',
    views: {
      'tab-home': {
        templateUrl: 'templates/tab-information.html',
        controller: 'InformationCtrl'
      }
    }
  })
//修改昵称页面
.state('tab.username', {
    url: '/username',
    views: {
      'tab-home': {
        templateUrl: 'templates/tab-username.html',
        controller: 'UsernameCtrl'
      }
    }
  })
//更改手机
.state('tab.telephone', {
    url: '/telephone',
    views: {
      'tab-home': {
        templateUrl: 'templates/tab-telephone.html',
        controller: 'TelephoneCtrl'
      }
    }
  })
//绑定邮箱
.state('tab.email', {
    url: '/email',
    views: {
      'tab-home': {
        templateUrl: 'templates/tab-email.html',
        controller: 'EmailCtrl'
      }
    }
  })
//修改密码
.state('tab.changepass', {
    url: '/changepass',
    views: {
      'tab-home': {
        templateUrl: 'templates/tab-changepass.html',
        controller: 'ChangepassCtrl'
      }
    }
  })
//详情页面
.state('tab.deitail', {
      url: '/deitail/:myId',
      views: {
        'tab-home': {
          templateUrl: 'templates/tab-deitail.html',
          controller: 'DeitailCtrl'
        }
      }
   })
//加载相应页面
.state('tab.loadPage', {
      url: '/loadPage/:classify',
      views: {
        'tab-home': {
          templateUrl: 'templates/tab-loadPage.html',
          controller: 'LoadPageCtrl'
        }
      }
   })
  .state('tab.chats', {
      url: '/chats',
      views: {
        'tab-chats': {
          templateUrl: 'templates/tab-chats.html',
          controller: 'ChatsCtrl'
        }
      }
   });

  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/tab/home');

});
