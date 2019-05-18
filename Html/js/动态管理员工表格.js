// JavaScript Document
//初始化
$(document).ready(function(e) {
	//表格头部固定在顶部
	/*$(".employee_table").scroll(function(){
		var a=$(".employee_table").scrollTop();
		if(a>=37){
			$(".table_header").width($(".content-table").width()-17);
			$("#employee_table_header").removeClass("hide");
			for(i=0;i<12;i++){
				$("#employee_table_header").children().eq(i).width($("#employee_table_content").children().children().eq(i).width())
			}
		}
		else{
			$("#employee_table_header").addClass("hide");
		}
	});*/
	$("#EmployeeID").focus(add());
});


//跳转至表格底部的输入行，输入信息后回车增加一行
function add(){
	$(".employee_table").scrollTop($("#employee_table_content").children().length*38);
	$("#EmployeeID").focus();
	$(".employee_table").scrollTop($("#employee_table_content").children().length*38);
	$("#EmployeeID").focus();
	$(document).keydown(function(e){
		var key=e.keyCode;
		if(key==13&&$("#EmployeeID").val()!=""&&$("#EmployeeID").val()){
			var EmployeeID=$("#EmployeeID").val();
			var Name=$("#Name").val();
			var CardNumber=$("#CardNumber").val();
			var Nation=$("#Nation").val();
			var Sex=$("#Sex").val();
			var Birthday=$("#Birthday").val();
			var Telephone=$("#Telephone").val();
			var Email=$("#Email").val();
			var DepartmentID=$("#DepartmentID").val();
			var SchoolRecord=$("#SchoolRecord").val();
			var GradateSchool=$("#GradateSchool").val();
			var PositionID=$("#PositionID").val();
			$("#employee_table_content").append('<tr class="employ-'+EmployeeID+'"><td >'+EmployeeID+'</td><td >'+Name+'</td><td>'+CardNumber+'</td><td >'+Nation+'</td><td >'+Sex+'</td><td >'+Birthday+'</td><td >'+Telephone+'</td><td >'+Email+'</td><td >'+DepartmentID+'</td><td >'+SchoolRecord+'</td><td >'+GradateSchool+'</td><td >'+PositionID+'</td></tr>');
			$("#EmployeeID").val("");
			$("#EmployeeID").focus();
			$("#Name").val("");
			$("#CardNumber").val("");
			$("#Nation").val("");
			$("#Sex").val("");
			$("#Birthday").val("");
			$("#Telephone").val("");
			$("#Email").val("");
			$("#DepartmentID").val("");
			$("#SchoolRecord").val("");
			$("#GradateSchool").val("");
			$("#PositionID").val("");
			//输入后滚动条自动到底部
			$(".employee_table").scrollTop($(".employee_table").scrollTop()+100);
			
		}
	})
}


//查找
function lookup(){
	//获取输入的部门号
	var input_text=$("#input_text").val();
	//指定行存在
	if($(".employ-"+input_text).length>0){
		//根据输入部门号跳转到指定的行
		var counts=$(".employ-"+input_text).prevAll().length;
		$(".employee_table").scrollTop((counts-4)*37);
		//指定行文字变红1.5秒
		$(".employ-"+input_text).css("color","#fF0000");	
		setTimeout(function(){
			$(".employ-"+input_text).css("color","#333");	
		},1500);
		
	}
	//指定行不存在，提示2秒
	else{
		$("#alert").removeClass("hide");
		setTimeout(function(){
			$("#alert").addClass("hide");
		},2000);
	}
	/*//查找后清空输入框
	$("#input_text").val("");
	$("#input_text").focus();*/
}

//修改
function renew(){
	//获取输入的部门号
	var input_text=$("#input_text").val();
	//指定行存在
	if($(".employ-"+input_text).length>0){
		//1.记录原来的信息
		var texts=$(".employ-"+input_text).children();
		var EmployeeID=texts.eq(0).text();
		var Name=texts.eq(1).text();
		var CardNumber=texts.eq(2).text();
		var Nation=texts.eq(3).text();
		var Sex=texts.eq(4).text();
		var Birthday=texts.eq(5).text();
		var Telephone=texts.eq(6).text();
		var Email=texts.eq(7).text();
		var DepartmentID=texts.eq(8).text();
		var SchoolRecord=texts.eq(9).text();
		var GradateSchool=texts.eq(10).text();
		var PositionID=texts.eq(11).text();
		//2.将改行转化为文本框
		$(".employ-"+input_text).empty();
		$(".employ-"+input_text).append('<td><input type="text" class="form-control" id="renewEmployeeID"></td><td><input type="text" class="form-control" id="renewName"></td><td><input type="text" class="form-control" id="renewCardNumber"></td><td><input type="text" class="form-control" id="renewNation"></td><td><input type="text" class="form-control" id="renewSex"></td><td><input type="text" class="form-control" id="renewBirthday"></td><td><input type="text" class="form-control" id="renewTelephone"></td><td><input type="text" class="form-control" id="renewEmail"></td><td><input type="text" class="form-control" id="renewDepartmentID"></td><td><input type="text" class="form-control" id="renewSchoolRecord"></td><td><input type="text" class="form-control" id="renewGradateSchool"></td><td><input type="text" class="form-control" id="renewPositionID"></td>');
		//3.在文本框中显示原来的信息
		$("#renewEmployeeID").focus();
		$("#renewEmployeeID").val(EmployeeID);
		$("#renewName").val(Name);
		$("#renewCardNumber").val(CardNumber);
		$("#renewNation").val(Nation);
		$("#renewSex").val(Sex);
		$("#renewBirthday").val(Birthday);
		$("#renewTelephone").val(Telephone);
		$("#renewEmail").val(Email);
		$("#renewDepartmentID").val(DepartmentID);
		$("#renewSchoolRecord").val(SchoolRecord);
		$("#renewGradateSchool").val(GradateSchool);
		$("#renewPositionID").val(PositionID);
		//4.文本框失去焦点时保存修改信息
		var time=setInterval(function(){
			if(!$("#renewEmployeeID").is(":focus")&&!$("#renewName").is(":focus")&&!$("#renewCardNumber").is(":focus")&&!$("#renewNation").is(":focus")&&!$("#renewSex").is(":focus")&&!$("#renewBirthday").is(":focus")&&!$("#renewTelephone").is(":focus")&&!$("#renewEmail").is(":focus")&&!$("#renewDepartmentID").is(":focus")&&!$("#renewSchoolRecord").is(":focus")&&!$("#renewGradateSchool").is(":focus")&&!$("#renewPositionID").is(":focus")){

				var EmployeeID=$("#renewEmployeeID").val();
				var Name=$("#renewName").val();
				var CardNumber=$("#renewCardNumber").val();
				var Nation=$("#renewNation").val();
				var Sex=$("#renewSex").val();
				var Birthday=$("#renewBirthday").val();
				var Telephone=$("#renewTelephone").val();
				var Email=$("#renewEmail").val();
				var DepartmentID=$("#renewDepartmentID").val();
				var SchoolRecord=$("#renewSchoolRecord").val();
				var GradateSchool=$("#renewGradateSchool").val();
				var PositionID=$("#renewPositionID").val();

				$(".employ-"+input_text).empty();
				$(".employ-"+input_text).append('<td>'+EmployeeID+'</td><td>'+Name+'</td><td>'+CardNumber+'</td><td>'+Nation+'</td><td>'+Sex+'</td><td>'+Birthday+'</td><td>'+Telephone+'</td><td>'+Email+'</td><td>'+DepartmentID+'</td><td>'+SchoolRecord+'</td><td>'+GradateSchool+'</td><td>'+PositionID+'</td>');
				clearInterval(time);
				if(EmployeeID!=input_text){
					$(".employ-"+input_text).addClass("employ-"+DepartmentID);
					$(".employ-"+input_text).removeClass("employ-"+input_text);
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
	if($(".employ-"+input_text).length>0){
		//根据输入部门号跳转到指定的行，指定行文字变红
		var counts=$(".employ-"+input_text).prevAll().length;
		$(".employee_table").scrollTop((counts-4)*37);
		$(".employ-"+input_text).css("color","#fF0000");	
		//弹出框提问是否删除
		setTimeout(function(){
			if(confirm("是否确定删除")){
				$(".employ-"+input_text).remove();
			}
			else{
				$(".employ-"+input_text).css("color","#333");	
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
	
