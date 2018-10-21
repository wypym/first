
function Slider(id,id2){
	this.bigbox = document.getElementById(id);
	this.ullis = this.bigbox.children[0].children;
	this.num = this.ullis.length;
	this.ul = document.getElementById(id2);
	this.ollis = this.createEle();
	this.indexA = 0;
	this.slide();
	this.addEvent();
	this.timer = null;
	this.autoPlay();
}
Slider.prototype = {
	createEle : function(){
		var arr = [];
		for(var i=0;i<this.num;i++){
			var li = document.createElement('li');
			this.ul.appendChild(li);
			arr.push(li);
		}
		return arr;
		console.log(arr)
	},
	slide : function(){
		for(var i=0;i<this.num ;i++){
			this.ullis[i].style.display = "none";
			this.ollis[i].style.backgroundColor = "#555";
		}
		this.ullis[this.indexA].style.display = "block";
		this.ollis[this.indexA].style.backgroundColor = "black";
	},
	addEvent : function(){
		var that = this;
		for(var i=0;i<this.num;i++){
			this.ollis[i].index = i;
			this.ollis[i].onclick = function(){
				that.indexA = this.index;
				that.slide();
			}
		}
	},
	autoPlay : function(){
		var that = this;
		this.timer = setInterval(function(){
			that.indexA++;
			if(that.indexA === that.num){
				that.indexA =0;
			}
			that.slide();
		},3000)
		this.bigbox.onmouseenter = function(){
			clearInterval(that.timer);
		}
		this.bigbox.onmouseleave = function(){
			that.autoPlay();
		}
	}
}
 $(function(){
		 	$('#quan,.nb-left1').mouseenter(function(){
		 		$('.nb-left1').css('display',"block");
		 	})
		 	$('#quan,.nb-left1').mouseleave(function(){
		 		$('.nb-left1').css('display',"none");
		 	})
		 	
		 	
		 	$('#txt').focus(function(){
		 		$vv = $(this).val();
		 		$(this).val("");
		 	})
		 	$('#txt').blur(function(){
		 		$(this).val($vv);
		 	})
		 	
		 	$('.main3').mouseenter(function(){
		 		$(this).addClass('box-shadow')
		 	})
		 	$('.main3').mouseleave(function(){
		 		$(this).removeClass('box-shadow')
		 	})
		 	$('#you').focus(function(){
		 		$(this).val('')
		 	})
		 	$('#you').blur(function(){
		 		$(this).val('请输入你的邮箱')
		 	})
		})
function byClassName(obj,className){
		if(obj.getElementsByClassName){
			return obj.getElementsByClassName(className);
		}else{
			var arr = [];
			var eles = obj.getElementsByTagName('*');
			for(let i = 0,len = eles.length;i < len;i ++){
				if(eles[i].className === className){
					arr.push(eles[i]);
				}
			}
			return arr;
		}
}