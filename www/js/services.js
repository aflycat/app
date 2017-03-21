angular.module('starter.services', [])
.factory("noLogin",function(){
	var noLoginData={
		touxiang:"img/nologin.jpg",
		name:"你是谁？"
	}
	return{
		all:function(){
			return noLoginData
		}
	}
		
	
})
.factory("toggleleftData",function(){
	var toogleData=[
		{title:'收藏',classify:'收藏'},
		{title:'消息',classify:'消息'},
		{title:'产品',classify:'产品'},
		{title:'人物',classify:'人物'},
		{title:'列表',classify:'列表'},
		{title:'专题',classify:'专题'},
		{title:'关于',classify:'关于'},
		{title:'合作',classify:'合作'},
		{title:'投稿',classify:'投稿'},
		{title:'设计导航',classify:'设计导航'}
		
		]
	return{
		all:function(){
			return toogleData
		}
	}
})
.factory("homeData",function(){
	var lunboimg=[
		{
			src:"img/lunbo01.jpg",id:1
		},
		{
			src:"img/lunbo02.jpg",id:2
		},
		{
			src:"img/lunbo03.jpg",id:3
		},
		{
			src:"img/lunbo04.png",id:4
		},
		{
			src:"img/lunbo05.jpg",id:5
		}
	
	]
		
	

	
	var homeDatas=[
	{
		id:1,
		classify:"isindex",
		img:"img/adam.jpg",
		article:"还记得当年中国游客疯抢日本马桶盖的新闻吗？当时国人出境游的日本攻略上都把马桶盖列在了必采的单子上，那个时候的中国制造都还在打价格战，质量的同质化和自主创新的不足，一度让国货陷入尴尬的境地。而在本届 AWE 展会上，海尔发布了「净水洗」卫玺智能马桶盖 V5 系列及一体机智能座便器等厨卫新品，可算是给国人争脸了！",
		title:'<第1条>纸瓶代替塑料瓶',
		good:'12',
		key:"关键词",
		date:"2017-01-03",
		subtitle:"这是一个小小的标题"
	},
	{
		id:2,
		classify:"收藏",
		img:"img/ben.png",
		article:"还记得当年中国游客疯抢日本马桶盖的新闻吗？当时国人出境游的日本攻略上都把马桶盖列在了必采的单子上，那个时候的中国制造都还在打价格战，质量的同质化和自主创新的不足，一度让国货陷入尴尬的境地。而在本届 AWE 展会上，海尔发布了「净水洗」卫玺智能马桶盖 V5 系列及一体机智能座便器等厨卫新品，可算是给国人争脸了！",
		title:"<第2条>例如展会上 E 视界报道过一款叫做馨厨",
		good:"23",
		key:"关键词",
		date:"2017-01-04",
		subtitle:"这是一个小小的标题"
	},
	{
		id:3,
		classify:"消息",
		img:"img/ionic.png",
		article:"还记得当年中国游客疯抢日本马桶盖的新闻吗？当时国人出境游的日本攻略上都把马桶盖列在了必采的单子上，那个时候的中国制造都还在打价格战，质量的同质化和自主创新的不足，一度让国货陷入尴尬的境地。而在本届 AWE 展会上，海尔发布了「净水洗」卫玺智能马桶盖 V5 系列及一体机智能座便器等厨卫新品，可算是给国人争脸了！",
		title:"<第3条>例如展会上 E 视界报道过一款叫做馨厨",
		good:"34",
		key:"关键词",
		date:"2017-01-05",
		subtitle:"这是一个小小的标题"
	},
	{
		id:4,
		classify:"产品",
		img:"img/logo.png",
		article:"还记得当年中国游客疯抢日本马桶盖的新闻吗？当时国人出境游的日本攻略上都把马桶盖列在了必采的单子上，那个时候的中国制造都还在打价格战，质量的同质化和自主创新的不足，一度让国货陷入尴尬的境地。而在本届 AWE 展会上，海尔发布了「净水洗」卫玺智能马桶盖 V5 系列及一体机智能座便器等厨卫新品，可算是给国人争脸了！",
		title:"<第4条>例如展会上 E 视界报道过一款叫做馨厨",
		good:"45",
		key:"关键词",
		date:"2017-01-06",
		subtitle:"这是一个小小的标题"
	},
	{
		id:5,
		classify:"人物",
		img:"img/lunbo01.jpg",
		article:"还记得当年中国游客疯抢日本马桶盖的新闻吗？当时国人出境游的日本攻略上都把马桶盖列在了必采的单子上，那个时候的中国制造都还在打价格战，质量的同质化和自主创新的不足，一度让国货陷入尴尬的境地。而在本届 AWE 展会上，海尔发布了「净水洗」卫玺智能马桶盖 V5 系列及一体机智能座便器等厨卫新品，可算是给国人争脸了！",
		title:"<第5条>例如展会上 E 视界报道过一款叫做馨厨",
		good:"56",
		key:"关键词",
		date:"2017-01-07",
		subtitle:"这是一个小小的标题"
	},
	{
		id:6,
		classify:"列表",
		img:"img/lunbo02.jpg",
		article:"例如展会上 E 视界报道过一款叫做馨厨冰箱的产品，创造了「屏+生态」的模式，让此前业界所有的想像变成了现实。同样是在冰箱上装了摄像头和屏幕，但它背后接入了 1 号店、本来生活、糖护士、小米手环、咕咚、豆果美食、荔枝 FM、爱奇艺等数百家第三方资源共同构建的美食娱乐购物平台，可以为用户提供美食烹饪等多种应用场景下的生活支持。",
		title:"<第6条>例如展会上 E 视界报道过一款叫做馨厨",
		good:"54",
		key:"关键词",
		date:"2017-01-08",
		subtitle:"这是一个小小的标题"
	},
	{
		id:7,
		classify:"isindex",
		img:"img/lunbo03.jpg",
		article:"还记得当年中国游客疯抢日本马桶盖的新闻吗？当时国人出境游的日本攻略上都把马桶盖列在了必采的单子上，那个时候的中国制造都还在打价格战，质量的同质化和自主创新的不足，一度让国货陷入尴尬的境地。而在本届 AWE 展会上，海尔发布了「净水洗」卫玺智能马桶盖 V5 系列及一体机智能座便器等厨卫新品，可算是给国人争脸了！",
		title:'<第7条>纸瓶代替塑料瓶222',
		good:'22',
		key:"关键词",
		date:"2017-01-09",
		subtitle:"这是一个小小的标题"
		
	},
	{
		id:8,
		classify:"收藏",
		img:"img/lunbo04.png",
		article:"还记得当年中国游客疯抢日本马桶盖的新闻吗？当时国人出境游的日本攻略上都把马桶盖列在了必采的单子上，那个时候的中国制造都还在打价格战，质量的同质化和自主创新的不足，一度让国货陷入尴尬的境地。而在本届 AWE 展会上，海尔发布了「净水洗」卫玺智能马桶盖 V5 系列及一体机智能座便器等厨卫新品，可算是给国人争脸了！",
		title:"<第8条>例如展会上 E 视界报道过一款叫做馨厨",
		good:"23",
		key:"关键词",
		date:"2017-01-10",
		subtitle:"这是一个小小的标题"
	},
	{
		id:9,
		classify:"消息",
		img:"img/lunbo05.jpg",
		article:"还记得当年中国游客疯抢日本马桶盖的新闻吗？当时国人出境游的日本攻略上都把马桶盖列在了必采的单子上，那个时候的中国制造都还在打价格战，质量的同质化和自主创新的不足，一度让国货陷入尴尬的境地。而在本届 AWE 展会上，海尔发布了「净水洗」卫玺智能马桶盖 V5 系列及一体机智能座便器等厨卫新品，可算是给国人争脸了！",
		title:"<第9条>例如展会上 E 视界报道过一款叫做馨厨",
		good:"34",
		key:"关键词",
		date:"2017-01-11",
		subtitle:"这是一个小小的标题"
	},
	{
		id:10,
		classify:"产品",
		img:"img/max.png",
		article:"还记得当年中国游客疯抢日本马桶盖的新闻吗？当时国人出境游的日本攻略上都把马桶盖列在了必采的单子上，那个时候的中国制造都还在打价格战，质量的同质化和自主创新的不足，一度让国货陷入尴尬的境地。而在本届 AWE 展会上，海尔发布了「净水洗」卫玺智能马桶盖 V5 系列及一体机智能座便器等厨卫新品，可算是给国人争脸了！",
		title:"<第10条>例如展会上 E 视界报道过一款叫做馨厨",
		good:"45",
		key:"关键词",
		date:"2017-01-12",
		subtitle:"这是一个小小的标题"
	}
	
	]
	
	return{
		all:function(){
			return homeDatas
		},
		lunbo:function(){
			return lunboimg
		}
	}
	
})
.factory('locals',['$window',function($window){
    return{
      set:function(key,value){
        
        $window.localStorage[key]=value;
      },
      get:function(key,defaulvalue){
       
       return $window.localStorage[key]||defaulvalue;
      }
    }
  }])
.factory("loginData",function(){
	var loginData=[
				{	
					id:0,
					username:"13040809882",
					name:"敲代码的猫",
					pass:"wan123456",
					touxiang:"img/zhufu.jpg",
					email:"暂未开通"
				},
				{	
					id:1,
					username:'15589012324',
					pass:"wan123456",
					name:"另一个账号",
					touxiang:"img/perry.png",
					email:"1032715112@qq.com"
				}

	
	]
		
		
		

		
		
	
	return{
			all:function(){
				return loginData
			},
			push:function(item){
				loginData.push(item)
			}
		}
	
	
})


.factory('Chats', function() {
  // Might use a resource here that returns a JSON array

  // Some fake testing data
  var chats = [{
    id: 0,
    name: 'Ben Sparrow',
    lastText: 'You on your way?',
    face: 'img/ben.png'
  }, {
    id: 1,
    name: 'Max Lynx',
    lastText: 'Hey, it\'s me',
    face: 'img/max.png'
  }, {
    id: 2,
    name: 'Adam Bradleyson',
    lastText: 'I should buy a boat',
    face: 'img/adam.jpg'
  }, {
    id: 3,
    name: 'Perry Governor',
    lastText: 'Look at my mukluks!',
    face: 'img/perry.png'
  }, {
    id: 4,
    name: 'Mike Harrington',
    lastText: 'This is wicked good ice cream.',
    face: 'img/mike.png'
  }];

  return {
    all: function() {
      return chats;
    },
    remove: function(chat) {
      chats.splice(chats.indexOf(chat), 1);
    },
    get: function(chatId) {
      for (var i = 0; i < chats.length; i++) {
        if (chats[i].id === parseInt(chatId)) {
          return chats[i];
        }
      }
      return null;
    }
  };
});
