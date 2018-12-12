window.onload=function(){
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
