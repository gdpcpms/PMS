// JavaScript Document
//初始化
$(document).ready(function(e) {
	//表格头部固定在顶部
	$(".attendance_table").scroll(function(){
		var a=$(".attendance_table").scrollTop();
		if(a>=35){
			$("#attendance_table_header").removeClass("hide");
			$("#attendance_table_header").children().width($("#attendance_table_content").children().children().width())
		}
		else{
			$("#attendance_table_header").addClass("hide");
		}
	});
	$("#AttendanceNo").on("focus",add());
});


//增加
function add(){
	$(".attendance_table").scrollTop($("#attendance_table_content").children().length*38);
	$("#AttendanceNo").focus();
	$(document).keydown(function(e){
		var key=e.keyCode;
		if(key==13&&$("#AttendanceNo").val()!=" "&&$("#AttendanceNo").val()){
			var AttendanceNo=$("#AttendanceNo").val();
			var EmployeeID=$("#EmployeeID").val();
			var Name=$("#Name").val();
			var DepartmentID=$("#DepartmentID").val();
			var PositionID=$("#PositionID").val();
			var AttendanceDay=$("#AttendanceDay").val();
			$("#attendance_table_content").append('<tr class="attendance-'+AttendanceNo+'"><td >'+AttendanceNo+'</td><td >'+EmployeeID+'</td><td>'+Name+'</td><td >'+DepartmentID+'</td><td >'+PositionID+'</td><td >'+AttendanceDay+'</td></tr>');
			$("#AttendanceNo").val("");
			$("#AttendanceNo").focus();
			$("#EmployeeID").val("");
			$("#Name").val("");
			$("#DepartmentID").val("");
			$("#PositionID").val("");
			$("#AttendanceDay").val("");
			//输入后滚动条自动到底部
			$(".attendance_table").scrollTop($(".attendance_table").scrollTop()+100);
		}
	})
}

//查找
function lookup(){
	//获取输入的部门号
	var input_text=$("#input_text").val();
	//指定行存在
	if($(".attendance-"+input_text).length>0){
		//根据输入部门号跳转到指定的行
		var counts=$(".attendance-"+input_text).prevAll().length;
		$(".attendance_table").scrollTop((counts-4)*37);
		//指定行文字变红1.5秒
		$(".attendance-"+input_text).css("color","#fF0000");	
		setTimeout(function(){
			$(".attendance-"+input_text).css("color","#333");	
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
	if($(".attendance-"+input_text).length>0){
		//1.记录原来的信息
		var texts=$(".attendance-"+input_text).children();
		var AttendanceNo=texts.eq(0).text();
		var EmployeeID=texts.eq(1).text();
		var Name=texts.eq(2).text();
		var DepartmentID=texts.eq(3).text();
		var PositionID=texts.eq(4).text();
		var AttendanceDay=texts.eq(5).text();
		//2.将改行转化为文本框
		$(".attendance-"+input_text).empty();
		$(".attendance-"+input_text).append('<td><input type="text" class="form-control" id="renewAttendanceNo"></td><td><input type="text" class="form-control" id="renewEmployeeID"></td><td><input type="text" class="form-control" id="renewName"></td><td><input type="text" class="form-control" id="renewDepartmentID"></td><td><input type="text" class="form-control" id="renewPositionID"></td><td><input type="text" class="form-control" id="renewAttendanceDay"></td>');
		//3.在文本框中显示原来的信息
		$("#renewAttendanceNo").focus();
		$("#renewAttendanceNo").val(AttendanceNo);
		$("#renewEmployeeID").val(EmployeeID);
		$("#renewName").val(Name);
		$("#renewDepartmentID").val(DepartmentID);
		$("#renewPositionID").val(PositionID);
		$("#renewAttendanceDay").val(AttendanceDay);
		//4.文本框失去焦点时保存修改信息
		var time=setInterval(function(){
			if(!$("#renewAttendanceNo").is(":focus")&&!$("#renewEmployeeID").is(":focus")&&!$("#renewName").is(":focus")&&!$("#renewDepartmentID").is(":focus")&&!$("#renewPositionID").is(":focus")&&!$("#renewAttendanceDay").is(":focus")){

				var AttendanceNo=$("#renewAttendanceNo").val();
				var EmployeeID=$("#renewEmployeeID").val();
				var Name=$("#renewName").val();
				var DepartmentID=$("#renewDepartmentID").val();
				var PositionID=$("#renewPositionID").val();
				var AttendanceDay=$("#renewAttendanceDay").val();

				$(".attendance-"+input_text).empty();
				$(".attendance-"+input_text).append('<td>'+AttendanceNo+'</td><td>'+EmployeeID+'</td><td>'+Name+'</td><td>'+DepartmentID+'</td><td>'+PositionID+'</td><td>'+AttendanceDay+'</td>');
				clearInterval(time);
				if(AttendanceNo!=input_text){
					$(".attendance-"+input_text).addClass("attendance-"+AttendanceNo);
					$(".attendance-"+input_text).removeClass("attendance-"+input_text);
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
	if($(".attendance-"+input_text).length>0){
		//根据输入部门号跳转到指定的行，指定行文字变红
		var counts=$(".attendance-"+input_text).prevAll().length;
		$(".attendance_table").scrollTop((counts-4)*37);
		$(".attendance-"+input_text).css("color","#fF0000");	
		//弹出框提问是否删除
		setTimeout(function(){
			if(confirm("是否确定删除")){
				$(".attendance-"+input_text).remove();
			}
			else{
				$(".attendance-"+input_text).css("color","#333");	
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
