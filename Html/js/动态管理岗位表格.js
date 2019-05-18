// JavaScript Document
//初始化
$(document).ready(function(e) {
	//表格头部固定在顶部
	$(".position_table").scroll(function(){
		var a=$(".position_table").scrollTop();
		if(a>=35){
			$("#position_table_header").removeClass("hide");
			$("#position_table_header").children().width($("#position_table_content").children().children().width())
		}
		else{
			$("#position_table_header").addClass("hide");
		}
	});
	$("#PositionID").on("focus",add());
});

//增加一个员工，即表格增加一列
function add(){
	$(".position_table").scrollTop($("#position_table_content").children().length*38);
	$("#PositionID").focus();
	$(document).keydown(function(e){
		var key=e.keyCode;
		if(key==13&&$("#PositionID").val()!=" "&&$("#PositionID").val()){
			var PositionID=$("#PositionID").val();
			var PositionName=$("#PositionName").val();
			var BasicWage=$("#BasicWage").val();
			$("#position_table_content").append('<tr class="position-'+PositionID+'"><td >'+PositionID+'</td><td >'+PositionName+'</td><td>'+BasicWage+'</td></tr>');
			$("#PositionID").val("");
			$("#PositionID").focus();
			$("#PositionName").val("");
			$("#BasicWage").val("");
			//输入后滚动条自动到底部
			$(".position_table").scrollTop($(".position_table").scrollTop()+100);
			//表格头部固定在顶部
			var a=$(".position_table").scrollTop();
			if(a>=35){
				$("#position_table_header").removeClass("hide");
				$("#position_table_header").children().width($("#position_table_content").children().children().width())
			}
		}
	})
}

//查找
function lookup(){
	//获取输入的部门号
	var input_text=$("#input_text").val();
	//指定行存在
	if($(".position-"+input_text).length>0){
		//根据输入部门号跳转到指定的行
		var counts=$(".position-"+input_text).prevAll().length;
		$(".position_table").scrollTop((counts-4)*37);
		//指定行文字变红1.5秒
		$(".position-"+input_text).css("color","#fF0000");	
		setTimeout(function(){
			$(".position-"+input_text).css("color","#333");	
		},1500);
		
	}
	//指定行不存在，提示2秒
	else{
		$("#alert").removeClass("hide");
		setTimeout(function(){
			$("#alert").addClass("hide");
		},2000);
	}
/*	//清空输入框
	$("#input_text").val("");
	$("#input_text").focus();*/
}

//修改
function renew(){
	//获取输入的部门号
	var input_text=$("#input_text").val();
	//指定行存在
	if($(".position-"+input_text).length>0){
		//1.记录原来的信息
		var texts=$(".position-"+input_text).children();
		var PositionID=texts.eq(0).text();
		var PositionName=texts.eq(1).text();
		var BasicWage=texts.eq(2).text();
		//2.将改行转化为文本框
		$(".position-"+input_text).empty();
		$(".position-"+input_text).append('<td><input type="text" class="form-control" id="renewPositionID"></td><td><input type="text" class="form-control" id="renewPositionName"></td><td><input type="text" class="form-control" id="renewBasicWage"></td>');
		//3.在文本框中显示原来的信息
		$("#renewPositionID").focus();
		$("#renewPositionID").val(PositionID);
		$("#renewPositionName").val(PositionName);
		$("#renewBasicWage").val(BasicWage);
		//4.文本框失去焦点时保存修改信息
		var time=setInterval(function(){
			if(!$("#renewPositionID").is(":focus")&&!$("#renewPositionName").is(":focus")&&!$("#renewBasicWage").is(":focus")){
				var PositionID=$("#renewPositionID").val();
				var PositionName=$("#renewPositionName").val();
				var BasicWage=$("#renewBasicWage").val();
				$(".position-"+input_text).empty();
				$(".position-"+input_text).append('<td>'+PositionID+'</td><td>'+PositionName+'</td><td>'+BasicWage+'</td>');
				clearInterval(time);
				if(PositionID!=input_text){
					$(".position-"+input_text).addClass("position-"+PositionID);
					$(".position-"+input_text).removeClass("position-"+input_text);
				}
			}
		},200);
		
		
	}
	//指定行不存在
	else{
		$("#alert").removeClass("hide");
		setTimeout(function(){
			$("#alert").addClass("hide");
		},2000);
		return;
	}
}

//删除
function delect(){
	//获取输入的部门号
	var input_text=$("#input_text").val();
	//指定行存在
	if($(".position-"+input_text).length>0){
		//根据输入部门号跳转到指定的行，指定行文字变红
		var counts=$(".position-"+input_text).prevAll().length;
		$(".position_table").scrollTop((counts-4)*37);
		$(".position-"+input_text).css("color","#fF0000");	
		//弹出框提问是否删除
		setTimeout(function(){
			if(confirm("是否确定删除")){
				$(".position-"+input_text).remove();
			}
			else{
				$(".position-"+input_text).css("color","#333");	
			}
		},500);
	}
	//指定行不存在
	else{
		$("#alert").removeClass("hide");
		setTimeout(function(){
			$("#alert").addClass("hide");
		},2000);
		return;
	}
}
	