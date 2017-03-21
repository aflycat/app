angular.module('starter.controllers', [])
/*底部tabs隐藏显示的指令*/
  .directive('hideTabs', function($rootScope) {
    return {
      restrict: 'A',
      link: function(scope, element, attributes) {
        scope.$on('$ionicView.beforeEnter', function() {
          $rootScope.hideTabs=attributes.hideTabs;
        });

        scope.$on('$ionicView.beforeLeave', function() {
          $rootScope.hideTabs = false;
        });
      }
    };
  })

.controller('IndexCtrl', function($scope,$ionicModal,$interval,$ionicSideMenuDelegate,locals,noLogin,loginData,toggleleftData) {
	
	$scope.toggleData=toggleleftData.all();
	//点击侧边栏加载相应的页面及数据
	$scope.loadPageData=[];
		$scope.loadPage=function(index){
			window.location="#/tab/loadPage/"+index
			
			for(var i=0;i<$scope.toggleData.length;i++){
				
				if($scope.toggleData[i].classify==index){
					 $scope.loadPageData=	$scope.toggleData[i];
					 
				}
			}
			
			
		};
		
	$ionicModal.fromTemplateUrl('register.html',{
				scope:$scope,
//				进入方式
				animation:'slide-in-up'
			}).then(function(modal){
//				获取成功后的对话框
				$scope.modal=modal
			});
			
	 $scope.showLogin=function(){
	 	 if( (locals.get('isload')=="isload") ){
	 		
	 		window.location="#/tab/information";
	 		$ionicSideMenuDelegate.toggleLeft()
	 	}else{
	 		$scope.modal.show();
	 	}
	 	 
	 	
	 };
	 //判断是否登录
	 $interval(function(){
	 	if( !(locals.get('isload')=="isload") ){
	  	 
	  	$scope.nologinshowData=noLogin.all();
	  		
	  }else{
	  	var index=locals.get("login")
	  
	  	$scope.nologinshowData=loginData.all()[index];
	  	
	  }
	 
	 },100)
	  
	 $scope.closeLogin=function(){
	 	
	 	$scope.modal.hide();
	 	window.location="#/tab/home"
	 	$ionicSideMenuDelegate.toggleLeft()
	 };
	 //去注册页面
	 $scope.toRegister=function(){
	 	
	 	$scope.modal.hide();
	 	$ionicSideMenuDelegate.toggleLeft();
	 	window.location="#/tab/register"
	 }
	 $scope.toPassback=function(){
	 	$scope.modal.hide();
	 	$ionicSideMenuDelegate.toggleLeft(false);
	 	window.location="#/tab/passback"
	 }
	 //登陆方法，为了显示个人信息页面暂时写为点击就跳转不进行数据判定
	 
	 
	 
	 
})
//登陆页面
.controller("LoginCtrl",function($scope,$ionicModal,$ionicSideMenuDelegate,loginData,$ionicPopup,locals){
		$scope.userName="";
	 	$scope.pass="";
	$scope.toLogin=function(){
		$ionicSideMenuDelegate.toggleLeft();
	 //获取的全部人员登录信息
	 	var arr=loginData.all();
	 
	 	
	 	for(var i=0;i<arr.length;i++){
	 		if($scope.userName&&$scope.pass){
		 			if(arr[i].username==$scope.userName&&arr[i].pass==$scope.pass){
		 				locals.set("isload","isload");
		 				locals.set("login",i)
		 				$scope.userName="";
	 					$scope.pass="";
	 					window.location="#/tab/home";
	 					$scope.modal.hide();
		 			}
	 			
	 		}
	 	}

	 	
	 	
		
 	

	 
	}
	
})
//注册页面的RegisterCtrl
.controller('RegisterCtrl', function($scope,$ionicModal,$ionicSideMenuDelegate,locals,loginData) {
	$scope.backLogin=function(){
		$scope.modal.show();
		$ionicSideMenuDelegate.toggleLeft(false);
		
		
	}

	$scope.registerData={};
	
	$scope.ctrlScope = $scope;
//	双向绑定失效解决方法被 scope 的原型继承坑了
		$scope.ctrlScope.num="";
		$scope.ctrlScope.code="";
	$scope.toRegister=function(){
		var phone_yz = /^1\d{10}$/;
//		两者都存在
		if($scope.ctrlScope.num&&$scope.ctrlScope.code){
			
			if(phone_yz.test($scope.ctrlScope.num)&&$scope.ctrlScope.code=="1234"){
				$scope.registerData={
					username:$scope.ctrlScope.num,
					name:"",
					pass:"",
					touxiang:"img/nologin.jpg",
					email:"暂未开通"
				}
				$scope.ctrlScope.num="";
				$scope.ctrlScope.code="";
				loginData.push($scope.registerData);
				locals.set("isload","isload")
				window.location="#/tab/information";
				
				
				
			}
		}
		
		
		
	}
	
	
})
//密码重置
.controller('PassbackCtrl', function($scope,$ionicModal) {
	$scope.backLogin=function(){
		$scope.modal.show();
	}
	
	
})

//主页
.controller('HomeCtrol', function($rootScope,$scope,$ionicSideMenuDelegate,$ionicModal,homeData,$timeout) {
//	$scope.homeData=function(){
//		 var current = 0;
//       
//          document.getElementById('target').onclick = function(){
//           
//              current = (current+90)%360;
//           
//              this.style.transform = 'rotate('+current+'deg)';
//          }
//	}
$ionicModal.fromTemplateUrl('animate.html',{
				scope:$scope,
//				进入方式
				animation:'slide-in-down'
			}).then(function(modal){
//				获取成功后的对话框
				$scope.modals=modal
			});



	$scope.showAnimate=function(){
		$scope.modals.show();
		document.getElementById("ani1").classList.remove("fanzan");
		document.getElementById("ani2").classList.remove("fanmeng");
		document.getElementById("ani3").classList.remove("fanha");
		document.getElementById("ani4").classList.remove("fancao");
		document.getElementById("ani5").classList.remove("fanbuy");
		document.getElementById("ani1").classList.add("zan");
		document.getElementById("ani2").classList.add("meng");
		document.getElementById("ani3").classList.add("ha");
		document.getElementById("ani4").classList.add("cao");
		document.getElementById("ani5").classList.add("buy");
		
	}

	$scope.closeAnimate=function(){
		document.getElementById("ani1").classList.remove("zan");
		document.getElementById("ani2").classList.remove("meng");
		document.getElementById("ani3").classList.remove("ha");
		document.getElementById("ani4").classList.remove("cao");
		document.getElementById("ani5").classList.remove("buy");
		
		document.getElementById("ani1").classList.add("fanzan");
		document.getElementById("ani2").classList.add("fanmeng");
		document.getElementById("ani3").classList.add("fanha");
		document.getElementById("ani4").classList.add("fancao");
		document.getElementById("ani5").classList.add("fanbuy");
		
		
		$timeout(function(){
		$scope.modals.hide();
		
		},200)
		
		
	}
	
	
	
	$rootScope.hideTabs=true;
	$scope.lunboimg=homeData.lunbo()
	//首页加载的数据
	$scope.homeDatas=homeData.all()
	
	
	
	$scope.toogleLeft=function(){
		$ionicSideMenuDelegate.toggleLeft()
	};
	$scope.toDetail=function(myId){
	
		window.location="#/tab/deitail/"+myId
	}
	
	$ionicModal.fromTemplateUrl('search.html',{
				scope:$scope,
//				进入方式
				animation:'slide-in-up'
			}).then(function(modal){
//				获取成功后的对话框
				$scope.modal=modal
			});
		
	$scope.showSearch=function(){
			$scope.modal.show();
			
	}
	//改变筛选条件
	$scope.closeSearch=function(){
		window.location="#/tab/home";
		$scope.modal.hide();
		
	}
	$scope.toChange=function(){
		$scope.modal.hide();
		$ionicSideMenuDelegate.toggleLeft(false);
		window.location="#/tab/conChoose"
	};
	$scope.backSearch=function(){
		
		$scope.modal.show();

	}
	
})
//登陆RegisterCtrol
.controller('InformationCtrl', function($scope,locals,$ionicSideMenuDelegate,loginData) {
 
 	$scope.data=loginData.all()[locals.get("login")]
 	
 	$scope.toogleLeft=function(){
		$ionicSideMenuDelegate.toggleLeft()
	};
	$scope.toUsername=function(){
		window.location="#/tab/username"
	};
	$scope.toTelephone=function(){
		window.location="#/tab/telephone"
	};
	$scope.toEmail=function(){
		window.location="#/tab/email"
	};
	$scope.toChangepass=function(){
		window.location="#/tab/changepass"
	};
	$scope.tuichu=function(){
		locals.set("isload","");
		locals.set("login","");
		window.location="#/tab/home"
		
	}
	
})
//修改昵称UsernameCtrl
.controller('UsernameCtrl', function($scope, $stateParams, Chats) {
  $scope.chat = Chats.get($stateParams.chatId);
  $scope.toInformation=function(){
  	window.location="#/tab/information"
  }
})
//更改手机号
.controller('TelephoneCtrl', function($scope, $stateParams, Chats) {
  $scope.chat = Chats.get($stateParams.chatId);
  $scope.toInformation=function(){
  	window.location="#/tab/information"
  }
})
//绑定邮箱
.controller('EmailCtrl', function($scope, $stateParams, Chats) {
  $scope.chat = Chats.get($stateParams.chatId);
  $scope.toInformation=function(){
  	window.location="#/tab/information"
  }
})
//修改密码
.controller('ChangepassCtrl', function($scope, $stateParams, Chats) {
  $scope.chat = Chats.get($stateParams.chatId);
  $scope.toInformation=function(){
  	window.location="#/tab/information"
  }
  
  
  
  
})


//详情页面
.controller('DeitailCtrl', function($scope, $stateParams,$ionicHistory, Chats,homeData) {
	$scope.goback=function(){
			$ionicHistory.goBack();
		}
	
  $scope.chat = Chats.get($stateParams.chatId);
  $scope.toHome=function(){
  	window.location="#/tab/home"
  }
  //获取全部信息
  $scope.getHome=homeData.all()
  //根据信息id加载数据， 减一处理
 	$scope.loadDatas= $scope.getHome[$stateParams.myId-1];

  
  
})
//加载相应页面LoadPageCtrl
.controller('LoadPageCtrl', function($scope, Chats, $ionicSideMenuDelegate,$stateParams,toggleleftData,homeData) {
	$scope.toogleLeft=function(){
		 $ionicSideMenuDelegate.toggleLeft()
	}
	$scope.titleData=$stateParams.classify;
	
	$scope.toggleData=homeData.all();
	
	//点击侧边栏加载相应的页面及数据
	$scope.loadPageData=[];
	
		$scope.loadData=function(){
			for(var i=0;i<$scope.toggleData.length;i++){
				
				if($scope.toggleData[i].classify==$scope.titleData){
					
					 $scope.loadPageData.push($scope.toggleData[i])	
					 
				}
			}
			
			
		};
	$scope.loadData();
	$scope.toDetail=function(myId){
	
		window.location="#/tab/deitail/"+myId
	}
 
})

.controller('ChatsCtrl', function($scope, Chats) {

  $scope.chats = Chats.all();
  $scope.remove = function(chat) {
    Chats.remove(chat);
  };
});

