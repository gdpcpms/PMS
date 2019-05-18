// JavaScript Document
//初始化
$(document).ready(function(e) {
	//表格头部固定在顶部
	$(".leave_table").scroll(function(){
		var a=$(".leave_table").scrollTop();
		if(a>=35){
			$("#leave_table_header").removeClass("hide");
			$("#leave_table_header").children().width($("#leave_table_content").children().children().width())
		}
		else{
			$("#leave_table_header").addClass("hide");
		}
	});
	$("#LeaveNo").on("focus",add());
});

//增加
function add(){
	$(".leave_table").scrollTop($("#leave_table_content").children().length*38);
	$("#LeaveNo").focus();
	$(document).keydown(function(e){
		var key=e.keyCode;
		if(key==13&&$("#LeaveNo").val()!=" "&&$("#LeaveNo").val()){
			var LeaveNo=$("#LeaveNo").val();
			var EmployeeID=$("#EmployeeID").val();
			var Name=$("#Name").val();
			var DepartmentID=$("#DepartmentID").val();
			var PositionID=$("#PositionID").val();
			var LeaveReason=$("#LeaveReason").val();
			var LeaveTime=$("#LeaveTime").val();
			var LeaveDay=$("#LeaveDay").val();
			$("#leave_table_content").append('<tr class="leave-'+LeaveNo+'"><td >'+LeaveNo+'</td><td >'+EmployeeID+'</td><td>'+Name+'</td><td >'+DepartmentID+'</td><td >'+PositionID+'</td><td >'+LeaveReason+'</td><td >'+LeaveTime+'</td><td >'+LeaveDay+'</td></tr>');
			$("#LeaveNo").val("");
			$("#LeaveNo").focus();
			$("#EmployeeID").val("");
			$("#Name").val("");
			$("#DepartmentID").val("");
			$("#PositionID").val("");
			$("#LeaveReason").val("");
			$("#LeaveTime").val("");
			$("#LeaveDay").val("");
			//输入后滚动条自动到底部
			$(".leave_table").scrollTop($(".leave_table").scrollTop()+100);
			//表格头部固定在顶部
			var a=$(".leave_table").scrollTop();
			if(a>=35){
				$("#leave_table_header").removeClass("hide");
				$("#leave_table_header").children().width($("#leave_table_content").children().children().width())
			}
		}
	})
}

//查找
function lookup(){
	//获取输入的部门号
	var input_text=$("#input_text").val();
	//指定行存在
	if($(".leave-"+input_text).length>0){
		//根据输入部门号跳转到指定的行
		var counts=$(".leave-"+input_text).prevAll().length;
		$(".leave_table").scrollTop((counts-4)*37);
		//指定行文字变红1.5秒
		$(".leave-"+input_text).css("color","#fF0000");	
		setTimeout(function(){
			$(".leave-"+input_text).css("color","#333");	
		},1500);
		
	}
	//指定行不存在，提示2秒
	else{
		$("#alert").removeClass("hide");
		setTimeout(function(){
			$("#alert").addClass("hide");
		},2000);
	}
	/*//清空输入框
	$("#input_text").val("");
	$("#input_text").focus();*/
}

//修改
function renew(){
	//获取输入的部门号
	var input_text=$("#input_text").val();
	//指定行存在
	if($(".leave-"+input_text).length>0){
		//1.记录原来的信息
		var texts=$(".leave-"+input_text).children();
		var LeaveNo=texts.eq(0).text();
		var EmployeeID=texts.eq(1).text();
		var Name=texts.eq(2).text();
		var DepartmentID=texts.eq(3).text();
		var PositionID=texts.eq(4).text();
		var LeaveReason=texts.eq(5).text();
		var LeaveTime=texts.eq(6).text();
		var LeaveDay=texts.eq(7).text();
		//2.将改行转化为文本框
		$(".leave-"+input_text).empty();
		$(".leave-"+input_text).append('<td><input type="text" class="form-control" id="renewLeaveNo"></td><td><input type="text" class="form-control" id="renewEmployeeID"></td><td><input type="text" class="form-control" id="renewName"></td><td><input type="text" class="form-control" id="renewDepartmentID"></td><td><input type="text" class="form-control" id="renewPositionID"></td><td><input type="text" class="form-control" id="renewLeaveReason"></td><td><input type="text" class="form-control" id="renewLeaveTime"></td><td><input type="text" class="form-control" id="renewLeaveDay"></td>');
		//3.在文本框中显示原来的信息
		$("#renewLeaveNo").focus();
		$("#renewLeaveNo").val(LeaveNo);
		$("#renewEmployeeID").val(EmployeeID);
		$("#renewName").val(Name);
		$("#renewDepartmentID").val(DepartmentID);
		$("#renewPositionID").val(PositionID);
		$("#renewLeaveReason").val(LeaveReason);
		$("#renewLeaveTime").val(LeaveTime);
		$("#renewLeaveDay").val(LeaveDay);
		//4.文本框失去焦点时保存修改信息
		var time=setInterval(function(){
			if(!$("#renewLeaveNo").is(":focus")&&!$("#renewEmployeeID").is(":focus")&&!$("#renewName").is(":focus")&&!$("#renewDepartmentID").is(":focus")&&!$("#renewPositionID").is(":focus")&&!$("#renewLeaveReason").is(":focus")&&!$("#renewLeaveTime").is(":focus")&&!$("#renewLeaveDay").is(":focus")){

				var LeaveNo=$("#renewLeaveNo").val();
				var EmployeeID=$("#renewEmployeeID").val();
				var Name=$("#renewName").val();
				var DepartmentID=$("#renewDepartmentID").val();
				var PositionID=$("#renewPositionID").val();
				var LeaveReason=$("#renewLeaveReason").val();
				var LeaveTime=$("#renewLeaveTime").val();
				var LeaveDay=$("#renewLeaveDay").val();

				$(".leave-"+input_text).empty();
				$(".leave-"+input_text).append('<td>'+LeaveNo+'</td><td>'+EmployeeID+'</td><td>'+Name+'</td><td>'+DepartmentID+'</td><td>'+PositionID+'</td><td>'+LeaveReason+'</td><td>'+LeaveTime+'</td><td>'+LeaveDay+'</td>');
				clearInterval(time);
				if(LeaveNo!=input_text){
					$(".leave-"+input_text).addClass("leave-"+LeaveNo);
					$(".leave-"+input_text).removeClass("leave-"+input_text);
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
	if($(".leave-"+input_text).length>0){
		//根据输入部门号跳转到指定的行，指定行文字变红
		var counts=$(".leave-"+input_text).prevAll().length;
		$(".leave_table").scrollTop((counts-4)*37);
		$(".leave-"+input_text).css("color","#fF0000");	
		//弹出框提问是否删除
		setTimeout(function(){
			if(confirm("是否确定删除")){
				$(".leave-"+input_text).remove();
			}
			else{
				$(".leave-"+input_text).css("color","#333");	
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
	
