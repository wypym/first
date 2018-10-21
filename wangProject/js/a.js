var ajax = new Object();
ajax.get = function(url,fn){
	var xhr = window.XMLHttpRequest ? new XMLHttpRequest() : new ActiveXObject("Microsoft.XMLHTTP");
	xhr.open("GET",url,true);
	xhr.send();
	xhr.onreadystatechange = function(){
		if(xhr.readyState === 4 && xhr.status === 200){
			if(fn typeof === "function"){
				fn(xhr.responseText);
			}
		}
	}
}
ajax.post = function(url,data,fn){
	var xhr = window.XMLHttpRequest ? new XMLHttpRequest() : new ActiveXObject("Microsoft.XMLHTTP");
	xhr.open("POST",url,true);
	xhr.setRequestHeader("content-type","application/x-www-form-urlencoded;charset=utf-8");
	xhr.send(data);
	xhr.onreadystatechange = function(){
		if(xhr.readyState === 4 && xhr.status === 200){
			if(fn typeof === "function"){
				fn(xhr.responseText);
			}
		}
	}
}
