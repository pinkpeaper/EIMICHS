var imgs=document.querySelectorAll(".banner .imgs img");
var ul=document.querySelector(".banner ul");
var banner=document.querySelector("div.banner");
var j=0;
ul.onclick=e=>{
	e=e||window.event;
	var target=e.target||e.srcElement;
	var j=target.getAttribute("lk");
	change(j);
}
var timer=setInterval(()=>{
	j++;
	if(j==3)
	{
		j=0;
	}
	change(j);
},1500);
banner.onmouseover=function(){
	clearInterval(timer);
	timer=null;
}
banner.onmouseout=()=>{
	timer=setInterval(()=>{
		j++;
		if(j==3)
		{
			j=0;
		}
		change(j);
	},1500);
}



function change(j){
	for(var i=0;i<imgs.length;i++){
		ul.children[i].className="";
		imgs[i].className="";
	}
	ul.children[j].className="active";
	imgs[j].className="active";
}
