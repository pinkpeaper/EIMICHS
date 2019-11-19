var lis=document.querySelector(".content .w1210>ul").children;
var ul=document.querySelector(".content .w1210>ul");
for(var i=0;i<lis.length;i++){
	lis[i].onclick=function(){
		//获取a标签的个数
		var as=document.querySelector(".daohangdiv").children;
		//如果是2个就加一个a标签
		if(as.length==2){
			var newA=document.createElement("a");
			newA.innerHTML="&gt;"+this.children[1].children[0].innerHTML;
			newA.href="#";
			document.querySelector(".daohangdiv").appendChild(newA);
		//不是2个就改变第三个a标签的innerHTML
		}else{
			document.querySelector(".daohangdiv").children[2].innerHTML="&gt;"+this.children[1].children[0].innerHTML;
		}
		var x=this.getAttribute("dy");
		var drStyles=document.getElementsByClassName("style");
		drStyles[x].style.transform="scale(1)";
		drStyles[x].style.height="2208px";
		ul.style.display="none";
	}
}
