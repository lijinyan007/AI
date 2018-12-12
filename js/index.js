window.onload = function() {
	var oNavList = $('#navlist');
	var aNavLis = oNavList.getElementsByTagName('li');
	var aNavSpans = oNavList.getElementsByTagName('span');
	//导航栏
	var k = 0;
	for(var i = 0; i < aNavLis.length; i++) {
		if(aNavLis[i].className == 'active') {
			k = i;
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
		//		console.log(new Date().getSeconds());
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

	//双目深度学习特效
	//左边

	var oLeft = $('#left');
	var oP = $('#p');
	var oImg = $('#btnimg');
	var oimg1 = $('#img1');
	var imgh = parseInt(oImg.offsetHeight * 1.2);
	var imgw = parseInt(oImg.offsetWidth * 1.2);
	var oWrap_p=$('#wrap-p');
	var oGoup = $('#goup');
	var oGoright = $('#goright');
	oLeft.onmouseenter = function() {
		borderstyle1(oP);
		startMove(oimg1, {
			'width': imgw,
			'height': imgh
		});
		oWrap_p.style.display='block';
		oGoup.style.display='block';
		oGoright.style.display='block';
		startMove(oGoup, {
			'top': 14
		});
		startMove(oGoright, {
			'top': 20
		});
	}
	oLeft.onmouseleave = function() {
		oP.style.borderLeftWidth = '0';
		startMove(oP, {
			'padding-left': 0
		});
		startMove(oimg1, {
			'width': 474,
			'height': 240
		});
		oWrap_p.style.display='none';
		oGoup.style.display='none';
		oGoright.style.display='none';
		startMove(oGoup, {
			'top': -200
		});
		startMove(oGoright, {
			'top': 200
		});
	}
	//右边
	var oRight = $('#right');
	var aDl = oRight.getElementsByTagName('dl');
	var aDivs1 = oRight.getElementsByTagName('div');
	var aRightSpans = $('.rightspan');

	for(var i = 0; i < aDivs1.length; i++) {
		aDivs1[i].index = i;
		aDivs1[i].onmouseenter = function() {
			borderstyle1(this);
			startMove(aRightSpans[this.index], {
				'right': 50
			});
		}
		//经过时的border
		function borderstyle1(btn) {
			btn.style.borderLeftWidth = '1px';
			btn.style.borderLeftColor = '#000';
			btn.style.borderLeftStyle = 'solid';
			startMove(btn, {
				'padding-left': 20
			});

		}
		aDivs1[i].onmouseleave = function() {
			this.style.borderLeftWidth = '0';
			startMove(this, {
				'padding-left': 0
			});
			startMove(aRightSpans[this.index], {
				'right': 0
			});
		}
	}
	//多项技术专利
	var oCollist = $('#collist');
	var aColli = oCollist.getElementsByTagName('li');
	var aBs = oCollist.getElementsByTagName('b');
	var aColSpans = oCollist.getElementsByTagName('span');
	var aColPs = oCollist.getElementsByTagName('p');
	var oColliw = aColli[0].offsetWidth;
	for(var i = 0; i < aColli.length; i++) {
		aColli[i].style.left = oColliw * i + 'px';
		aColli[i].index = i;
		aColli[i].onmouseenter = function() {
			startMove(this, {
				'top': 62
			});
		}
		aColli[i].onmouseleave = function() {
			startMove(this, {
				'top': 52
			});
		}
	}
	//双目深度学习
	//并列三张图片轮播图
	var oList = $('#list');
	var oUl = $('#ul');
	var aLis = oUl.getElementsByTagName('li');
	var aImglist = oUl.getElementsByTagName('img');
	var aLisw = aLis[0].offsetWidth + 40;
	var oh = parseInt(aImglist[0].offsetHeight * 1.2);
	var ow = parseInt(aImglist[0].offsetWidth * 1.2);
	var oPre=$('#pre');
	var oNext=$('#next');
	for(var i = 0; i < aLis.length; i++) {
		//每个li的位置
		aLis[i].style.left = aLisw * i + 'px';
		//鼠标经过停止轮播
		oList.onmouseenter=function(){
			clearInterval(timer2);
		}
		oList.onmouseleave=function(){
			clearInterval(timer2);
			timer2 = setInterval(move, 3000);
		}
		//鼠标经过，图片放大
		aImglist[i].onmouseenter = function() {
			startMove(this, {
				'width': ow,
				'height': oh
			});
		}
		aImglist[i].onmouseleave = function() {
			startMove(this, {
				'width': 356,
				'height': 259
			});
		}

	}
	oNext.onclick=function(){
		startMove(oUl,{'left':-aLisw});
		if(oUl.style.left==-aLisw+'px'){
//				css(oUl,'left',aLisw*(aLis.length-1)+'px');
				startMove(oUl,{'left':0});
		}
	}
	oPre.onclick=function(){
//		css(oUl,'left',-aLisw*(aLis.length-1)+'px');
		startMove(oUl,{'left':-aLisw});
		if(oUl.style.left==-aLisw+'px'){
				console.log(1)
//				css(oUl,'left',-aLisw*(aLis.length-1)+'px');
				startMove(oUl,{'left':0});
		}
	}
	clearInterval(timer2);
	var timer2 = null;
	timer2 = setInterval(move, 3000);
	var k = 0; //轮播图下标
	var j;
	function move() {
		startMove(oUl,{'left':-aLisw});
		if(oUl.style.left==-aLisw+'px'){
				console.log(1)
//				css(oUl,'left',aLisw*(aLis.length-1)+'px');
				startMove(oUl,{'left':0});
		}
	}
	
	//回到顶部
	window.onscroll = function() {
		var oGotop = $('#gotop');
		var sc = document.documentElement.scrollTop || document.body.scrollTop;
		if(sc > 200) {
			oGotop.style.display = 'block';
		} else {
			oGotop.style.display = 'none';
		}
		oGotop.onclick = function() {
			window.scrollTo(0, 0);
		}
		
		//		console.log(sc)
		if(sc > 1500) {
			//多项技术专利的响应特效
			for(var i = 0; i < aColli.length; i++) {
				startMove(aColli[i], {
					'top': 52
				});
				//				var n=0;
				//				var num=parseInt(aBs[i].innerHTML);
				//				startMove(aBs[i],{'aBs[i].innerHTML':'++0'});
				////				console.log(aBs[i].innerHTML)
				//				var timer1=null;
				//				clearInterval(timer1);
				//				timer=setInterval(numadd,30);
				//				aBs[i].index=i;
				//				function numadd(){
				////					var n=0;
				//					++n;
				////					console.log(n);
				//				}
				////				console.log(typeof(n));
				//				if(n==num){
				//					console.log(1);
				//					clearInterval(timer1);
				//				}
				//				
			}
		}

		//并列三张图片响应特效
		if(sc > 500) {
			for(var i = 0; i < aLis.length; i++) {
				startMove(aLis[i], {
					'top': 0
				});
			}
		}
	}

}