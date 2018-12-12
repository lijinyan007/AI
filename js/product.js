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
			console.log(k);
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
	//精心打造的服务
	var aService_container = $('.service-container');
	var aService_item = $('.service-item');
	var aService_con = $('.service-con');
	var aService_up = $('.up');
	var aService_down = $('.down');
	var isok = true;
	for(var i = 0; i < aService_item.length; i++) {
		aService_item[i].index = i;
		aService_item[i].onclick = function() {
			if(isok) {
				this.style.backgroundColor = '#00c1de';
				aService_con[this.index].style.paddingTop = '28px';
				startMove(aService_con[this.index], {
					'height': 224
				});
				var oService_itemw = aService_item[0].offsetHeight;
				css(aService_up[this.index], 'display', 'none');
				css(aService_down[this.index], 'display', 'block');
			} else {
				this.style.backgroundColor = '#f5f5f6';
				aService_con[this.index].style.paddingTop = 0;
				startMove(aService_con[this.index], {
					'height': 0
				});
				var oService_itemw = aService_item[0].offsetHeight;
				css(aService_up[this.index], 'display', 'block');
				css(aService_down[this.index], 'display', 'none');
				console.log(1)
			}
			isok = !isok;

		}
		aService_item[i].onmouseenter = function() {
			this.style.backgroundColor = "#FFFFFF";
		}
		aService_item[i].onmouseleave = function() {
			this.style.backgroundColor = "#f5f5f6";
		}
	}

	//客户使用场景
	var oWrap_box = $('#wrap-box');
	var oCustomerlist = $('#customerlist');
	var aCurAlis = oCustomerlist.getElementsByTagName('li');
	var aCoustomers = $('.coustomer');
	console.log(aCoustomers.length)
	for(var i = 0; i < aCurAlis.length; i++) {
		aCurAlis[i].index=i;
		aCurAlis[i].onclick = function() {
			for(var i = 0; i < aCurAlis.length; i++) {
				aCoustomers[i].style.display='none';
				aCurAlis[i].style.color='#72767a';
				aCurAlis[i].className='';
			}
			aCoustomers[this.index].style.display='block';
			this.style.color='#42EAFF';
			this.className = 'cus-active';
		}
	}
}