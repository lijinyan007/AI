window.onload=function(){
	
	//	main底部的轮播图
	var oMainfooter = $('#mainfooter');
	var oSpans = $('#spans');
	var aSpans = oSpans.getElementsByTagName('span');
	var aDivs = $('.user-com');
	//创建焦点
	for(var i = 0; i < aDivs.length; i++) {
		oSpans.innerHTML += '<span></span>';
	}
	aSpans[0].className = 'active';

	var oDivw = aDivs[0].offsetWidth;
	console.log(oDivw);
	for(var i = 0; i < aDivs.length; i++) {
		//把所有的图片放在图片的右边
		css(aDivs[i], 'left', oDivw + 'px');
	}
	//把第一张放回原来的位置
	css(aDivs[0], 'left', 0);

	var num = 0; //轮播图片的下标
	//开启定时器
	var timer = null;
	clearInterval(timer);
	timer = setInterval(autoplay, 3000);

	function autoplay() {
		//把已经轮播了的图片放在左边
		startMove(aDivs[num], {
			'left': -oDivw
		});
		num = ++num > aDivs.length - 1 ? 0 : num;
		//图片总有用完的时候,所以要把要轮播的图片快速的放在右边
		css(aDivs[num], 'left', oDivw + 'px');
		startMove(aDivs[num], {
			'left': 0
		});
		light();
		console.log(new Date().getSeconds());
	}
	
	//3.焦点跟随
	function light() {
		for(var i = 0; i < aSpans.length; i++) {
			aSpans[i].className = '';
		}
		aSpans[num].className = 'active';
	}
	//4.鼠标经过图片或焦点，停止轮播；鼠标离开，继续轮播
		oMainfooter.onmouseenter = function() {
			clearInterval(timer);
			console.log(1);
		}
		oMainfooter.onmouseleave = function() {
			clearInterval(timer);
			timer = setInterval(autoplay, 3000);
			console.log(2);
		}
		
	//7.点击焦点，切换到对应的图片
	for(var i = 0; i < aDivs.length; i++) {
		aSpans[i].index = i;
		aSpans[i].onclick = function() {
			var index = this.index;
			if(num > index) {
				//点击的比轮播时图片的下标小，从左边切入
				startMove(aDivs[num], {
					'left': oDivw
				});
				css(aDivs[index], 'left', -oDivw + 'px')
				startMove(aDivs[index], {
					'left': 0
				});
				num = index;
				light();
			}
			if(num < index) {
				//点击的比轮播时图片的下标大，从右边切入
				startMove(aDivs[num], {
					'left': -oDivw
				});
				css(aDivs[index], 'left', oDivw + 'px')
				startMove(aDivs[index], {
					'left': 0
				});
				num = index;
				light();
			}

		}
	}
	var oNavList = $('#navlist');
	var aNavLis = oNavList.getElementsByTagName('li');
	var aNavSpans = oNavList.getElementsByTagName('span');
	//导航栏
	var k=0;
	for(var i = 0; i < aNavLis.length; i++) {
		if(aNavLis[i].className=='active'){
			 k=i;
		}
		aNavLis[i].index = i;
		aNavLis[i].onmouseenter = function() {
			this.className = 'active';
			aNavLis[k].className = 'active';
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
	
}
