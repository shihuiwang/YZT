
window.onload = function(){
/*------------------------------弹出一级菜单-------------------------------*/
	var arr=[],brr=[];
	for(var i=0;i<6;i++){
		arr[i] = document.getElementsByClassName("nav-item"+i)[0];
		brr[i] = document.getElementsByClassName("nav-items"+i)[0];
		show(i);
		hide(i);
	}
	function show(n){
		arr[n].onmouseover=function(){brr[n].style.display="block";}
	}
	function hide(n){
		arr[n].onmouseout=function(){brr[n].style.display="none";}
	}
/*-----------------------------轮播--------------------------------------*/

	var ban = document.getElementById("banner");
	var but = document.getElementById("but");
	var left = parseInt(getComputedStyle(ban.firstElementChild).left);
	var ul = ban.firstElementChild;
	var num = 0 ,n=0, btn=0;
	var timer=null,first='',html1='',One='';
	var src=[],L=[],arr=[],Li=[];
	var timer1=null;
	const WIDTH=parseFloat(getComputedStyle(ban).width);
	ul.style.width=WIDTH*6+"px";
	var isrunning=true;
	for(var i=0;i<6;i++){
		src[i] = 'images/banner_'+i+'.jpg';
		html1+='<li '+'id='+'L'+i+'>'+i+'</li>';
	}
	but.innerHTML=html1;
	function Boom(){
		for(var i=0,html='';i<6;i++){
			html+= '<li><a href="#"><img src="'+src[i]+'"></a></li>';
		}
		ul.innerHTML=html;
	}
	for(var i=0;i<6;i++){
			L[i] = document.getElementById("L"+i);
		}
	ban.addEventListener('mouseover',function(){
		clearInterval(timer);
	});
	ban.addEventListener('mouseout',function(){
		isrunning=true;
		Time();
	});

	function move(){
		clearTimeout(timer1);
		timer=null;
		Boom();
		Li=ul.children;
		for(var i=0;i<Li.length;i++){
			Li[i].style.width=WIDTH+"px";
		}
		if(isrunning){
			left-=WIDTH/100;
			num++;
		}
		ul.style.left=left+"px";
		if(num<100&&isrunning){
			timer1=setTimeout(move,500/100);
		}else if(num>=100){
			num=0;
			src.push(src.shift());
			left=0;
		}
	}
	/*------------------------点击换图--------------------------------*/
	 but.addEventListener('click',function(e){
		 isrunning=false;
		 var tar = e.target;
		 var inHL=parseInt(tar.innerHTML);
		 btn=inHL;
		 page();
		 var arr=[];
		 var isBtn=true;
		 var srcOne=src[0];
		 var m=srcOne.match(/\d/);
		 if(inHL-m[0]>0){
			 src=src.concat(src.splice(0,inHL-m[0]));
		 }else if(inHL-m[0]<0){
			 src=arr.concat(src.splice(inHL-m[0],m[0]-inHL),src);
		 }else{
			isBtn=false;
		 }
		 if(isBtn){
			 move();
		 }
	 });
	function Btn(){
		for(var i=0;i<L.length;i++){L[i].className="";}
	}
	function page(){
		switch (btn){
			case 0 : Btn(); L[0].className="bgc";break;
			case 1 : Btn(); L[1].className="bgc";break;
			case 2 : Btn(); L[2].className="bgc";break;
			case 3 : Btn(); L[3].className="bgc";break;
			case 4 : Btn(); L[4].className="bgc";break;
			case 5 : Btn(); L[5].className="bgc";break;
		}
	}
	function Time(){
		clearInterval(timer);
		timer=null;
		timer = setInterval(function(){
			n++;
			if(n==3){
				btn++;
				if(btn==6){btn=0}
				move();
				n=0;
			}
			page();
		},2000);
	}
	Time();
/*------------------------------其他---------------------------------*/
	var newNav = document.getElementById("new_nav");
	var Ul=newNav.firstElementChild;
	var newHid=document.getElementsByClassName("new_hid")[0];
	Ul.onclick=function(e){
		var tar = e.target;
		Ul.firstElementChild.className="";
		Ul.lastElementChild.className="";
		tar.className="new_li";
		if(tar.innerHTML=="企业新闻"){
			newHid.style.opacity=1;
		}else{newHid.style.opacity=0;}
	}

	var jjfa = document.getElementById("side");
	var box = document.getElementById("side_box");
	jjfa.onmouseover=function(){box.style.bottom="0px"}
	jjfa.onmouseout=function(){box.style.bottom="-95.5px"}
}

function toTop(){
	window.scrollBy(0,-10);
	toTopa=setTimeout('toTop()',20);
	var sTop=document.documentElement.scrollTop||document.body.scrollTop;
	if(sTop==0){clearTimeout(toTopa);}
}