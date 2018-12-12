window.onload = function() {
	var oNavList = $('#navlist');
	var aNavLis = oNavList.getElementsByTagName('li');
	var aNavSpans = oNavList.getElementsByTagName('span');
	//	var timer=setInterval(move,300);
	//导航栏
	var k = 0;
	for(var i = 0; i < aNavLis.length; i++) {
		if(aNavLis[i].className == 'active') {
			k = i;
		}

		console.log(k)
		aNavLis[i].index = i;
		aNavLis[i].onmouseenter = function() {
			this.className = 'active';
			aNavLis[k].className = 'active';
			//			console.log(k);
		}
		aNavLis[i].onmouseleave = function() {
			this.className = '';
			aNavLis[k].className = 'active';
		}
	}
	//右侧
	var oSidebarlist1 = $('#sidebar-list1');
	var aSidebarLis = oSidebarlist1.getElementsByTagName('li');
	var oWeixin = $('#weixin');
	for(var i = 0; i < aSidebarLis.length; i++) {
		aSidebarLis[i].index = i;
		aSidebarLis[i].onmouseenter = function() {
			if(this.index == 0 || this.index == 2) {
				startMove(aSidebarLis[this.index], {
					'left': -68
				});
			}
			if(this.index == 1) {
				//					startMove(oWeixin,{'display':'block'});
				oWeixin.style.display = 'block';
				console.log(1);
			}
			aSidebarLis[this.index].style.backgroundColor = '#ccc';
		}
		aSidebarLis[i].onmouseleave = function() {
			if(this.index == 0 || this.index == 2) {
				startMove(aSidebarLis[this.index], {
					'left': 0
				});
			}
			if(this.index == 1) {
				//					startMove(oWeixin,{'display':'none'});
				oWeixin.style.display = 'none';
			}
			aSidebarLis[this.index].style.backgroundColor = '#afafaf';
		}
	}

	//响应式
	var aNews = $('#news');
	var aNewList = aNews.getElementsByTagName('dt');
	var otop = aNewList[0].offsetHeight;
	for(var i = 0; i < aNewList.length; i++) {
		css(aNewList[i], 'top', (otop * i) + 'px');
		css(aNewList[5], 'top', 0);
		css(aNewList[6], 'top', otop + 'px');
	}
	window.onscroll = function() {
		var scrolltop = document.documentElement.scrollTop || document.body.scrollTop;
		console.log(scrolltop)

		function move() {
			if(scrolltop >= 200) {
				startMove(aNewList[0], {
					'left': 0
				});
			}
			if(scrolltop >= 250) {
				startMove(aNewList[1], {
					'left': 0
				});
			}
			if(scrolltop >= 300) {
				startMove(aNewList[2], {
					'left': 0
				});
			}
			if(scrolltop >= 350) {
				startMove(aNewList[3], {
					'left': 0
				});
			}
			if(scrolltop >= 500) {
				startMove(aNewList[4], {
					'left': 0
				});
			}

		}
		move();
		oLastpage.onclick = function() {
			lastpage();
		}
		oPrepage.onclick = function() {
			window.scrollTo(0,0);
			firstpage();
			
		}
		oNextpage.onclick = function() {
			lastpage();
		}
		oFirstpages.onclick = function() {
			window.scrollTo(0,0);
			firstpage();
		}
	}
	//分页
	var oFirstpages = $('#firstpage');
	var oPrepage = $('#prepage');
	var oPageslist = $('#pageslist');
	var oNextpage = $('#nextpage');
	var oLastpage = $('#lastpage');
	var oh = aNewList[0].offsetHeight;

	function firstpage() {
		for(var i = 0; i < aNewList.length - 2; i++) {
			css(aNewList[5], 'display', 'none');
			css(aNewList[6], 'display', 'none');
			//				startMove(aNewList[5], {'left': 0});
			//				startMove(aNewList[6], {'left': 0});
			css(aNewList[i], 'display', 'block');
			startMove(aNewList[i], {
				'left': 0
			});
		}
		css(aNews, 'height', oh * 5 + 'px');
	}

	function lastpage() {
		css(aNewList[5], 'top', 0);
		css(aNewList[6], 'top', otop + 'px');
		for(var i = 0; i < aNewList.length - 2; i++) {
			css(aNewList[i], 'left', '2000px');
			css(aNewList[i], 'display', 'none');
			css(aNewList[5], 'display', 'block');
			css(aNewList[6], 'display', 'block');
			startMove(aNewList[5], {
				'left': 0
			});
			startMove(aNewList[6], {
				'left': 0
			});
		}
		css(aNews, 'height', oh * 2 + 'px');
	}
}