var lis=document.querySelectorAll(".content .w1210>ul li");
var a=document.querySelector(".daohangdiv a:last-of-type");
var parent=document.querySelector(".content .w1210");
creat(0);
//li绑定点击事件
for(var i=0;i<lis.length;i++){
	lis[i].onclick=function(){
		//判断点击元素是否已被激活，如果没被激活才做后续操作
		if(this.className!="active"){
			for(var i=0;i<lis.length;i++){
				lis[i].className="";
			}
			this.className="active";
			//导航栏a标签内容设置为所点击的内容
			a.innerHTML=this.children[1].innerHTML;
			//内容区最后一个元素是div就删除,为后面创建页面留出空间
			if(parent.lastElementChild.nodeName=="DIV"){
				parent.lastElementChild.transform="scale(0)";
				parent.removeChild(parent.lastElementChild);
			}
			//如果等于0就是生成历程页面，等于1就是生成简介页面
			if(this.getAttribute("dy")==0){
				creat(0);
			}else if(this.getAttribute("dy")==1){
				creat(1);
			}
		}
	}
}
//生成页面函数
function creat(x){
	var xhr=getXhr();
	xhr.open("GET","php/aboutUs.php?hide="+x);
	xhr.send(null);
	xhr.onreadystatechange=()=>{
		if(xhr.status==200&&xhr.readyState==4){
			var data=JSON.parse(xhr.responseText);
			if(x==0){
				var div1=document.createElement("div");
				div1.className="right course";
				for(var i=0;i<data.length;i++){
					var arr=data[i];
					var div=document.createElement("div");
					var h1=document.createElement("h1");
					h1.innerHTML=arr[1];
					div.appendChild(h1);
					var hr=document.createElement("hr");
					div.appendChild(hr);
					var p=document.createElement("p");
					p.innerHTML=arr[2];
					div.appendChild(p);
					div1.appendChild(div);
				}
				var div2=document.createElement("div");
				div2.className="imgborder";
				var img=document.createElement("img");
				img.src="images/服装_09.png";
				div2.appendChild(img);
				var div=document.createElement("div");
				div2.appendChild(div);
				div1.appendChild(div2);
				parent.appendChild(div1);
			}
			if(x==1){
				var div1=document.createElement("div");
				div1.className="right intro";
				for(var i=0;i<data.length;i++){
					var div2=document.createElement("div");
					if(i==1){
						div2.className="left";
					}
					var div3=document.createElement("div");
					var span=document.createElement("span");
					span.innerHTML=data[i][1];
					div3.appendChild(span);
					var span=document.createElement("span");
					span.innerHTML=data[i][2];
					div3.appendChild(span);
					div2.appendChild(div3);
					var hr=document.createElement("hr");
					div2.appendChild(hr);
					var p=document.createElement("p");
					p.innerHTML=data[i][3];
					div2.appendChild(p);
					div1.appendChild(div2);
				}
				for(var i=0;i<data.length;i++){
					var img=document.createElement("img");
					img.src=data[i][4];
					div1.appendChild(img);
				}
				parent.appendChild(div1);
			}
		}
	};
}

function getXhr(){
	var xhr=null;
	if(XMLHttpRequest){
		xhr=new XMLHttpRequest();
	}else{
		xhr=new ActiveXObject("Microsoft.XMLHttp");
	}
	return xhr;
}
