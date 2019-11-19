var $alast = $(".daohangdiv a:last-of-type");
var data;
var x=0;
$contant = $(".content .w1210");
var xhr = getXhr();
xhr.open("GET", "php/product.php");
xhr.send(null);
xhr.onreadystatechange = () => {
	if(xhr.status == 200 && xhr.readyState == 4) {
		data = JSON.parse(xhr.responseText);
		var $ul = $("<ul></ul>");
		for(var i = 0; i < data.length; i++) {
			var $li = $(`<li><div></div>${data[i][1]}<div></div></li>`);
			$ul.append($li);
		}
		$ul.click(e => {
			e = e || window.event;
			var target = e.target || e.srcElement;
			if(target.nodeName == "LI") {
				$target = $(target);
				if($target.attr("class") != "active") {
					$target.addClass("active");
					$target.siblings().removeClass();
					$alast.html(`> ${$target.text()}`);
					x = $target.index();
					creat(x);
				}
			}
		});
		$contant.append($ul);
		$alast.html(`> ${data[0][1]}`);
		$($ul.children()[0]).addClass("active");
		creat(0);
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
function creat(index) {
	$(".prodcut").remove();
	var subdata = data[index];
	$prodcut = $("<div class='prodcut'><div>");
	$h1 = $(`<h1><span>${subdata[1]}</span><span>${subdata[2]}</span></h1>`);
	$prodcut.append($h1);
	var $p = $(`<p>${subdata[3]}</p>`);
	$prodcut.append($p);
	var subdatas = JSON.parse(subdata[4]);
	var $divfour = $("<div class='four clearfix'></div>");
	for(var i = 0; i < subdatas.length; i++) {
		var $bigdiv = $("<div></div>");
		var $img = $(`<img src='${subdatas[i][0]}'/>`);
		$bigdiv.append($img);
		var $p = $(`<p>${subdatas[i][1]}</p>`);
		$bigdiv.append($p);
		var $div3 = $(`<div><div></div><div>${subdatas[i][2]}</div></div>`);
		$bigdiv.append($div3);
		$divfour.append($bigdiv);
	}
	$prodcut.append($divfour);
	$contant.append($prodcut);
}