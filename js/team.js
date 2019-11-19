var $imgs = $(".people .imgs");
var $ul = $(".people ul");
var j = 0;
$ul.click(e => {
	e = e || window.event;
	var target = e.target || e.srcElement;
	if(target.nodeName == "LI") {
		var $target = $(target);
		if($target.html() == "&lt;") {
			j--;
			if(j == -1) {
				j = 1;
			}
			$imgs.animate({
				"margin-left": `${j*(-980)}px`
			}, 3000)
		}
		if($target.html() == "&gt;") {
			j++;
			if(j == 2) {
				j = 0;
			}
			$imgs.animate({
				"margin-left": `${j*(-980)}px`
			}, 3000)
		}
		if($target.html() == "1") {
			j = 0
			$imgs.animate({
				"margin-left": `${j*(-980)}px`
			}, 3000)
		}
		if($target.html() == "2") {
			j = 1
			$imgs.animate({
				"margin-left": `${j*(-980)}px`
			}, 3000)
		}
		if(j == 0) {
			$($ul.children()[1]).css("color", "orange");
			$($ul.children()[1]).siblings().css("color", "black");
		} else {
			$($ul.children()[2]).css("color", "orange");
			$($ul.children()[2]).siblings().css("color", "black");
		}
	}
});
var $people=$(".people");
var $alast=$(".daohangdiv a:last-of-type");
var $p1=$(".p1");
var $p2=$(".p2");
var $peopleimg=$p2.next();
var $imgs=$(".imgs");
var xhr = getXhr();
xhr.open("GET", "php/team.php");
xhr.send(null);
xhr.onreadystatechange = () => {
	if(xhr.status == 200 && xhr.readyState == 4) {
		data = JSON.parse(xhr.responseText);
		$contant=$(".content .w1210");
		var $ul=$("<ul></ul>");
		for(var i=0;i<data.length;i++){
			var $li=$(`<li><div></div>${data[i][1]}<div></div></li>`);
			$ul.append($li);
		}
		$ul.click(e=>{
			e=e||window.event;
			var target=e.target||e.srcElement;
			if(target.nodeName=="LI"){
				$target=$(target);
				if($target.attr("class")!="active"){
					$target.addClass("active");
					$alast.html(`> ${$target.text()}`);
					$people.slideUp(500,()=>{
						$target.siblings().removeClass();
						var i=$target.index();
						creatleft(i);
						$people.slideDown(500);
						});
				}
			}
		});
		$contant.append($ul);
		$alast.html(`> ${data[0][1]}`);
		$($ul.children()[0]).addClass("active");
		creatleft(0);
	}
}
function creatleft(i){
	$imgs.children().remove();
	$p1.html(`${data[i][2]}`);
	$p2.html(`${data[i][3]}`);
	$peopleimg.attr("src",data[i][4]);
	var arr=JSON.parse(data[i][5]);
	for(var x=0;x<arr.length;x++){
		$img=$(`<img src='${arr[x]}'/>`);
		$imgs.append($img);
	}
}





function getXhr() {
	var xhr = null;
	if(XMLHttpRequest) {
		xhr = new XMLHttpRequest();
	} else {
		xhr = new ActiveXObject("Microsoft.XMLHttp");
	}
	return xhr;
}
